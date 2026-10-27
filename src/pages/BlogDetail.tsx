import { useParams } from 'react-router-dom';

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Blog Detail</h1>
      <p className="text-muted-foreground">Article slug: {slug}</p>
    </div>
  );
}