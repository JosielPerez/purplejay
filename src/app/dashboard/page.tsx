//@ts-nocheck
"use client";
import Buy from "@/components/buy/Buy";
import StockGraph from "@/components/stockgraph/StockGraph";
import StockList from "@/components/stocklist/StockList";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Sell from "@/components/sell/Sell";
import TimeRange from "@/components/timerange/TimeRange";
import StockStats from "@/components/stockstats/StockStats";
import AddStock from "@/components/addstock/AddStock";

function Dashboard() {
  const API_KEY =  'demo' //'NF6LXRYWSZLD6W5D' //'OTGL48VF2QBKDZSK'
  let stockOptions = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "META", "JPM", "JNJ", "V", "PYPL", "BABA", "BAC", "INTC", "NFLX", "VZ", "CSCO", "XOM", "WMT", "HD", "DIS", "PFE", "CVX", "T", "MRK", "NVDA", "BA", "GS", "ORCL", "CRM", "ADBE", "CMCSA", "KO", "IBM", "UNH", "MCD", "HON", "PEP", "CAT", "TMO", "PM", "VRTX", "MA", "QCOM", "WFC", "AMGN", "ACN", "NKE", "SLB", "GILD", "TXN", "LLY", "MDLZ", "UTX", "ABT", "COST", "HDB", "MDT", "TSM", "DWDP", "AZN", "SAP"]
  let stockSymbols = ["IBM"];
  const [stocks, setStocks] = useState(JSON.parse(localStorage.getItem('watchlist')));
  const [tickerStock, setTickerStock] = useState([]);
  const [newStock,setNewStock] = useState('');
  const [selectedStock,setSelectedStock] = useState<string>('')

  // Buy/Sell  modal hook
  let cash = localStorage.getItem('buyPower')
  if(cash == null) cash = 1000;
  const [buyPower, setBuyPower] = useState(cash);
  const [openBuyModal, setBuyModal] = useState(false);
  const [openSellModal, setSellModal] = useState(false);

  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);

  let current = new Date();
  let cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getDate();
  let endTime = cDate;
  cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    (current.getDate() - 1);
  let startTime = cDate;

  const [timeOption, setTimeOption] = useState([startTime, endTime]);

  const setAndSaveStocks = (newStocks)=>{
    setStocks(newStocks);
    localStorage.setItem('watchlist',JSON.stringify(newStocks))
  }

  useEffect(() => {
    let stockList: any = [];
    // stockSymbols.forEach((symbol) => stockList.push(updateStock(symbol)));
    
    for(let i=0;i<stockSymbols.length;i++)
    {
      stockList.push(updateStock(stockSymbols[i],i))
    }
    
    Promise.all(stockList)
      .then((results: any) => {
        setAndSaveStocks(results)
        setTickerStock(results[0]);
        setSelectedStock(results[0].symbol);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchStock = async (symbol: string) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      );
      const data = await response.json();
      const stockItem = {
        symbol: data["Global Quote"]["01. symbol"],
        open: data["Global Quote"]["02. open"],
        high: data["Global Quote"]["03. high"],
        low: data["Global Quote"]["04. low"],
        price: data["Global Quote"]["05. price"],
        volume: data["Global Quote"]["06. volume"],
        change: data["Global Quote"]["09. change"],
        change_percent: data["Global Quote"]["10. change percent"],
        shares_owned: 0,
      };
      return stockItem;
    } catch (err: any) {
      console.log(err.stack);
    }
  };

  const updateStock = async (symbol: string, index:number) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      );
      const data = await response.json();
      const stockItem = {
        symbol: data["Global Quote"]["01. symbol"],
        open: data["Global Quote"]["02. open"],
        high: data["Global Quote"]["03. high"],
        low: data["Global Quote"]["04. low"],
        price: data["Global Quote"]["05. price"],
        volume: data["Global Quote"]["06. volume"],
        change: data["Global Quote"]["09. change"],
        change_percent: data["Global Quote"]["10. change percent"],
        shares_owned: (stocks[index]).shares_owned ,
      };
      return stockItem;
    } catch (err: any) {
      console.log(err.stack);
    }
  };

  useEffect(() => {
    fetchTickerStock();
  }, [tickerStock]);

  const fetchTickerStock = async () => {
    try {
      const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbols[0]}&interval=5min&outputsize=full&apikey=${API_KEY}`;

      const stockChartXValuesFunction = [];
      const stockChartYValuesFunction = [];

      const response = await fetch(API_Call);

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const data = await response.json();

      for (let key in data["Time Series (5min)"]) {
        stockChartXValuesFunction.push(key);
        stockChartYValuesFunction.push(
          data["Time Series (5min)"][key]["1. open"]
        );
      }

      setStockChartXValues(stockChartXValuesFunction);
      setStockChartYValues(stockChartYValuesFunction);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  function selectTimeOption(option) {
    if (option === "1D") {
      cDate =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        (current.getDate() - 1);
      startTime = cDate;
      setTimeOption([startTime, endTime]);
    } else if (option === "1W") {
      cDate =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        (current.getDate() - 6);
      startTime = cDate;
      setTimeOption(["2023-10-31", endTime]);
    } else if (option === "1M") {
      cDate =
        current.getFullYear() +
        "-" +
        current.getMonth() +
        "-" +
        current.getDate();
      startTime = cDate;
      setTimeOption([startTime, endTime]);
    } else if (option === "3M") {
      cDate =
        current.getFullYear() +
        "-" +
        (current.getMonth() - 2) +
        "-" +
        current.getDate();
      startTime = cDate;
      setTimeOption([startTime, endTime]);
    }
  }

    const addStock = (symbol:string) => {
      const myStock = fetchStock(symbol)
      Promise.resolve(myStock)
      .then((result: StockItem) => {
        setAndSaveStocks([...stocks,result]);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    const handleSubmit = (e:any) =>{
      e.preventDefault();
      if(!newStock)return;
      else if(!stockOptions.includes(newStock))
      {
        setNewStock('Enter valid stock name or ticker')
        setTimeout(function(){
          setNewStock('')
        },1400)
        return;
      }
      // else if((stocks.symbol).includes(newStock))
      // {
      //   setNewStock(newStock + ' is already in your watchlist')
      //   setTimeout(function(){
      //     setNewStock('')
      //   },1400)
      //   return;
      // }
      addStock(newStock);
      setNewStock('')
    }

    function handleSelect(stock:any){
      setSelectedStock(stock.symbol);
      setTickerStock(stock);
    }

  return (
    <>
      <AddStock newStock = {newStock} setNewStock={setNewStock} handleSubmit={handleSubmit}/>
      <StockList stocks={stocks} selectedStock={selectedStock} handleSelect={handleSelect} />
      <StockGraph
        stockChartXValues={stockChartXValues}
        stockChartYValues={stockChartYValues}
        timeOption={timeOption}
        title={tickerStock.symbol}
        price={tickerStock.price}
      />
      <TimeRange selectTimeOption={selectTimeOption} />
      <label className={styles.buy_power}>Buy Power:   ${buyPower}</label>
      <button
        className={styles.stock_buy}
        onClick={() => {
          setBuyModal(true);
        }}
      >
        {" "}
        Buy{" "}
      </button>
      <button
        className={styles.stock_sell}
        onClick={() => {
          setSellModal(true);
        }}
        disabled={!tickerStock.shares_owned}
      >
        Sell
      </button>
      <StockStats stock={tickerStock} />
      {openBuyModal && (
        <Buy
          closeModal={setBuyModal}
          stock={tickerStock}
          buyPower={buyPower}
          setBuyPower={setBuyPower}
        />
      )}
      {openSellModal && (
        <Sell
          closeModal={setSellModal}
          stock={tickerStock}
          buyPower={buyPower}
          setBuyPower={setBuyPower}
        />
      )}
    </>
  );
}

export default Dashboard;
