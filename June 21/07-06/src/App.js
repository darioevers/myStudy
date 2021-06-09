  
import React, { useState, useEffect } from "react";
import List from "./components/List";


function App() {
  const [count, setCount] = useState(0);
  //const [log, setLog] = useState(false);
  useEffect(() => {
    console.log("I am Ready ");
  }, []);

  return (
    <React.Fragment>
      <button onClick={() => setCount(count + 1)}>+</button>
      <List setCount={setCount} />
      <h3>{count}</h3>
    </React.Fragment>
  );
}
/*
Stop useEffect from running on every render
Only Run Once, on Mount
Run useEffect on State Change
Run useEffect When a Prop Changes
*/
export default App;