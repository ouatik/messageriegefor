import { useContext, useState } from 'react'
import { useRouter } from 'next/router'

type LogoutProps = {
  onLogout: any
}

function LogoutButton({ onLogout }: LogoutProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()
  



  const handleLogout = async () => {
    setIsLoggingOut(true)

    // Appeler votre API ou fonction de déconnexion ici
    function logoutUser() {
      // Supprimez le JWT stocké dans le local storage
      localStorage.removeItem("token")
    
      // Supprimez le JWT stocké dans le cookie, si vous utilisez des cookies pour stocker le JWT
      // document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
      // Redirigez l'utilisateur vers la page de connexion
      router.push('/login')
    }
    // Par exemple, une fonction appelée logoutUser() qui se charge de déconnecter l'utilisateur

    setIsLoggingOut(false)
    onLogout()
    router.push('/login') // Rediriger l'utilisateur vers la page de connexion
  }

  return (
    <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={handleLogout} disabled={isLoggingOut}>
      {isLoggingOut ? 'Déconnexion en cours...' : 'Se déconnecter'}
    </button>
  )
}

export default LogoutButton
