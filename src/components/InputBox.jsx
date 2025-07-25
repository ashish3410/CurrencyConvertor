import React, { useState, useId } from 'react'
function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency="USD",
        className = ''
    }
) {
    const inputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    value={amount}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <div className="overflow-clip">
                <select
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    value={selectCurrency}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none overflow-scroll"
                    
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                
                    ))}
                </select>
                </div>
            </div>
        </div>
    )
}

export default InputBox
