import { prisma } from "@/lib/db";

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

  return <div>

    {JSON.stringify(blogInfo)}
  </div>;
}
