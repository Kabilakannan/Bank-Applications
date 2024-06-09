import axios from 'axios';


const url='http://localhost:8081/api/accounts';

export const Transactionhistory=()=>axios.get(url+"/transactionHistory/all")
export const listAccounts=()=>axios.get(url+"/all");

export const deposit=(id,amount)=>axios.put(url+"/"+id+"/deposit/"+amount);

export const singleUser=(id)=>axios.get(url+"/"+id);


export const withdraw=(id,amount)=>axios.put(url+"/"+id+"/withdraw/"+amount);

export const transaction=(sender,receiver,amount)=>axios.put(url+"/Transaction/"+sender+"/"+receiver+"/"+amount)

export const Createtransaction=(sender,receiver,amount)=>axios.post(url+"/transactionHistory/"+sender+"/"+receiver+"/"+amount)

export const deleteAccount=(id)=>axios.delete(url+"/delete/"+id);

export const createAccount=(holderName,balance)=>axios.post(url+"/createAccount/"+holderName+"/"+balance)





