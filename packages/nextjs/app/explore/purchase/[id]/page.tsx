"use client";

import React, { useState } from "react";

import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export default function Purchase({ params }: PageProps) {
  const listing = {
    title: "Sample Service",
    price: "0.05 ETH", // Example price, you might want to convert it to Wei if necessary
    description: "This is a sample service description.",
  };

  const creator = {
    name: "John Doe",
    email: "john.doe@example.com", // Example email for verification
    accountCreationYear: 2023, // Example year of account creation
  };

  const [deliveryInfo, setDeliveryInfo] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [customInstructions, setCustomInstructions] = useState("");
  const id = params?.id as Id;
  const listingID = id;

  const handleInputChange = event => {
    const { name, value } = event.target;
    setDeliveryInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
    if (name === "instructions") setCustomInstructions(value);
  };

  return (
    <div id="main" className="mx-auto lg:mt-8 lg:pt-8 max-w-7xl px-4 sm:px-6 lg:px-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8  mt-24">
        <div className="px-4 sm:px-0">
          <div className="mt-6 border-t border-white/10">
            <dl className="divide-y divide-white/10">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-white">FULL NAME</dt>
                <dd className="mt-1 text-sm text-right leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                  {creator.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-white">TOTAL PRICE</dt>
                <dd className="mt-1 text-sm text-right leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                  {listing.price}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-white">VERIFICATIONS</dt>
                <dd className="mt-1 text-sm text-right leading-6 text-gray-400 sm:col-span-2 sm:mt-0">EMAIL</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-white">CREATED AN ACCOUNT IN</dt>
                <dd className="mt-1 text-sm text-right leading-6 text-gray-400 sm:col-span-2 sm:mt-0">2023</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b border-white/10">
                <dt className="text-sm font-medium leading-6 text-white">ABOUT</dt>
                <dd className="mt-1 text-sm  text-right leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                  {listing.description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="col-span-1">
          <div className="border-2 border-gray-400/20 shadow sm:rounded-lg">
            <div className="px-4 pt-2 sm:p-6">
              <h3 className="text-lg font-semibold leading-6 text-gray-100">DELIVERY INFORMATION</h3>
              <form className="mt-5">
                <div className="w-full mt-3 flex gap-2">
                  <input
                    type="text"
                    name="street"
                    id="street"
                    value={deliveryInfo.street}
                    onChange={handleInputChange}
                    className="text-left border border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                    placeholder="1234 Main St"
                  />
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={deliveryInfo.city}
                    onChange={handleInputChange}
                    className="text-left border border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                    placeholder="Anytown"
                  />
                </div>
                <div className="w-full mt-3 flex gap-2">
                  <input
                    type="text"
                    name="state"
                    value={deliveryInfo.state}
                    onChange={handleInputChange}
                    id="state"
                    className="text-left border border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                    placeholder="State"
                  />
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={deliveryInfo.zip}
                    onChange={handleInputChange}
                    className="text-left border border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                    placeholder="Zip Code"
                  />
                </div>
                <div className="w-full mt-3">
                  <textarea
                    name="instructions"
                    id="instructions"
                    value={customInstructions}
                    onChange={handleInputChange}
                    rows={3}
                    className="text-left border border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                    placeholder="CUSTOM INSTRUCTIONS"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 p-2 lg:mt-0 lg:w-full">
        <div className="rounded-2xl lg:pr-10 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="flex w-full items-center justify-center">
            <div className="h-px flex-1 bg-gray-300 mr-2"></div>
            <div className="flex items-center gap-x-2">
              <button className="inline-flex items-center ring-1 ring-red-300 gap-x-0.5 rounded-md bg-red-800/10 border border-red-900 px-2 py-1 text-xs font-medium text-gray-200 hover:bg-red-700/30 hover:text-white">
                <a href={`/message/`}>BACK TO EXPLORE</a>
              </button>
              <button className="inline-flex items-center ring-1 ring-gray-500 gap-x-0.5 rounded-md bg-gray-800 border border-gray-700 px-2 py-1 text-xs font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
                <a href={`/share/`}>SHARE LISTING</a>
              </button>

              <button className="inline-flex items-center ring-1 ring-gray-500 gap-x-0.5 rounded-md bg-gray-800 border border-gray-700 px-2 py-1 text-xs font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
                <a href={`/purchase/`}>PROCEED TO CHECKOUT</a>
              </button>
            </div>
            <div className="h-px flex-1 bg-gray-300 ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
