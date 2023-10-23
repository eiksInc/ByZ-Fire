//write the chatInput component here
import { Box, Button, IconButton, Input } from "@chakra-ui/react";
import React, { useState } from "react";


const ChatInput = (props) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    props.sendMessage(message);
    setMessage("");
  };

  return (
        <Box
            display={"flex"}
            minWidth={"100%"}
        >
            <Input/>
        </Box>
  );
};

export default ChatInput;
