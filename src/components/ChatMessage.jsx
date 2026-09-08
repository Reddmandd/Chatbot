import userImg from '../assets/user.png'
import robotImg from '../assets/robot.png'
import "./ChatMessage.css"


export default function ChatMessage({message, sender, id}){
    return <div className= {sender === 'user' 
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
        {sender === "robot" && (<img src={robotImg} width="50"/>)}
        <div className = "chat-message-text">{message}</div>
        {sender === "user" && (<img src={userImg} width="50"/>)}


    </div>
}