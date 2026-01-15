import { useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { FaPaperPlane, FaMicrophone, FaStop } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { AuthContext } from "../../Context/AuthContext";

const socket = io(import.meta.env.VITE_serverURL);

const Chats = () => {
  const { user } = useContext(AuthContext);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [recording, setRecording] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // 🔌 Socket connection
  useEffect(() => {
    if (!user?.displayName) return;

    socket.emit("userName", user.displayName);

    socket.on("oldMessages", (msgs) => {
      setMessages(msgs);
    });

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("oldMessages");
      socket.off("receiveMessage");
    };
  }, [user?.displayName]);

  // 📩 Send text message
  const handleSend = () => {
    if (!newMessage.trim()) return;

    socket.emit("sendMessage", {
      type: "text",
      text: newMessage,
      sender: user.displayName,
      time: new Date().toISOString(),
    });

    setNewMessage("");
  };

  // 🎤 Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const audioURL = URL.createObjectURL(audioBlob);

        socket.emit("sendMessage", {
          type: "audio",
          audio: audioURL,
          sender: user.displayName,
          time: new Date().toISOString(),
        });
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch {
      alert("Microphone permission denied");
    }
  };

  // ⏹️ Stop recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="h-screen flex flex-col ">
      {/* Header */}
      <div className="p-4 bg-blue-500 text-white font-bold text-center">
        ChatNest – Real-Time Chat
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
            <p className="text-xs font-semibold">{msg.sender}</p>

            {/* Text message */}
            {msg.type === "text" && <p>{msg.text}</p>}

            {/* Voice message */}
            {msg.type === "audio" && (
              <audio controls src={msg.audio} className="mt-2 w-full" />
            )}

            <span className="text-[10px] opacity-70 block mt-1">
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
      <div className="p-4 bg-white/20 border-t flex gap-3 items-center">
        {/* Voice button */}
        {!recording ? (
          <button
            onClick={startRecording}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            <FaMicrophone />
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            <FaStop />
          </button>
        )}

        {/* Text input */}
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="md:flex-1 border rounded-lg px-4 py-2 focus:outline-none"
        />

        {/* Send */}
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chats;
