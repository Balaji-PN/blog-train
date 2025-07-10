"use client";
import { Button } from "@/components/ui/button";
import { CardAction } from "@/components/ui/card";
import React from "react";
import { deleteBlogbyId } from "../actions/blog";

const DeleteBlog = ({ blogId }: { blogId: string }) => {
  return (
    <CardAction>
      <Button variant="destructive" onClick={() => deleteBlogbyId(blogId)}>
        Delete Post
      </Button>
    </CardAction>
  );
};

export default DeleteBlog;
