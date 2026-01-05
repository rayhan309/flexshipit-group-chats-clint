import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { FaPaperPlane } from "react-icons/fa";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const socket = io("http://localhost:4800");

const Chats = () => {
  const { user } = use(AuthContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // console.log(user?.displayName);
  useEffect(() => {
    socket.on("connect", () => {

    if(!user) return;

      socket.emit("userName", user?.displayName);

      socket.on("roomNotice", (userName) => {
        console.log({ newUser: userName });
      });

      socket.on("receiveMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });
    });

    return () => socket.off("receiveMessage");
  }, [user?.displayName]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const messageData = {
      text: newMessage,
      sender: "me",
      time: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, messageData]);

    socket.emit("sendMessage", messageData);
    setNewMessage("");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100/10">
      {/* Header */}
      <div className="p-4 bg-blue-500 text-white font-bold">
        ChatNest – Real-Time Chat
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.sender === "me"
                ? "ml-auto bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            <p>{msg.text}</p>
            <span className="text-xs opacity-70">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white/20 border-t flex gap-3">
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
      </div>
    </div>
  );
};

export default Chats;
