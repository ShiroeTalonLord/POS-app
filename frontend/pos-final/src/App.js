
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
///// front end resources /////

///accounts
import Homepage from './pages/Homepage';
import Login from './pages/accounts/Login';
import SetUpAccount from './pages/accounts/SetUpAccount';
import AddUser from './pages/accounts/AddUser';
import EditUser from './pages/accounts/EditUser';
import Dashboard from './pages/Dashboard';

///product
import AddProduct from './pages/product/AddProduct'
import EditProduct from './pages/product/EditProduct'
import Inventories from './pages/product/Inventories'

//transaction
import AddTransaction from './pages/transactions/AddTransaction';
import ViewTransaction from './pages/transactions/ViewTransaction';
//props
import Footer from './Design/Footer';
import Header from './Design/Header';
import './App.css'

//prompts
import Error from './prompts/Error';
import Success from './prompts/Success';

function App() {
  return (
    <div className="App">
      <video src="https://vod-progressive.akamaized.net/exp=1641225964~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2842%2F16%2F414210332%2F1781828646.mp4~hmac=482240d59e47562ab2f5675424d61b13979bd906d48d593b943bb2f2a1a1e815/vimeo-prod-skyfire-std-us/01/2842/16/414210332/1781828646.mp4?filename=production+ID%3A4293550.mp4" autoplay="autoplay" loop="loop" muted id="video">
      </video>
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route exact ={true} path="/" element={<Homepage />}/> 
      <Route exact ={true} path="/login" element={<Login />}/>
      <Route exact ={true} path="/set-up-account" element={<SetUpAccount />}/>
      <Route exact ={true} path="/register" element={<AddUser/>}/>
      <Route exact ={true} path="/edit-user" element={<EditUser/>}/>

      <Route exact ={true} path="/add-product" element={<AddProduct/>}/>
      <Route exact ={true} path="/edit-product" element={<EditProduct/>}/>
      <Route exact ={true} path="/inventory" element={<Inventories/>}/>

      <Route exact ={true} path="/add-transaction" element={<AddTransaction/>}/>
      <Route exact ={true} path="/view-transactions" element={<ViewTransaction/>}/>

      <Route exact ={true} path="/success" element={<Success/>}/>
      <Route exact ={true} path="/error" element={<Error/>}/>

      <Route exact ={true} path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <p>sadasdadasd</p>
      <div></div>
      <Footer />
    </div>
  );
}

export default App;
