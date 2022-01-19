import { useHistory } from "react-router-dom";
import Button from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { useState } from "react";

export function UpdateUser({ user }) {
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
    fetch(`https://61e2dd193050a100176822d2.mockapi.io/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(newUsers),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((data) => data.json())
      .then(() => history.push("/"));

  };

  return (
    <div className="add-movie">
      <Input
        placeholder="Employee-Name"
        value={name}
        onChange={(event) => setName(event.target.value)} />
      <Input
        placeholder="Designation"
        value={position}
        onChange={(event) => setPosition(event.target.value)} />
      <Input
        placeholder="Experinece in Years"
        value={experience}
        onChange={(event) => setExperience(event.target.value)} />
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)} />
      <Input
        placeholder="Phone Number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)} />
      <div>
        <Button variant="contained" color="success" onClick={editUser}>
          Edit User
        </Button>
      </div>
    </div>
  );
}
