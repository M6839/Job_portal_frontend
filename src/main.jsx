import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import JobContext from './context/JobContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobContext>
    <App />
    </JobContext>
  </React.StrictMode>
)
