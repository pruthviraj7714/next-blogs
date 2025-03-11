'use client'
import CreatePostForm, { PostFormSchema } from "@/components/CreatePostForm";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

export default function CreateBlogPage() {
  const router = useRouter();
  const { mutate : createPost } = useMutation({
    mutationFn : (newPost : z.infer<typeof PostFormSchema>) => {
      return axios.post('/api/posts/create', newPost);
    },
    onError : (e) => {
      toast.error(e.message);
    },
    onSuccess : () => {
      toast.success("Post Successfullly Created");
      router.push('/');
    }
  })

  const handleCreatePost = (data : z.infer<typeof PostFormSchema>) => {
    createPost(data);
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div>
        <span className="text-center font-bold text-3xl">Create Post</span>
      </div>
      <CreatePostForm handleCreatePost={handleCreatePost} isEditing={false} />
    </div>
  );
}
