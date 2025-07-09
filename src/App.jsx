import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './useCurrencyInfo/useCurrencyInfo.js'
import InputBox from './components/InputBox'
function App() {
  let [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [amount, setAmount] = useState(0)
  const [convertedCurrency, setConvertedCurrency] = useState(0)
  const currencyObj = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyObj)
  const bgImage="https://static.vecteezy.com/system/resources/previews/000/663/037/large_2x/stock-market-trading-graph-vector.jpg"
  const convertCurrency=()=>{
    setConvertedCurrency(amount*currencyObj[to])
  }
  const swap=()=>{
    setTo(from)
    setFrom(to)
    setAmount(convertedCurrency)
    setConvertedCurrency(amount)
  }
  return (

    <>
       <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage:`url(${bgImage})`
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convertCurrency()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                currencyOptions={currencyOptions}
                                onAmountChange={(amount)=>setAmount(amount)}
                                amount={amount}
                                selectCurrency={from}
                                onCurrencyChange={(currency)=>(
                                  setFrom(currency)
                                )}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                currencyOptions={currencyOptions}
                                onCurrencyChange={(currency)=>(
                                  setTo(currency)
                                )}
                                selectCurrency={to}
                                amount={convertedCurrency}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
