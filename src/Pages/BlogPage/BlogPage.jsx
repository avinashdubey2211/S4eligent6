
// import React, { useEffect, useState } from "react";
// import { Blog } from "../../Services/Blog";
// import { useNavigate } from "react-router-dom";
// import { FiShare2 } from "react-icons/fi";



// const BlogPage = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [trendingPosts, setTrendingPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();
  

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await Blog();
//         const data = Array.isArray(response.data.data) ? response.data.data : [];

//         setBlogPosts(data);

//         // UPDATED — TRENDING + TOP 6 REPEATED 
//         setTrendingPosts([
//           ...data.filter((post) => post.category?.toLowerCase() === "trending"),
//           ...data.slice(0, 6) // Top 6 repeat
//         ]);
//       } catch (error) {
//         console.error("Error fetching blog data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) return <div className="text-center py-20">Loading...</div>;

//   const getImage = (post) => post.images || post.img || post.image || "";

//   return (
//     <div className="max-w-7xl mx-auto px-2 lg:px-4 py-8">

//       {/* ---------------- TOP BLOG CARDS ---------------- */}
//       <div className="flex flex-col md:flex-row gap-4 justify-center items-start bg-[#f4f2fd]">

//         {/* LEFT BIG IMAGE */}
//         {blogPosts[0] && (
//           <div 
//             onClick={() => navigate("/blog_detail_page", )}

//            className="
//             w-full 
//             md:w-[27%] 
//             lg:w-1/4 
//              2xl:w-1/2
//             h-64 sm:h-80 md:h-[57vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[55vh]
//             relative rounded-xl overflow-hidden shadow-lg group
//           ">
//           {/* share */}
//           <div
//   className="absolute right-2 top-[90%] -translate-y-1/2 
//              p-3 rounded-full cursor-pointer z-10 
//              bg-black/70 shadow-[0_0_15px_rgba(0,255,200,0.8)] border border-teal-400"
// >
//   <FiShare2 className="text-teal-300 text-lg" />
// </div>


//             <img
//               src={getImage(blogPosts[0])}
//               alt={blogPosts[0].title}
//               className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-4 text-white">
//               <p className="text-sm">{blogPosts[0].category}</p>
//               <h2 className="text-lg font-semibold">{blogPosts[0].title}</h2>

//             </div>
//           </div>
//         )}

//         {/* MIDDLE 4 IMAGES */}
//         <div 
//             onClick={() => navigate("/blog_detail_page", )}

//         className="
        
//           flex flex-col gap-3 
//           w-full md:w-[40%] lg:w-[40%] xl:w-[50%]
//         ">
         

//           {/* TOP 2 */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             {blogPosts.slice(1, 3).map((post) => (
//               <div
//                 key={post.id}
//                 className="relative rounded-xl overflow-hidden shadow-lg group 
//                 h-56 sm:h-48 md:h-36 lg:h-56 xl:h-50 2xl:h-60"
//               >
              
//               {/* share */}
//                <div
//   className="absolute right-2 top-[80%] -translate-y-1/2 
//              p-3 rounded-full cursor-pointer z-10 
//              bg-black/70 shadow-[0_0_15px_rgba(0,255,200,0.8)] border border-teal-400"
// >
//   <FiShare2 className="text-teal-300 text-lg" />
// </div>

//                 <img
//                   src={getImage(post)}
//                   alt={post.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-2 text-white">
//                   <p className="text-xs">{post.category}</p>
//                   <h2 className="text-sm font-semibold">{post.title}</h2>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* BOTTOM 2 */}
//           <div
//             onClick={() => navigate("/blog_detail_page", )}

//            className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             {blogPosts.slice(3, 5).map((post) => (
//               <div
//                 key={post.id}
//                 className="relative rounded-xl overflow-hidden shadow-lg group 
//                 h-56 sm:h-48 md:h-36 lg:h-56 xl:h-50 2xl:h-64"
//               >
//                 {/* share */}
//               <div
//   className="absolute right-2 top-[80%] -translate-y-1/2 
//              p-3 rounded-full cursor-pointer z-10 
//              bg-black/70 shadow-[0_0_15px_rgba(0,255,200,0.8)] border border-teal-400"
// >
//   <FiShare2 className="text-teal-300 text-lg" />
// </div>

//                 <img
//                   src={getImage(post)}
//                   alt={post.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-2 text-white">
//                   <p className="text-xs">{post.category}</p>
//                   <h2 className="text-sm font-semibold">{post.title}</h2>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* RIGHT BIG IMAGE */}
//         {blogPosts[5] && (
//           <div
//               onClick={() => navigate("/blog_detail_page", { state: { blog: blogPosts[0] } })}

//            className="
//             w-full 
//             md:w-[27%] 
//             lg:w-1/4 
//             2xl:w-1/2
//             h-64 sm:h-80 md:h-[57vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[50vh]
//             relative rounded-xl overflow-hidden shadow-lg group
//           ">
//             {/* share */}
//              <div
//   className="absolute right-2 top-[90%] -translate-y-1/2 
//              p-3 rounded-full cursor-pointer z-10 
//              bg-black/70 shadow-[0_0_15px_rgba(0,255,200,0.8)] border border-teal-400"
// >
//   <FiShare2 className="text-teal-300 text-lg" />
// </div>


//             <img
//               src={getImage(blogPosts[5])}
//               alt={blogPosts[5].title}
//               className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-4 text-white">
//               <p className="text-sm">{blogPosts[5].category}</p>
//               <h2 className="text-lg font-semibold">{blogPosts[5].title}</h2>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ---------------- TRENDING REVIEWS ---------------- */}
//       <div className="mt-12">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">Trending Reviews</h2>
//           <a href="#" className="text-blue-600 text-sm hover:underline">
//             ALL Trending Reviews
//           </a>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {trendingPosts.map((post, index) => (
//             <div
//             onClick={() => navigate("/blog_detail_page", )}

//              key={index} className="flex items-center space-x-4">
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
import { FiShare2 } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook, FaRegCopy  } from "react-icons/fa";
// import { FaRegCopy } from "react-icons/fa";


const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shareOpen, setShareOpen] = useState(null); // which card's share menu is open
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await Blog();
        const data = Array.isArray(response.data.data) ? response.data.data : [];

        setBlogPosts(data);
        setTrendingPosts([
          ...data.filter((post) => post.category?.toLowerCase() === "trending"),
          ...data.slice(0, 6)
        ]);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

 const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };
  if (loading) return <div className="text-center py-20">Loading...</div>;

  const getImage = (post) => post.images || post.img || post.image || "";

  const toggleShare = (index) => {
    setShareOpen(shareOpen === index ? null : index);
  };

  // Share menu component - appears just above share button
  const ShareMenu = ({ post }) => (
    
    <div className="absolute flex flex-col items-center space-y-2 bottom-1 right-[29%] translate-x-1/2 z-50">
      <a
        href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + window.location.href)}`}
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full shadow-lg"
      >
        <FaInstagram className="text-white text-xl" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
        target="_blank"
        rel="noreferrer"
        className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg"
      >
        <FaFacebook className="text-white text-xl" />
      </a>
       <button
        onClick={copyLink}
        className="bg-gray-500 hover:bg-gray-600 p-3 rounded-full shadow-lg"
      >
        <FaRegCopy className="text-white text-xl" />
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-4 py-8">
      {/* ---------------- TOP BLOG CARDS ---------------- */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-start bg-[#f4f2fd]">
        {/* LEFT BIG IMAGE */}
        {blogPosts[0] && (
          <div
            onClick={() => navigate("/blog_detail_page", { state: { blog: blogPosts[0] } })}
            className="w-full md:w-[27%] lg:w-1/4 2xl:w-1/2 h-64 sm:h-80 md:h-[57vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[55vh] relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Share Button */}
            <div
              className="absolute right-3 top-[85%] p-3 rounded-full cursor-pointer z-10 bg-black/70 shadow-[0_0_15px_rgba(0,255,200,0.8)] border border-teal-400"
              onClick={(e) => {
                e.stopPropagation();
                toggleShare(0);
              }}
            >
              <FiShare2 className="text-teal-300 text-xl sm:text-2xl" />
            </div>

            {/* Share Menu */}
            {shareOpen === 0 && <ShareMenu post={blogPosts[0]} />}

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
        <div className="flex flex-col gap-3 w-full md:w-[40%] lg:w-[40%] xl:w-[50%]">
          {/* Top 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {blogPosts.slice(1, 3).map((post, index) => (
              <div
                key={post.id}
                onClick={() => navigate("/blog_detail_page", { state: { blog: post } })}
                className="relative rounded-xl overflow-hidden shadow-lg group h-56 sm:h-48 md:h-36 lg:h-56 xl:h-50 2xl:h-60 cursor-pointer"
              >
                {/* Share Button */}
                <div
                  className="absolute right-3 top-[70%] p-3 rounded-full cursor-pointer z-10 bg-black/70 shadow-[0_0_15px_rgba(0,255,200,0.8)] border border-teal-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleShare(index + 1);
                  }}
                >
                  <FiShare2 className="text-teal-300 text-xl sm:text-2xl" />
                </div>

                {shareOpen === index + 1 && <ShareMenu post={post} />}

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

          {/* Bottom 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {blogPosts.slice(3, 5).map((post, index) => (
              <div
                key={post.id}
                onClick={() => navigate("/blog_detail_page", { state: { blog: post } })}
                className="relative rounded-xl overflow-hidden shadow-lg group h-56 sm:h-48 md:h-36 lg:h-56 xl:h-50 2xl:h-60 cursor-pointer"
              >
                {/* Share Button */}
                <div
                  className="absolute right-3  top-[70%]  p-3 rounded-full cursor-pointer z-10 bg-black/70 shadow-[0_0_15px_rgba(0,255,200,0.8)] border border-teal-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleShare(index + 3);
                  }}
                >
                  <FiShare2 className="text-teal-300 text-xl sm:text-2xl" />
                </div>

                {shareOpen === index + 3 && <ShareMenu post={post} />}

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
            onClick={() => navigate("/blog_detail_page", { state: { blog: blogPosts[5] } })}
            className="w-full md:w-[27%] lg:w-1/4 2xl:w-1/2 h-64 sm:h-80 md:h-[57vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[50vh] relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Share Button */}
            <div
              className="absolute right-3  top-[85%]  p-3 rounded-full cursor-pointer z-10 bg-black/70 shadow-[0_0_15px_rgba(0,255,200,0.8)] border border-teal-400"
              onClick={(e) => {
                e.stopPropagation();
                toggleShare(5);
              }}
            >
              <FiShare2 className="text-teal-300 text-xl sm:text-2xl" />
            </div>

            {shareOpen === 5 && <ShareMenu post={blogPosts[5]} />}

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
            <div
              key={index}
              onClick={() => navigate("/blog_detail_page", { state: { blog: post } })}
              className="flex items-center space-x-4 relative"
            >
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
