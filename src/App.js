
import './App.css';
import { Switch, Route, useHistory } from "react-router-dom";
import Button from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { HomePage } from './HomePage';
import { UserProfile } from './UserProfile';
import { AddUsers } from './AddUsers';

import Input from "@mui/material/Input";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState,useEffect } from "react";

function App() {
   //Setting Users as a Hook to Update and change the data in need. 
  //Using History to get the required Router. 

 
  const history = useHistory();
  return (
    <div className="App">
      <div className="app-bar">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Button color="inherit" onClick={() => history.push("/")}>
              Home
            </Button>

            <Button
              sx={{ marginLeft: "auto" }}
              color="inherit"
              onClick={() => history.push("/addusers")}
            >
              Add-Users
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <div className="route-items">
        <Switch>
          <Route exact path="/">
            <HomePage  />
          </Route>

          <Route path="/addusers">
            <AddUsers />
          </Route>

          <Route path="/edit/:id">
            <EditUsers/>
          </Route>

          <Route path="/:id">
            <UserProfile  />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;


function EditUsers() {
  const { id } = useParams();
  // const user = users[id];
  const [user,setUser] = useState(null);
  const getUsers = ()=>{
    fetch(`https://61e2dd193050a100176822d2.mockapi.io/users/${id}`,
    { method:"GET"}
    )
    .then((data)=>data.json())
    .then((us)=>setUser(us));
  };

  useEffect(getUsers,[])

  return user ? <UpdateUser user={user} /> : "";
}

function UpdateUser({ user }) {
  //filtering the selected user alone and storing it in edited users

  const history = useHistory();
  const [name, setName] = useState(user.name);
  const [position, setPosition] = useState(user.position);
  const [experience, setExperience] = useState(user.YearsOfExperience);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const editUser = () => {
    const newUsers = {
      name: name,
      position: position,
      YearsOfExperience: experience,
      email: email,
      phone: phone,
    };
    //add the new edited value to the remainng user and deleting the old user
    fetch(`https://61e2dd193050a100176822d2.mockapi.io/users/${user.id}`,{
      method:"PUT",
      body:JSON.stringify(newUsers),
      headers:{
        "Content-Type":"application/json"
      },
   
 })
.then((data)=>data.json())
.then(()=>history.push("/"));

  };

  return (
    <div className="add-movie">
      <Input
        placeholder="Employee-Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        placeholder="Designation"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      />
      <Input
        placeholder="Experinece in Years"
        value={experience}
        onChange={(event) => setExperience(event.target.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        placeholder="Phone Number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <div>
        <Button variant="contained" color="success" onClick={editUser}>
          Edit User
        </Button>
      </div>
    </div>
  );
}

