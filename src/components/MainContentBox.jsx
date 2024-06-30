import React, { useState } from "react";
import CostIdentification from "./CostIdentification";
import { FaAngleRight } from "react-icons/fa";
import { IoChevronUpCircleOutline } from "react-icons/io5";

export default function MainContentBox() {
  const [getStart, setGetStart] = useState(false);
  function handleGetStart() {
    setGetStart(true);
  }
  function handleUpIcon() {
    setGetStart(false);
  }

  return (
    <>
      <div className=" w-[70%] bg-white border-0  p-4 mx-auto my-16 relative rounded-xl ">
        <div className=" flex justify-between py-4 ">
          {getStart ? <span>step 1</span> : <div>step 1/3</div>}
          {getStart ? null :<div>4 Prompts | 5 mins</div>}
        </div>
        <div className=" flex justify-between items-center ">
          <div className=" ">
            {" "}
            {getStart ? (
              <CostIdentification />
            ) : (
              <div>
                {" "}
                <h2 className=" text-3xl font-bold"> Cost Identification</h2>
                <p>
                  Identify and categorize the various costs influencing margins.
                </p>
              </div>
            )}
          </div>
          
            {getStart ? (
              <button className=" absolute top-5 right-4 text-3xl  " onClick={handleUpIcon}>
                <IoChevronUpCircleOutline />
              </button>
            ) : (
              <sapn
              className = " flex gap-2 items-center capitalize text-lg font-semibold  bg-stone-100 text-blue-800 px-3  py-5 rounded-lg" 
              onClick={handleGetStart}>getStart <FaAngleRight /></sapn>
            )}
          
        </div>
      </div>
    </>
  );
}
