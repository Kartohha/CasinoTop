import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";

export default function BlackJackButtons(props) {
  useEffect(() => {
    function click(event) {
      switch (event.key) {
        case "h":
          props.onClickHit();
          break;
        case "s":
          props.onClickStand();
          break;
        default:
          break;
      }
    }
    document.body.addEventListener("keydown", click, {
      passive: false
    });
    return () => {
      document.body.removeEventListener("keydown", click, {
        passive: false
      });
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      flexWrap="wrap"
      mb={3}
      mt={"auto"}
    >
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickHit}>
          HIT
        </Button>
      </Box>
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickStand}>
          STAND
        </Button>
      </Box>
    </Box>
  );
}
