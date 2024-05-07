import React from "react";
import Slot from "./components/Slot";

function App() {
  const possibleValues = ["A", "B", "C"];
  return (
    <div>
      <Slot value={possibleValues.sort(() => Math.random() - 0.5)[0]} />
    </div>
  );
}
export default App;
