import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserSelector from "@/compenant/SelecteurUser";

type Message = {
  message: string;
  author: string;
  recipient: string;
};

function SendMessage() {
  const [message, setMessage] = useState("");
  const [recipientId, setRecipientId] = useState<string>();
  const [messages, setMessages] = useState<Message[]>([]);
  const token =
    typeof localStorage !== "undefined" ? localStorage.getItem("token") : "";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .post(
        `${process.env.API_URL}/api/message`,
        {
          message: message, recipient: parseInt(recipientId ?? "")
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then((response) => {
        console.log("Message envoyé :", response.data);
        setMessage("");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du message :", error);
      });
  };

  const handleInputChange = (event: any) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    axios
      .get<Message[]>(`${process.env.NEXT_PUBLIC_API_URL}/api/Renvoimessage`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Messages récupérés :", response.data);
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des messages :", error);
      });
  }, [token, recipientId]);

  return (
    <>
      <div className="h-screen flex flex-col bg-gray-200">
        <div className="bg-orange-500 text-white p-4 flex justify-center">
          Messagerie
        </div>
        <div className="flex-1 overflow-y-scroll p-4">
          {messages.map((message, index) => (
            <div className="flex justify-start mb-4" key={index}>
              <div className="flex-1 ml-2 text-white bg-blue-500 rounded-lg p-2">
                <p className="font-medium">{message.author}</p>
                <p>{message.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 p-4">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              placeholder="Écrire un message..."
              className="flex-1 rounded-full border-gray-300 px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={message}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Envoyer
            </button>

            <UserSelector onChange={setRecipientId} />
          </form>
        </div>
      </div>
    </>
  );
}

export default SendMessage;
