import { useState } from 'react'
import './App.css'
import ACDBResidential from './ACDB_Residential'
import Header from './Header'
import DCDBTable from './DCDB_MCB_SPD'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ACDBResidential />
      <DCDBTable />
    </>

  )
}

export default App
