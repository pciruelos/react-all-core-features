import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Errormodal.module.css";

const Errormodal = (props) => {
  return (
    <div>
        <div className={classes.backdrop} onClick={props.onCerrar}>

        </div>
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onCerrar}>OKAY</Button>
      </footer>
    </Card>
    </div>

  );
};

export default Errormodal;
