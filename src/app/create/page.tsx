import CreatePostForm from "@/components/CreatePostForm";

export default function CreateBlogPage() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div>
        <span className="text-center font-bold text-3xl">Create Post</span>
      </div>
      <CreatePostForm />
    </div>
  );
}
