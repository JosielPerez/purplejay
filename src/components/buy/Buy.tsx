//@ts-nocheck
'use client';
import React, {useState} from 'react'
import './style.css'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Buy({closeModal, stock, buyPower, setBuyPower}:any) {
    
  const [confirmPage, setConfirmPage] = useState(false);
  const [amount,setAmount] = useState<number | null>();
  const [shareNumber,setShareNumber] = useState(0);  
  let transactions:any = JSON.parse(localStorage.getItem('transactions'))
  if (transactions == null) transactions = []
  let watchlist:any = JSON.parse(localStorage.getItem('watchlist'))

  function updateSharesOwned( list:any, newSharesOwned:number)
  {
    for(let i =0; i< list.length;i++)
    {
      if ( list[i].symbol == stock.symbol) 
        list[i].shares_owned = newSharesOwned
    }
  }
  
  function inputCheck (e:string | number): number {
        if (e != "") {
          if (Number(e) < 0) {
            e = 0;
          }
          if (Number(e) > buyPower) {
            e = buyPower;
          }
        }
        return Number(e);
    }
  function handleCancel()
  {
    setShareNumber(0);
    setAmount(null)
    closeModal(false);
  }
  function handleBack()
  {
    if (amount != null)
    {
      setShareNumber(amount/stock.price);
      setAmount(amount)
    }
    setConfirmPage(false);
  }

  function handleAmount(e:any)
  {
    e = inputCheck(e)
    setShareNumber(e/stock.price)
    setAmount(e)
  }
  
  const setAndSaveTransactions = (transactions:any, buyPower:any, watchlist:any, newSharesOwned:any)=>{
    localStorage.setItem('transactions',JSON.stringify(transactions))
    updateSharesOwned(watchlist,newSharesOwned)
    localStorage.setItem('watchlist',JSON.stringify(watchlist))
    localStorage.setItem('buyPower',buyPower)
  }

  function handleConfirm()
  {
    stock.shares_owned += shareNumber
    if(amount != null)
    {
      let current = new Date();
      let cDate = current.getHours() + ":" + current.getMinutes() + " " +
                  current.getDate() + "/" + (current.getMonth() + 1) + "/" + current.getFullYear();
            
      let newTransaction = {
        symbol: stock.symbol,
        type: 'Buy',
        shares: shareNumber,
        price: Number(stock.price),
        amount: amount,
        total_shares: Number(stock.shares_owned),
        buy_power: Number(buyPower)-amount,
        time: cDate
      }
      setBuyPower(buyPower-amount)

      // ==========================
      // MODIFIED few lines below by REI:
      const achievement1 = localStorage["achievement1"];
      if(achievement1 != "true") {
        localStorage.setItem("achievement1","true");
      }
      // MODIFY END.
      // ===========================

      transactions.push(newTransaction)
      setAndSaveTransactions(transactions,(buyPower-amount),watchlist,(stock.shares_owned));

    }
    setShareNumber(0);
    setAmount(null)
    setConfirmPage(false)
    closeModal(false);
  }
return (
        <div className='modal'>
          {(!confirmPage) ?
            (
              <>
                <header className='modal_header'>Buy Order</header>
                <form>
                  <label htmlFor='amount' className='modal_label'>Amount: </label>
                  <input type='number' id='amount' name='amount' value={amount} placeholder='$0' 
                      className='modal_input' min='0' max={buyPower} onChange={e =>handleAmount(e.target.value)}/>
                  <label htmlFor='shares'className='modal_label'>Shares:</label>
                  <input type='number' id='shares' name='shares' placeholder='0'
                      className='modal_input' value={shareNumber} readOnly
                  />
                </form>
                <footer>
                    <button className='modal_button' id='cancel_button' onClick={()=>{handleCancel()}}>Cancel</button>
                    <button className='modal_button' id='buy_button' onClick={()=>{setConfirmPage(true)}}>Buy</button>
                </footer>
              </>)
            :
            (
              <>
              <header className='modal_header'>
                <h4 style={{fontWeight:'normal'}}>Review Buy Order</h4>
                <FontAwesomeIcon id='back_button' icon={faArrowLeft} onClick={()=>{handleBack()}}/>
                </header>
                <form>
                  <label htmlFor='shares'className='modal_label'>Shares:</label>
                  <input type='number' id='shares' name='shares' placeholder='0'
                      className='modal_input' value={shareNumber} readOnly
                  />
                  <label htmlFor='at' className='modal_label'>At: </label>
                  <input type='text' id='at' name='at' 
                    className='modal_input' value = {'$'+ (amount)} readOnly/>
                </form>
                <footer>
                  <button id='confirm_button' type='submit' onClick={()=>{handleConfirm()}}>Confirm</button>
                </footer>
              </>)
            }
        </div>
      )
            
}

export default Buy