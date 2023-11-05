'use client';
import React, {useState} from 'react'
import './style.css'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Buy({closeModal, price, buyPower, shareNumber, setShareNumber}:any) {
    
  const [confirmPage, setConfirmPage] = useState(false)  
  
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
    closeModal(false);
  }
  function handleBack()
  {
    setShareNumber(0);
    setConfirmPage(false);
  }

return (
        <div className='modal'>
          {(!confirmPage) ?
            (
              <>
                <header className='modal_header'>Buy Order</header>
                <form>
                  <label htmlFor='amount' className='modal_label'>Amount: </label>
                  <input type='number' id='amount' name='amount' placeholder='$0' 
                      className='modal_input' min="0" max={buyPower} onChange={e =>setShareNumber(inputCheck(e.target.value)/price)}/>
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
                    className='modal_input' value = {'$'+ (shareNumber * price)}/>
                </form>
                <footer>
                  <button id='confirm_button' type='submit'>Confirm</button>
                </footer>
              </>)
            }
        </div>
      )
            
}

export default Buy