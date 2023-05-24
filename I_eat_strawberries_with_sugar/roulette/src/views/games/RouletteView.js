import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import "./RouletteViewCSS.css";
import BettingFied from "../../layouts/games/bettingFied";
import BettingForm from "../../layouts/games/BettingForm";

let redNum = { backgroundColor: "red", textColor: "white" };
let blackNum = { backgroundColor: "black", textColor: "white" };
let winORnot;
const data = [
  { option: "0", style: { backgroundColor: "green", textColor: "white" } },
  { option: "32", style: redNum },
  { option: "15", style: blackNum },
  { option: "19", style: redNum },
  { option: "4", style: blackNum },
  { option: "21", style: redNum },
  { option: "2", style: blackNum },
  { option: "25", style: redNum },
  { option: "17", style: blackNum },
  { option: "34", style: redNum },
  { option: "6", style: blackNum },
  { option: "27", style: redNum },
  { option: "13", style: blackNum },
  { option: "36", style: redNum },
  { option: "11", style: blackNum },
  { option: "30", style: redNum },
  { option: "8", style: blackNum },
  { option: "23", style: redNum },
  { option: "10", style: blackNum },
  { option: "5", style: redNum },
  { option: "24", style: blackNum },
  { option: "16", style: redNum },
  { option: "33", style: blackNum },
  { option: "1", style: redNum },
  { option: "20", style: blackNum },
  { option: "14", style: redNum },
  { option: "31", style: blackNum },
  { option: "9", style: redNum },
  { option: "22", style: blackNum },
  { option: "18", style: redNum },
  { option: "29", style: blackNum },
  { option: "7", style: redNum },
  { option: "28", style: blackNum },
  { option: "12", style: redNum },
  { option: "35", style: blackNum },
  { option: "3", style: redNum },
]; //поля рулетки

const RouletteView = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");
  // ----------------
  const [betValueRed, setBetValueRed] = useState("");
  const [betValueGreen, setBetValueGreen] = useState("");
  const [betValueBlack, setBetValueBlack] = useState("");

  const [localBalance, setLocalBalance] = useState("");
  const [usersColor, setUsersColor] = useState("");
  const [isBettingPlaced, setIsBettingPlaced] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleBettingFieldClickRed = () => {
    console.log("red");
    setUsersColor("red");
    const storedBetValue = localStorage.getItem("betValue");
    if (storedBetValue) {
      setBetValueRed(storedBetValue);
      setBetValueGreen("");
      setBetValueBlack("");
    } else {
      setBetValueRed(inputValue);
    }
    setIsBettingPlaced(true);
  };

  const handleBettingFieldClickGreen = () => {
    console.log("green");
    setUsersColor("green");
    const storedBetValue = localStorage.getItem("betValue");
    if (storedBetValue) {
      setBetValueGreen(storedBetValue);
      setBetValueRed("");
      setBetValueBlack("");
    } else {
      setBetValueGreen(inputValue);
    }
    setIsBettingPlaced(true);
  };

  const handleBettingFieldClickBlack = () => {
    console.log("black");
    setUsersColor("black");
    const storedBetValue = localStorage.getItem("betValue");
    if (storedBetValue) {
      setBetValueBlack(storedBetValue);
      setBetValueRed("");
      setBetValueGreen("");
    } else {
      setBetValueBlack(inputValue);
    }
    setIsBettingPlaced(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSpinClick();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSpinClick = () => {
    setPrizeNumber(Math.floor(Math.random() * data.length));
    setMustSpin(true);
  };

  const handleSubmit = (e, localBalance) => {
    e.preventDefault();
    setLocalBalance(localBalance);
    setIsBettingPlaced(true);
  };

  return (
    <div className="wheelfleex">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          let winColor = data[prizeNumber].style.backgroundColor;
          winORnot = winColor === usersColor;
          console.log(`ПРОВЕРКА СОВПАДЕНИЙ ЦВЕТОВ:
                         winColor --- ${winColor}
                         usersColor --- ${usersColor}`);
          setUsersColor("");
          setBetValueRed("");
          setBetValueGreen("");
          setBetValueBlack("");
          setIsBettingPlaced(false);
        }}
      />
      <div className="betside">
        <div className="thebigggest">
          <BettingFied
            spin={mustSpin}
            color={"red"}
            rewardMultiplier={2}
            bet={betValueRed}
            onClick={handleBettingFieldClickRed}
            isBettingPlaced={isBettingPlaced}
          />

          <BettingFied
            spin={mustSpin}
            color={"green"}
            rewardMultiplier={14}
            bet={betValueGreen}
            onClick={handleBettingFieldClickGreen}
            isBettingPlaced={isBettingPlaced}
          />

          <BettingFied
            spin={mustSpin}
            color={"black"}
            rewardMultiplier={2}
            bet={betValueBlack}
            onClick={handleBettingFieldClickBlack}
            isBettingPlaced={isBettingPlaced}
          />
        </div>
        <BettingForm
          spin={mustSpin}
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          localBalance={localBalance}
          winORnot={winORnot}
          winColor={data[prizeNumber].style.backgroundColor}
        />
        {/* <div>your balance:{localStorage.getItem("balance")}</div> */}
      </div>
    </div>
  );
};

export default RouletteView;
