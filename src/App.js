import { useState } from "react"
import "./styles.css"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"
import { Route, Routes, Link } from "react-router-dom"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
           <li><Link to='/'>Dashboard</Link></li>
            
              <Routes>
                <Route path="/" element={<Dashboard hiredPeople={hiredPeople}/>} />
                <Route path='/person/:id' element={<PersonProfile/>} /> 
              </Routes>
                          
          </ul>
        </nav>
      </header>
    </>
  )
}
