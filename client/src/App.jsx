import { useState, useEffect } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'
import './App.css'


function App() {
  const [cardio, setCardio] = useState(() => Number(localStorage.getItem('cardio')) || 0)
  const [upper, setUpper] = useState(() => Number(localStorage.getItem('upper')) || 0)
  const [lower, setLower] = useState(() => Number(localStorage.getItem('lower')) || 0)
  const [rest, setRest] = useState(() => Number(localStorage.getItem('rest')) || 0)
  const [minutes, setMinutes] = useState(() => Number(localStorage.getItem('minutes')) || 30)

  useEffect(() => { localStorage.setItem('cardio', cardio) }, [cardio])
  useEffect(() => { localStorage.setItem('upper', upper) }, [upper])
  useEffect(() => { localStorage.setItem('lower', lower) }, [lower])
  useEffect(() => { localStorage.setItem('rest', rest) }, [rest])
  useEffect(() => { localStorage.setItem('minutes', minutes) }, [minutes])

  const mins = Number(minutes) || 0

  const incrementCardio = () => setCardio(cardio + mins)
  const incrementUpper = () => setUpper(upper + mins)
  const incrementLower = () => setLower(lower + mins)
  const incrementRest = () => setRest(rest + 1)

  const handleReset = () => {
    setCardio(0)
    setUpper(0)
    setLower(0)
    setRest(0)
  }

  return (
    <div>
      <h1>Workout Tracker</h1>

      

      <p>Today I worked on:</p>
      <div className="button-group">
        <Button handleClick = {incrementCardio} text = "Cardio" />
        <Button handleClick = {incrementLower} text = "Lower body" />
        <Button handleClick = {incrementUpper} text = "Upper body" />
        <Button handleClick = {incrementRest} text = "Rest" />
      </div>
      <div className="minutes-input">
        <p class="minutes-label">Minutes per session:</p>
        <input 
          id="minutes"
          type="number"
          min="1"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
      </div>
      <h2> Statistics </h2>
      <Statistics cardio={cardio} upper={upper} lower={lower} rest={rest} />

      <button className="reset-btn" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
