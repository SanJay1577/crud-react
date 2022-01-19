import { useHistory } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

//Executing the dash Board component to display in the screen. 

export function Dashboard({ name, position, deleteButton, id }) {
  const history = useHistory();
  return (
    <div className="content-box">
      <div className="dash-users">
        <h5>
          {" "}
          {name} - {position}{" "}
        </h5>
      </div>

      <div className="user-acces">
        <IconButton
          variant="contained"
          color="secondary"
          onClick={() => history.push(`/${id}`)}
        >
          <PersonIcon />
        </IconButton>

        <IconButton
          variant="contained"
          color="primary"
          onClick={() => history.push(`/edit/${id}`)}
        >
          <EditIcon />
        </IconButton>

        {deleteButton}
      </div>
    </div>
  );
}
