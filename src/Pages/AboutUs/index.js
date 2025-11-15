import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomDiv from "../../Shared/CustomDiv";
import Text from "../../Shared/Text";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <CustomDiv className="flex w-full bg-gray-100 py-10 px-[4%] lg:px-[8%]">
        <CustomDiv className="flex flex-col w-full shadow bg-white p-5 !rounded">
          <Text className="text-4xl text-center font-bold w-full">
            About Us
          </Text>
          <section className="my-8  text-gray-800">
            <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
              <h1 className="p-4 text-2xl lg:text-4xl font-semibold leading-none text-center">
                What our customers are saying about us
              </h1>
            </div>
            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
              <div className="flex flex-col max-w-sm lg:mx-4 my-6 shadow-lg">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                  <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 text-[#D32F2F]"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 text-[#D32F2F]"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#D32F2F] text-gray-50">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?1"
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full 0 bg-gray-300"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
              <div className="flex flex-col max-w-sm lg:mx-4 my-6 shadow-lg">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                  <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 text-[#D32F2F]"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 text-[#D32F2F]"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#D32F2F] text-gray-50">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?2"
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full 0 bg-gray-300"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
              <div className="flex flex-col max-w-sm lg:mx-4 my-6 shadow-lg">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                  <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 text-[#D32F2F]"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 text-[#D32F2F]"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#D32F2F] text-gray-50">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?3"
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full 0 bg-gray-300"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
              <div className="flex flex-col max-w-sm lg:mx-4 my-6 shadow-lg">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
                  <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 text-[#D32F2F]"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 text-[#D32F2F]"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#D32F2F] text-gray-50">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?4"
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full 0 bg-gray-300"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
            </div>
          </section>
          <section className="lg:p-8 text-gray-800">
            <div className="container mx-auto space-y-12">
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img
                  src="https://source.unsplash.com/640x480/?1"
                  alt=""
                  className="h-80 bg-gray-500 aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6 bg-gray-100">
                  <span className="text-xs uppercase text-gray-600">
                    Join, it's free
                  </span>
                  <h3 className="lg:text-3xl text-2xl font-bold">
                    We're not reinventing the wheel
                  </h3>
                  <p className="my-6 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor aliquam possimus quas, error esse quos.
                  </p>
                  <button type="button" className="self-start">
                    Action
                  </button>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <img
                  src="https://source.unsplash.com/640x480/?2"
                  alt=""
                  className="h-80 bg-gray-500 aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6 bg-gray-100">
                  <span className="text-xs uppercase text-gray-600">
                    Join, it's free
                  </span>
                  <h3 className="lg:text-3xl text-2xl font-bold">
                    We're not reinventing the wheel
                  </h3>
                  <p className="my-6 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor aliquam possimus quas, error esse quos.
                  </p>
                  <button type="button" className="self-start">
                    Action
                  </button>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img
                  src="https://source.unsplash.com/640x480/?3"
                  alt=""
                  className="h-80 bg-gray-500 aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6 bg-gray-100">
                  <span className="text-xs uppercase text-gray-600">
                    Join, it's free
                  </span>
                  <h3 className="lg:text-3xl text-2xl font-bold">
                    We're not reinventing the wheel
                  </h3>
                  <p className="my-6 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor aliquam possimus quas, error esse quos.
                  </p>
                  <button type="button" className="self-start">
                    Action
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="max-w-[85rem] py-10 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
                Customer stories
              </h2>
              <p className="mt-1 text-gray-600 ">
                See how game-changing companies are making the most of every
                engagement with Preline.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Link
                className="group hover:bg-gray-100 rounded-xl p-2 lg:p-5 transition-all dark:hover:bg-white/[.05]"
                to="#"
              >
                <div className="aspect-w-16 aspect-h-10">
                  <img
                    className="w-full object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="Description"
                  />
                </div>
                <h3 className="mt-5 text-xl text-gray-800  dark:group-hover:text-white">
                  Unity's inside sales team drives 80% of its revenue with
                  Preline.
                </h3>
                <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 ">
                  Learn more
                  <svg
                    className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </Link>

              <Link
                className="group hover:bg-gray-100 rounded-xl p-2 lg:p-5 transition-all dark:hover:bg-white/[.05]"
                to="#"
              >
                <div className="aspect-w-16 aspect-h-10">
                  <img
                    className="w-full object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
                    alt="Description"
                  />
                </div>
                <h3 className="mt-5 text-xl text-gray-800  dark:group-hover:text-white">
                  Living Spaces creates a unified experience across the customer
                  journey.
                </h3>
                <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 ">
                  Learn more
                  <svg
                    className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </Link>

              <Link
                className="group hover:bg-gray-100 rounded-xl p-2 lg:p-5 transition-all dark:hover:bg-white/[.05]"
                to="#"
              >
                <div className="aspect-w-16 aspect-h-10">
                  <img
                    className="w-full object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Description"
                  />
                </div>
                <h3 className="mt-5 text-xl text-gray-800  dark:group-hover:text-white">
                  Atlassian powers sales and support at scale with Preline.
                </h3>
                <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 ">
                  Learn more
                  <svg
                    className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </Link>
            </div>
          </div>
        </CustomDiv>
      </CustomDiv>
    </>
  );
};

export default AboutUs;
