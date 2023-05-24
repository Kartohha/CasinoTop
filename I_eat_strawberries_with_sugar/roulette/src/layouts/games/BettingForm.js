import React, { useState, useEffect } from "react";
import "./Login.css";

const BettingForm = ({ spin, winORnot }) => {
  const [userBetValue, setUserBetValue] = useState("");

  const updateBalance = async (newBalance) => {
    try {
      const response = await fetch("http://localhost:3003/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ balans: newBalance }),
      });
      if (response.ok) {
        localStorage.setItem("balance", newBalance);
        console.log("Balance updated in the database");
      } else {
        console.log("Failed to update balance in the database");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3003/profile")
      .then((response) => response.json())
      .then((data) => {
        setBalans(data[0].balans);
        localStorage.setItem("balance", data[0].balans);
      })
      .catch((error) => console.log(error));
  }, []);

  const [balans, setBalans] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [localBalance, setLocalBalance] = useState("");

  useEffect(() => {
    setLocalBalance(balans);
  }, [balans]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserBetValue(userBalance);
    localStorage.setItem("betValue", userBalance);
    setUserBalance("");

    await updateBalance(balans - userBalance);
  };

  return (
    <>
      <form className="controlled" onSubmit={handleSubmit}>
        <label htmlFor="pass">
          <input
            type="number"
            step="any"
            placeholder="your bet"
            value={userBalance}
            onChange={(event) => setUserBalance(event.target.value)}
            min="0"
            max={localBalance}
          />
        </label>
        {!spin && <button type="submit">Place Bet</button>}
      </form>
    </>
  );
};

export default BettingForm;
