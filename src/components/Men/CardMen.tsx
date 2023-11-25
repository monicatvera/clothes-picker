import "./CardMen.css";
const CardMen = () => {
  return (
    <div className="man card">
      <img
        src="https://res.cloudinary.com/djclvnzg1/image/upload/v1687882867/man_vqnnyq.png"
        alt=""
        className="base"
        id="man"
      />
      <div className="mask" id="shirt-target">
        <div className="color-block" id="shirt-color-block"></div>
      </div>
      <div className="mask" id="pants-target">
        <div className="color-block" id="pants-color-block"></div>
      </div>
    </div>
  );
};

export default CardMen;
