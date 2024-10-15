import { useState } from 'react'
import './mock_data/users'
import { Home, Chats } from './Pages/index'
import { useSelector, useDispatch } from 'react-redux'


function App() {

  const authstatus = useSelector((state) => state.auth.status)
  return (
    <div className='flex justify-center my-10 mx-2 sm:m-20'>
      {authstatus ?
        (
          <Chats />
        )
        :
        (
          <Home />
        )
      }
    </div>
  )
}

export default App
