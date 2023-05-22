import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

export type userReceiver = {
  id: number;
}

type ReceiverMessageProps = {
 onChange: any
}

type User = {
  id: number;
  name: string;
}

export function UserSelector({ onChange }: ReceiverMessageProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState('');
  const token = typeof localStorage !== "undefined" ? localStorage.getItem("token") : "";
  
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('http://localhost:8000/api/recupUser', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [token]);

  const handleUserChange = (event: any) => {
    setSelectedUser(event.target.value);
    debugger
    onChange(event.target.value)
    
  };
  

  return (
    <div className="flex items-center">
      <select
        name="user"
        id="user"
        className="border border-gray-300 bg-blue-500 rounded-full py-2 px-4 text-white"
        value={selectedUser}
        onChange={handleUserChange}
      >
        <option className="texte-white" key="default" value="">Choisir un utilisateur</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
     
    </div>
  );
}

export default UserSelector;
