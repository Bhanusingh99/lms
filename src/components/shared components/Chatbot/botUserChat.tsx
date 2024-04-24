"use client";
import Image from "next/image";
import React, { useState } from "react";
import { getChatBotResponse } from "@/helper/getChatBotResponse";

const BotUserChat = () => {
  const [chat, setChat] = useState("");
  const [conversation, setConversation] = useState([
    {
      speaker: "Bot",
      message: "Hello, Welcome to data vidhya, How may I help You",
    },
  ]);

  const handleInput = () => {
    // Store user message
    setConversation((prevConversation) => [
      ...prevConversation,
      { speaker: "User", message: chat },
    ]);

    // Get bot response
    const botResponse = getChatBotResponse(chat);

    // Store bot response
    setConversation((prevConversation) => [
      ...prevConversation,
      { speaker: "Bot", message: botResponse },
    ]);

    // Clear input field
    setChat("");
  };

  return (
    <div className="size-full rounded-[15px] bg-[#111]">
      <div className="flex h-[90%] w-full flex-col overflow-auto">
        {conversation.map((item, index) => (
          <div
            key={index}
            className={`my-2 flex w-full px-2 ${
              item.speaker === "Bot" ? "" : "justify-end"
            }`}
          >
            <p
              className={`rounded-[10px] ${item.speaker === "Bot" ? "bg-green-600 px-2 py-1 text-white" : "bg-purple-600 px-2 py-1 text-white"}`}
            >
              {item.message}
            </p>
          </div>
        ))}
      </div>
      <div className="flex h-[10%] w-full items-center justify-between border-t px-4">
        <input
          type="text"
          value={chat}
          onChange={(e) => {
            setChat(e.target.value);
          }}
          placeholder="Enter your chat"
          className="border-none bg-transparent px-2 py-1.5 text-white outline-none"
        />
        <div onClick={handleInput} className="cursor-pointer">
          <Image src={"/send.png"} height={25} width={25} alt="send" />
        </div>
      </div>
    </div>
  );
};

export default BotUserChat;
