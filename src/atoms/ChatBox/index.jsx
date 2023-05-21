import React from "react";
import Box from "@mui/material/Box";
import Typography from "../Typography";

function ChatBox(props) {
  const { sender, role, message, time } = props;
  return (
    <Box
      height='150'
      sx={{
        padding: "5px",
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        borderWidth: "1px",
        borderStyle: "dashed",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "13px",
        borderBottomRightRadius: "13px",
        borderBottomLeftRadius: "13px",
        width: "70%",
        marginLeft: sender === "John Doe" ? "auto" : "0px",
        marginBottom: '15px'
      }}
    >
      <Box>
        <Typography variant='h1'>{`${sender} (${role})`}</Typography>
        <Typography variant='h2'>{time}</Typography>
      </Box>
      <Typography variant='subtitle11'>{message}</Typography>
    </Box>
  );
}

export default ChatBox;
