"use client";
import { useState } from "react";

export default function Order() {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue
      .replace(/\s/g, "") // remove existing spaces
      .match(/.{1,4}/g) // split into groups of 4 characters
      .join(" "); // join groups with a space

    const numNonSpaceChars = formattedValue.replace(/\s/g, "").length;
    if (numNonSpaceChars <= 16) {
      setValue(formattedValue);
    }
  };
  return (
    <div className="relative z-10 bottom-[70px] flex  p-4 px-[5%] gap-x-8 w-full">
      <div className="flex flex-col col-span-2 h-full gap-y-8 bg-transparent w-full">
        <div className="flex space-x-4 text-white">
          <h1 className="text-4xl font-extrabold">YOUR ORDER</h1>
          <span className=" flex-grow border-dotted border-b-2 border-white mb-4"></span>
        </div>
        <div className="border border-black px-[5%] py-8 space-y-16 h-full">
          <div className="border-b  border-gray-400 pb-8">
            <h3 className="text-2xl">1. Summary</h3>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full gap-y-2 sm:gap-y-4">
            <div className="flex flex-col sm:flex-row gap-x-4 w-full sm:w-[170px] ">
              <img src="./image1.png" alt="" width="" />
              <div className="flex flex-col sm:justify-center space-y-2 sm:space-y-4">
                <p className="text-xl font-bold">Voyager 1</p>
                <p>Quantity 1</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg">$ 49.99 USD</p>
            </div>
          </div>
        </div>
        <div className="border border-black px-[5%] space-y-16 h-full">
          <div className="border-b border-gray-400 py-8 flex justify-between">
            <h3 className="text-2xl">2. Shipping</h3>
            <p>* Required</p>
          </div>
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col px-4 space-y-2 pb-4 w-full">
              <p className="text-lg ">EMAIL *</p>
              <input
                className=" bg-gray-200 px-4 py-[10px] w-full"
                type="text"
              />
            </div>
            <div className="flex flex-col px-4 space-y-2 w-full">
              <p className="text-lg ">FULL NAME *</p>
              <input
                className=" bg-gray-200 px-4 py-[10px] w-full"
                type="text"
              />
            </div>
            <div className="flex flex-col px-4 space-y-2 w-full">
              <p className="text-lg ">STREET ADRESS *</p>
              <div className="space-y-4">
                <input
                  className=" bg-gray-200 px-4 py-[10px] w-full"
                  type="text"
                />
                <input
                  className=" bg-gray-200 px-4 py-[10px] w-full"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row ">
              <div className="flex flex-col px-4 space-y-2 w-full">
                <p className="text-lg ">CITY *</p>
                <input
                  className=" bg-gray-200 px-4 py-[10px] w-full"
                  type="text"
                />
              </div>
              <div className="flex flex-col px-4 space-y-2 w-full">
                <p className="text-lg ">STATE/PROVINCE *</p>
                <input
                  className=" bg-gray-200 px-4 py-[10px] w-full"
                  type="text"
                />
              </div>
              <div className="flex flex-col px-4 space-y-2 w-full">
                <p className="text-lg ">ZIP/POSTAL CODE *</p>
                <input
                  className=" bg-gray-200 px-4 py-[10px] w-full"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col px-4 space-y-2 w-full">
              <p className="text-lg ">COUNTRY *</p>
              <input
                className=" bg-gray-200 px-4 py-[10px] w-full"
                type="text"
                placeholder="United States"
              />
            </div>
          </form>
          <div className="w-full px-4">
            <p className="text-lg ">
              No shipping methods are avialable for the adress given.
            </p>
          </div>
        </div>
        <div className="border border-black px-[5%] py-8 space-y-16 h-full">
          <div className="border-b border-gray-400  flex justify-between">
            <h3 className="text-2xl">3. Payment</h3>
            <p>* Required</p>
          </div>
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col px-4 space-y-2 w-full">
              <p className="text-lg ">CARD NUMBER *</p>
              <input
                className=" bg-gray-200 px-4 py-[10px] w-full"
                type="text"
                value={value}
                maxLength={19}
                onChange={handleChange}
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col px-4 space-y-2 w-full">
                <p className="text-lg ">EXPIRATION DATE *</p>
                <input
                  className=" bg-gray-200 px-4 py-[10px] w-full"
                  type="year month"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex flex-col px-4 space-y-2 w-full">
                <p className="text-lg ">SECURITY CODE *</p>
                <input
                  className=" bg-gray-200 px-4 py-[10px] w-full"
                  type="text"
                  placeholder="CVC"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <p className=" ">Billing adress sava as shipping.</p>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex flex-col w-[370px] space-y-4 shrink-0">
        <div className="flex flex-col col-span-1 justify-center border border-black  py-4  bg-white">
          <h2 className="text-xl font-medium border-b border-gray-300 px-4  py-4 flex align-middle">
            Order Summary
          </h2>
          <div className="border-b border-gray-300 px-4 py-4 space-y-2">
            <p className="text-lg font-medium">Posters</p>
            <div className="flex justify-between">
              <p className="text-gray-400">Voyager 1</p>
              <p>x1</p>
            </div>
          </div>
          <div className="border-b border-gray-300 px-4 py-4">
            <div className="flex justify-between border-b border-gray-300 py-4 ">
              <p className="text-gray-400">Posters</p>
              <p>$ 49.99 USD</p>
            </div>
            <div className="flex justify-between py-4">
              <p className="text-lg font-medium">Total</p>
              <p className="text-xl font-bold">$ 49.99 USD</p>
            </div>
          </div>
          <div className="px-4 py-4 space-y-2">
            <p className="text-lg font-medium">Discount Code</p>
            <div className="grid grid-cols-3 gap-x-2">
              <input className="col-span-2 bg-gray-200 px-4 " type="text" />
              <button className="col-span-1 border border-black py-4 px-8 ">
                Apply
              </button>
            </div>
          </div>
        </div>
        <button className="bg-black text-white w-full py-4 font-semibold">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
