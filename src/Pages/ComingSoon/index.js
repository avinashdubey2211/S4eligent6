import React from "react";
import { Link } from "react-router-dom";
import shubhga from "../../Assets/shubhga.svg";
const LandingPage = () => {
  return (
    <div className="h-screen bg-no-repeat bg-cover w-full bg-[url('/src/Assets/phonebg.png')] lg:bg-[url('/src/Assets/back.jpg')]">
      <div className="text-black text-center flex w-full justify-center items-center">
        <div className="max-w-lg pt-[30vh] lg:pt-[15vh] flex flex-col justify-center items-center">
          <img
            src={shubhga}
            alt=""
            className="shake lg:h-full lg:w-full h-1/2 w-1/2"
          />
          <h1 className="mb-5 text-5xl font-bold">Coming Soon</h1>
          <p className="mb-5 lg:px-0 px-4">
            Keep your eyes on the future, don't miss out! Leave us your email
            and benifit from the launch specials.
          </p>
          <Link to="https://wa.me/+919453840002">
            <button className="btn btn-primary">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
