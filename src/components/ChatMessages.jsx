import ChatMessage from "./ChatMessage";
import "./ChatMessages.css"

export default function ChatMessages({chatMessages}){
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