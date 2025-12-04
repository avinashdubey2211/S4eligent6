
import React, { useEffect, useState } from "react";
import { NewsPage } from "../../../Services/NewsPage";

const News_Detail = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const res = await NewsPage({ news_id: 3 });
      setData(res.data.data); 
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading news...</div>;
  }

  if (!data) {
    return <div className="text-center py-10 text-red-500">News not found</div>;
  }

  return (
  <div className="max-w-7xl mx-auto  py-5">

  {/* Full Width Image with Title Overlay */}
  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[500px] rounded-lg overflow-hidden">
    <img
      src={data.images}
      alt={data.Title}
      className="w-full h-full object-cover"
    />
    {/* Title Overlay */}
    <h1 className="absolute bottom-6 left-4 md:left-8 text-xl md:text-5xl lg:text-2xl font-bold text-white drop-shadow-lg">
      {data.Title}
    </h1>
  </div>

  {/* Content Below Image */}
  <div className="mt-8 text-gray-700 text-base leading-relaxed">
    <p className="text-gray-500 text-sm mb-4">Published: {data.created_at}</p>
    <div dangerouslySetInnerHTML={{ __html: data.Content }} />
  </div>

  {/* Contact Section */}
  {/* <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
    <p className="text-gray-700 text-base">
      For more information, reach out via email or phone.
    </p>
  </div> */}

</div>


  );
};

export default News_Detail;
