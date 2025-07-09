import { useState,useEffect } from "react";
const useCurrencyInfo=(currency)=>{
    let [data, setData] =useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/c0008366d02962bff0e9bb57/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>(
            setData(res.conversion_rates)
        ))
    },[currency])
    return data
}
export default useCurrencyInfo