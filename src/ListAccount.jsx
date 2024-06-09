import React,{useState,useEffect} from 'react'
import { deposit, listAccounts } from './Api/ListAccounts'
import { useNavigate } from 'react-router-dom'

function ListAccount() {
  const[account,setAccounts]=useState([])
  const navigate=useNavigate();
  const handleClick=(name,balance)=>navigate(`/Transaction/${name}/${balance}`);

  const handleDeposit=(id)=>{
       navigate(`/deposit/${id}`);
      //  deposit(e).then(response=>console.log(response.data));
  }

  const handleWithdraw=(id,balance)=>{
    navigate(`/withdraw/${id}/${balance}`);
   //  deposit(e).then(response=>console.log(response.data));
}
  useEffect(()=>{
     listAccounts().then(response=>setAccounts(response.data)).catch(response=>console.error(error))
  }
   )
  return (
 
    <div className="container " >
      <h1 className="text-center my-5 ">Account Details</h1>
      <table className="table table-striped table-bordered">
        <thead>
         <tr>
           <th>ID</th>
           <th>HolderName</th>
           <th>Balance</th>
           <th>Deposit</th>
           <th>Withdraw</th>
           <th>Transact</th>
         </tr>
         </thead>
         <tbody>
           {account.map(data=>(
             <tr key={data.id}>
               <td>{data.id}</td>
               <td>{data.accountHolderName}</td>
               <td>{data.balance}</td>
               <td><button className='bg-secondary text-white border-0 rounded-pill' onClick={()=>handleDeposit(data.id)}>Deposit</button></td>
               <td><button className='bg-danger text-white border-0 rounded-pill' onClick={()=>handleWithdraw(data.id,data.balance)}>WithDraw</button></td>
               <td><button className='bg-success border-0 text-white rounded-pill' onClick={()=>handleClick(data.accountHolderName,data.balance)}>Transaction</button></td>
             </tr>
           ))}
         </tbody>
      </table>
    </div>
  )
}

export default ListAccount