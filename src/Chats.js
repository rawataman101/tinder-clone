import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sandra"
        message="Heya!!"
        timestamp="40 min ago"
        profilePic="https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/uploads/2011/01/Sandra-Bullock-103009-H1.jpg?format=pjpg&auto=webp&optimize=high"
      />
    </div>
  );
}

export default Chats;
