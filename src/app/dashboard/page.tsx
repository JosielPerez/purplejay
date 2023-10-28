//@ts-nocheck
'use client';
import Buy from '@/components/buy/Buy';
import StockGraph from '@/components/stockgraph/StockGraph';
import StockList from '@/components/stocklist/StockList'
import React, {useEffect, useState} from 'react'
import styles from './styles.module.css'
import Sell from '@/components/sell/Sell';
import TimeRange from '@/components/timerange/TimeRange';


function Dashboard() {
  const API_KEY = 'NF6LXRYWSZLD6W5D';
  let stockSymbols = ['AAPL','IBM','AMZN']

  const[openBuyModal,setBuyModal] = useState(false)
  const[openSellModal,setSellModal] = useState(false)

  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);

  
  let current = new Date();
  let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
  var endTime = cDate;
  var startTime = '';
  cDate = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + (current.getDate()-1);
  startTime = cDate;

  const[timeOption,setTimeOption] = useState([startTime,endTime])
  
    useEffect(() => {
      fetchStock();
    }, []);

    const fetchStock = async () => {
      try {
        const API_KEY = 'YOUR_API_KEY'; // Replace with your API key
        const StockSymbol = 'AAPL'; // Replace with the desired stock symbol
        const API_Call = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo';
  
        const stockChartXValuesFunction = [];
        const stockChartYValuesFunction = [];
  
        const response = await fetch(API_Call);
  
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
  
        const data = await response.json();
  
        for (let key in data['Time Series (5min)']) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(data['Time Series (5min)'][key]['1. open']);
        }
  
        setStockChartXValues(stockChartXValuesFunction);
        setStockChartYValues(stockChartYValuesFunction);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };
  
 

  function selectTimeOption(option){

    if(option === '1D')
    {
      cDate = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + (current.getDate()-1);
      startTime = cDate;
      setTimeOption([startTime,endTime])
    }
    else if(option === '1W')
    {
      cDate = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + (current.getDate()-7);
      startTime = cDate;
      setTimeOption([startTime,endTime])
    }
    else if(option === '1M')
    {
      cDate = current.getFullYear() + '-' + current.getMonth() + '-' + current.getDate();
      startTime = cDate;
      setTimeOption([startTime,endTime])
    }
    else if(option === '3M')
    {
      cDate = current.getFullYear() + '-' + (current.getMonth()-2) + '-' + current.getDate();
      startTime = cDate
      setTimeOption([startTime,endTime])
    }
  }


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
  console.log(timeOption)

  return (
    <>
      <StockList stocks = {stocks}/>
      <StockGraph stockChartXValues ={stockChartXValues} stockChartYValues ={stockChartYValues}
      timeOption={timeOption}      
      />
      <TimeRange selectTimeOption ={selectTimeOption}/>
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