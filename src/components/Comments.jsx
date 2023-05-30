import React, { useState } from "react";
import TimeAgo from "react-timeago";
import { UserAuth } from "../context/AuthContext";

function Comments(props) {
  const [input, setInput] = useState();
  const { user, profile } = UserAuth();
  let activeUser = profile.filter((e) => e.active);

  const addComment = (e) => {
    e.preventDefault();
    let newComment = {
      createdAt: new Date(),
      comment: input,
      username: user.displayName,
      userImage: user.photoURL,
    };
    activeUser[0].tweets[0].comments.push(newComment);
    props.addComment([newComment, ...props.comments]);

    setInput("");
  };
  return (
    <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll scrollbar-hide border-t border-gray-100 p-5">
      {props.comments.map((comment, id) => (
        <>
          {id === 0 && (
            <div
              key={props.comments.length}
              className={"realtive flex space-x-2"}
            >
              <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" />
              <img
                src={user.photoURL}
                alt=""
                className="mt-2 h-7 w-7 object-cover rounded-full"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold">{user?.displayName}</p>
                  <p className="hidden text-sm text-gray-500 lg:inline">
                    @{user?.displayName?.replace(/\s+/g, "").toLowerCase()}
                  </p>
                </div>
                <p className="flex space-x-24">
                  <input
                    type={"text"}
                    placeholder={"Tweet Your Reply"}
                    className="align-left outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button
                    onClick={addComment}
                    className="text-sm rounded-full w-12 h-7 text-gray bg-gray-400"
                  >
                    Save
                  </button>
                </p>
              </div>
            </div>
          )}
          <div key={id} className={"realtive flex space-x-2"}>
            <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" />
            <img
              src={comment.userImage ? comment.userImage : props.profileImg}
              alt=""
              className="mt-2 h-7 w-7 object-cover rounded-full"
            />
            <div>
              <div className="flex items-center space-x-1">
                <p className="mr-1 font-bold">
                  {comment.username ? comment.username : props.username}
                </p>
                <p className="hidden text-sm text-gray-500 lg:inline">
                  @{props.username?.replace(/\s+/g, "").toLowerCase()}
                </p>
                <TimeAgo
                  className="text-sm text-gray-500"
                  date={comment.createdAt}
                />
              </div>
              <p className="text-left">{comment.comment}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Comments;
