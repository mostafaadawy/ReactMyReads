import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
//using BrowserRouter to wrap our App to record all history nodes fro routing forword and backword
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))
