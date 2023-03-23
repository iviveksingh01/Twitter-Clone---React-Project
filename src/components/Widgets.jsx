import React from "react";
import { TwitterTimelineEmbed,TwitterTweetEmbed } from "react-twitter-embed";
import { SearchIcon } from "@heroicons/react/outline";

function Widgets() {
  return (
    <div className="hidden lg:inline px-2 mt-2 col-span-2 max-h-screen overflow-y-scroll scrollbar-hide">
      <div
        className="flex items-center space-x-2 bg-gray-100
    p-3 rounded-full mt-2 mb-4"
      >
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type={"text"}
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <h2>What's Happening</h2>
      <TwitterTweetEmbed tweetId={"1637404315718496258"}/>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Developer"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widgets;
