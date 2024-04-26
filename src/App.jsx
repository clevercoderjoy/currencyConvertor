import { useState } from "react";
import InputBox from "./components/InputBox";
import Options from "./components/Options";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromValue, setFromValue] = useState("usd");
  const [toValue, setToValue] = useState("inr");

  const currencyInfo = useCurrencyInfo(fromValue);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromValue(toValue);
    setToValue(fromValue);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toValue]);
  }
  return (
    <>
      <h1 className="text-center font-bold text-4xl">Currency Convertor</h1>
      <div className="container my-10 border-2 border-black h-full mx-auto rounded-md">
        <div className="fromContainer flex justify-between align-center">
          <InputBox currencyLabel="From" amount={amount} onAmountChange={(amount) => setAmount(amount)} amountReadOnly={false} />
          <Options currencyOptions={options} onCurrencyChange={(currency) => setFromValue(currency)} selectedCurrency={fromValue} />
        </div>
        <button className="font-bold text-lg block mx-auto border-2 border-black px-2 py-1 rounded hover:bg-black hover:text-white cursor-pointer" onClick={swap}>SWAP</button>
        <div className="fromContainer flex justify-between">
          <InputBox currencyLabel="To" amount={convertedAmount} onAmountChange={(amount) => setAmount(amount)} amountReadOnly={true} />
          <Options currencyOptions={options} onCurrencyChange={(currency) => setToValue(currency)} selectedCurrency={toValue} />
        </div>
        <button className="font-bold text-lg block mx-auto border-2 border-black px-2 py-1 rounded hover:bg-black hover:text-white cursor-pointer mb-2" onClick={() => convert()}>Convert {fromValue} to {toValue}</button>
      </div>
    </>
  )
}

export default App
