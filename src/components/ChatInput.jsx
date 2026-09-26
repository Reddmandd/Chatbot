import { useState } from "react";
import "./ChatInput.css"
import callGemini from "../utility/api"
import loadingGif from "../assets/loadinggif.gif"


export default function ChatInput({chatMessages, setChatMessages}){
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    async function sendMessage(){
        if(isLoading || inputText.length === 0){
            return 
        }

        setIsLoading(true)
        const newChatMessages = [...chatMessages, {
            message: inputText, 
            sender: 'user', 
            id: crypto.randomUUID()
        }]
        
        setChatMessages([...newChatMessages, {
            message:  <img src={loadingGif} className="loading-spinner" />, 
            sender: 'robot', 
            id: crypto.randomUUID()
        }])
        const tempInput = inputText
        setInputText('')
        
        const response = await callGemini(tempInput, chatMessages);

        
        setChatMessages([...newChatMessages, {
            message: response, 
            sender: 'robot', 
            id: crypto.randomUUID()
        }])
        setIsLoading(false)
    }   

    function saveInputText(event){
        setInputText(event.target.value)
    }

    function inputKey(event){
        if(event.key === 'Enter'){
            sendMessage()
        }
        else if(event.key === 'Escape'){
            setInputText('')
        }
    }
    
    return <div className="chat-input-container"> 
        
        <input placeholder="Send a message to Chatbot!" 
        size = "30" 
        onChange = {saveInputText} 
        value = {inputText}
        onKeyDown={inputKey}
        className="chat-input"
        />
        <button onClick={sendMessage} className="send-button">Send</button>
    </div>
}