import React from "react";
import { Card as MuiCard, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "../assets/cardShirt.png"

const useCardStyles = makeStyles({
  root: {
    // "& .css-bhp9pd-MuiPaper-root-MuiCard-root": {
    //   color: (props) => {
    //     if (props.card === null) {
    //       return "black";
    //     }
    //     if (props.hide) {
    //       return "black";
    //     }
    //     switch (props.card.suit) {
    //       case "❤":
    //       case "♦":
    //         return "red";
    //       default:
    //         return "red";
    //     }
    //     return "red";
    //   },
    //   background: (props) => {
    //     if (props.hide) {
    //       return "black";
    //     }
    //     else return "#fff"
    //   }
    // },
    width: "60px",
    height: "90px",
    color: (props) => {
      if (props.card === null) {
        return "black";
      }
      if (props.hide) {
        return "black";
      }
      switch (props.card.suit) {
        case "❤":
        case "♦":
          return "red";
        default:
          return "black";
      }
    },
    backgroundImage: (props) => {
      if (props.hide) {
        return `url("../assets/cardShirt.png")`;
      }
      else return "#fff"
    },
    border: "3px solid grey",
    borderRadius: "8px",
    boxShadow: "0 0 4px #000"
  },
  rootBack: {
    width: "60px",
    height: "90px",
    border: "3px solid grey",
    borderRadius: "8px",
    boxShadow: "0 0 4px #000",
    backgroundColor: "#000"
  },
  content: {
    width: "100%",
    height: "100%"
  },
  top: {
    fontSize: "22px",
    height: "30px",
    marginLeft: "5px"
  },
  middle: {
    fontSize: "50px",
    height: "60px",
    lineHeight: "60px"
  },
  bottom: {
    height: "30px",
    marginRight: "10px",
    display: "none"
  }
});

export default function Card(props) {
  const classes = useCardStyles(props);
  const topAndBottom = props.card === null || props.hide ? "" : props.card.rank;
  const middle = props.card === null || props.hide ? "" : props.card.suit;

  const cardClass = topAndBottom !== "" ? classes.root : classes.rootBack;
  return (
    <MuiCard className={cardClass}>
      <Box className={classes.content} display="flex" flexDirection="column">
        <Box className={classes.top} alignSelf="flex-start">
          {topAndBottom}
        </Box>
        <Box className={classes.middle}>{middle}</Box>
        <Box className={classes.bottom} alignSelf="flex-end">
          {topAndBottom}
        </Box>
      </Box>
    </MuiCard>
  );
}
