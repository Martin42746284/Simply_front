import React, { useState } from "react";
import Profile from "../components/profile";
import Sidebar from "../components/sidebar";

import Navbar from "../components/navbar";

const ProfilePage: React.FC = () => {
 

  return (
     <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="flex-1 overflow-auto bg-gray-900">
                    <Profile />
                </div>
            </div>
        </div>
  );
};

export default ProfilePage;
