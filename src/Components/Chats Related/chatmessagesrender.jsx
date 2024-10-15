import React from 'react'
import { useSelector } from 'react-redux'

function Chatmessagesrender({ currentChat }) {
    const currentUser = useSelector((state) => state.auth.data.$id)
    const chatdata = useSelector((state) => state.chat.chatData)
    const validate_id = currentChat.$id
    const validate_Data = chatdata[currentChat.$id || 'jdlvcsvlsd'];
    const validate_Data2 = chatdata[currentUser];
    return (validate_id ? (
        <div className='overflow-auto h-64 text-sm md:text-base'>

            <ul>
                {
                    validate_Data ? (
                        chatdata[currentChat.$id]['messages'].map((item) => {
                            return <div className=' mb-2 flex justify-start '>

                            <li className='text-start  max-w-48 rounded-lg text-wrap  shadow-md  bg-blue-500 px-2 text-gray-100 font-semibold italic'>

                                {item.message}

                            </li>
                        </div>
                        })
                    )
                        :
                        (
                            <div>

                            </div>
                        )
                }

                {
                     validate_Data2  ? (
                    chatdata[currentUser]['messages']?.map((item) => {
                        if (item.addedfor === currentChat.$id || item.addedfor === 'all') {

                            return (<div className=' mb-2 flex justify-end '>

                                <li className='text-start max-w-48 rounded-lg text-wrap  shadow-md  bg-green-600 px-2 text-gray-100 font-semibold italic'>

                                    {item.message}

                                </li>
                            </div>)
                        }
                    })
                )
                :
                (
                    <div>

                    </div>
                )
                }
            </ul>
        </div>
    )
        : (

            (
                <div className='flex items-center justify-center h-full'>
                    <p className='p-5 bg-white shadow-md'>

                        No user is selected
                    </p>
                </div>
            )

        )
    )

}

export default Chatmessagesrender