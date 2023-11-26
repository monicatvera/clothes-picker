import { useEffect } from "react";
import "./CardWoman.css";

interface CardWomanProps {
  blouseColor: string;
  skirtColor: string;
}

function CardWoman({ blouseColor, skirtColor }: CardWomanProps) {
  useEffect(() => {
    const blouseTarget = document.getElementById("blouse-target");
    const skirtTarget = document.getElementById("skirt-target");

    if (blouseTarget) {
      blouseTarget.style.background = blouseColor;
    }

    if (skirtTarget) {
      skirtTarget.style.background = skirtColor;
    }
  }, [blouseColor, skirtColor]);

  return (
    <div className="woman card">
      <img
        src="https://res.cloudinary.com/djclvnzg1/image/upload/v1687882867/woman_jgkhmi.png"
        alt=""
        className="base"
        id="woman"
      />
      <div className="mask" id="blouse-target">
        <div className="color-block" id="blouse-color-block"></div>
      </div>
      <div className="mask" id="skirt-target">
        <div className="color-block" id="skirt-color-block"></div>
      </div>
    </div>
  );
}

export default CardWoman;
