import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";

function ChatScreen() {
  const params = useParams();
  const name = params["person"].toUpperCase();
  const [input, setinput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ava",
      image:
        "https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/uploads/2011/01/Sandra-Bullock-103009-H1.jpg?format=pjpg&auto=webp&optimize=high",
      message: "Heya!!",
    },
    {
      name: "Ava",
      image:
        "https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/uploads/2011/01/Sandra-Bullock-103009-H1.jpg?format=pjpg&auto=webp&optimize=high",
      message: "Hi, How are you?",
    },
    {
      message: "I am fine!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setinput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MACTHED WITH {name} 02/11/2022
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setinput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="chatScreen__inputButton"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
