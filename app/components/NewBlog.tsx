"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BadgePlus } from "lucide-react";
import { useState } from "react";
import { createBlog } from "../actions/blog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onSubmitBlog = async () => {
    await createBlog({ title, content })
      .then((msg) => {
        if (msg?.error) {
          toast("Something went wrong", {
            description: msg.error,
          });
        } else {
          toast("Blog created", {
            description: "Blog Successfully Posted",
          });
          setTitle("");
          setContent("");
          setOpen(false);
          router.refresh();
        }
      })
      .catch(() =>
        toast.error("Something went wrong", {
          description: "Error While creating Blog",
        })
      );
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form className="flex justify-end">
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-green-300">
            <BadgePlus />
            Create New Blog
          </Button>
        </DialogTrigger>
        <DialogContent className="lg:max-w-2xl sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create new Blog</DialogTitle>
            <DialogDescription>
              Creating new blog on your Account
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Blog Title</Label>
              <Input
                id="title"
                placeholder="Pedro Duarte"
                value={title}
                onChange={(e) => setTitle(e?.target?.value!)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">Blog Content</Label>
              <Textarea
                id="content"
                placeholder="@peduarte"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={onSubmitBlog}>
              Post Blog
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default NewBlog;
