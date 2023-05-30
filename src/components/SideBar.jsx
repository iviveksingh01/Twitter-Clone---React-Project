import React, { useEffect, useState } from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import SideBarRow from "./SideBarRow";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SideBar = () => {
  const navigate = useNavigate();
  const { logOut, user } = UserAuth();

  const handleLogin = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start overflow-hidden">
      <img
        className="m-3 h-10 w-12"
        src="http://3.bp.blogspot.com/-NxouMmz2bOY/T8_ac97cesI/AAAAAAAAGg0/e3vY1_bdnbE/s1600/Twitter+logo+2012.png"
        alt="twitter logo"
      />
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notifications" />
      <SideBarRow Icon={MailIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SideBarRow Icon={CollectionIcon} title="Lists" />
      <button onClick={handleLogin}>
        <SideBarRow Icon={UserIcon} title={"Sign Out"} />
      </button>
      <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
};

export default SideBar;
