import { useState } from "react";
import "./App.css";
import Homepage from "./components/pages/Homepage";
import Users from "./components/Users";
import NewUser from "./components/refs/NewUser";
import NewUserForm from "./components/forms/NewUserForm";

function App() {
  const [showUserAddForm, setShowUserAddForm] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const handleUserAddForm = (e) => {
    console.log("Please Add User!");
    setShowUserAddForm(true);
  };

  const handleCloseForm = (e) => {
    setShowUserAddForm(false);
  };

  const handleUsersDisplay = (e) => {
    setShowUsers((prev) => !prev);
  };

  return (
    <div className="App">
      {showUserAddForm && (
        <NewUserForm handleCloseForm={handleCloseForm} method="POST" />
      )}
      <Homepage
        handleUsersDisplay={handleUsersDisplay}
        handleUserAddForm={handleUserAddForm}
      />
      {/* <Users /> */}
      {/* <NewUser /> */}
    </div>
  );
}

export default App;
