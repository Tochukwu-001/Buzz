import Image from 'next/image'
import React from 'react'
import { FaCheckDouble } from 'react-icons/fa6'

const UserAvatar = ({ name, username, lastMessage = null }) => {
    return (
        <>
            <div className='flex items-center gap-2'>
                <Image src={'/img-bg-2.jpg'} height={500} width={500} alt='' className='w-12 h-12 rounded-full' />
                <div>
                    <h2 className='font-semibold text-white text-lg'>{name}</h2>
                    <p className='text-white text-sm'>@{username}</p>
                    {lastMessage && (
                        <p className=' flex gap-2 items-center text-gray-400'>
                            {lastMessage} <FaCheckDouble size={10} />
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

export default UserAvatar