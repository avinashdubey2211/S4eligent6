import React from "react";
import CustomDiv from "../../Shared/CustomDiv";
import Slider from "react-slick";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/material/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Text from "../../Shared/Text";
import CustomButton from "../../Shared/CustomButton";

const Home = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <CustomDiv className="w-full flex flex-col p-2">
      <CustomDiv className="h-32 py-5 my-auto px-10 w-full">
        <Text className="text-2xl font-bold mb-2 mx-2">Best In Beauty</Text>
        <CustomDiv className="">
          <Slider {...settings} className="home-slider">
            {[
              {
                name: "L'Oreal Professionnel",
                src: "https://images-static.nykaa.com/uploads/dc75152c-2fd7-4718-8c59-04eff61d6e63.png?tr=w-600,cm-pad_resize",
              },
              {
                name: "L'Oreal Professionnel",
                src: "https://images-static.nykaa.com/uploads/e8353a54-53df-45a1-a03f-799710503a24.jpg?tr=w-600,cm-pad_resize",
              },

              {
                name: "L'Oreal Professionnel",
                src: "https://images-static.nykaa.com/uploads/b79c9a1c-7792-4d11-b18a-d6a3498ae9fe.jpg?tr=w-600,cm-pad_resize",
              },
              {
                name: "L'Oreal Professionnel",
                src: "https://images-static.nykaa.com/uploads/56f069e6-7153-4e03-a50f-eb9cb96c3246.jpg?tr=w-600,cm-pad_resize",
              },
              {
                name: "L'Oreal Professionnel",
                src: "https://images-static.nykaa.com/uploads/3cd2b006-e080-41e7-b1ca-5e981942c223.jpg?tr=w-600,cm-pad_resize",
              },
            ].map((item) => {
              return (
                <CustomDiv className="cursor-pointer">
                  <img src={item.src} alt="" className="rounded-lg" />
                </CustomDiv>
              );
            })}
          </Slider>
        </CustomDiv>
      </CustomDiv>
      <CustomDiv className="flex gap-12 pt-[30vh] items-center justify-center w-full px-12">
        <img
          src="https://images-static.nykaa.com/uploads/5d4e7fd5-5753-4f0d-a86f-269494160c03.gif?tr=w-600,cm-pad_resize"
          alt=""
          className="cursor-pointer w-full"
        />
        <img
          src="https://images-static.nykaa.com/uploads/a74914ab-d9a9-4efa-b24d-b21e29061dc4.jpg?tr=w-600,cm-pad_resize"
          alt=""
          className="cursor-pointer w-full"
        />
      </CustomDiv>
      <CustomDiv className="mx-12 my-3">
        <Text className="text-2xl font-bold my-3 w-full">
          First Purchase App Offers
        </Text>
        <img
          src="https://images-static.nykaa.com/uploads/8aa5e37a-3b29-46da-b782-9ed02a4ec064.jpg?tr=w-1200,cm-pad_resize"
          alt=""
          className="w-full rounded-xl"
        />
        <Text className="text-2xl font-bold my-3 w-full">Top Brands</Text>
        <CustomDiv className="grid grid-cols-3 justify-center gap-5">
          {[
            {
              primary: "Up To 35% Off",
              secondary: "Free Face Wash on ₹549!",
              src: "https://images-static.nykaa.com/uploads/f01ea612-bbce-49fb-8876-7e882174b462.jpg?tr=w-400,cm-pad_resize",
            },
            {
              primary: "Up To 10% Off",
              secondary: "NEW LAUNCH ALERT!",
              src: "https://images-static.nykaa.com/uploads/051c4a41-dc45-4c1f-8558-2959a837a178.jpg?tr=w-400,cm-pad_resize",
            },

            {
              primary: "Up To 50% Off",
              secondary: "Free Lipstick worth ₹525 on ₹799",
              src: "https://images-static.nykaa.com/uploads/1a172fbf-be94-4b16-a3f4-5bd87a23ed38.jpg?tr=w-400,cm-pad_resize",
            },
            {
              primary: "Up To 35% Off Single Swipe",
              secondary: "Long Lasting, Liquid Mattes",
              src: "https://images-static.nykaa.com/uploads/698a05b7-b3c3-42a3-a8c9-a1e5f1fd82b4.jpg?tr=w-400,cm-pad_resize",
            },
            {
              primary: "Up To 20% Off",
              secondary: "On Entire Range",
              src: "https://images-static.nykaa.com/uploads/383fd332-1402-49e4-985c-59493868c060.jpg?tr=w-400,cm-pad_resize",
            },
            {
              primary: "Up To 20% Off",
              secondary: "Makeup That Stays Through The Day!",
              src: "https://images-static.nykaa.com/uploads/1a172fbf-be94-4b16-a3f4-5bd87a23ed38.jpg?tr=w-400,cm-pad_resize",
            },
            {
              primary: "Explore New Launches",
              secondary: "+ Exciting Gifts on purchase!",
              src: "https://images-static.nykaa.com/uploads/7e668e55-3f4c-435f-a34b-cdbb043c66e3.jpg?tr=w-400,cm-pad_resize",
            },
            {
              primary: "Complete Your Party Look In Minutes",
              secondary: "With Huda Beauty's Lovefest Collection",
              src: "https://images-static.nykaa.com/uploads/d79a6643-1fab-44f6-abea-6d2cf97cfed4.jpg?tr=w-400,cm-pad_resize",
            },
          ].map((item) => {
            return (
              <Card variant="outlined" className="!rounded-xl">
                <CardOverflow>
                  <AspectRatio ratio="2">
                    <img src={item.src} loading="lazy" alt="" />
                  </AspectRatio>
                </CardOverflow>
                <CustomDiv className="flex flex-col p-2 justify-center">
                  <Text className="mt-2 text-xl font-semibold text-red-500">
                    {item.primary}
                  </Text>
                  <Text>{item.secondary}</Text>
                </CustomDiv>
              </Card>
            );
          })}
        </CustomDiv>

        <CustomDiv className="flex gap-10 my-5">
          <img
            src="https://images-static.nykaa.com/uploads/622fcc5e-7b29-42b8-a4d1-9c95aa15f7fe.jpg?tr=w-600,cm-pad_resize"
            alt=""
            className="w-full rounded-[20px]"
          />
          <img
            src="https://images-static.nykaa.com/uploads/9d28d014-b61d-41b0-9119-5dd3fbfea02c.jpg?tr=w-600,cm-pad_resize"
            alt=""
            className="w-full rounded-[20px]"
          />
        </CustomDiv>
        <Slider
          speed={500}
          slidesToScroll={1}
          slidesToShow={2}
          className="home-slider w-full"
        >
          {[
            {
              name: "L'Oreal Professionnel",
              src: "https://images-static.nykaa.com/uploads/c7ae3973-167e-4ce1-b572-1364e1f5c2e2.jpg?tr=w-600,cm-pad_resize",
            },
            {
              name: "L'Oreal Professionnel",
              src: "https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg?tr=w-600,cm-pad_resize",
            },
            {
              name: "L'Oreal Professionnel",
              src: "https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg?tr=w-600,cm-pad_resize",
            },
          ].map((item) => {
            return (
              <CustomDiv className="cursor-pointer">
                <img src={item.src} alt="" className="rounded-lg w-full" />
              </CustomDiv>
            );
          })}
        </Slider>
        <CustomDiv className="flex flex-col w-full">
          <Text className="text-2xl font-bold my-3 w-full">
            Only At Shubhga
          </Text>
          <CustomDiv className="grid grid-cols-3 justify-center gap-5 w-full">
            {[
              {
                primary: "3 samples on ₹3500",
                secondary: "Bid Adieu to Dull & Dry Skin!",
                src: "https://images-static.nykaa.com/creatives/0b2dad36-1af7-4426-8cba-2a24487f75b4/default.jpg?tr=w-400,cm-pad_resize",
              },
              {
                primary: "Flat 20% Off +",
                secondary: "Hydrating Lip Balm on ₹750",
                src: "https://images-static.nykaa.com/creatives/b3ecd3b1-c6a3-4fec-b5da-4e62fe217be9/default.jpg?tr=w-400,cm-pad_resize",
              },

              {
                primary: "Upto 30% Off",
                secondary: "Free Scrub worth ₹350 on ₹799",
                src: "https://images-static.nykaa.com/creatives/6fca5373-6912-437b-9840-34c19f4538d5/default.jpg?tr=w-400,cm-pad_resize",
              },
              {
                primary: "Upto 25% Off",
                secondary: "Free matte lipstick on 1999",
                src: "https://images-static.nykaa.com/creatives/26aaa439-64b9-4448-8a96-ca7c3550f2ac/default.png?tr=w-400,cm-pad_resize",
              },
            ].map((item) => {
              return (
                <Card variant="outlined" className="!rounded-xl">
                  <CardOverflow>
                    <AspectRatio ratio="2">
                      <img src={item.src} loading="lazy" alt="" />
                    </AspectRatio>
                  </CardOverflow>
                  <CustomDiv className="flex p-2 flex-col justify-center">
                    <Text className="mt-2 text-xl font-semibold text-red-500">
                      {item.primary}
                    </Text>
                    <Text>{item.secondary}</Text>
                  </CustomDiv>
                </Card>
              );
            })}
          </CustomDiv>
        </CustomDiv>
        <CustomDiv className="flex justify-between items-center">
          <Text className="text-2xl font-bold my-5 w-full">New At Shubhga</Text>
          <CustomButton className="whitespace-nowrap !rounded">
            View All
          </CustomButton>
        </CustomDiv>
        <CustomDiv className="py-4">
          <Slider
            infinite={false}
            speed={500}
            slidesToScroll={1}
            slidesToShow={6}
            className="home-slider w-full"
          >
            {[
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/5/d/5dd7212NYKAC00000638_1a.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/6/c/6cefbe029013_S1-8901030824166.jpg",
              },

              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/a/7/a79d5d8MINIM00000105_1.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/a/d/ad1d13a3614273250757_1.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/8/4/8434b008904417300109_1.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/3/3/3346472MACXX00001061_1.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/3/3/3346472MACXX00001061_1.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/3/3/3346472MACXX00001061_1.jpg",
              },
            ].map((item) => {
              return (
                <Card className="!rounded-md my-2">
                  <CardOverflow>
                    <AspectRatio ratio="1">
                      <img src={item.src} loading="lazy" alt="" />
                    </AspectRatio>
                  </CardOverflow>
                  <CustomDiv className="flex p-2 flex-col justify-center">
                    <Text className="mt-2 font-semibold text-red-500">
                      {item.primary}
                    </Text>
                    <Text>{item.secondary}</Text>
                    <Text>{item.price}</Text>
                  </CustomDiv>
                </Card>
              );
            })}
          </Slider>
        </CustomDiv>
        <CustomDiv className="flex justify-between items-center">
          <Text className="text-2xl font-bold my-3 w-full">Trending 10</Text>
          <CustomButton className="whitespace-nowrap !rounded">
            View All
          </CustomButton>
        </CustomDiv>
        <CustomDiv className="py-4">
          <Slider
            infinite={false}
            speed={500}
            slidesToScroll={1}
            slidesToShow={6}
            className="home-slider w-full"
          >
            {[
              {
                title: "Innovative Tools",
                src: "https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-240,cm-pad_resize",
              },
              {
                title: "Gift Sets",
                src: "https://images-static.nykaa.com/uploads/ad2c3fa0-3f81-4fe2-a99c-5e5e59e95407.jpg?tr=w-240,cm-pad_resize",
              },
              {
                title: "Feminine Hygiene",
                src: "https://images-static.nykaa.com/uploads/2162cf5d-cff3-4f4f-8a0a-a69827e7b200.jpg?tr=w-240,cm-pad_resize",
              },
              {
                title: "Luxe Minis",
                src: "https://images-static.nykaa.com/uploads/207d5407-b589-4aeb-b5f3-54a9143ed8f5.jpg?tr=w-240,cm-pad_resize",
              },
              {
                title: "Blushes",
                src: "https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-240,cm-pad_resize",
              },
              {
                title: "Sunscreens",
                src: "https://images-static.nykaa.com/uploads/86a11d9e-818b-48e4-9435-cb886f4e3762.jpg?tr=w-240,cm-pad_resize",
              },
              {
                title: "Foundations",
                src: "https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-240,cm-pad_resize",
              },
              {
                title: "Freshner",
                src: "https://images-static.nykaa.com/uploads/3665639b-9bd5-4ff1-a3f8-a1d125b4d536.jpg?tr=w-240,cm-pad_resize",
              },
              {
                title: "Lipsticks",
                src: "https://images-static.nykaa.com/uploads/c5ad5e3c-be14-48a3-80e9-aa8ca39481e5.jpg?tr=w-240,cm-pad_resize",
              },
            ].map((item) => {
              return (
                <>
                  <Card className="my-2 !p-0">
                    <img src={item.src} loading="lazy" alt="" />
                  </Card>
                  <Text className="relative bottom-9 bg-white dark:text-black bg-opacity-70 pb-2 text-center">
                    {item.title}
                  </Text>
                </>
              );
            })}
          </Slider>
        </CustomDiv>
        <CustomDiv className="flex justify-between items-center">
          <Text className="text-2xl font-bold my-3 w-full">Bestsellers</Text>
          <CustomButton className="whitespace-nowrap !rounded">
            View All
          </CustomButton>
        </CustomDiv>
        <CustomDiv className="py-4">
          <Slider
            infinite={false}
            speed={500}
            slidesToScroll={1}
            slidesToShow={6}
            className="home-slider w-full"
          >
            {[
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/5/d/5dd7212NYKAC00000638_1a.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/6/c/6cefbe029013_S1-8901030824166.jpg",
              },

              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/a/7/a79d5d8MINIM00000105_1.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/a/d/ad1d13a3614273250757_1.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/8/4/8434b008904417300109_1.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/3/3/3346472MACXX00001061_1.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/3/3/3346472MACXX00001061_1.jpg",
              },
              {
                primary: "Lakme Absolute Loose Finishing Powder",
                secondary: "3 Shades",
                price: "₹179",
                src: "https://images-static.nykaa.com/media/catalog/product/3/3/3346472MACXX00001061_1.jpg",
              },
            ].map((item) => {
              return (
                <Card className="!rounded-none my-2">
                  <CardOverflow>
                    <AspectRatio ratio="1">
                      <img src={item.src} loading="lazy" alt="" />
                    </AspectRatio>
                  </CardOverflow>
                  <CustomDiv className="flex p-2 flex-col justify-center">
                    <Text className="mt-2 font-semibold text-red-500">
                      {item.primary}
                    </Text>
                    <Text>{item.secondary}</Text>
                    <Text>{item.price}</Text>
                  </CustomDiv>
                </Card>
              );
            })}
          </Slider>
        </CustomDiv>
        <Text className="text-2xl font-bold my-3 w-full">Featured Brands</Text>
        <CustomDiv className="grid grid-cols-5 justify-center gap-5">
          {[
            {
              primary: "Flat 20% Off",
              secondary: "On Beauty Tools",
              src: "https://images-static.nykaa.com/creatives/14993375-35c8-4d82-99cf-03002ab600eb/default.jpg?tr=w-240,cm-pad_resize",
            },
            {
              primary: "Upto 20% Off",
              secondary: "On Entire Range",
              src: "https://images-static.nykaa.com/creatives/d10a5e73-4921-4436-9378-b777465efd6a/default.jpg?tr=w-240,cm-pad_resize",
            },

            {
              primary: "Upto 50% Off",
              secondary: "On Entire Range",
              src: "https://images-static.nykaa.com/creatives/53ef6b7b-a7fb-426b-9fea-3dd268184e38/default.jpg?tr=w-240,cm-pad_resize",
            },
            {
              primary: "Flat 10% Off",
              secondary: "Hydrates Dull Hair",
              src: "https://images-static.nykaa.com/creatives/3f490115-f29d-4671-8411-fdd012e0c2a2/default.jpg?tr=w-240,cm-pad_resize",
            },
            {
              primary: "Up To 20% Off",
              secondary: "On Entire Range",
              src: "https://images-static.nykaa.com/creatives/f46b4f54-cb9f-4f81-9dc6-0669c05c4348/default.jpg?tr=w-240,cm-pad_resize",
            },
            {
              primary: "Up To 28% Off",
              secondary: "Extra 10% on ₹599",
              src: "https://images-static.nykaa.com/creatives/6a3ee85c-d65b-41b1-ba03-441cecb83359/default.jpg?tr=w-240,cm-pad_resize",
            },
            {
              primary: "Flat 15% Off",
              secondary: "Combos: Flat 20% Off",
              src: "https://images-static.nykaa.com/creatives/ed8924f1-dfd1-4e51-a43c-b2956f364f53/default.jpg?tr=w-240,cm-pad_resize",
            },
            {
              primary: "Upto 30% off",
              secondary: "On Bestsellers",
              src: "https://images-static.nykaa.com/creatives/91357502-8e88-47b8-94da-b027e4ed5ef1/default.jpg?tr=w-240,cm-pad_resize",
            },
            {
              primary: "Upto 30% Off",
              secondary: "Shower Gel on ₹799",
              src: "https://images-static.nykaa.com/creatives/1b2e42c9-05db-47ed-90a3-95c761fc6662/default.png?tr=w-240,cm-pad_resize",
            },
            {
              primary: "Min 20% Off",
              secondary: "Free Serum on ₹799",
              src: "https://images-static.nykaa.com/creatives/3407251e-567b-431e-86ad-666fad178642/default.png?tr=w-240,cm-pad_resize",
            },
          ].map((item) => {
            return (
              <Card variant="outlined" className="!rounded-xl">
                <CardOverflow>
                  <AspectRatio ratio="3/4">
                    <img src={item.src} loading="lazy" alt="" />
                  </AspectRatio>
                </CardOverflow>
                <CustomDiv className="flex p-2 flex-col justify-center">
                  <Text className="mt-2 text-xl font-semibold">
                    {item.primary}
                  </Text>
                  <Text>{item.secondary}</Text>
                </CustomDiv>
              </Card>
            );
          })}
        </CustomDiv>
        <CustomDiv className="grid grid-cols-3 justify-center gap-5 my-5 w-full">
          {[
            {
              primary: "3 samples on ₹3500",
              secondary: "Bid Adieu to Dull & Dry Skin!",
              src: "https://images-static.nykaa.com/creatives/600c8653-aa1a-4939-bcc1-2041348ceff9/default.jpg?tr=w-400,cm-pad_resize",
            },
            {
              primary: "Flat 20% Off +",
              secondary: "Hydrating Lip Balm on ₹750",
              src: "https://images-static.nykaa.com/creatives/6682b118-a018-4b39-9aee-33937fefb5c5/default.jpg?tr=w-400,cm-pad_resize",
            },

            {
              primary: "Upto 30% Off",
              secondary: "Free Scrub worth ₹350 on ₹799",
              src: "https://images-static.nykaa.com/creatives/f4d66b11-4a27-438c-8183-44c6b018aba2/default.jpg?tr=w-400,cm-pad_resize",
            },
          ].map((item) => {
            return (
              <Card variant="outlined" className="!rounded-xl">
                <CardOverflow>
                  <AspectRatio ratio="2">
                    <img src={item.src} loading="lazy" alt="" />
                  </AspectRatio>
                </CardOverflow>
                <CustomDiv className="flex p-2 flex-col justify-center">
                  <Text className="mt-2 text-xl font-semibold text-red-500">
                    {item.primary}
                  </Text>
                  <Text>{item.secondary}</Text>
                </CustomDiv>
              </Card>
            );
          })}
        </CustomDiv>
      </CustomDiv>
    </CustomDiv>
  );
};

export default Home;
