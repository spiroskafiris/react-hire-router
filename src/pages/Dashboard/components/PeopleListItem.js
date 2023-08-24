import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <Link to={`/person/${person.id.value}`} state={person} >
        <h3>
          {person.name.first} {person.name.last}
        </h3>
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
