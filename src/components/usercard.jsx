import React from "react";

const UserCard = () => {
  return (
    <div className="max-w-xs bg-gray-800 text-white rounded-lg shadow-lg p-4">
      <img
        src="https://www.redwolf.in/image/cache/catalog/artwork-Images/mens/marvel-iron-man-suit-blueprint-t-shirt-artwork-500x667.png?m=1687860983"
        alt="User"
        className=" object-cover rounded-full mx-auto h-50  w-50"
      />
      <div className="mt-4 space-y-2">
        <div className="text-lg font-semibold">Name: Tony Stark</div>
        <div className="text-sm text-gray-400">Email: tony@starkindustries.com</div>
        <div className="text-sm text-gray-400">Phone: +123 456 7890</div>
        <div className="text-sm text-gray-400">
          Address: 10880 Malibu Point, California
        </div>
      </div>
    </div>
  );
};

export default UserCard;
