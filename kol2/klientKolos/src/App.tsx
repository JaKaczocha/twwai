import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,BrowserRouter as Router, Link ,Route} from 'react-router-dom'
import Charts from './components/charts'
function App() {
  

  return (
    <>
      <Router>
         <nav style={{margin: 10}}>
            
            <Link to="/api/charts" style={{padding: 5}}>
              Charts
            </Link>
         </nav>
         <Routes>
            
            <Route path="api/charts" element={<Charts></Charts>}/>
            
         </Routes>
       </Router>
    </>
  )
}

export default App
