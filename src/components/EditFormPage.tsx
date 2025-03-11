"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import CreatePostForm from "./CreatePostForm";

const EditFormPage = ({ blogId }: { blogId: string }) => {
  const { mutate: editBlog } = useMutation({
    mutationFn: (data) => {
      return axios.patch("/api/edit", {
        postId: blogId,
        data,
      });
    },
  });

  return <div>Edit Form Page</div>;
};

export default EditFormPage;
