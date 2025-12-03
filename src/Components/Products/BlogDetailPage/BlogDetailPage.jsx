import React, { useEffect, useState } from "react";
import { Blog } from "../../../Services/Blog";

const BlogDetailPage = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await Blog({ blog_id: 6 });
        // API returns an object directly
        const data = response.data.data || null;
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  if (!blog) return <div className="text-center py-20">Blog not found.</div>;

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Blog Image with title/subtitle overlay */}
        <div className="relative rounded-xl overflow-hidden shadow-lg group">
          <img
            src={blog.images || "/placeholder.png"}
            alt={blog.title}
            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-6">
            <h1 className="text-white text-3xl font-bold">{blog.title}</h1>
            {blog.sub_title && (
              <p className="text-gray-300 mt-1">{blog.sub_title}</p>
            )}
          </div>
        </div>

        {/* Author */}
        <p className="mt-4 text-gray-600">
          <strong>Author:</strong> {blog.auth}
        </p>

        {/* Blog content */}
        <div
          className="mt-6 text-gray-700 prose prose-lg"
          dangerouslySetInnerHTML={{ __html: blog.Content }}
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;
