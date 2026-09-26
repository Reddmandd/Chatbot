import ChatMessage from "./ChatMessage";
import "./ChatMessages.css"
import { useEffect } from "react";

export default function ChatMessages({chatMessages}){
    useEffect(() => {
        const chatMessagesContainer = document.querySelector(".chat-messages-container");
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }, [chatMessages]);

    return (
        <div className="chat-messages-container">
        {chatMessages.map((chatMessage) => {
            return (
                <ChatMessage 
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                    key={chatMessage.id}
                />
              );
          })}
        </div>
    );
}