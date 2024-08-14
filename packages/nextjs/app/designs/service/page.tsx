"use client";

import React, { useState, useEffect } from "react";
import { NATIVE_TOKEN } from "../../../../../configuration/company";
import {
  TOKEN_ID,
  DISPLAYED_CURRENCY_DECIMALS,
  NATIVE_CURRENCY_DECIMALS,
} from "../../../../../configuration/blockchain";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: 1,
    priceConversion: "",
    description: "",
    imageInput: "",
    quantity: "",
    city: "",
    state: "",
    radiusOfWork: "",
    upcharges: [{ upcharge: "", value: "" }],
    cost: "",
    features: [""],
    value: "",
    terms: "",
    promise: "",
    serviceProviderName: "",
    business: "",
  });

  const [nativeCurrencyPrice, setNativeCurrencyPrice] = useState<number | null>(null);
  const [showInUSD, setShowInUSD] = useState(true);

  // Feature change
  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = formData.features.map((item, i) => (i === index ? value : item));
    setFormData({ ...formData, features: updatedFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ""] });
  };

  const deleteFeature = (index: number) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: updatedFeatures });
  };

  // Upcharge change
  const addUpcharge = () => {
    setFormData({ ...formData, upcharges: [...formData.upcharges, { upcharge: "", value: "" }] });
  };

  const deleteUpcharge = (index: number) => {
    const newUpcharges = [...formData.upcharges];
    newUpcharges.splice(index, 1);
    setFormData({ ...formData, upcharges: newUpcharges });
  };

  const updateUpchargeValue = (index: number, value: string, field: "upcharge" | "value") => {
    const updatedValue = field === "value" ? value : value;
    const updatedUpcharges = formData.upcharges.map((item, i) =>
      i === index ? { ...item, [field]: updatedValue } : item,
    );
    setFormData({ ...formData, upcharges: updatedUpcharges });
  };

  // Fetch the price of the native token in USD using CoinGecko API
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${TOKEN_ID}&vs_currencies=usd`);
        const data = await response.json();
        if (data[TOKEN_ID] && data[TOKEN_ID].usd) {
          setNativeCurrencyPrice(data[TOKEN_ID].usd);
        }
      } catch (error) {
        console.error("Error fetching the price from CoinGecko API:", error);
      }
    };

    fetchPrice();
  }, []);

  const toggleCurrency = () => {
    setShowInUSD(!showInUSD);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatPrice = (price: number, decimals: number) => {
    return price.toFixed(decimals);
  };

  const toggleUpchargeCurrency = (index: number) => {
    const newUpcharges = [...formData.upcharges];
    const currentValue = parseFloat(newUpcharges[index].value || "0");

    if (showInUSD && nativeCurrencyPrice) {
      // Convert from USD to native token
      newUpcharges[index].value = (currentValue / nativeCurrencyPrice).toFixed(NATIVE_CURRENCY_DECIMALS);
    } else if (!showInUSD && nativeCurrencyPrice) {
      // Convert from native token to USD
      newUpcharges[index].value = (currentValue * nativeCurrencyPrice).toFixed(2);
    }

    setFormData({ ...formData, upcharges: newUpcharges });
    setShowInUSD(!showInUSD); // Toggle the currency display
  };

  return (
    <div className="px-6 lg:px-8">
      <div className="mt-12">
        <h1 className="text-4xl font-semibold code">CREATE YOUR LISTING</h1>
      </div>
      <div className="flex justify-center">
        <div className="max-w-7xl w-full mt-24">
          <form onSubmit={e => e.preventDefault()} className="grid grid-cols-4 gap-4 gap-y-12">
            {/* Title */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 code">TITLE</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                placeholder="Pressure Washing Services"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 code">TOTAL PRICE</label>
              <div className=" flex items-center">
                <div className="relative w-full">
                  <div
                    className="absolute inset-y-0 left-0 flex items-center hover:cursor-pointer"
                    onClick={toggleCurrency}
                  >
                    <span className="text-gray-200 ml-2 mr-4 text-md font-semibold">
                      {showInUSD ? "USD" : NATIVE_TOKEN}
                    </span>
                  </div>

                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 pr-6 pl-14 text-md leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                    placeholder={
                      showInUSD ? "0" : `${(1 / (nativeCurrencyPrice || 0)).toFixed(DISPLAYED_CURRENCY_DECIMALS)}`
                    }
                    value={formData.price}
                    onChange={handleInputChange}
                  />

                  <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                    <span className="text-gray-600 mr-2">
                      {showInUSD
                        ? `${(parseFloat(formData.price) / (nativeCurrencyPrice || 1)).toFixed(
                            DISPLAYED_CURRENCY_DECIMALS,
                          )} ${NATIVE_TOKEN}`
                        : `$${formatPrice(parseFloat(formData.price) * (nativeCurrencyPrice || 1), 2)}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="col-span-4">
              <label className="block text-sm font-medium text-gray-700 code">DESCRIPTION</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                placeholder="Enter description"
              />
            </div>
            {/* IMAGE INPUT */}
            <div className="flex col-span-4 justify-center items-center w-full mt-8 gap-x-1 relative">
              <div className="w-full border border-transparent border-t-black dark:border-t-white pt-1" />{" "}
              <input
                type="file"
                id="input_img"
                // onChange={fileChange}
                className="px-4 lg:mt-8 lg:mb-8 py-2 border dark:border-white border-black bg-gray-300/10 dark:bg-gray-300/10 dark:text-white w-3/4 hover:ring-2 hover:ring-primary/50 "
              />
              <div className="w-full border border-transparent border-t-black dark:border-t-white pt-1" />
            </div>
            {/* Quantity */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 code">QUANTITY</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                placeholder="Enter quantity"
              />
            </div>
            {/* City */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 code">CITY</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                placeholder="Enter city"
              />
            </div>
            {/* State */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 code">STATE</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                placeholder="Enter state"
              />
            </div>
            {/* Radius of Work */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 code">RADIUS OF WORK</label>
              <input
                type="text"
                name="radiusOfWork"
                value={formData.radiusOfWork}
                onChange={handleInputChange}
                className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                placeholder="Enter radius"
              />
            </div>
            {/* Features */}
            <div className="col-span-4">
              <label htmlFor="features" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                FEATURES
              </label>
              {formData.features.map((feature, index) => (
                <div key={index} className="mt-2 flex items-center">
                  <input
                    type="text"
                    name={`feature${index}`}
                    id={`feature${index}`}
                    autoComplete={`feature${index}`}
                    className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                    placeholder="Feature description"
                    value={feature}
                    onChange={e => handleFeatureChange(index, e.target.value)}
                  />
                  <button
                    type="button"
                    className="ml-2 text-gray-900 dark:text-white dark:hover:text-primary/40"
                    onClick={() => deleteFeature(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button type="button" className="mt-2 text-gray-900 dark:text-white" onClick={addFeature}>
                ADD FEATURE
              </button>
            </div>

            {/* Upcharges */}
            {/* Upcharges */}
            <div className="col-span-4">
              <label htmlFor="upcharges" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                UPCHARGES
              </label>
              {formData.upcharges.map((item, index) => (
                <div key={index} className="grid grid-cols-5 gap-1 mt-2">
                  <div className="col-span-3">
                    <input
                      type="text"
                      name={`upcharge${index}`}
                      id={`upcharge${index}`}
                      className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                      placeholder="Upcharge description"
                      value={item.upcharge}
                      onChange={e => updateUpchargeValue(index, e.target.value, "upcharge")}
                    />
                  </div>
                  <div className="col-span-1 relative">
                    <div
                      className="absolute inset-y-0 left-0 flex items-center cursor-pointer pl-3"
                      onClick={() => toggleUpchargeCurrency(index)}
                    >
                      <span className="text-gray-200 text-md font-semibold">{showInUSD ? "USD" : NATIVE_TOKEN}</span>
                    </div>
                    <input
                      type="number"
                      name={`upchargeValue${index}`}
                      id={`upchargeValue${index}`}
                      className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 pl-16 pr-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                      placeholder={
                        showInUSD
                          ? "25" // Example USD price
                          : `${(25 / (nativeCurrencyPrice || 1)).toFixed(4)}`
                      }
                      value={item.value}
                      onChange={e => updateUpchargeValue(index, e.target.value, "value")}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                      <span className="text-gray-600 mr-2">
                        {showInUSD
                          ? `${(parseFloat(item.value) / (nativeCurrencyPrice || 1)).toFixed(4)} ${NATIVE_TOKEN}`
                          : `$${formatPrice(parseFloat(item.value) * (nativeCurrencyPrice || 1), 2)}`}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <button
                      type="button"
                      className="ml-2 text-gray-900 dark:text-white dark:hover:text-primary/40"
                      onClick={() => deleteUpcharge(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              <button type="button" className="mt-2 text-gray-900 dark:text-white" onClick={addUpcharge}>
                ADD UPCHARGE
              </button>
            </div>

            {/* Terms and Conditions */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 code">TERMS AND CONDITIONS</label>
              <textarea
                name="terms"
                value={formData.terms}
                onChange={handleInputChange}
                className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                placeholder="Enter terms and conditions"
              />
            </div>
            {/* Your Promise Agreement */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 code">YOUR PROMISE AGREEMENT</label>
              <textarea
                name="promise"
                value={formData.promise}
                onChange={handleInputChange}
                className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                placeholder="Enter your promise"
              />
            </div>
            {/* Service Provider Name */}
            <div className="cols-span-2">
              <label className="block text-sm font-medium text-gray-700 code">SERVICE PROVIDER NAME</label>
              <input
                type="text"
                name="serviceProviderName"
                value={formData.serviceProviderName}
                onChange={handleInputChange}
                className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                placeholder="Enter service provider name"
              />
            </div>
            {/* Business (Optional) */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 code">BUSINESS (OPTIONAL)</label>
              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleInputChange}
                className="text-left border-b border-gray-900 dark:border-gray-200/20 w-full bg-gray-500/20 py-2 px-3 text-sm leading-6 text-gray-800 dark:text-gray-300 focus:bg-gray-700/20 focus:border-primary/40 hover:border-primary/60 focus:outline-none"
                placeholder="Enter business name"
              />
            </div>
            {/* Submit Button */}
            <div className="col-span-4">
              <button
                type="submit"
                className="mt-2 w-full bg-primary/50 hover:bg-primary/60 code border-primary/80 border hover:border-primary text-white p-2 rounded-none transition hover:ease-in-out "
              >
                SUBMIT YOUR POST AND GET SOME BUSINESS!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
