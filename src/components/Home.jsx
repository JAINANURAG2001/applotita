import React, { useEffect, useState } from "react";
import remainder from "../Data/money.png";
import notes from "../Data/notes.png";
import split from "../Data/split-bills.jpg";
import Timer from "./Timer";

function Home() {
  return (
    <div className="max-w-[1640px] mx-auto ">
      <div>
        <h1 className="text-xl bold bg-blue-500 text-white  text-center ">
          AppLotita -Simplify your Lifestyle{" "}
        </h1>
      </div>
      <Timer />
      <div className="flex justify-center space-x-20 items-center pt-40">
        <div>
          <a href="https://expense-tracker-j452nupfw-divyanshu1810.vercel.app/">
            <img
              className="w-[250px] rounded-xl "
              src={remainder}
              alt="expense"
            />
          </a>
          <span className=" justify-center flex">Expense manager</span>
        </div>

        <div className="">
          <a href="https://yastrebovb.github.io/split-bill/#/">
            <img
              className="w-[250px] rounded-xl"
              src={split}
              alt=" split-bills"
            />
          </a>
          <span className=" justify-center flex">Split-Bills</span>
        </div>

        <div>
          <a href="https://reminder-app-nine.vercel.app/">
            <img
              className="w-[250px] rounded-xl"
              src={notes}
              alt=" remainder-app"
            />
          </a>
          <span className=" justify-center flex">Notes</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
