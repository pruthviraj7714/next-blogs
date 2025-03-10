import PostCard from "@/components/PostCard";
import { prisma } from "@/lib/db";

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    include : {
      tag : {
        select : {
          name : true
        }
      }
    },
    orderBy  : {
      createdAt : "desc"
    }
  })
  return posts
}

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);
  


  return (
    <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-10">
        {posts.map((post : any)=> (
          <PostCard key={post.id} post={post} />
        ))}
    </div>
  );
}
