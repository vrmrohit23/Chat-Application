import React from 'react'
import People_tabs from '../Components/Chats Related/People_tabs'
import useSetChat from '../Components/hooks/useSetChat'
import ChatBox from '../Components/Chats Related/chatBox'
import { Accountmanagement } from '../Components'


function Chats() {
  const { currentChat, setCurrentChat } = useSetChat()
  return (
    <div className='border-2 p-2 lg:p-10'>
      <p className='text-2xl italic text-center mb-3  bg-orange-200 py-2' >Chattify</p>
      <Accountmanagement />
      <div className=' flex'>
        <People_tabs currentChat={currentChat} setCurrentChat={setCurrentChat} />
        <ChatBox currentChat={currentChat} />
      </div>
    </div>


  )
}

export default Chats