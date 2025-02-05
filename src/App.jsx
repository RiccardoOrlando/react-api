import axios from "axios"
import { useState } from "react"

export default function App () {

const [users, setUsers] = useState([])

const fetchCharacters = () => {
  axios.get('http://localhost:3000/bacheca/').then((res) =>{
    console.log(res)
    console.log(res.data)

  })
}
return (
  <>
<button onClick={fetchCharacters}>Carica gli utenti</button>
<h2>Card</h2>
<div className="card">
  {users.map((user) => {
    <div key={user.id} className="user">
      <img src={user.image} alt="Avatar"/>
      <div className="container">
        <h4><b>{user.title}</b></h4> 
        <p>{user.content}</p> 
      </div>
    </div>
    console.log(users)
  })}
</div>
</>
)}

