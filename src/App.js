import { React, useState } from 'react'
import './App.css'
import beach from './beach.jpg'

function Header () {
  return (
    <div>
      <h1>Planera Din Sommar</h1>
      <img alt='strand' src={beach} />
    </div>
  )
}

function Main () {
  const [plan, setPlan] = useState('')
  const [month, setMonth] = useState('')
  const [planList, setPlanList] = useState([])

  const handleChange = event => {
    const newPlan = event.target.value
    setPlan(newPlan)
  }

  const handleChangeMonth = event => {
    const month = event.target.value
    setMonth(month)
  }

  const handleClick = () => {
    setPlanList([...planList, { month: month, plan: plan }])
  }

  return (
    <div className='input'>
      <input
        type='text'
        placeholder='Lägg till plan...'
        onChange={handleChange}
      />
      <br />
      <label>Välj månad: </label>
      <select onChange={handleChangeMonth}>
        <option value=''>---</option>
        <option value='Juni'>Juni</option>
        <option value='Juli'>Juli</option>
        <option value='Augusti'>Augusti</option>
      </select>
      <br />
      <button onClick={handleClick}>Lägg till</button>

      <div className='display'>
        <Display list={planList} />
      </div>
    </div>
  )
}

function Display ({ list }) {
  const displayList = list.map(el => {
    return (
      <li>
        {el.month}: <span>{el.plan}</span>
        <br />
        <Notes />
      </li>
    )
  })
  return (
    <div>
      <h2>Mina planer:</h2>
      <ul>{displayList}</ul>
    </div>
  )
}

function Notes () {
  return (
    <div className='notes'>
<p id='edit'>Redigera</p>
    </div>
  )
}

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <div className='Main'>
        <Main />
      </div>
    </div>
  )
}

export default App
