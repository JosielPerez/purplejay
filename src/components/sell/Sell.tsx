import React, {useState} from 'react'
import './style.css'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sell({closeModal, stock, buyPower, setBuyPower}:any) {
    
  const [confirmPage, setConfirmPage] = useState(false)
  const [amount,setAmount] = useState<number|null>(0)
  const [shareNumber,setShareNumber] = useState<number|null>();  
  
  
  
  function inputCheck (e:string | number): number {
    if (e != "") {
      if (Number(e) < 0) {
        e = 0;
      }
      if (Number(e) > stock.shares_owned) {
        e = stock.shares_owned;
      }
    }
    return Number(e);
  }
  function handleCancel()
  {
    setShareNumber(null);
    setAmount(0)
    closeModal(false);
  }
  function handleBack()
  {
    if (shareNumber != null)
    {
      setAmount(shareNumber*stock.price)
      setShareNumber(shareNumber);
    }
    setConfirmPage(false);

  }

  function handleShare(e:any)
  {
    e = inputCheck(e)
    setAmount(e*stock.price)
    setShareNumber(e)
  }

  function handleConfirm()
  {
    if(shareNumber != null)
    {
      stock.shares_owned -= shareNumber
    }
    setBuyPower(buyPower+amount)
    setShareNumber(null);
    setAmount(null)
    setConfirmPage(false)
    closeModal(false);
  }

return (
          <div className='modal'>
          {(!confirmPage) ?
            (
              <>
                <header className='modal_header'>Sell Order</header>
                <form>
                  <label htmlFor='shares'className='modal_label'>Shares:</label>
                  <input type='number' id='shares' name='shares' placeholder='0'
                    className='modal_input' value={shareNumber}  min='0' max={stock.shares_owned} onChange={e =>handleShare(e.target.value)}
                  />
                  <label htmlFor='amount' className='modal_label'>Amount: </label>
                  <input type='text' id='amount' name='amount' value={'$'+ amount} placeholder='$0' 
                      className='modal_input' readOnly/>
                </form>
                <footer>
                    <button className='modal_button' id='cancel_button' onClick={()=>{handleCancel()}}>Cancel</button>
                    <button className='modal_button' id='sell_button' onClick={()=>{setConfirmPage(true)}}>Sell</button>
                </footer>
              </>
            )
            :
            (
              <>
              <header className='modal_header'>
                <h4 style={{fontWeight:'normal'}}>Review Sell Order</h4>
                <FontAwesomeIcon id='back_button' icon={faArrowLeft} onClick={()=>{handleBack()}}/>
                </header>
                <form>
                  <label htmlFor='amount'className='modal_label'>Amount:</label>
                  <input type='text' id='amount' name='amount' placeholder='0'
                      className='modal_input' value= {'$'+ amount} readOnly
                  />
                  <label htmlFor='for' className='modal_label'>For: </label>
                  <input type='text' id='for' name='for' 
                    className='modal_input' value = {(shareNumber ? shareNumber.toFixed(2): shareNumber) + ' '+ stock.symbol + " shares"} readOnly/>
                </form>
                <footer>
                  <button id='confirm_button' type='submit' onClick={()=>{handleConfirm()}}>Confirm</button>
                </footer>
              </>)
            }
        </div>
        )

}

export default Sell