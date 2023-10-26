'use client';
import Buy from '@/components/buy/Buy';
import StockGraph from '@/components/stockgraph/StockGraph';
import StockList from '@/components/stocklist/StockList'
import React, {useEffect, useState} from 'react'
import styles from './styles.module.css'
import Sell from '@/components/sell/Sell';


function Dashboard() {
  const API_KEY = 'NF6LXRYWSZLD6W5D';
  let stockSymbols = ['AAPL','IBM','AMZN']
  const[openBuyModal,setBuyModal] = useState(false)
  const[openSellModal,setSellModal] = useState(true)

  // const[stocks,setStocks] = useState([])

  // useEffect(() => {
  //   const fetchStocks = async (symbol:string) => {
  //     try{
  //       const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);
  //       const stockItem = await response.json();
  //       // console.log(stockItem)
  //       return stockItem

  //       }catch(err:any){
  //         console.log(err.stack)
  //       }
  //     }
  //     let stockList:any = [];
  //     stockSymbols.map(symbol => stockList.push(fetchStocks(symbol)));

  //       Promise.all(stockList).then((results:any) => {
  //         console.log(results)
  //         setStocks(results)
  //       }).catch((err) => {
  //           console.log(err);
  //       });
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
      symbol: "IBM",
      open: "138.1500",
      high:	"139.2700",
      low	: "137.1200",
      price: "137.1600",
      volume:	"4865615",
      latest_trading_day: "2023-10-20",
      previous_close: "138.0100",
      change: "-0.8500",
      change_percent: "-0.6159%",

    },
    {
      symbol:	"AMZN",
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
      <StockGraph/>
      <button 
      className={styles.stock_buy}
      onClick={()=>{
        setBuyModal(true)
      }}> Buy </button>
      <button
      className={styles.stock_sell}
      onClick={()=>{
        setSellModal(true)
      }}
      >
        Sell
      </button>
      {openBuyModal && <Buy closeModal={setBuyModal}/>}
      {openSellModal && <Sell closeModal={setSellModal}/>}
    </>
  )
}

export default Dashboard