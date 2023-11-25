import { useState, useEffect } from "react";
import "./ColorSelector.css";

interface ColorSelectorProps {
  id: string;
  value: string;
  handleColorChange: (id: string, color: string) => void;
  presetColors: string[];
}

const ColorSelector = ({
  id,
  value,
  handleColorChange,
  presetColors,
}: ColorSelectorProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const pickerElement = document.querySelector(
      `.color-${id} .option.picker`
    ) as HTMLElement;

    if (pickerElement) {
      if (isActive) {
        pickerElement.style.background =
          "linear-gradient(70deg, #3f87a6, #ebf8e1, #f69d3c, #561423)";
      }
    }
  }, [id, isActive]);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`color-${id} ${isActive ? "active" : ""}`}
      onClick={toggleActive}
    >
      {" "}
      +
      {presetColors.map((color, index) => (
        <div
          key={index}
          className={`option preset`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorChange(id, color)}
        ></div>
      ))}
      <div className="option picker">
        <input
          type="color"
          id={`input-color-${id}`}
          value={value}
          onChange={(e) => handleColorChange(id, e.target.value)}
        />
      </div>
    </div>
  );
};

export default ColorSelector;
