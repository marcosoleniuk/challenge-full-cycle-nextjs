interface PostDetail {
  id: number;
  title: string;
  body: string;
}

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return <div>Erro ao carregar o post.</div>;
  }
  const post: PostDetail = await res.json();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
