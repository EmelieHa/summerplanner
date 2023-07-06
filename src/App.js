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
        <Notes title={el.plan} />
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

function Notes ({ title }) {
  const [savedText, setSavedText] = useState([])
  const [textValue, setTextValue] = useState('')
  const [visible, setVisible] = useState(true)

  const handleChange = event => {
    setTextValue(event.target.value)
  }

  function handleClick () {
    if (document.querySelector('textarea').value === '') {
      alert('Anteckningar är obligatoriskt!')
    } else {
      setSavedText([...savedText, textValue])
      setVisible(prev => !prev)
    }
  }
  return (
    <div className='notes'>
      {' '}
      {visible && (
        <p id='edit' onClick={handleClick}>
          Spara
        </p>
      )}
      <div className='text'>
        <h5>{savedText}</h5>
        {visible && (
          <textarea
            placeholder='Lägg till anteckningar...'
            className='area'
            onChange={handleChange}
          ></textarea>
        )}
      </div>
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
