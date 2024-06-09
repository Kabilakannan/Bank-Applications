import React,{useState,useEffect}from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import { Createtransaction, listAccounts, transaction } from '../Api/ListAccounts';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


function Transaction() {
  const[details,setDetails]=useState({
    sender:'',
    receiver:' ',
    amount:0,
    date:' '
  })
  // const user=["Madan","Akash","Suresh","Deepak","Vignesh","Gokul","Ramesh","Tharun","Kabil","Lokesh"];
 const {name,balance} =useParams();
 const[amount,setAmount]=useState(0);
 const[sender,setSender]=useState(name);
 const [show, setShow] = useState(false);
 const[user,setUser]=useState([])
 const[selectedUser,setUserSelected]=useState('');
const navigate=useNavigate();

//  const[history,sethistory]=useState({});
 const now = new Date();
//  const formattedTime = now.toLocaleTimeString();

 const handleChange=(e)=>{
         setUserSelected(e.target.value)
 }

 useEffect(()=>{
   listAccounts().then(response=>{setUser(response.data)
    if(response.data.length>0)
           setUserSelected(response.data[0].accountHolderName);
    });
  return ()=>{
  }
 },[]);



const handleSubmit= async (e)=>{
  e.preventDefault();
  const numericBalance = parseInt(balance);
  const numericAmount = parseInt(amount);
  if(name!=selectedUser && amount>0  && numericBalance>=numericAmount) {
    var capname=name.charAt(0).toUpperCase()+name.slice(1);
  try{
      await transaction(name,selectedUser,amount)
      await Createtransaction(capname,selectedUser,amount).then(response=>console.log(response.data))
  }
  catch(error){
     console.log("Error :"+ error)
  }
       alert('Sure Want to Make Transaction')
       navigate('/success')
  }

   if(numericBalance<numericAmount){ 
       setShow(true);
   }
   else{
     setShow(false);
   }
   console.log(name,selectedUser);
   
 }

 

  return (
      <div className="container  col-md-6 ">
        <h1 className="text-center my-5 ">Transaction</h1>
        {/* <form className="d-flex  flex-column gap-3 mt-5" onSubmit={handleSubmit}> */}
        <form className="d-grid gap-3 mt-5" onSubmit={handleSubmit}>
         <label>Sender:</label>
         <input type="text" name='sender' value={name} onChange={(e)=>setSender(e.target.value)}></input>
         <label>Receiver</label>
         {/* <select value={selectedUser} onChange={handleChange}>
          {user.map((name,index)=>(
            <option key={index} value={name}>{name}</option>
          ))}
         </select> */}

        <select value={selectedUser} onChange={handleChange}>
          {user.map((item)=>(
            <option key={item.id} value={item.accountHolderName}>{item.accountHolderName}</option>
          ))}
         </select>    

         <label>Amount:</label>
         <input type="number" onChange={(e)=>setAmount(e.target.value)}></input>

         <button type="submit" className='my-3' style={{ width: '200px', margin: '0 auto' }}>Transfer Amount</button>
         </form>
        
         <ToastContainer className="position-fixed top-0 end-0 p-3 "  bg={'dark'} position="top-end"  style={{ zIndex: 1 }}>
            <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide className="custom-toast">
           <Toast.Header>
             <strong className="me-auto">InSufficient Amount</strong>
            <small className="text-muted"></small>
          </Toast.Header>
          {/* <Toast.Body>Deposit</Toast.Body> */}
        </Toast> 
      </ToastContainer>
      </div>
  )
}

export default Transaction