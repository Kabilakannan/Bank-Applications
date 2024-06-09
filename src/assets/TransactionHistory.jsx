import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import { Transactionhistory } from '../Api/ListAccounts';
function TransactionHistory() {

  const[history,setHistory]=useState([]);
  
  useEffect(()=>{
         Transactionhistory().then(response=>setHistory(response.data));
  },[])

  console.log(history);
  return (
    <div style={{backgroundColor:'#F5EFE6',height:'100vh'}}>
    <div className="container ">
        <h1 className="text-center py-5">Transaction Details</h1>
      <table className="table table-striped table-bordered ">
        <thead>
           <tr>
              <th>No</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
              <th>Time</th>
           </tr>
        </thead>
      <tbody>
       {history.map((item)=>(
         <tr key={item.id}>
             <td>{item.id}</td>
             <td>{item.sender}</td>
             <td>{item.receiver}</td>
             <td>{item.amount}</td>
             <td>{item.time}</td>
         </tr>
       ))}
       </tbody> 
     </table>
     </div>
     </div>
  )
}

export default TransactionHistory