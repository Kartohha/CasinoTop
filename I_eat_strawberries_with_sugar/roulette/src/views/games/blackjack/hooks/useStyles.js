import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  playArea: {
    margin: "10px 25px"
  },
  coinArea: {
    height: "100px",
    padding: "10px",
    color: "#fff"
  },
  messageArea: {
    margin: "10px"
  },
  message: {
    fontSize: "22px",
    color: "white"
  },
  winOrLoseContainer: {
    height: "50px"
    // margin: "-50px auto 0px"
  },
  winOrLose: {
    border: "1px solid black",
    backgroundColor: "white",
    height: "60px",
    fontSize: "1.3em",
    fontWeight: "bold",
    color: "white",
    lineHeight: "40px",
    opacity: 0.8,
    margin: "10px 0"
  },
  "& .css-w66kx-MuiChip-root" : {
    backgroundColor: "white",

  }
});
