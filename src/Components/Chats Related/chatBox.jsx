import React from 'react'
import { useSelector } from 'react-redux'
import Chatmessagesrender from './chatmessagesrender'
import ChatMessageInput from './chatMessageInput'
function ChatBox({currentChat}) {
   return (
   <div className='bg-sky-100 p-5  pb-2  border-2 rounded-lg  border-blue-500 flex-col justify-between flex'>
        <Chatmessagesrender currentChat={currentChat}/>
        <ChatMessageInput currentChat={currentChat}/>
    </div>
   )
}

export default ChatBox