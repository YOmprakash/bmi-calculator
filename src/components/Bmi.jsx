import React, { useState, useEffect } from "react";

function BmiCalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(60);

  const incrementHeight = () => {
    setHeight((prev) => prev + 1);
  };
  const decrementHeight = () => {
    setHeight((prev) => prev - 1);
  };

  const decrementWeight = () => {
    setWeight((prev) => prev - 1);
  };
  const incrementWeight = () => {
    setWeight((prev) => prev + 1);
  };

  function getBmi(height, weight) {
    const heightInMeters = height / 100;
    const bmi = weight / heightInMeters ** 2;
    return bmi.toFixed(2);
  }

  useEffect(() => {
    getBmi(height, weight);
  }, [height, weight]);
  return (
    <div className="flex flex-col bg-[#0a0e21] min-h-screen pt-20 pb-[80px] items-center gap-6">
      <h1 className="text-center text-white text-4xl font-medium font-sans md:text-5xl">
        BMI CALCULATOR
      </h1>
      <img
        className="w-[90%] mt-[30px] mb-[40px] md:w[40%] max-w-[700px]"
        src="https://assets.ccbp.in/frontend/hooks/bmi-levels-img.png"
        alt="bmi-cal"
      />
      <div className="flex items-center flex-col bg-[#1d1e33] w-[90%] max-w-[500px] rounded-lg px-8 py-9">
        <div className="flex justify-between ">
          <div className="bg-[#0a0e21] p-9 flex items-center flex-col  rounded-md w-[45%]">
            <p className="text-white text-2xl font-medium">Height</p>
            <p className="text-white text-4xl font-medium pt-3">
              {height} <span className="text-[20px]">cm</span>
            </p>
            <div className="flex px-[20px] my-[20px] gap-4 ">
              <button
                onClick={decrementHeight}
                className="text-center bg-[#1d1e33] text-3xl w-10 h-10 border border-white rounded-full text-white cursor-pointer"
              >
                -
              </button>
              <button
                onClick={incrementHeight}
                className="text-center bg-[#1d1e33] text-3xl  w-10 h-10 border border-white rounded-full text-white cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
          <div className="bg-[#0a0e21] p-9 flex items-center flex-col w-[45%] rounded-md ">
            <p className="text-white text-2xl font-medium">Weight</p>
            <p className="text-white text-4xl font-medium pt-3">
              {weight}
              <span className="text-[20px] pl-2">kgs</span>
            </p>
            <div className="flex px-[20px] my-[20px] gap-4 ">
              <button
                onClick={decrementWeight}
                className="text-center bg-[#1d1e33] text-3xl w-10 h-10 border border-white rounded-full text-white cursor-pointer"
              >
                -
              </button>
              <button
                onClick={incrementWeight}
                className="text-center bg-[#1d1e33] text-3xl  w-10 h-10 border border-white rounded-full text-white cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <p className="text-[#4ade80] font-medium text-4xl mt-5">
          BMI:{" "}
          <span className="text-6xl font-bold ">{getBmi(height, weight)}</span>
        </p>
      </div>
    </div>
  );
}

export default BmiCalculator;
