import Button from "@/app/components/Button";

async function fetchBlogDetails(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;
  const blog = await fetchBlogDetails(id);

  return (
    <div className="card bg-white shadow-2xl rounded-lg max-w-4xl mx-auto my-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-t-lg">
        <h1 className="text-4xl font-extrabold">{blog.title}</h1>
      </div>

      {/* Body */}
      <div className="card-body p-6 space-y-4">
        <p className="text-gray-700 text-lg leading-relaxed">{blog.body}</p>
        <div className="mt-6 flex justify-end">
          <Button></Button>
        </div>
      </div>
    </div>
  );
}
