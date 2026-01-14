import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  FaHeadset,
  FaPaperclip,
  FaPaperPlane,
} from "react-icons/fa";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { formatDistanceToNow } from "date-fns";

const socket = io(import.meta.env.VITE_serverURL);

const Chats = () => {
  const { user } = use(AuthContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // const [typingUser, setTypingUser] = useState([]);
  // console.log(newMessage);

  useEffect(() => {
    if (!user?.displayName) return;

    socket.emit("userName", user.displayName);

    socket.on("roomNotice", (userName) => {
      console.log("New user:", userName);
    });

    socket.on("oldMessages", (messages) => {
      setMessages(messages);
    });

    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("roomNotice");
      socket.off("oldMessages");
      socket.off("receiveMessage");
    };
  }, [user?.displayName]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const messageData = {
      text: newMessage,
      sender: user?.displayName,
      time: new Date().toLocaleTimeString(),
    };

    // setMessages((prev) => [...prev, messageData]);

    socket.emit("sendMessage", messageData);
    setNewMessage("");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100/10">
      {/* Header */}
      <div className="p-4 bg-blue-500 text-white font-bold">
        ChatNest – Real-Time Chat
        {/* {typingUser && <p>{typingUser} is typing...</p>} */}
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.sender === user?.displayName
                ? "ml-auto bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <h2 className="text-lg font-bold">{msg.sender}</h2>
            <p>{msg.text}</p>
            {/* <span className="text-xs opacity-70">{msg.time}</span> */}
              <span className="text-xs">
                    {/* {chat.time}{" "} */}
                    {msg.time
                      ? formatDistanceToNow(new Date(msg.time), {
                          addSuffix: true,
                        })
                      : "Recently"}
                  </span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 relative bg-white/20 border-t flex gap-3">
        <button
          onClick={() => {}}
          className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
        >
          <FaPaperclip />
        </button>

        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
        >
          <FaPaperPlane />
        </button>

        <button className="bg-blue-500 hidden md:block text-white px-4 rounded-lg hover:bg-blue-600">
          <FaHeadset />
        </button>
      </div>
    </div>
  );
};

export default Chats;
