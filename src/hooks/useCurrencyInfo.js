import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [currencyData, setCurrencyData] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to get currency data");
        }
        const res = await response.json();
        setCurrencyData(res[currency]);
      } catch (e) {
        throw new Error("Error: " + e);
      }
    };
    getData();
  }, [currency]);
  return currencyData;
};

export default useCurrencyInfo;
