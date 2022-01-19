
import './App.css';
import { Switch, Route, useHistory } from "react-router-dom";
import Button from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { HomePage } from './HomePage';
import { UserProfile } from './UserProfile';
import { AddUsers } from './AddUsers';

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState,useEffect } from "react";
import { UpdateUser } from './UpdateUser';

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


