import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)


//create root create its own dom(virtual dom[React tree]) and compares it with main dom(browser) , and replace only those which get updated