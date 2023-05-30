import React, { useState } from "react";
import TimeAgo from "react-timeago";
import Comments from "./Comments";
import { HeartIcon } from '@heroicons/react/solid';
import {
  ChatAlt2Icon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";


function Tweet(props) {

  const[display,setDisplay]=useState(false)
  const [likes, setLikes] = useState(props.tweet.like?props.tweet.like:0);
  const [isLiked, setIsLiked] = useState(false);

  const likesCalculator = ()=>{
    if (isLiked) {
      setLikes(parseInt(likes) - 1);
    } else {
      setLikes(parseInt(likes) + 1);
    }
    setIsLiked(!isLiked);
  }
  const[comments,setComments] = useState([
    {
      createdAt: "Mon Mar 21 2023 11:02:56 GMT+0530 (India Standard Time)",
      comment: "This is my SECOND COMMENT!!!",
    },
    {
      createdAt: "Sun Mar 20 2023 11:02:56 GMT+0530 (India Standard Time)",
      comment: "This is my FIRST COMMENT!!!",
    },   
  ]) 

  return (
    <div className="flex flex-col space-x-3 border-gray-100 p-5 ">
      <div className="flex space-x-3">
        <img alt=''
          className="h-10 w-10 rounded-full object-cover"
          src={props.profileImg}
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{props.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{props.username?.replace(/\s+/g, "").toLowerCase()}
            </p>

            <TimeAgo
              className="text-sm text-gray-500"
              date={props.tweet.createdAt}
            />
          </div>
          <p className="pt-1 text-left">{props.tweet.text}</p>
          {props.tweet.image && (
            <img
              src={props.tweet.image}
              alt=""
              className="m-5 ml-0 mb-1 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5" onClick={()=>setDisplay(!display)} />
          <p>{comments.length}</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className={`h-5 w-5 ${isLiked ? 'text-red-500' : ''}`} onClick={likesCalculator}/>
          <p>{likes}</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5" />
        </div>
      </div>
      {display && <Comments comments={comments} username={props.username} profileImg={props.profileImg}  addComment={setComments}/>}
    </div>
  );
}

export default Tweet;
