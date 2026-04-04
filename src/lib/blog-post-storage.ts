import { getCollection, type CollectionEntry } from "astro:content";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  blogPostSchema,
  type BlogPostFrontmatter,
} from "./blog-post-schema";

type BlogEntry = CollectionEntry<"blog">;

const blogContentDirectory = fileURLToPath(
  new URL("../content/blog/", import.meta.url),
);

export interface BlogPostSummary extends BlogPostFrontmatter {
  storagePath: string;
}

export interface BlogPostRecord extends BlogPostSummary {
  body: string;
  render: BlogEntry["render"];
}

export interface BlogPostUpdate extends Partial<BlogPostFrontmatter> {
  body?: string;
}

function comparePublishDates(left: BlogEntry, right: BlogEntry) {
  return (
    new Date(right.data.publishDate).getTime() -
    new Date(left.data.publishDate).getTime()
  );
}

function resolveStoragePath(entry: BlogEntry) {
  return path.join(blogContentDirectory, entry.id);
}

function toSummary(entry: BlogEntry): BlogPostSummary {
  return {
    ...entry.data,
    storagePath: resolveStoragePath(entry),
  };
}

function toRecord(entry: BlogEntry): BlogPostRecord {
  return {
    ...toSummary(entry),
    body: entry.body,
    render: entry.render,
  };
}

async function getSortedBlogEntries() {
  const posts = await getCollection("blog");

  return posts.sort(comparePublishDates);
}

function toYamlString(value: string) {
  return JSON.stringify(value);
}

export function serializeBlogPostDocument(
  frontmatter: BlogPostFrontmatter,
  body: string,
) {
  const normalizedBody = body.replaceAll("\r\n", "\n").trimEnd();
  const frontmatterLines = [
    "---",
    `title: ${toYamlString(frontmatter.title)}`,
    `publishDate: ${toYamlString(frontmatter.publishDate)}`,
    `slug: ${toYamlString(frontmatter.slug)}`,
    `description: ${toYamlString(frontmatter.description)}`,
  ];

  if (frontmatter.updatedDate) {
    frontmatterLines.push(`updatedDate: ${toYamlString(frontmatter.updatedDate)}`);
  }

  return [...frontmatterLines, "---", "", normalizedBody, ""].join("\n");
}

export async function listBlogPosts() {
  const posts = await getSortedBlogEntries();

  return posts.map(toSummary);
}

export async function loadBlogPost(slug: string) {
  const posts = await getSortedBlogEntries();
  const post = posts.find((entry) => entry.data.slug === slug);

  return post ? toRecord(post) : undefined;
}

export async function updateBlogPost(currentSlug: string, update: BlogPostUpdate) {
  const posts = await getSortedBlogEntries();
  const post = posts.find((entry) => entry.data.slug === currentSlug);

  if (!post) {
    throw new Error(`Could not find blog post with slug "${currentSlug}".`);
  }

  const { body, ...frontmatterUpdate } = update;
  const nextFrontmatter = blogPostSchema.parse({
    ...post.data,
    ...frontmatterUpdate,
  });
  const nextBody = body ?? post.body;

  await fs.writeFile(
    resolveStoragePath(post),
    serializeBlogPostDocument(nextFrontmatter, nextBody),
    "utf8",
  );

  return {
    ...nextFrontmatter,
    body: nextBody,
    render: post.render,
    storagePath: resolveStoragePath(post),
  };
}
