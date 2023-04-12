import React, { useState } from 'react'

import './App.css'

import { Log } from './components/Log'
import { Balance } from './components/Balance'
import { Choice } from './components/Choice'

export const chanceContext = React.createContext()

function App() {
  const [money, setMoney] = useState(500)
  const [log, setLog] = useState([])
  const [chance, setChance] = useState(10)

  const prizes = [
    {id: "Low", range:{min: -25, max: 100}},
    {id: "Moderate", range:{min: -100, max: 1000}},
    {id: "High", range:{min: -500, max: 2500}},
    {id: "Severe", range:{min: -3000, max: 5000}},
  ]

  function moneyHandler(min, max, risk) {
    const prize = Math.floor(Math.random() * (max - min + 1) + min)
    setMoney((money) => money + prize);
    setLog((prevLog)=>[...prevLog, {risk: risk, result: prize, money: money + prize, date: new Date().toLocaleString()}])
    setChance((chance)=> chance-1)
  }

  return (
    <div className="appContainer">
     <chanceContext.Provider value={chance}>
        <Balance money={money}  />
        <Choice prizes={prizes}  moneyHandler={moneyHandler} />
        <Log log={log} />
     </chanceContext.Provider>
    </div>
  )
}

export default App
