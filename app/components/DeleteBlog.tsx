"use client";
import { Button } from "@/components/ui/button";
import { CardAction } from "@/components/ui/card";
import React from "react";
import { deleteBlogbyId } from "../actions/blog";
import { useRouter } from "next/navigation";

const DeleteBlog = ({ blogId }: { blogId: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteBlogbyId(blogId);
    router.refresh();
  };
  return (
    <CardAction>
      <Button variant="destructive" onClick={handleDelete}>
        Delete Post
      </Button>
    </CardAction>
  );
};

export default DeleteBlog;
