import "./GenderSelector.css";
const GenderSelector = ({
  selectedGender,
  handleGenderClick,
}: {
  selectedGender: string;
  handleGenderClick: (gender: string) => void;
}) => {
  return (
    <div className="gender">
      <div
        className={`man ${selectedGender === "men" ? "active" : ""}`}
        onClick={() => handleGenderClick("men")}
      >
        men
      </div>
      <div
        className={`woman ${selectedGender === "women" ? "active" : ""}`}
        onClick={() => handleGenderClick("women")}
      >
        women
      </div>
    </div>
  );
};

export default GenderSelector;
