//@ts-nocheck
'use client'
import React,{useState} from 'react'
import PortfolioGraph from '@/components/porfoliograph/PortfolioGraph'
import PortfolioTimeRange from '@/components/portfoliotimerange/PortfolioTimeRange';

function Portfolio() {
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let endTime = cDate;
    cDate = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + (current.getDate()-1);
    let startTime = cDate;

    const[timeOption,setTimeOption] = useState([startTime,endTime]) 
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

  return (
    <div>
        <PortfolioGraph timeOption={timeOption}/>
        <PortfolioTimeRange selectTimeOption={selectTimeOption}/>
    </div>
  )
}

export default Portfolio