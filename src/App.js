import React, { useState } from "react";
import Slot from "./components/Slot";

function App() {
  const [spinning, setSpinning] = useState(false);
  const [slotValues, setSlotValues] = useState(["O", "O", "O"]);
  const [points, setPoints] = useState(10);
  const possibleValues = ["A", "B", "C"];

  const spinSlots = () => {
    if (!spinning) {
      setSpinning(true);
      setTimeout(() => {
        const newValues = possibleValues.map(() => {
          const randomIndex = Math.floor(Math.random() * possibleValues.length);
          return possibleValues[randomIndex];
        });
        setSlotValues(newValues);
        setSpinning(false);
        if (newValues.every((val) => val === newValues[0])) {
          setPoints(points + 9);
        }
      }, 2000);
      setPoints(points - 1);
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        {slotValues.map((value, index) => (
          <Slot key={index} value={value} spinning={spinning} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="border-2 border-black w-25 h-10 flex items-center justify-center m-1 p-3 rounded-full bg-blue-200 hover:bg-blue-400 font-bold"
          onClick={spinSlots}
          disabled={spinning}
        >
          {spinning ? "Spinning..." : "Spin"}
        </button>
        <div className="text-3xl font-semibold text-center text-gray-400">
          Points: {points}
        </div>
      </div>
    </div>
  );
}
export default App;
