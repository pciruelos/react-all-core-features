import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./Adduser.module.css";
import Errormodal from "../UI/Errormodal";

const Adduser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title:'invalid input',message:'fuck you'
        })
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title:'invalid age',message:'fuck your age'
        })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error &&  <Errormodal title={error.title} message={error.message} onCerrar={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age in years</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type={"submit"}>Save</Button>
        </form>
      </Card>
    </div>
  );
};

export default Adduser;
