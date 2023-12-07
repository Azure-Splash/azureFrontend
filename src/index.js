import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")

// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("")

// app.listen(3000, ()=>{
//   console.log("server is up and running")
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
