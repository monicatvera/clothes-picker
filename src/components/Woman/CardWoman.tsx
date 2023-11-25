import "./CardWoman.css";
function CardWoman() {
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
