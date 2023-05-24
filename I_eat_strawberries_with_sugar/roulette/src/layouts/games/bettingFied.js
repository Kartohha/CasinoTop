// import { useState } from "react";

const BettingField = ({
  color,
  rewardMultiplier,
  bet,
  spin,
  onClick,
  isBettingPlaced,
}) => {
  //   console.log(spin + " смотри сюда");
  const handleClick = () => {
    if (!spin && !isBettingPlaced) {
      onClick(); // Call the provided onClick function
      localStorage.removeItem("betValue");
    }
  };
  return (
    <>
      <div className="biggest" onClick={handleClick}>
        <div className="biggesttop">
          <div className="reward" style={{ backgroundColor: color }}>
            <span>win {rewardMultiplier}X</span>
          </div>
        </div>
        <div className="biggestmiddle">
          <span style={{ borderBottom: "2px solid red" }}>your bet: {bet}</span>
        </div>
        <div className="biggestbottom">
          <span style={{ borderBottom: "2px solid red" }}>
            you can win: {bet * rewardMultiplier}
          </span>
        </div>
      </div>
    </>
  );
};

export default BettingField;
