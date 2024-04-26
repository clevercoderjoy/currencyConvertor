import PropTypes from "prop-types";
import { useId } from "react";

const InputBox = ({ currencyLabel, amount, onAmountChange, amountReadOnly }) => {
  const amountInputId = useId()
  return (
    <>
      <div className="container flex flex-col mx-2 border-2 border-black my-2 rounded-md">
        <label className="text-left text-xl mx-2 font-bold my-2" htmlFor={amountInputId}>{currencyLabel}</label>
        <input className="mx-2 rounded h-10 font-bold my-2 border-2 border-black w-[95%] p-2" id={amountInputId} placeholder="Amount" type="number" value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} readOnly={amountReadOnly} />
      </div>
    </>
  )
}

InputBox.propTypes = {
  currencyLabel: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func,
  amountReadOnly: PropTypes.bool.isRequired
}

export default InputBox;