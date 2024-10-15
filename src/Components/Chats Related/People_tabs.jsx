import React from 'react'
import useSetChat from '../hooks/useSetChat'
import { useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar';
function People_tabs({ currentChat, setCurrentChat }) {
    let peopleList = useSelector((state) => state.auth.people)
    const currentUser = useSelector((state) => state.auth.data)

    return (
        <aside className='border-2 rounded-lg mr-2 px-2 border-blue-500 h-96 overflow-auto min-w-24'>
            {peopleList.map((item) => {
                if (item.$id !== currentUser.$id)
                    return (
                        <div
                            key={item.$id}
                            className={'border-x-2 p-2  cursor-pointer rounded-lg flex hover:bg-sky-200 duration-200 hover:border-blue-500 my-2 md:p-4 ' + (currentChat?.$id === item.$id ? 'bg-sky-200 border-blue-500' : '')}
                            onClick={() => setCurrentChat(item)}>
                            <div className='hidden sm:block'>
                                <Avatar >{item.Name.charAt(0)}</Avatar>
                            </div>
                            <p className=' font-semibold font-mono sm:ml-3'>

                                {item.Name}
                            </p>
                        </div>
                    )

            }
            )}
        </aside>
    )
}

export default People_tabs