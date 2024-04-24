"use client";
import React, { useState, useRef } from "react";
import chatbot from "../../../../public/chatbot.json";
import Lottie from "lottie-react";
import BotUserChat from "./botUserChat";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e: any) => {
    // @ts-ignore
    if (!chatRef.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Add event listener for outside clicks
  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-6 z-[99] max-sm:-bottom-6 max-sm:right-1">
      <div className="relative">
        <div className="" onClick={toggleChat}>
          {/* Icon for chatbot */}
          <Lottie animationData={chatbot} className="size-40 cursor-pointer" />
        </div>
        {isOpen && (
          <div className="absolute bottom-full right-0" ref={chatRef}>
            {/* Chat UI content */}
            <div className="">
              <div
                className="cursor-pointer text-[30px] font-bold text-white dark:text-[#222]"
                onClick={toggleChat}
              >
                &times;
              </div>
            </div>
            <div className="h-[27rem] w-72 rounded-[16px] max-sm:w-72">
              <BotUserChat />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
