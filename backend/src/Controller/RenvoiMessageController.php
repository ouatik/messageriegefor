<?php

namespace App\Controller;

use App\Entity\Message;
use App\Entity\User;
use App\Repository\MessageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;

class RenvoiMessageController extends AbstractController
{
      #[Route('/api/Renvoimessage', name: 'api_Renvoimessage_index', methods:['GET'])]

   public function retourMessage(MessageRepository $messageRepository, EntityManagerInterface $em, Security $security):Response
   {
      $user = $this->getUser();

      $message = new Message();

      //$idSender = $user->getId();
      $UserRepository = $em->getRepository(User::class);
      
      // $idSender = $UserRepository->findBy($messageSend);
      // dump($idSender);
      // $message->setSender($idSender);

      

      
      return $this->json($messageRepository->findBy($idSender), 200, [], ['groups'=>'post:cool']);
      

   }
}

