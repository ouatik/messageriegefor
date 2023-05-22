import MessagingButton from "@/compenant/BouttonRedirection";
import LogoutButton from "@/compenant/Logout"
import RecupUser from "@/compenant/RecupUser";


function HomePage() {
  const handleLogout = () => {
    // Mettre à jour l'état de votre application pour indiquer que l'utilisateur n'est plus connecté
  };
  

  return (
    <div>
      {/* Votre page d'accueil */}
      <LogoutButton onLogout={handleLogout} />
      <RecupUser  />
      <MessagingButton />
      
      
    </div>
  )
};
export default HomePage;


 