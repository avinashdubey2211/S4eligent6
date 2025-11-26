import {
  BottomNavigation,
  BottomNavigationAction,
  Fab,
  Paper,
} from "@mui/material";
import React from "react";
// import Footer from "../Shared/Footer";
import Headers from "../Shared/Headers";
import { Favorite, Home, KeyboardArrowUp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AddToCart from "../Shared/Headers/AddToCart";
import SignIn from "../Authentication/SignInPage";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Layout = ({ theme, setTheme, component }) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Headers theme={theme} setTheme={setTheme} />
      <Paper
        elevation={0}
        className="w-full h-full lg:pt-12 pt-10 pb-14 !rounded-none "
      >
        {component}
      </Paper>
      <Fab
        color="inherit"
        onClick={handleTop}
        className="!fixed lg:!block !hidden !p-2 !z-50 bottom-10 right-10"
      >
        <KeyboardArrowUp fontSize="large" />
      </Fab>
      {/* <Footer/> */}

      <footer />
      <BottomNavigation
        showLabels
        value={value}
        className="!fixed bottom-0 w-full bg-white z-50 shadow border-t-2 lg:!hidden"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          icon={<Home className="!text-[27px]" />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          icon={<Favorite className="!text-[27px]" />}
          onClick={() => navigate("/wish-list")}
        />
        <AddToCart iconColor="text-gray-600" from={"BottomNav"} />
        <SignIn iconColor="text-gray-600" />
      </BottomNavigation>
      <div className="bg-white font-bold text-black px-1 sm:px-6 md:px-12 py-6 ">
        <div className=" w-full max-w-screen overflow-x-auto  flex items-center  ">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3  bg-gradient-to-b from-white to-[#e7e7e7]   border-r-2 border-gray-200 hover:shadow-lg transition"
          >
            <FaWhatsapp className="text-green-500 text-xl" />
            <span className="hidden md:inline  text-gray-800">WhatsApp Us</span>
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 px-4 py-3  bg-gradient-to-b from-white to-[#e7e7e7] hover:shadow-lg transition"
          >
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <span className="hidden md:inline  text-gray-800">Talk To Us</span>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 w-auto bg-[#fceff7] hover:shadow-lg transition"
          >
            <FaInstagram className="text-pink-600 text-xl" />
            <span className="hidden md:inline text-gray-800">@Poorvika</span>
          </a>
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 w-auto bg-[#edf2fe] hover:shadow-lg transition"
          >
            <FaFacebook className="text-blue-600 text-xl" />
            <span className="hidden md:inline text-gray-800">@Poorvika</span>
          </a>
          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 w-auto bg-[#e5f9fe] hover:shadow-lg transition"
          >
            <FaXTwitter className="text-black text-xl" />
            <span className="hidden md:inline text-gray-800">@Poorvika</span>
          </a>
          {/* YouTube */}
          <a
            href="https://youtube.com/@Poorvika"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 w-auto bg-[#fce8eb] hover:shadow-lg transition"
          >
            <FaYoutube className="text-red-600 text-xl" />
            <span className="hidden md:inline text-gray-800">@Poorvika</span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 w-auto bg-[#e2f7fe] hover:shadow-lg transition"
          >
            <FaLinkedin className="text-[#0A66C2] text-xl" />
            <span className="hidden md:inline text-gray-800">@Poorvika</span>
          </a>
          {/* Thread / Copyright */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-6 py-3 w-auto bg-[#e8e8e8] hover:shadow-lg transition"
          >
            <FaRegCopyright className="text-black text-xl" />
            <span className="hidden md:inline text-gray-800">@Poorvika</span>
          </a>
        </div>

        {/* Main Footer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-9 mt-6 text-sm">
          <div>
            <h3 className="font-bold mb-2 text-base">Contact Information</h3>
            <p className="text-gray-700 font-normal text-sm sm:text-base">
              <strong>Head Office</strong> <br />
              Poorvika Mobiles Pvt Ltd <br />
              Admin Office No.30, Arcot Road, <br />
              Kodambakkam, Chennai-600 024.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-base">Support</h3>
            <ul className="space-y-1 text-gray-700 font-normal">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Site Map
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  One Assist
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-base">Policies</h3>
            <ul className="space-y-1 text-gray-700 font-normal">
              <li>
                <a href="#" className="hover:underline">
                  T & C
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  CSR & Whistle Blower Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Return, Replacement & Refund
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-base">Opportunities</h3>
            <a href="#" className="hover:underline text-gray-700 font-normal">
              Careers
            </a>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-base">Know More</h3>
            <ul className="space-y-1 text-gray-700 font-normal">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Service Centres
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-xs sm:text-sm leading-relaxed text-gray-700 font-normal">
          <h3 className="font-bold text-base">About Us:</h3>

          <p className="mt-2">
            Poorvika leads India as the Largest Tech and Appliance Omnichannel
            Retailer, using innovative strategies that provide wider access to
            the latest Premium Technology. Our services span across 470+
            Showrooms in India, covering Tamil Nadu, Karnataka, Pondicherry, and
            Maharashtra, including an ever-growing legacy of Poorvika Appliances
            Showrooms in Tamil Nadu.
           
            Poorvika sells a wide range of Gadgets and Appliances both Online
            and Offline, including Smartphones, ACs, Refrigerators, Washing
            Machines, Laptops, All-in-one PCs, Customized PCs, Gaming Gears,
            Smart Devices, Smart TVs, Peripherals, and many Accessories &
            Household Needs.
          
            Through www.poorvika.com, our popular E-Commerce portal, customers
            across India can place their orders with just a click and get them
            delivered safely with convenient options like Same Day Delivery and
            Regular Delivery, or they can opt for Pickup at Store based on their
            location.
            
            Poorvika has proudly served over 40 Million+ Happy Customers over 20
            years, becoming a leading retailer for top brands such as Apple,
            Asus, Acer, Samsung, Oppo, LG, Bosch, Philips, IFB, Lenovo, Vivo,
            Whirlpool, Xiaomi, OnePlus, Redmi, Godrej, Realme, Nokia, and more.
          
            Poorvika remains the best spot to shop for all your everyday Gadgets
            and Electronic Needs!
          </p>
        </div>

        {/* Bottom Section */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto gap-4 md:gap-0">
          {/* App Download */}
          <div className="flex gap-3 items-center">
            <img
              src="https://img.poorvika.com/cdn-cgi/image/width=772,height=454,quality=50/common/google-play.png"
              alt="Google Play"
              className="h-10 sm:h-12 md:h-10 object-contain"
            />
            <img
              src="https://img.poorvika.com/cdn-cgi/image/width=772,height=454,quality=50/common/app-store.png"
              alt="App Store"
              className="h-10 sm:h-12 md:h-10 object-contain"
            />
          </div>

          {/* EMI Partners */}
          <div className="flex flex-col items-center gap-2">
            {/* Label on top, centered */}
            <span className="font-roboto text-base font-normal leading-6 text-black text-center">
              Our EMI Partners:
            </span>

            {/* Logos in a single  */}
            <div className="flex gap-4">
              <img
                src="https://img.poorvika.com/cdn-cgi/image/width=772,height=454,quality=50/common/bajaj.png"
                alt="Bajaj Finserv"
                className="h-4 sm:h-4 object-cover"
              />
              <img
                src="https://img.poorvika.com/cdn-cgi/image/width=772,height=454,quality=50/common/foot-hdfc.png"
                alt="HDFC Bank"
                className="h-4 sm:h-4 object-cover"
              />
              <img
                src="https://img.poorvika.com/cdn-cgi/image/width=772,height=454,quality=50/common/home-credit.png"
                alt="Home Credit"
                className="h-4 sm:h-4 object-cover"
              />
            </div>
          </div>

          {/* Payment Options */}
          <div className="flex gap-3 items-center flex-col justify-center md:justify-start">
            <span className="font-roboto text-base font-normal leading-6 text-black">
              Payment Option:
            </span>
            <img
              src="https://img.poorvika.com/cdn-cgi/image/width=772,height=454,quality=50/common/foot-Payment-option.png"
              alt="Payment Options"
              className="h-4 sm:h-4 object-contain"
            />
          </div>

          {/* Copyright */}
          {/* <p className="flex items-center justify-center md:justify-start mt-4 md:mt-0 text-center">
            <FaRegCopyright className="mr-1" /> 2025 Poorvika Mobiles Pvt Ltd
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
