import React,{useState,useEffect} from 'react'
import { deposit, singleUser } from '../Api/ListAccounts';
import { useParams } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function DepositPage() {
  const [show, setShow] = useState(false);
  const [user,setUser]=useState({});
  const [amount,setAmount]=useState();
  const {id} =useParams();

  useEffect(()=>{
       singleUser(id).then(response=>setUser(response.data))
  },[id])

  const handlechange=(e)=>{
     setAmount(e.target.value);
  }

  // const handleSubmit=()=>{
  //      deposit(user.id,amount)
  // }


  const handleSubmit = async () => {
    setShow(true);
    try {
      await deposit(user.id, amount);
      // Optionally, refresh user data after deposit
      const updatedUser = await singleUser(id);
      // setUser(updatedUser.data);
    } catch (error) {
      console.error('Error making deposit:', error);
    }
    console.log("hwi")
    setAmount(0)
  };

  return (
        <div className="container">
          <br/>
          <br/>
            <h4 className='text-center'>DEPOSIT THE MONEY</h4>
            <table className='table mt-5  table-bordered table-dark'>
               <thead className="thead-dark">
               <tr>
               <th>ID</th>
               <th>AccountHolderName</th>
               <th>Balance</th>
               </tr>
               </thead>
               <tbody>
               <tr className="">
                  <td>{user.id}</td>
                  <td>{user.accountHolderName}</td>
                  <td>{user.balance}</td>
               </tr>
               </tbody>
            </table>
            
            <div className="text-center">
                <input type="text" name="amount" value={amount} onChange={handlechange} className="mt-3 mb-1"></input>
                <br/><br/>
                <button className="bg-success border-0 " onClick={handleSubmit}>Deposit</button>
            </div>

            <ToastContainer className="position-fixed top-0 end-0 p-3 "  bg={'dark'} position="top-end"  style={{ zIndex: 1 }}>
            <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide className="custom-toast">
           <Toast.Header>
             <strong className="me-auto">Amount SuccessFully Deposited</strong>
            <small className="text-muted"></small>
          </Toast.Header>
          {/* <Toast.Body>Deposit</Toast.Body> */}
        </Toast> 
      </ToastContainer>
     </div>
  )
}

export default DepositPage