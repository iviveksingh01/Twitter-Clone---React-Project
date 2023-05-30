import React, { useEffect, useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { UserAuth } from "../context/AuthContext";

function TweetBox(props) {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const { profile } = UserAuth();
  let tweet = profile.filter((e) => e.active);
  const addTweet = (e) => {
    e.preventDefault();

    tweet[0]?.tweets.unshift({
      createdAt: new Date(),
      text: input,
      image: imgUrl,
      comments: [],
    });

    //  console.log(tweet)
    const localTweet = JSON.parse(window.localStorage.getItem("profile"));
    localTweet.tweets.unshift({
      createdAt: new Date(),
      text: input,
      image: imgUrl,
      comments: "",
    });
    window.localStorage.setItem("profile", JSON.stringify(localTweet));
    props.setChange(localTweet);
    setInput("");
    setImgUrl("");
  };
  useEffect(() => {
    console.log(tweet);
  }, []);
  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 object-cover rounded-full"
        src={tweet[0]?.profileImg}
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            value={input}
            type={"text"}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's Happeneing?"
          />
          <input
            className="h-10 w-full text-s outline-none placeholder:text-s"
            value={imgUrl}
            type={"text"}
            onChange={(e) => setImgUrl(e.target.value)}
            placeholder="Optional: Enter Image Url"
          />
          <div className="flex space-between lg:items-center ">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>

            <button
              disabled={!input}
              onClick={addTweet}
              className="disabled:opacity-40 bg-twitter px-5 py-2 font-bold 
              text-white rounded-full"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
