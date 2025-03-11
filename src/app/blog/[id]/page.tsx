import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { ArrowLeft, Edit2, Trash2 } from "lucide-react";
import Link from "next/link";

const fetchBlogInfo = async (id: string) => {
  const blog = await prisma.post.findFirst({
    where: {
      id,
    },
    include: {
      tag: {
        select: {
          name: true,
        },
      },
    },
  });

  return blog;
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const blogId = (await params).id;
  const blogInfo = await fetchBlogInfo(blogId);

  return (
    <div className="mx-10 flex flex-col">
      <Link
        href={"/"}
        className="flex justify-center items-center border border-black px-4 py-2 w-28 rounded-xl gap-1.5 mt-10"
      >
        <ArrowLeft className="size-5" />
        <span className="text-black text-lg">Back</span>
      </Link>
      <div className="mt-7">
        <span className="text-4xl font-bold">{blogInfo?.title}</span>
      </div>
      <div className="flex justify-start items-center gap-1.5 mt-5">
        <Button className="flex items-center gap-1.5">
          <Edit2 />
          Edit
        </Button>
        <Button variant={"destructive"} className="flex items-center gap-1.5">
          <Trash2 />
          Delete
        </Button>{" "}
      </div>
      <div className="my-4">
        <span className="px-3 py-0.5 text-sm rounded-2xl bg-gray-700 text-white">
          {blogInfo?.tag?.name}
        </span>
      </div>
      <div className="mt-5">
        <span className="font-mono font-black">{blogInfo?.content}</span>
      </div>
    </div>
  );
}
