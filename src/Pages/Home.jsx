import React from 'react'
import {SignIn,BasicTabs,LoginAsUsers} from '../Components/index'
function Home() {
  return (
    <div className='border-2 py-20 max-h-screen w-10/12 rounded-xl lg:w-3/5 overflow-y-auto sm:px-20'>
        <h1 className='text-center text-3xl mb-10 '>Getting Started</h1>
        <BasicTabs Child_1={SignIn} Child_2={LoginAsUsers} Label_1={'New User'} Label_2={'Current Users'}/>
    </div>
  )
}

export default Home