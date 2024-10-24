import Link from "next/link";

interface Post {
  id: number;
  title: string;
}

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <div className="block p-4 border rounded-lg shadow hover:bg-gray-100 transition duration-300">
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
