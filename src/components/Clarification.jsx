import React, { useState } from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { BiSolidBinoculars } from "react-icons/bi";
import { IoResizeSharp } from "react-icons/io5";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";

export default function Clarification() {
  const [clarificationBtn, setClarificationBtn] = useState(false);
  const [connectBussines, setConnectBusiness] = useState(false);
  const [addRaw, setAddRaw] = useState(false);

  function handleClariPlusBtn() {
    setClarificationBtn(true);
  }
  function handleClariMinusBtn() {
    setClarificationBtn(false);
  }

  function handleBussiness() {
    setConnectBusiness(true);
    if (connectBussines) {
      setConnectBusiness(false);
    }
  }
  function handleAddRaw() {
    setAddRaw(true);
    if (addRaw) {
      setAddRaw(false);
    }
  }

  return (
    <>
        <div className=" flex flex-col">
        <div className=" bg-blue-50   p-6 m-2 w-[90%] rounded-md">
          <p className=" flex items-center gap-2">
            <span>
              <MdSubdirectoryArrowRight />
            </span>
            Need more clarification on the section?
            <span>  {clarificationBtn ? (
            <span className=" items-center" onClick={handleClariMinusBtn}>
              <CiCircleMinus />
            </span>
          ) : (
            <span onClick={handleClariPlusBtn} className=" items-center  ">
              <FaPlusCircle />
            </span>
          )}</span>
          </p>


          {clarificationBtn ? (
            <div className="  bg-white items-center gap-2 w-[70%] rounded-lg m2 py-4 px-4">
              <div
                onClick={handleBussiness}
                className=" flex justify-start gap-2 items-center mx-4 my-2 py-2"
              >
                <span>
                  <BiSolidBinoculars />
                </span>
                <p>How do I connect this to my business context?</p>
                <span className=" ">
                  <IoResizeSharp />
                </span>
              </div>
              {connectBussines ? (
                <div className=" w-3/4 bg-blue-50 m-2 py-2 px-3 rounded-xl space-y-2">
                  <div
                    onClick={handleAddRaw}
                    className=" flex justify-between cursor-pointer "
                  >
                    <h2 className=" text-xs text-stone-400 ">
                      Add raw materials costs as variable costs
                    </h2>{" "}
                    <span>
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className=" text-blue-700 font-semibold">
                    Energy and Utility costs are Lorem ipsum dolor sit amet...
                  </p>
                  {addRaw ? (
                    <div className=" flex gap-2">
                      <button className=" flex items-center gap-2  px-2  py-1 rounded-full bg-blue-600 text-stone-200 text-xs uppercase border-0 ">
                        accept <FaRegArrowAltCircleDown />
                      </button>{" "}
                      <button className=" flex items-center gap-2  px-2 py-1 rounded-full bg-gray-300 text-xs uppercase border-0 ">
                        dismiss
                        <IoMdCloseCircleOutline />
                      </button>{" "}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
          </div>
   
   
         
        </div>
       
    </>
  );
}
