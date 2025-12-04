// import React, { useEffect, useState } from "react";
// import { NewsPage } from "../../Services/NewsPage";

// const News = () => {
//   const [data, setData] = useState([]);

//   const fetchNews = async () => {
//     try {
//       const res = await NewsPage( );
//       setData(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   return (
//     <div>News</div>
//   );
// };

// export default News;


import React, { useEffect, useState } from "react";
import { NewsPage } from "../../Services/NewsPage";
import { useNavigate } from "react-router-dom";


const News = () => {
  const [data, setData] = useState([]);
      const navigate = useNavigate();
  

  const fetchNews = async () => {
    try {
      const res = await NewsPage();
      setData(res.data.data); // <-- fix here
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
 <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-100">
  <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Latest News</h1>

  {data.length > 0 ? (
    <div className="grid lg:grid-cols-3 gap-8">
      
      {/* Left Column: Featured + Latest */}
      <div className="lg:col-span-2 flex flex-col gap-6">

        {/* Featured News */}
        {data.slice(0, 1).map((news) => (
          <div
             onClick={() => navigate("/news_detail", )}

            key={news.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 overflow-hidden"
          >
            <img
              src={news.images}
              alt={news.Title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-3 text-gray-900">{news.Title}</h2>
              {/* <div
                className="text-gray-700 mb-4 text-sm line-clamp-4"
                dangerouslySetInnerHTML={{ __html: news.Content }}
              ></div> */}
              <p className="text-gray-500 text-xs mb-3">Published: {news.created_at}</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}

        {/* Latest News Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.slice(1, 5).map((news) => (
            <div
                         onClick={() => navigate("/news_detail", )}

              key={news.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-200 overflow-hidden"
            >
              <img
                src={news.images}
                alt={news.Title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{news.Title}</h3>
                <p className="text-gray-400 text-xs mb-2">Published: {news.created_at}</p>
                <button className="mt-auto bg-pink-500 text-white px-3 py-1 rounded-md text-sm hover:bg-pink-600 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Popular Posts</h2>
        {data.slice(1, 6).map((news) => (
          <div 
                       onClick={() => navigate("/news_detail", )}

          key={news.id} className="flex gap-3 items-center bg-white rounded-xl shadow hover:shadow-lg transition border border-gray-200 p-3">
            <img
              src={news.images}
              alt={news.Title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h4 className="text-sm font-semibold text-gray-800">{news.Title}</h4>
              <p className="text-gray-400 text-xs">Published: {news.created_at}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-500">Loading news...</p>
  )}
</div>



  );
};

export default News;
