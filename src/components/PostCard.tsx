import { IPostCardProp } from "@/types/types";
import { Button } from "./ui/button";
import Link from "next/link";

const PostCard = ({ post }: { post: IPostCardProp }) => {
  return (
    <div className="w-96 flex flex-col p-3 shadow-3xl border-2 border-black/50 rounded-xl">
      <div>
        <span className="font-bold">{post.title}</span>
      </div>
      <div>
        <span>{post.content}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="px-3 py-0.5 text-sm rounded-2xl bg-gray-700 text-white">{post.tag.name}</span>
        <Link href={`/blog/${post.id}`}>
          <Button className="bg-purple-500 hover:bg-purple-600 cursor-pointer text-white">
            Read
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
