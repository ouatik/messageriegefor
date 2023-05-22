<?php

namespace App\Controller;


use App\Entity\Message;
use App\Entity\User;
use App\Repository\MessageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Annotation\Groups;

class ApiMessageController extends AbstractController
{
    #[Route('/api/message', name: 'api_message_index', methods:['POST'])]
    public function index(Request $request, SerializerInterface $serializer, EntityManagerInterface $em): Response
    {
       $jsonmessage = json_decode($request->getContent(),true);
       $message = new Message();

       $messageContent = $jsonmessage['message'];
       $message->setMessage($messageContent);

       $senderContent = $this->getUser();
       $message->setSender($senderContent);

       $receiverId = $jsonmessage ['recipient'];
       $userRepository = $em->getRepository(User::class);
       $receiverContent = $userRepository->find($receiverId);
       $message->setReceiver($receiverContent);

       $em->persist($message);
       $em->flush();

       return $this->json($message, 200, [], ['groups'=>'post:option_message']);
       
    }

  

}