import React, { useState } from "react";
import Clarification from "./Clarification";

export default function CostIdentification() {
  const [quesPlusButton, setQuesPlusButton] = useState(false);

  function handleQuesPlusBtn() {
    setQuesPlusButton(true);
  }
  function handleQuesMinusBtn() {
    setQuesPlusButton(false);
  }
  return (
    <>
      <div className="  ">
        <h2 className=" font-bold text-2xl">Cost Identification</h2>
        <p>
          Identify and categorize the various costs influencing margins. Costs
          are usually categorized as variable costs (which increase directly
          with an increase in sales or revenue – for example raw material costs
          for production), semi-variable costs (which increase with sales too,
          but not as linearly. For example – manpower costs for some services
          heavy business) and fixed costs (which are not linked to the volume of
          products/sales/revenue directly. For example – headquarter
          administration costs).
        </p>
        <div className=" border my-3"></div>
        <div className="   ">
          <div className=" flex justify-between">
            {" "}
            <h3 className=" text-stone-400 ">Question 1 out of 3</h3>{" "}
            <span className=" p-2 text-2xl font-bold cursor-pointer">
              {quesPlusButton ? (
                <span onClick={handleQuesMinusBtn}>-</span>
              ) : (
                <span onClick={handleQuesPlusBtn}>+</span>
              )}
            </span>
          </div>
          <p className=" font-semibold text-lg">
            What are the primary components of variable & semi-variable costs
            impacting gross margins?
          </p>
          {quesPlusButton ? <Clarification /> : null}
        </div>
      </div>
    </>
  );
}
