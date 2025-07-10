"use server";

import { auth } from "@/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogs } from "../actions/blog";
import DeleteBlog from "./DeleteBlog";

const ListBlog = async () => {
  const session = await auth();
  const blogs = await getBlogs();
  return (
    <div>
      {blogs.map((b) => (
        <Card className="w-full px-12" key={b.blogId}>
          <CardHeader>
            <CardTitle>{b.blogTitle}</CardTitle>
            <CardDescription>Author: {b.userId}</CardDescription>
            {b.userId == session?.user?.email! && (
              <DeleteBlog blogId={b.blogId} />
            )}
          </CardHeader>
          <CardContent>{b.blogContent}</CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ListBlog;
