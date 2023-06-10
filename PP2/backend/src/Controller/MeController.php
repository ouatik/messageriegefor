<?php

namespace App\Controller;

use App\Repository\MessageRepository;
use App\Repository\UserRepository;
use Container2RqzNUu\getUserTypeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MeController extends AbstractController
{
  /**
 * @Route("/api/me", name="api_me_index", methods={"GET"})
 */
    public function index(UserRepository $userRepository, MessageRepository $messageRepository, SerializerInterface $serializer)
    {

        return $this->json($this->getUser(), 200, [], ['groups'=>'post:cool']);

        
    }

     /**
 * @Route("/api/recupUser", name="api_recupUser_index", methods={"GET"})
 */
public function recup(UserRepository $userRepository, MessageRepository $messageRepository, SerializerInterface $serializer)
{

    return $this->json($userRepository->findAll(), 200, [], ['groups'=>'post:cool']);

    
}
    
    

    
}

