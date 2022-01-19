import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

export function UserProfile() {

  const { id } = useParams();
  // const user = users[id];
  const [user, setUser] = useState([]);
  const getUsers = () => {
    fetch(`https://61e2dd193050a100176822d2.mockapi.io/users/${id}`,
      { method: "GET" }
    )
      .then((data) => data.json())
      .then((us) => setUser(us));
  };

  useEffect(getUsers, []);


  //desining the component of userprofile documents,
  return (
    <div className="user-details">
      <h2>Zen-Employee-Profile</h2>
      <h3>{user.name}</h3>
      <p>Position : {user.position}</p>
      <p>Years Of Experience : {user.YearsOfExperience}</p>
      <p>Email : {user.email}</p>
      <p>Phone Number : {user.phone}</p>
    </div>
  );
}

