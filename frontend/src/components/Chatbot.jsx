import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // ✅ loading flag
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setIsLoading(true); // ✅ disable input & button

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: newMessage.text,
      });

      const botReply = res.data.botResponse;

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Server error, please try again." },
      ]);
    } finally {
      setIsLoading(false); // ✅ enable input & button back
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl flex flex-col h-[80vh] max-w-3xl mx-auto">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl max-w-[70%] ${
              msg.sender === "user"
                ? "bg-purple-600 text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800 self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {isLoading && (
          <div className="bg-gray-200 text-gray-600 p-3 rounded-xl max-w-[40%] self-start mr-auto italic">
            Your Personal Wellness coach is typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="border-t p-3 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l-lg p-2 outline-none"
          placeholder={isLoading ? "Waiting for response..." : "Type your message..."}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={isLoading} // ✅ disable input while waiting
        />
        <button
          onClick={sendMessage}
          className={`px-5 rounded-r-lg ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
          disabled={isLoading} // ✅ disable button
        >
          {isLoading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
