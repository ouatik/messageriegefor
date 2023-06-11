import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';

type User = {
  id: number;
  email: string;
  name: string;
};

const queryClient = new QueryClient();

function RecupUser() {
  const token =
    typeof localStorage !== 'undefined' ? localStorage.getItem('token') : '';

  const { data: user, isLoading, isError } = useQuery<User>('user', async () => {
    const response = await axios.get<User>(`${process.env.NEXT_PUBLIC_API_URL}/api/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error retrieving user data</p>;
  }

  return (
    <>
      <h1>Bonjour {user?.email}</h1>
      <h1>ID utilisateur : {user?.id}</h1>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecupUser />
    </QueryClientProvider>
  );
}

export default App;
