import { useHistory } from "react-router-dom";
import Button from "@mui/material/IconButton";
import { useState } from "react";
import Input from "@mui/material/Input";

export function AddUsers({ users, setUserList }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const addmovie = () => {
    const newUsers = {
      name: name,
      position: position,
      YearsOfExperience: experience,
      email: email,
      phone: phone,
    };
    fetch("https://61e2dd193050a100176822d2.mockapi.io/users",
      {
        method: "POST",
        body: JSON.stringify(newUsers),
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((data) => data.json())
      .then(() => history.push("/"));
  };

  //defining the input items to new useState setValues.
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
        <Button
          variant="contained"
          color="success"
          //Onclick of the function we are using spread operator to add the value to the exixting maped users.
          onClick={addmovie}
        >
          Add-User
        </Button>
      </div>
    </div>
  );
}
