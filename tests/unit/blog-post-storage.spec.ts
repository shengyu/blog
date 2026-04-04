import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { getCollectionMock, writeFileMock } = vi.hoisted(() => ({
  getCollectionMock: vi.fn(),
  writeFileMock: vi.fn(),
}));

vi.mock("astro:content", () => ({
  getCollection: getCollectionMock,
}));

vi.mock("node:fs", () => ({
  promises: {
    writeFile: writeFileMock,
  },
}));

function createPostEntry({
  id,
  title,
  publishDate,
  slug,
  description,
  updatedDate,
  body,
}: {
  id: string;
  title: string;
  publishDate: string;
  slug: string;
  description: string;
  updatedDate?: string;
  body: string;
}) {
  return {
    id,
    body,
    data: {
      title,
      publishDate,
      slug,
      description,
      updatedDate,
    },
    render: vi.fn(),
  };
}

describe("blog post storage", () => {
  beforeEach(() => {
    getCollectionMock.mockReset();
    writeFileMock.mockReset();
    writeFileMock.mockResolvedValue(undefined);
  });

  afterEach(() => {
    vi.resetModules();
  });

  it("lists blog posts in reverse chronological order", async () => {
    getCollectionMock.mockResolvedValue([
      createPostEntry({
        id: "older-post.md",
        title: "Older",
        publishDate: "2026-04-01",
        slug: "older-post",
        description: "Older post",
        body: "Older body",
      }),
      createPostEntry({
        id: "newer-post.md",
        title: "Newer",
        publishDate: "2026-04-03",
        slug: "newer-post",
        description: "Newer post",
        body: "Newer body",
      }),
    ]);

    const { listBlogPosts } = await import("../../src/lib/blog-post-storage");
    const posts = await listBlogPosts();

    expect(posts.map((post) => post.slug)).toEqual(["newer-post", "older-post"]);
    expect(posts[0]?.storagePath).toContain("/src/content/blog/newer-post.md");
  });

  it("loads a single blog post by slug", async () => {
    getCollectionMock.mockResolvedValue([
      createPostEntry({
        id: "welcome-to-the-blog.md",
        title: "Welcome to the Blog",
        publishDate: "2026-04-02",
        slug: "welcome-to-the-blog",
        description: "The first post",
        body: "Rendered body",
      }),
    ]);

    const { loadBlogPost } = await import("../../src/lib/blog-post-storage");
    const post = await loadBlogPost("welcome-to-the-blog");

    expect(post).toMatchObject({
      title: "Welcome to the Blog",
      publishDate: "2026-04-02",
      slug: "welcome-to-the-blog",
      description: "The first post",
      body: "Rendered body",
    });
    expect(post?.storagePath).toContain(
      "/src/content/blog/welcome-to-the-blog.md",
    );
  });

  it("updates a post by rewriting its Markdown document", async () => {
    getCollectionMock.mockResolvedValue([
      createPostEntry({
        id: "welcome-to-the-blog.md",
        title: "Welcome to the Blog",
        publishDate: "2026-04-02",
        slug: "welcome-to-the-blog",
        description: "The first post",
        updatedDate: "2026-04-03",
        body: "Initial body",
      }),
    ]);

    const { updateBlogPost } = await import("../../src/lib/blog-post-storage");
    const post = await updateBlogPost("welcome-to-the-blog", {
      title: "Updated title",
      description: "Updated description",
      body: "Updated body",
    });

    expect(writeFileMock).toHaveBeenCalledTimes(1);
    expect(writeFileMock).toHaveBeenCalledWith(
      expect.stringContaining("/src/content/blog/welcome-to-the-blog.md"),
      expect.stringContaining('title: "Updated title"'),
      "utf8",
    );
    expect(writeFileMock.mock.calls[0]?.[1]).toContain(
      'description: "Updated description"',
    );
    expect(writeFileMock.mock.calls[0]?.[1]).toContain('updatedDate: "2026-04-03"');
    expect(writeFileMock.mock.calls[0]?.[1]).toContain("Updated body");
    expect(post).toMatchObject({
      title: "Updated title",
      description: "Updated description",
      body: "Updated body",
      slug: "welcome-to-the-blog",
      updatedDate: "2026-04-03",
    });
  });
});
