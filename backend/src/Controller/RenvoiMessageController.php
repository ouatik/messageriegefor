<?php

namespace App\Controller;

use App\Entity\Message;
use App\Entity\User;
use App\Repository\MessageRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class RenvoiMessageController extends AbstractController
{
   #[Route('/api/Renvoimessage', name: 'api_Renvoimessage_index', methods: ['GET'])]
   public function mesMessagesAvec(Request $request, MessageRepository $messageRepository,UserRepository $userRepository): Response
   {

      $idReceiver = $request->query->get('receiverId');


      $receiver = $userRepository->find($idReceiver);
      // recuperer l'id du receiver depuis la request
      //demande à chatgpt comment récupérer une variable depuis la request d'une route GET en symfony


      // recuperer le receiver depuis l'entity manager

      //passer dans le find by avec le sender
      $sender = $this->getUser();
      $messagesISent = $messageRepository->findBy(['sender' => $sender,
                                             'Receiver'=> $receiver,
                                          ]);

      $messagesIReceived = $messageRepository->findBy(['Receiver'=> $sender, 'sender' => $receiver]);
   
      $messages = array_merge($messagesIReceived, $messagesISent);

       return $this->json($messages, 200, [], ['groups' => 'post:cool']);
   }

   // #[Route('/api/Renvoimessage', name: 'api_Renvoimessage_index', methods: ['GET'])]
   // public function mesMessagesReiceveir(MessageRepository $messageRepository, UserRepository $userRepository): Response
   // {
   //    $user = $this->getUser();
   //    $messages = $messageRepository->findBy(['Receiver' => $user,
   //                                             'message' => $user]
   // );
   
   //     return $this->json($messages, 200, [], ['groups' => 'post:cool']);
   // }
   
}

