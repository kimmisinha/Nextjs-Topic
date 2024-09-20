"use client";
import { useState } from "react";

const FoodOne = () => {
  // Use a string value for the color, not an object
  const [color, setColor] = useState("lightblue");

  // Function to change the background color
  function changeColor() {
    setColor("pink"); // Pass a string value for the new color
  }

  return (
    <>
      {/* Apply the color from the state to the style */}
      <h3 style={{ backgroundColor: color }}>foodone</h3>

      {/* Call the function properly using parentheses */}
      <button onClick={changeColor}>Color change</button>
    </>
  );
};

export default FoodOne;
