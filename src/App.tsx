import { useState } from "react";
import "./App.css";
import GenderSelector from "./components/GenderSelector/GenderSelector";
import CardMen from "./components/Men/CardMen";
import CardWoman from "./components/Woman/CardWoman";
import ColorSelector from "./components/ColorSelector/ColorSelector";

function App() {
  const [selectedGender, setSelectedGender] = useState("men");
  const [shirtColor, setShirtColor] = useState("#c9c9c9");
  const [pantsColor, setPantsColor] = useState("#c9c9c9");

  const handleColorChange = (id: string, color: string) => {
    if (id === "shirt") {
      setShirtColor(color);
    } else if (id === "pants") {
      setPantsColor(color);
    }
  };

  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender);
  };
  return (
    <div className="model">
      {selectedGender === "men" ? <CardMen /> : <CardWoman />}
      <ColorSelector
        id="shirt"
        value={shirtColor}
        handleColorChange={handleColorChange}
        presetColors={[
          "rgb(255,255,255)",
          "rgb(192,193,224)",
          "rgb(163,163,163)",
        ]}
      />
      <ColorSelector
        id="pants"
        value={pantsColor}
        handleColorChange={handleColorChange}
        presetColors={[
          "rgb(255,255,255)",
          "rgb(222,222,222)",
          "rgb(224,214,197)",
        ]}
      />
      <GenderSelector
        selectedGender={selectedGender}
        handleGenderClick={handleGenderClick}
      />
    </div>
  );
}

export default App;
