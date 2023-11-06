"use client"
import React, {useState} from 'react'
import './style.css'

function PortfolioTimeRange({selectTimeOption}:any) {
  
  const [currentOption,setcurrentOption] = useState<number>(1)

  function handleSelect(timeId:number, timeOption:string){
    setcurrentOption(timeId);
    selectTimeOption(timeOption);
  }

  return (
    <ul className='time_nav'>
        <li  onClick={()=>{handleSelect(1,'1D')}} className={currentOption === 1 ? 'active':''}>1D</li>
        <li  onClick={()=>{handleSelect(2,'1W')}} className={currentOption === 2 ? 'active':''}>1W</li>
        <li  onClick={()=>{handleSelect(3,'1M')}} className={currentOption === 3 ? 'active':''}>1M</li>
        {/* <li  onClick={()=>{selectTimeOption('3M')}}>3M</li> */}
        {/* <li>1Y</li> */}
    </ul>
  )
}

export default PortfolioTimeRange