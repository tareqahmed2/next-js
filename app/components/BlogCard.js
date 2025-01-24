"use client";
import { useRouter } from "next/navigation";

export default function BlogCard({ blog }) {
  const router = useRouter();

  return (
    <div
      className="card bg-white shadow-xl rounded-lg transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={() => router.push(`/blog/${blog.id}`)}
    >
      {/* Card Body */}
      <div className="card-body space-y-4">
        <h2 className="card-title text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
          {blog.title}
        </h2>
        <p className="text-gray-600">
          {blog.body.length > 100
            ? blog.body.substring(0, 100) + "..."
            : blog.body}
        </p>
      </div>

      {/* Card Actions */}
      <div className="card-actions justify-end p-4">
        <button className="btn btn-primary btn-sm bg-gradient-to-r from-blue-500 to-purple-500 border-0 hover:from-purple-500 hover:to-pink-500">
          Read More
        </button>
      </div>
    </div>
  );
}
