import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  console.log(classes);
  const [increment, setIncrement] = useState(0);
  const plus = () => {
    setIncrement((prev) => (prev += 1));
  };

  return (
    <div>
      <h1 className={classes.title}>{increment}</h1>
      <button onClick={plus}>increment</button>
    </div>
  );
};
