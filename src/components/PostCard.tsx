import { Button } from "./ui/button";

const PostCard = () => {
  return (
    <div className="w-96 flex flex-col p-3 shadow-3xl border-2 border-black/50 rounded-xl">
      <div>
        <span className="font-bold">Post Title</span>
      </div>
      <div>
        <span>here is post content present please have a look</span>
      </div>
      <div className="flex justify-end items-center mt-4">
        <Button className="bg-purple-500 hover:bg-purple-600 text-white">
          Read
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
