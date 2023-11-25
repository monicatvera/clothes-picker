import { useState } from "react";
import "./App.css";
import GenderSelector from "./components/GenderSelector/GenderSelector";
import CardMen from "./components/Men/CardMen";
import CardWoman from "./components/Woman/CardWoman";

function App() {
  const [selectedGender, setSelectedGender] = useState("men");

  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender);
  };
  return (
    <div className="model">
      {selectedGender === "men" ? <CardMen /> : <CardWoman />}
      <GenderSelector
        selectedGender={selectedGender}
        handleGenderClick={handleGenderClick}
      />
    </div>
  );
}

export default App;
