import axios from "axios";
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchCharacters = () => {
    axios.get("http://localhost:3000/bacheca/").then((res) => {
      setUsers(res.data);
    });
  };

  const DeleteUsers = () => {
    setUsers([]);
  };

  return (
    <>
      <div className="header-container">
        <h2>Card</h2>
        <button onClick={fetchCharacters}>Carica i dolci</button>
        <button onClick={DeleteUsers}>Elimina i dolci</button>
      </div>
      <div className="container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <div className="user">
              <img src={user.image} alt="Avatar" />
              <div className="container-content">
                <h4>
                  <b>{user.title}</b>
                </h4>
                <p>{user.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
