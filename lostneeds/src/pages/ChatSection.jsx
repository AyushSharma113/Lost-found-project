import React from "react";
// import defaultAvatar from "../../public/assets/default.jpg";
import { RiMore2Fill } from "react-icons/ri";

const Chatlist = ({ messages = [] }) => {
  const user = {
    fullName: "ChatFrik User",
    username: "chatfrik",
    // image: defaultAvatar,
  };

  const sampleChats = messages.length
    ? messages
    : [
        { id: 1, name: "Alice", lastMessage: "Hey there!", time: "10:30 AM" },
        { id: 2, name: "Bob", lastMessage: "What’s up?", time: "9:15 AM" },
        {
          id: 3,
          name: "Charlie",
          lastMessage: "Let’s catch up soon.",
          time: "Yesterday",
        },
      ];

  return (
    <section className="bg-white h-full w-full lg:w-3/5 flex flex-col">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={user.image}
            alt="User Avatar"
            className="w-11 h-11 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{user.fullName}</h3>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
        </div>
        <button className="p-2 bg-gray-100 rounded-lg">
          <RiMore2Fill size={24} />
        </button>
      </header>

      <div className="p-4 flex items-center justify-between">
        <h3 className="text-lg">Messages ({sampleChats.length})</h3>
        <button className="p-2 bg-blue-500 text-white rounded">New Chat</button>
      </div>

      <main className="flex-1 overflow-y-auto">
        {sampleChats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center justify-between px-4 py-3 border-b hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {/* <img
                src={defaultAvatar}
                alt="Chat Avatar"
                className="w-10 h-10 rounded-full object-cover"
              /> */}
              <div>
                <h4 className="font-medium text-gray-800">{chat.name}</h4>
                <p className="text-sm text-gray-600">{chat.lastMessage}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400">{chat.time}</span>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Chatlist;
