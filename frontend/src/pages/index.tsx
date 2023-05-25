import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';




const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  



  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login_check`, {
        username: data.username,
        password: data.password,
        
      });

      // Si la connexion réussit, stockez l'état de connexion de l'utilisateur et redirigez-le vers la page de profil
      setIsAuthenticated(true);
      localStorage.setItem("token",response.data.token)
      router.push('/session');
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };
  

  

  const handleLogout = () => {
    // Réinitialiser l'état de connexion de l'utilisateur et rediriger l'utilisateur vers la page de connexion
    setIsAuthenticated(false);
    router.push('/session');
  };
  

  return (
    
    <div className="h-screen flex justify-center items-center bg-gray-200">
    <div className="bg-orange-400 rounded-lg p-8 shadow-lg">
      {!isAuthenticated && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-white" htmlFor="username">Email:</label>
            <input type="text" id="username" {...register('username', { required: true })} className="border rounded-lg px-3 py-2 w-full"/>
            {errors.username && <span className="text-red-500">Username is required</span>}
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-white" htmlFor="password">Password:</label>
            <input type="password" id="password" {...register('password', { required: true })} className="border rounded-lg px-3 py-2 w-full"/>
            {errors.password && <span className="text-red-900">Password is required</span>}
          </div>
          <div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          </div>
          {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
        </form>
      )}
      {isAuthenticated && (
        <div>
          <p>You are logged in!</p>
          <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logout</button>
        </div>
      )}
    </div>
  </div>
  
  );
};

export default Login;
