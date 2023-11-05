//@ts-nocheck
'use client';
import Buy from '@/components/buy/Buy';
import StockGraph from '@/components/stockgraph/StockGraph';
import StockList from '@/components/stocklist/StockList'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Sell from '@/components/sell/Sell';
import TimeRange from '@/components/timerange/TimeRange';

function Dashboard() {
  const API_KEY = 'NF6LXRYWSZLD6W5D';
  let stockSymbols = ['IBM']
  const [stocks, setStocks] = useState([])
  const [tickerStock, setTickerStock] = useState([])

  const [openBuyModal, setBuyModal] = useState(false)
  const [openSellModal, setSellModal] = useState(false)

  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);

  // Buy modal hook
  const buyPower = 1000;
  const [shareNumber, setShareNumber] = useState(0);

  // Sell modal hook
  const [dollarAmount, setDollarAmount] = useState(0);

  let current = new Date();
  let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
  let endTime = cDate;
  let startTime = '';
  cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + (current.getDate() - 1);
  startTime = cDate;

  const [timeOption, setTimeOption] = useState([startTime, endTime])

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = async () => {
    try {
      const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbols[0]}&interval=5min&outputsize=full&apikey=demo`;

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

  function selectTimeOption(option) {
    // ... rest of your selectTimeOption function
  }

  useEffect(() => {
    // ... rest of your effect to fetch stocks
  }, [])

  return (
    <>
      <StockList stocks={stocks} />
      <StockGraph stockChartXValues={stockChartXValues} stockChartYValues={stockChartYValues}
                  timeOption={timeOption} title={tickerStock.symbol} price={tickerStock.price} />
      <TimeRange selectTimeOption={selectTimeOption} />
      <button
        className={styles.stock_buy}
        onClick={() => {
          setBuyModal(true)
        }}> Buy </button>
      <button
        className={styles.stock_sell}
        onClick={() => {
          setSellModal(true)
        }}
      >
        Sell
      </button>
      {openBuyModal && <Buy closeModal={setBuyModal} price={tickerStock.price} buyPower={buyPower} shareNumber={shareNumber} setShareNumber={setShareNumber} />}
      {openSellModal && <Sell closeModal={setSellModal} price={tickerStock.price} ownedShare={tickerStock.shares_owned} dollarAmount={dollarAmount} setDollarAmount={setDollarAmount} />}
    </>
  );
}

export default Dashboard;

