import React,{useEffect} from 'react'
import axios from 'axios'
// import {withStyles} from '@material-ui/core/styles';

function Loan() {

 useEffect(()=>{
  axios.get("https://www.goldapi.io/api/XAU/INR/20240606").then(response=>console.log(response))
 },[])
 
  return (
      <div>
         <div>
             {/* <Typography gutterBottom>Loan Amount</Typography> */}
         </div>
      </div>
  )
}

export default Loan