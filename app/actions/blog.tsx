"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma/prisma";
import { error } from "console";
// import { useSession } from "next-auth/react";

export async function getBlogs() {
  console.log("Blog List");
  return await prisma.blog.findMany({});
}

export async function createBlog({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  if (!title || !content) {
    console.log("Title and Content are required");
    return { error: "Title and Content are required" };
  }

  const session = await auth();

  if (!session?.user?.email) {
    console.log("Login First");
    return { error: "Email Not Found" };
  }

  const status = await prisma.blog
    .create({
      data: {
        userId: session?.user?.email!,
        blogTitle: title,
        blogContent: content,
      },
    })
    .then(() => {
      success: "Blog Successfully created";
    })
    .catch(() => {
      error: "Error creatinf the Blof";
    });

  return status;
}

export async function deleteBlogbyId(blogId: string) {
  if (!blogId) return { error: "BlogID not found" };
  return await prisma.blog.delete({ where: { blogId: blogId } });
}
