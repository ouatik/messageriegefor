-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : dim. 11 juin 2023 à 20:11
-- Version du serveur : 5.7.39
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `PPE2`
--

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20230420122146', '2023-04-20 12:21:51', 65),
('DoctrineMigrations\\Version20230504132415', '2023-05-04 14:05:10', 32),
('DoctrineMigrations\\Version20230504151057', '2023-05-04 15:13:40', 94);

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`id`, `message`, `sender_id`, `receiver_id`) VALUES
(244, 'bonjour name', 4, 3),
(245, '', 4, 3),
(246, 'bonojour jule', 3, 4),
(247, 'comment sa va ?', 4, 3),
(248, 'comment sava ', 4, 3),
(249, 'bah', 3, 4),
(250, 'bah koi ?', 4, 3),
(251, 'ba di mioi', 4, 3),
(252, 'ba rien', 3, 4),
(253, 'c bon je suis revenu', 3, 4),
(254, 't t ou ?', 4, 3),
(255, 'ba chez moi', 4, 3),
(256, 'oui', 3, 4),
(257, 'sa va ', 4, 3),
(258, 'alor', 3, 4),
(259, 'a koi', 4, 3),
(260, 'ba rien', 3, 4),
(261, 'commen ca rien ', 3, 4),
(262, 'ba j\'ai rien a dire ', 4, 3),
(263, 'par contre ', 3, 4),
(264, 'sa marche ', 3, 4),
(265, 'alor', 3, 4),
(266, 'ba', 3, 4),
(267, 'cool', 3, 4),
(268, 'messa', 3, 4),
(269, 'ok', 4, 3),
(270, 'okokook', 4, 3),
(271, 'merci', 3, 4),
(272, 'okok', 4, 5),
(273, 'okok', 4, 6),
(274, 'okok', 4, 4),
(275, 'merci', 4, 3),
(276, 'merci be', 3, 4),
(277, 'coucou', 4, 3),
(278, 'bon ', 3, 4),
(279, 'bon', 3, NULL),
(280, 'bon', 3, 4),
(281, 'salut', 3, 4),
(282, 'et toi', 3, 4),
(283, 'trankil', 3, 4),
(284, 'tu assure a max', 4, 3),
(285, 'merci', 4, 3),
(286, 'tu vas bien ?', 3, 4),
(287, 'oui sa va ', 3, 4),
(288, 'salut', 4, 6),
(289, 'salut', 4, 3),
(290, 'oui sava ', 3, 4),
(291, 'salut', 3, 5),
(292, 'salut', 6, 3),
(293, 'salut jule ', 3, 4);

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint(20) NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `name`, `firstname`) VALUES
(2, 'yannis.baraguay@gmail.com', '[]', '$2y$13$FUFKHWzhHFIYIC6Dyc4rO.1OzcTH2dTWAwVMk0ICbhh8Rq2gR5eiu', 'name', 'baba'),
(3, 'cacao@gmail.com', '[]', '$2y$13$fkTjCXroVHenW.vBXewM.ujBaetrErHV3OGP8zp9jzKy5.xXF2BHO', 'name', 'firstaname'),
(4, 'jule@gmail.com', '[]', '$2y$13$i4/qKTszMIwpNH0HJNcjb.l3.7XZvZKkuIf7bASe2w.ZPlBtvaxR2', 'jule', 'baldwin'),
(5, 'yannaaa.baraguay@gmail.com', '[]', '$2y$13$Vj99Ay10QpVCFPTGXGgm.Ov9gCwMzFfSuqRjeBFp75Erckk6f.Waq', 'cyril', 'cool'),
(6, 'savhjxvszjhx@hegfchd.gmail', '[]', '$2y$13$Z7Lb1S4PqDhsHx7Yj7SZLew4VC5w6urrMcwi/wU5X416pS2DXKhn2', 'bidule', 'baba'),
(7, 'doqsdjn@jnkjnv.com', '[]', '$2y$13$QocavSZZJC/DDIxfcx5YceMl7aQ0Qp4pvWNwK4U/WLinuutMdJP.O', 'bebe', 'bebe');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B6BD307FF624B39D` (`sender_id`),
  ADD KEY `IDX_B6BD307FCD53EDB6` (`receiver_id`);

--
-- Index pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=294;

--
-- AUTO_INCREMENT pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `FK_B6BD307FCD53EDB6` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_B6BD307FF624B39D` FOREIGN KEY (`sender_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
