import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'


function App() {
  const [chatMessages, setChatMessages] = useState([])
    
  return (
    <div className="app-container">
      
      <ChatMessages chatMessages = {chatMessages}/>
      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>
  )
}

export default App
