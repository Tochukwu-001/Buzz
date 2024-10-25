"use client";
import UserAvatar from '@/components/UserAvatar';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io';

const page = () => {
  const { data: session, status } = useSession();
  const [selectedChat, setSelectedChat] = useState(null);



  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([
    {
      id: 1,
      name: 'Sam Smith',
      username: 'ssWnn',
    },
    {
      id: 2,
      name: 'John Smith',
      username: 'cnjncjnsc',
      lastMessage: "where are you?"
    },
  ])

  // const messages = [
  //   {
  //     message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus consequatur suscipit alias veritatis eaque obcaecati velit hic voluptatem qui."
  //   },
  // ]

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (message.trim()) {
  //     console.log('Message sent:', message);
  //     setMessage('');
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && selectedChat) {
      const newMessage = {
        message: message,
        timestamp: new Date().toLocaleTimeString(),
        arthur: session?.user?.name
      };

      // Update the chat's messages
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === selectedChat.id
            ? { ...chat, messages: [...(chat.messages || []), newMessage] }
            : chat
        )
      );

      // Update the selected chat messages
      setSelectedChat((prevSelectedChat) => ({
        ...prevSelectedChat,
        messages: [...(prevSelectedChat.messages || []), newMessage],
      }));

      setMessage('');
    }
  };


  return (
    <main className='flex h-dvh flex-col justify-between w-full '>
      {/* Header */}
      <div className="grid grid-cols-3 gap-2  ">
        <div className='border-r border-gray-500 text-white '>
          <h4 className='text-lg mb-5'>Chats</h4>

          {/* chat list */}

          <div className="flex flex-col gap-5 overflow-y-auto h-[71vh]">
            {chats.map(chat => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className="cursor-pointer lg:mr-4 rounded-md p-2 hover:bg-transparent/20"
              >
                <UserAvatar {...chat} />
                {/* {chat.lastMessage && (
                  <p className="text-sm text-gray-400">{chat.lastMessage}</p>
                )} */}
              </div>
            ))}
          </div>


          {/* <div className="flex flex-col gap-10 overflow-y-auto h-[71vh]">
            {chats.map(chat => (
              <UserAvatar key={chat.id} {...chat} />
            ))}
          </div> */}

        </div>

        <div className="h-full col-span-2">
          {selectedChat ? (
            <>
              <UserAvatar name={selectedChat.name} username={selectedChat.username} />

              {/* Messages Section */}
              {selectedChat.messages && selectedChat.messages.length > 0 ? (
                <div className='h-[71vh] p-1 text-black overflow-y-auto py-4 pb-10'>
                  {selectedChat.messages.map((msg, index) => (
                    <div key={index} className={`mb-2 p-2 rounded-md bg-gray-100/10 text-white w-3/4`}>
                      <p className="text-lg break-words">{msg.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-[71vh] flex items-center justify-center">
                  <p className="text-gray-400">No messages yet. Start the conversation!</p>
                </div>
              )}
            </>
          ) : (
            <div className="h-[71vh] flex items-center justify-center">
              <p className="text-gray-400">Start chatting by selecting a conversation from the list.</p>
            </div>
          )}

          {/* Message Input */}
          {selectedChat && (
            <div className="p-2 flex border-t border-gray-400 relative">
              <form onSubmit={handleSubmit} className="flex w-full">
                <div className="w-full">
                  <input
                    type="text"
                    className="lg:px-3 lg:py-2 p-2 border rounded-md lg:rounded-lg outline-none text-sm lg:text-lg w-full"
                    placeholder="Send a message..."
                    value={message}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className={`ml-2 bg-blue-600 rounded-lg text-white flex items-center justify-center p-2 ${message.trim() ? 'bg-blue-600' : 'bg-blue-400 cursor-not-allowed'
                    }`}
                  disabled={!message.trim()}
                >
                  <IoIosSend className="lg:text-3xl text-lg rotate-12" />
                </button>
              </form>
            </div>
          )}
        </div>

      </div>

    </main>
  )
}

export default page