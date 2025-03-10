import { useState } from "react"

function HireForm(props) {
  const [wage, setWage] = useState(0)

  //ive added this
  const { person } = props

  function handleSubmit(event) {
    event.preventDefault()
    person.wage=wage
    props.addhiredPeople()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
