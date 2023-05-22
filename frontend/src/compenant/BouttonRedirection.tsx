import { useRouter } from 'next/router';

export default function MessagingButton() {
  const router = useRouter();

  const handleMessagingClick = () => {
    router.push('/messagerie');
  };

  return (
    <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={handleMessagingClick}>
      Aller à la messagerie
    </button>
  );
}
