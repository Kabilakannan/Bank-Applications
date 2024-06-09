import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListAccount from './ListAccount'
import Header from './assets/Header'
import Footer from './assets/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Transaction from './assets/Transaction'
import DepositPage from './assets/DepositPage'
import Withdraw from './assets/Withdraw'
import TransactionHistory from './assets/TransactionHistory'
import SuccessPage from './assets/SuccessPage'
import Service from './assets/Service'
import Home from './assets/Home'
import About from './assets/About'
import Loan from './assets/Loan'
import Layout from './assets/Layout'
function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes >
         <Route path="/"  element={ <Layout/>}></Route>
         <Route path="/element" element={<ListAccount/>}></Route>
         <Route path="/Transaction/:name/:balance" element={<Transaction/>}></Route>
         <Route path="/deposit/:id" element={<DepositPage/>}> </Route>
         <Route path="/withdraw/:id/:balance" element={<Withdraw/>}></Route>
         <Route path="/TransactionHistory" element={<TransactionHistory/>}></Route>
         <Route path="/success" element={<SuccessPage/>}></Route>
         <Route path="/service" element={<Service/>}></Route>
         <Route path="/Home" element={<Home/>}></Route>
         <Route path="/About" element={<About/>}></Route>
         <Route path="/loan" element={<Loan/>}></Route>
         
       </Routes>
       {/* <Footer style={{position:'absolute',
        bottom:0
       }}/> */}
      </BrowserRouter>
    </div>
     
      
  )
}

export default App
