import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function useSetChat() {
    const [currentChat,setCurrentChat] = useState({})
  return {currentChat,setCurrentChat}
}

export default useSetChat