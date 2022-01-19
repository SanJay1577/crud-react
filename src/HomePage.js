
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";
import { Dashboard } from "./Dashboard";

export function HomePage() {
  const [users, setUserList] = useState([]);
 

  const getUsers = () => {
    fetch("https://61e2dd193050a100176822d2.mockapi.io/users",
      { methid: "GET" }
    )
      .then((data) => data.json())
      .then((user) => setUserList(user));
  };
  const deleteUser = (id) => {
    fetch(`https://61e2dd193050a100176822d2.mockapi.io/users/${id}`,
      { method: "DELETE" }
    ).then((data) => data.json())
      .then(() => getUsers());
  };

  useEffect(getUsers, []);



  //mapping and executing the delete button logic by filtering the remaining value and setting it in the hook.
  return (
    <div>
      <div>
        <h2>Zen Team Board</h2>
      </div>
      <div className="userlist">
        {users.map(
          ({ name, position, YearsOfExperience, email, phone, id }) => (
            <Dashboard
              key={id}
              id={id}
              name={name}
              position={position}
              YearsOfExperience={YearsOfExperience}
              email={email}
              phone={phone}
              deleteButton={<IconButton
                variant="contained"
                color="error"
                onClick={() => {
                  deleteUser(id);
                }}
              >
                <DeleteIcon />
              </IconButton>} />
          )
        )}
      </div>
    </div>
  );
}
