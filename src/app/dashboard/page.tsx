'use client';
// import StockGraph from '@/components/stockgraph/StockGraph'
import StockList from '@/components/stocklist/StockList'
import React, {useEffect, useState} from 'react'


function Dashboard() {
  const API_KEY = 'NF6LXRYWSZLD6W5D';
  let StockSymbols = ['AAPL','IBM','FB']
  const API_URL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${StockSymbols[0]}&apikey=${API_KEY}`
  // const[stocks,setStocks] = useState([])

  // useEffect(() => {
  //   const fetchStocks = async () => {
  //     try{
  //       const response = await fetch(API_URL);
  //       const stocklist = await response.json();
  //       console.log(stocklist)
  //       setStocks(stocklist)
  //       }catch(err:any){
  //         console.log(err.stack)
  //       }
  //     }
  //     (async () => await fetchStocks())();
  //   }, [])


  const stocks = [
    {
      symbol:	"AAPL",
      open:	401.2,
      high: 445.2,
      low:   423,
      price: 444,
      volume:	10000000,
      change:	44,
      change_percent:	"5%"
    },
    {
      symbol:	"IBM",
      open:	201.2,
      high: 280.2,
      low:   223,
      price: 254.1,
      volume:	10000000,
      change:	34,
      change_percent:	"10%"

    },
    {
      symbol:	"FB",
      open:	135.2,
      high: 145.2,
      low:   123,
      price: 123,
      volume:	10000000,
      change:	-17,
      change_percent:	"-8%"

    }
  ]
  
  return (
    <>
    <StockList stocks = {stocks}/>
    {/* <StockGraph/> */}
    </>
  )
}

export default Dashboard