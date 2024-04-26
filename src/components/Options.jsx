import { PropTypes } from 'prop-types';

const Options = ({ selectedCurrency, onCurrencyChange, currencyOptions = [] }) => {
  return (
    <>
      <div className="container flex flex-col border-2 border-black rounded-md m-2">
        <label className="text-left text-xl mx-2 font-bold my-2">Currency Type</label>
        <select className="mx-2 rounded h-10 font-bold my-2 border-2 border-black w-[95%] p-2" value={selectedCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
          {
            currencyOptions.map((currency) => (<option key={currency} value={currency}>{currency}</option>))
          }
        </select>
      </div>
    </>
  )
}

Options.propTypes = {
  selectedCurrency: PropTypes.string.isRequired,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Options;