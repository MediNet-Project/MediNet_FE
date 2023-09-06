import React from "react";
import SuggestFollowing from "./SuggestFollowing";

const RightContent = () => {
  return (
    <div className="bg-white rounded-lg border-2 border-red-500 w-auto h-auto shadow-md shadow-gray-400">
      <h2 className="text-center py-5 font-bold text-md">
        People you may know
      </h2>
      <div className="px-5">
        <SuggestFollowing />
        <SuggestFollowing />
        <SuggestFollowing />
        <SuggestFollowing />
        <SuggestFollowing />
      </div>
    </div>
  );
};

export default RightContent;
