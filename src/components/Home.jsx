import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import twitterLogo from "../assets/twitter-logo-scaled.jpg";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();
  const signIn = () => {
    googleSignIn();
  };
  useEffect(() => {
    if (user) {
      navigate("/main");
    }
  }, [user]);
  return (
    <div className="flex flex-row">
      <div className="">
        <img
          className="hidden lg:inline lg:h-screen "
          src={twitterLogo}
          alt=""
        />
      </div>
      <div className="flex">
        <div>
          <img
            className="m-3 h-10 w-12"
            src="http://3.bp.blogspot.com/-NxouMmz2bOY/T8_ac97cesI/AAAAAAAAGg0/e3vY1_bdnbE/s1600/Twitter+logo+2012.png"
          />
        </div>
        <div className="m-10">
          <h1 className="text-3xl m-5 text-gray-800 md:text-4xl lg:text-5xl font-bold">
            Happening now!!
          </h1>
          <h3 className="text-xl m-5 text-gray-800 md:text-2xl lg:text-3xl">
            Join Twitter today.
          </h3>
          <GoogleButton className="m-5 h-10" onClick={signIn} />
        </div>
      </div>
    </div>
  );
}

export default Home;
