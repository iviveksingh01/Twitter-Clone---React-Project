import React from "react";
import { AuthContextProvider } from "../context/AuthContext";
import SideBar from "./SideBar";
import Protected from "./Protected";
import Feed from "./Feed";
import Widgets from "./Widgets";

function Outlets() {
  return (
    <div className="App lg:max-w-7xl mx-auto max-h-screen overflow-hidden">
      <AuthContextProvider>
        <main className="grid grid-cols-9">
          <SideBar />
          {/* <Protected> */}
            <Feed />
            <Widgets />
          {/* </Protected> */}
        </main>
      </AuthContextProvider>
    </div>
  );
}

export default Outlets;
