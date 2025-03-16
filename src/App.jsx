import { useState } from 'react'
import './App.css'
import ACDBResidential from './ACDB_Residential'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ACDBResidential />
    </>

  )
}

export default App
