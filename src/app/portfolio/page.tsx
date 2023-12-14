//@ts-nocheck
'use client'
import React,{useState, useEffect} from 'react'
import PortfolioGraph from '@/components/porfoliograph/PortfolioGraph'
import PortfolioTimeRange from '@/components/portfoliotimerange/PortfolioTimeRange';
import TransactionList from '@/components/transactionlist/TransactionList';
import styles from "./styles.module.css";
import PieChart from '@/components/piechart/PieChart';

function Portfolio() {
  let current = new Date();
  let cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getDate() + 
    " " +
    current.getHours() +
    ":" + current.getMinutes() + ":" + current.getSeconds()

  let endTime = cDate;
  cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    (current.getDate() - 1) +
    " " +
    current.getHours() +
    ":" + current.getMinutes()

  let startTime = cDate;

    const[timeOption,setTimeOption] = useState([startTime,endTime]);
    const[transactions,setTransactions]= useState(JSON.parse(localStorage.getItem('transactions')));

    let cash = localStorage.getItem('buyPower')
    if(cash == null) cash = 1000;
    const buyPower = cash

  function  calculateAllTimeReturn(elements) {
      let totalValue = 0;

      for (const element of elements) {
          if (element.type === 'Buy') {
              totalValue -= element.amount;
          } else if (element.type === 'Sell') {
              totalValue += element.amount;
          }
      }

      return totalValue;
  }
    
    let returns = 0 
    if(transactions != undefined)
    {
      returns = calculateAllTimeReturn(transactions)
    }

    const [allTimeReturn, setAllTimeReturn] = useState(returns)
    const API_KEY =  'WWN8JLPOQGO3WWTR'
    const balances:any = JSON.parse(localStorage.getItem('balances'))
    const [stockChartXValues, setStockChartXValues] = useState(balances.map(tuple => tuple[0]));
    const [stockChartYValues, setStockChartYValues] = useState(balances.map(tuple => tuple[1]));
    const [currentBalance,setCurrentBalance] = useState(balances[balances.length-1][1])
    const [pieChartData, setPieChartData] = useState([])

    const stocks = JSON.parse(localStorage.getItem('watchlist'));
    

    let stockSymbols = [];
    if (stocks[0] != null)
    {
      for (const element of stocks) {
        stockSymbols.push(element.symbol);
      }
    
    }
    
    function selectTimeOption(option){

        if(option === '1D')
        {
          cDate = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + (current.getDate()-1);
          startTime = cDate;
          setTimeOption([startTime,endTime])
        }
        else if(option === '1W')
        {
          cDate = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + (current.getDate()-6);
          startTime = cDate;
          setTimeOption(['2023-10-31',endTime])
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


      const updateStock = async (symbol: string, index:number) => {
        try {
          const response = await fetch(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
          );
          const data = await response.json();
          const stockBalance = Number(data["Global Quote"]["05. price"]) * Number((stocks[index]).shares_owned)
          return stockBalance;
        } catch (err: any) {
          console.log(err.stack);
        }
      };

      const fetchStockBalances = async ()=>{
        let newBalances = balances
        if (stocks!= null)
        {
          let stockListValues = [Number(buyPower)]
        // stockSymbols.forEach((symbol) => stockList.push(updateStock(symbol)));
        
        for(let i=0;i<stockSymbols.length;i++)
        {
          stockListValues.push(updateStock(stockSymbols[i],i))
        }
        
        Promise.all(stockListValues)
          .then((result: any) => {
            let totalStockValue = 0
            let newPieChartData = [["Stock","Value"],["Buy Power",Number(buyPower)]]
            for(const element of result)
            {
              totalStockValue += Number(element)
            }
            for(let i=0;i < stockSymbols.length; i++)
            {
              newPieChartData[i+2] = [stockSymbols[i],Number(result[i+1])]
            }

            setPieChartData(newPieChartData)
            setStockChartXValues([...stockChartXValues,cDate])
            setStockChartYValues([...stockChartYValues,totalStockValue])
            setCurrentBalance(totalStockValue)
  
            newBalances.push([cDate,totalStockValue])
            localStorage.setItem('balances',JSON.stringify(newBalances))

          })
          .catch((err) => {
            console.log(err);
          });
        }
      }

      useEffect(() => {
        fetchStockBalances();
      }, []);
    

  return (
    <div>
        <PortfolioGraph 
        timeOption={timeOption} 
        stockChartXValues={stockChartXValues ? stockChartXValues : 0}
        stockChartYValues={stockChartYValues ? stockChartYValues : 0}
        title = {currentBalance}
        />
        <PortfolioTimeRange selectTimeOption={selectTimeOption}/>
        <label className={styles.all_time_return}>
          All Time Return:   
          <span style={{color:(allTimeReturn > 0 ? 'green':'red') }}> ${(Math.abs(allTimeReturn)).toFixed(2)}</span>
        </label>
        <TransactionList transactions = {transactions}/>
        <PieChart pieChartData = {pieChartData}/>
    </div>
  )
}

export default Portfolio