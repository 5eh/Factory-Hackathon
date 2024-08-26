import React, { useState, useEffect } from "react";
import { NATIVE_TOKEN } from "../../../configuration/company";
import { DISPLAYED_CURRENCY_DECIMALS, TOKEN_ID } from "../../../configuration/blockchain";

export const StickyPriceConversion = () => {
  const [nativeCurrencyPrice, setNativeCurrencyPrice] = useState(null);
  const [showInUSD, setShowInUSD] = useState(true);

  // Fetch the price of ETH in USD using CoinGecko API
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

  const equivalentEthForOneUSD = nativeCurrencyPrice
    ? (1 / nativeCurrencyPrice).toFixed(DISPLAYED_CURRENCY_DECIMALS)
    : null;

  return (
    <div className="min-h-0 py-5 px-1 mb-10 lg:mb-0 hover:cursor-crosshair">
      <div className="fixed items-center w-fit z-10 p-4 bottom-0 left-0">
        {nativeCurrencyPrice && (
          <div>
            <button
              onClick={toggleCurrency}
              className="min-w-fit flex items-center w-fit gap-3 pl-3 pr-3 rounded-md pt-1 pb-1 bg-primary/20 border border-primary hover:border-primary/80 transition hover:ease-in-out hover:bg-primary/40 hover:text-gray-100 dark:border-primary backdrop-blur-md"
            >
              <span className="text-gray-700 dark:text-gray-300">
                {showInUSD
                  ? `1 ${NATIVE_TOKEN} = ${nativeCurrencyPrice.toFixed(2)} USD`
                  : `1 USD = ${equivalentEthForOneUSD} ${NATIVE_TOKEN}`}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
