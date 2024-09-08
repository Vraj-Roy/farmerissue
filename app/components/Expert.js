import React from "react";
import LocationPicker from "./LocationPicker";

const Expert = () => {
  return (
    <div className="flex h-[100vh] flex-col justify-center sm:px-6 lg:px-8 bg-gray-100 py-12">
      {/* <div className="w-2/4 m-auto"><LocationPicker /></div> */}
      <div className="w-full sm:w-[30%] mx-auto rounded bg-white p-10  h-fit ">
        <div>
          <div className="font-bold">Message:</div>
          <div className="w-full text-justify   text-sm py-1">
            Hello Im facing a new dieses here in my crops which I cannot
            identify. can you help?{" "}
          </div>
        </div>
        <div className="w-full">
          <div className="font-bold">Address:</div>
          <div className="w-full text-justify   text-sm py-1">
            Mr John Smith, 132, My Street, Kingston, New York 12401
          </div>
        </div>
        <div>
          <div className="font-bold">Crop Planted:</div>
          <div className="  text-sm py-1">Wheat</div>
        </div>
        <div>
          <div className="font-bold">Picture:</div>
          <img
            className="rounded py-1"
            src="https://images.nationalgeographic.org/image/upload/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg"
          />
        </div>
        <div>
          <div className="font-bold">Reply:</div>
          <textarea className="w-full outline-2 outline-blue-500 border-blue-300 border-2   text-sm py-1" />{" "}
        </div>
        <div className="w-full">
          <button className="bg-blue-600 hover:bg-blue-700 p-2 text-white rounded w-full">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expert;
