<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
class Message
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups("post:cool")]
    
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups("post:cool")]
    # TODO RENAME le nom de ton groupe de sérialisation est bizarre ^^ Tu peux l'appeler api ou external ou autre chose
   
    
    private ?string $message = null;

    #[ORM\ManyToOne(inversedBy: 'messagesSent')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups("post:cool")]
  
   
    private ?User $sender = null;

    #[ORM\ManyToOne(inversedBy: 'messages')]
    #[Groups("post:cool")]
    
    private ?User $Receiver = null;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getSender(): ?User
    {
        return $this->sender;
    }

    public function setSender(?User $sender): self
    {
        $this->sender = $sender;

        return $this;
    }

    public function getReceiver(): ?User
    {
        return $this->Receiver;
    }

    public function setReceiver(?User $Receiver): self
    {
        $this->Receiver = $Receiver;

        return $this;
    }
}
