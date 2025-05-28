'use client';
import { useEffect, useRef } from 'react';

interface User {
  id: string;
  name: string;
  profileImage?: string;
}

interface Message {
  senderId: string;
  content: string;
  createdAt: string;
}

interface ChatProps {
  chatUser: User;
  user: User;
  messages: Message[];
  sendMessageHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  setMessage: (value: string) => void;
  message: string;
}

const Chat = ({
  chatUser,
  user,
  messages,
  sendMessageHandler,
  setMessage,
  message,
}: ChatProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const scrollToBottom = () => {
    if (messagesEndRef?.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className='w-[90%] h-[80vh] rounded-lg shadow-md shadow-[#79c5ef] flex flex-col'>
      {/* Header */}
      <div className='flex items-center p-4 bg-gray-100 border-b border-gray-300'>
        {chatUser?.profileImage ? (
          <img
            src={chatUser.profileImage}
            alt={chatUser.name}
            className='h-10 w-10 rounded-full object-cover mr-3'
          />
        ) : (
          <div className='h-10 w-10 flex items-center justify-center bg-blue-500 rounded-full text-white mr-3'>
            {chatUser.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h2 className='text-lg font-semibold text-gray-800'>{chatUser.name}</h2>
        </div>
      </div>

      <div className='flex flex-col h-full bg-white'>
        <div className='flex-1 overflow-auto p-4 space-y-4'>
          {messages && messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className='flex-1'>
                <div className={msg.senderId === user.id ? 'flex justify-end' : 'flex justify-start'}>
                  <div className={msg.senderId === user.id ? 'bg-blue-500 text-white p-3 rounded-lg relative' : 'bg-gray-300 text-gray-900 p-3 rounded-lg relative'}>
                    {msg.content}
                  </div>
                  <span className='text-xs text-gray-500 ml-2 self-end'>
                    {formatTime(msg.createdAt)}
                  </span>
                </div>
              </div>
            ))
          ) : null}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input Section */}
        <div className='p-4 bg-white shadow-lg rounded-md'>
          <div className='bg-white p-2 rounded-md border border-gray-300'>
            <form className='flex items-center' onSubmit={sendMessageHandler}>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='flex-1 rounded-md focus:outline-none px-3 py-2 border border-gray-300'
                placeholder="Type a message..."
              />
              <button
                type='submit'
                className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
