import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSelector from "@/compenant/SelecteurUser";

import { useQuery, useMutation, QueryClient, QueryClientProvider } from "react-query";


type Message = {
  id: string;
  message: string;
  recipient: string;
  sender: {
    id: string;
  }

};

function SendMessage() {
  const [message, setMessage] = useState("");
  const [recipientId, setRecipientId] = useState<string | undefined>();
  // const Idsender = User["id"];
  const token =
    typeof localStorage !== "undefined" ? localStorage.getItem("token") : "";

  const fetchMessages = async () => {
    const response = await axios.get<Message[]>(
      `http://localhost:8000/api/Renvoimessage?receiverId=${recipientId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  };
  const { data, isLoading } = useQuery<Message[]>({
    queryKey: ['messages'],
    queryFn: fetchMessages,
    refetchInterval: 1000,
  });

  const {
    data: messages,
    isLoading: isMessagesLoading,
    isError: isMessagesError,
    refetch: refetchMessages,
  } = useQuery<Message[]>("messages", fetchMessages, {
    enabled: !!recipientId,
  });

  console.log(message);

  const sendMessageMutation = useMutation((newMessage: Message) =>
    axios.post("http://localhost:8000/api/message", newMessage, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    sendMessageMutation.mutate({
      id: "",
      message: message,
      recipient: recipientId || "",
      sender: { id: "" },
    });
    setMessage("");
  };
  

  sendMessageMutation.isSuccess && refetchMessages();

  return (
    <>
      <div className="h-screen flex flex-col bg-gray-200">
        <div className="bg-orange-500 text-white p-4 flex justify-center">
          Messagerie  {recipientId}
        </div>
        <div className="w-full-screen flex-1 overflow-y-scroll p-4">
          {messages?.sort((a, b) => parseInt(a.id) - parseInt(b.id)).map((message, index) => (
           <div className={`flex ${recipientId === message.sender?.id ? "justify-end" : "justify-start"} mb-4`} key={index}>
              <div className={`ml-2 text-white ${recipientId == message.sender?.id ? "bg-blue-500" : "bg-green-500"} rounded-lg p-2`}>
                <p>{message.sender.id}</p>
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
              onChange={(event) => setMessage(event.target.value)}
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SendMessage />
    </QueryClientProvider>
  );
}

export default App;
