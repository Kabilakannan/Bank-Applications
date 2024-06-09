import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function SuccessPage() {
  return (
      <div className='success'>
          <div className='d-flex flex-column align-items-center justify-content-center gap-5' style={{ height: '100vh' }}>
           
            <FontAwesomeIcon icon={ faCheckCircle } style={{color: 'green',fontSize: '60px' }} className='text-center'/>
            <h1>Transaction Successfull</h1>
          
          </div>
      </div>
  )
}

export default SuccessPage