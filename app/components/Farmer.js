import React from "react";
import LocationPicker from "./LocationPicker";

const Farmer = () => {
  return (
    <div className="flex h-[100vh] flex-col justify-center sm:px-6 lg:px-8 bg-gray-100 py-12">
      {/* <div className="w-2/4 m-auto"><LocationPicker /></div> */}
      <div className="w-full sm:w-[30%] mx-auto rounded bg-white p-10  h-fit ">
        <div className=" flex  justify-between">
          <div>Alex</div>
          <div>454 484 4884</div>
        </div>
        <div className="w-full">
          <div>Address:</div>
          <textarea className="w-full outline-2 outline-blue-500 border-blue-300 border-2" />{" "}
        </div>
        <div>
          <div>Crop Planted:</div>
          <input className="w-full outline-2 outline-blue-500 border-blue-300 border-2" />{" "}
        </div>
        <div>
          <div>Image:</div>
          <img
            className="rounded"
            src="https://images.nationalgeographic.org/image/upload/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg"
          />
        </div>
        <div>
          <div>Message:</div>
          <textarea className="w-full outline-2 outline-blue-500 border-blue-300 border-2" />{" "}
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

export default Farmer;
