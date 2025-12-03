

// import React, { useEffect, useState } from "react";
// import { Blog } from "../../Services/Blog";

// const BlogPage = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [trendingPosts, setTrendingPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await Blog();
//         const data = Array.isArray(response.data.data) ? response.data.data : [];

//         setBlogPosts(data);

//         // Only trending blogs
//         setTrendingPosts(
//           data.filter((post) => post.category?.toLowerCase() === "trending")
//         );

//       } catch (error) {
//         console.error("Error fetching blog data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) return <div className="text-center py-20">Loading...</div>;

//   // SAFE IMAGE HELPER
//   const getImage = (post) => post.images || post.img || post.image || "";

//   return (
//     <div className="max-w-7xl mx-auto px-2 lg:px-4 py-8">

//       {/* ---------------- TOP BLOG CARDS ---------------- */}
//       <div className="flex flex-col md:flex-row gap-4 items-start bg-[#f4f2fd]">

//   {/* LEFT BIG IMAGE */}
//   {blogPosts[0] && (
//     <div className="
//       w-full 
//       md:w-[27%] 
//       lg:w-1/4 
//       h-64 
//       sm:h-80 
//       md:h-[57vh] 
//       lg:h-[65vh] 
//       xl:h-[70vh]
//       2xl:h-[75vh]
//       relative rounded-xl overflow-hidden shadow-lg group
//     ">
//       <img
//         src={getImage(blogPosts[0])}
//         alt={blogPosts[0].title}
//         className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//       />

//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-4 text-white">
//         <p className="text-sm">{blogPosts[0].category}</p>
//         <h2 className="text-lg font-semibold">{blogPosts[0].title}</h2>
//       </div>
//     </div>
//   )}

//   {/* MIDDLE 4 IMAGES */}
//   <div className="
//     flex flex-col gap-3 
//     w-full 
//     md:w-[40%] 
//     lg:w-[40%] 
//     xl:w-[55%]
//   ">

//     {/* TOP 2 */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//       {blogPosts.slice(1, 3).map((post) => (
//         <div
//           key={post.id}
//           className="
//             relative rounded-xl overflow-hidden shadow-lg group 
//             h-56 sm:h-48 md:h-36 lg:h-56 xl:h-60 2xl:h-64
//           "
//         >
//           <img
//             src={getImage(post)}
//             alt={post.title}
//             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//           />
//           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-2 text-white">
//             <p className="text-xs">{post.category}</p>
//             <h2 className="text-sm font-semibold">{post.title}</h2>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* BOTTOM 2 */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//       {blogPosts.slice(3, 5).map((post) => (
//         <div
//           key={post.id}
//           className="
//             relative rounded-xl overflow-hidden shadow-lg group 
//             h-56 sm:h-48 md:h-36 lg:h-56 xl:h-60 2xl:h-64
//           "
//         >
//           <img
//             src={getImage(post)}
//             alt={post.title}
//             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//           />
//           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-2 text-white">
//             <p className="text-xs">{post.category}</p>
//             <h2 className="text-sm font-semibold">{post.title}</h2>
//           </div>
//         </div>
//       ))}
//     </div>

//   </div>

//   {/* RIGHT BIG IMAGE */}
//   {blogPosts[5] && (
//     <div className="
//       w-full 
//       md:w-[27%] 
//       lg:w-1/4 
//       h-64 
//       sm:h-80 
//       md:h-[57vh] 
//       lg:h-[65vh] 
//       xl:h-[70vh]
//       2xl:h-[75vh]
//       relative rounded-xl overflow-hidden shadow-lg group
//     ">
//       <img
//         src={getImage(blogPosts[5])}
//         alt={blogPosts[5].title}
//         className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//       />
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-4 text-white">
//         <p className="text-sm">{blogPosts[5].category}</p>
//         <h2 className="text-lg font-semibold">{blogPosts[5].title}</h2>
//       </div>
//     </div>
//   )}
// </div>

//       {/* ---------------- TRENDING REVIEWS ---------------- */}
//       <div className="mt-12">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">Trending Reviews</h2>
//           <a href="#" className="text-blue-600 text-sm hover:underline">
//             ALL Trending Reviews
//           </a>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {trendingPosts.map((post) => (
//             <div key={post.id} className="flex items-center space-x-4">
//               <img
//                 src={getImage(post)}
//                 alt={post.title}
//                 className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
//               />
//               <div>
//                 <p className="text-xs text-blue-600">{post.category}</p>
//                 <h3 className="font-semibold">{post.title}</h3>
//                 <p className="text-xs text-gray-500">{post.date}</p>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>

//     </div>
//   );
// };

// export default BlogPage;


import React, { useEffect, useState } from "react";
import { Blog } from "../../Services/Blog";
import { useNavigate } from "react-router-dom";


const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await Blog();
        const data = Array.isArray(response.data.data) ? response.data.data : [];

        setBlogPosts(data);

        // UPDATED — TRENDING + TOP 6 REPEATED 
        setTrendingPosts([
          ...data.filter((post) => post.category?.toLowerCase() === "trending"),
          ...data.slice(0, 6) // Top 6 repeat
        ]);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  const getImage = (post) => post.images || post.img || post.image || "";

  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-4 py-8">

      {/* ---------------- TOP BLOG CARDS ---------------- */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-start bg-[#f4f2fd]">

        {/* LEFT BIG IMAGE */}
        {blogPosts[0] && (
          <div 
            onClick={() => navigate("/blog_detail_page", )}

           className="
            w-full 
            md:w-[27%] 
            lg:w-1/4 
             2xl:w-1/2
            h-64 sm:h-80 md:h-[57vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[55vh]
            relative rounded-xl overflow-hidden shadow-lg group
          ">
            <img
              src={getImage(blogPosts[0])}
              alt={blogPosts[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-4 text-white">
              <p className="text-sm">{blogPosts[0].category}</p>
              <h2 className="text-lg font-semibold">{blogPosts[0].title}</h2>
            </div>
          </div>
        )}

        {/* MIDDLE 4 IMAGES */}
        <div 
            onClick={() => navigate("/blog_detail_page", )}

        className="
        
          flex flex-col gap-3 
          w-full md:w-[40%] lg:w-[40%] xl:w-[50%]
        ">

          {/* TOP 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {blogPosts.slice(1, 3).map((post) => (
              <div
                key={post.id}
                className="relative rounded-xl overflow-hidden shadow-lg group 
                h-56 sm:h-48 md:h-36 lg:h-56 xl:h-50 2xl:h-60"
              >
                <img
                  src={getImage(post)}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-2 text-white">
                  <p className="text-xs">{post.category}</p>
                  <h2 className="text-sm font-semibold">{post.title}</h2>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM 2 */}
          <div
            onClick={() => navigate("/blog_detail_page", )}

           className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {blogPosts.slice(3, 5).map((post) => (
              <div
                key={post.id}
                className="relative rounded-xl overflow-hidden shadow-lg group 
                h-56 sm:h-48 md:h-36 lg:h-56 xl:h-50 2xl:h-64"
              >
                <img
                  src={getImage(post)}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-2 text-white">
                  <p className="text-xs">{post.category}</p>
                  <h2 className="text-sm font-semibold">{post.title}</h2>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT BIG IMAGE */}
        {blogPosts[5] && (
          <div
              onClick={() => navigate("/blog_detail_page", { state: { blog: blogPosts[0] } })}

           className="
            w-full 
            md:w-[27%] 
            lg:w-1/4 
            2xl:w-1/2
            h-64 sm:h-80 md:h-[57vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[50vh]
            relative rounded-xl overflow-hidden shadow-lg group
          ">
            <img
              src={getImage(blogPosts[5])}
              alt={blogPosts[5].title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-4 text-white">
              <p className="text-sm">{blogPosts[5].category}</p>
              <h2 className="text-lg font-semibold">{blogPosts[5].title}</h2>
            </div>
          </div>
        )}
      </div>

      {/* ---------------- TRENDING REVIEWS ---------------- */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Trending Reviews</h2>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            ALL Trending Reviews
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {trendingPosts.map((post, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={getImage(post)}
                alt={post.title}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              />
              <div>
                <p className="text-xs text-blue-600">{post.category}</p>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default BlogPage;
