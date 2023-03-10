-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Mar-2023 às 18:34
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `app`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `ingresso`
--

CREATE TABLE `ingresso` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `data_evento` varchar(255) NOT NULL,
  `valor` varchar(255) NOT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `foto_disponivel` varchar(255) DEFAULT NULL,
  `foto_indisponivel` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `ingresso`
--

INSERT INTO `ingresso` (`id`, `nome`, `data_evento`, `valor`, `quantidade`, `foto`, `foto_disponivel`, `foto_indisponivel`) VALUES
(1, 'Ingresso 1', '12/12/2023', '200,00', 250, 'https://serving.photos.photobox.com/553202462f81547590a469dec77897aeaf0214cb990399c2d893d2d03bd501bb3479bd7f.jpg', 'https://serving.photos.photobox.com/45111353e06bea24b6c78f3d2d2e0ce6fc2ba9e4c0e6c2a62eb7277d79c3f3dfc9619dd3.jpg', 'https://serving.photos.photobox.com/242358626b792c1f370bb56e27f63cd331aceb5af3735f1a95b515a1f037f515289eb293.jpg'),
(2, 'Ingresso 2', '02/12/2023', '250,00', 1, 'https://serving.photos.photobox.com/289087868bebda4a7a6de65ffe6408cec4b1197c273bd6a5b97333a3231921ea23beddef.jpg', 'https://serving.photos.photobox.com/66994385189652dd3b2aa86ca8d8c28b525dfa84d3aaeb21d69c5bf937244d1b4226ba0e.jpg', 'https://serving.photos.photobox.com/8273609950e457ea1220620244f64d2135483790cb2d4fc55c139af8bd957c6bea599cf4.jpg'),
(3, 'Ingresso 3', '03/12/2023', '250,00', 1, 'https://serving.photos.photobox.com/65750428ec750557ab27feeb2eb2bf82e33f7c75df0616c4eada563d9737c1726288148f.jpg', 'https://serving.photos.photobox.com/66078239cbe88380dfbe9c1a6edced47d86fc2d48e9e487a9926d20d5c278e8b6208c426.jpg', 'https://serving.photos.photobox.com/8273609950e457ea1220620244f64d2135483790cb2d4fc55c139af8bd957c6bea599cf4.jpg'),
(4, 'Passaporte', 'All Day', '500', 1, 'https://serving.photos.photobox.com/87780098f4bd23d03244a224b6c41a8d3e93f0e02c20fc5af3a52dd89d98e12848d60cab.jpg', 'https://serving.photos.photobox.com/91442913d1e66b36e3566a09e86c10cbbacb70e4e94e95ee50a9571a6e11297f8fc42286.jpg', 'https://serving.photos.photobox.com/1506863778c7aa11c64f2800f836cee3b82410f547f062ed5f5eaf84a11f8f54c1aa3a05.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedido_ingresso`
--

CREATE TABLE `pedido_ingresso` (
  `id` int(11) NOT NULL,
  `nome_usuario` varchar(255) NOT NULL,
  `cpf_usuario` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `id_ingresso` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `pedido_ingresso`
--

INSERT INTO `pedido_ingresso` (`id`, `nome_usuario`, `cpf_usuario`, `email`, `id_ingresso`) VALUES
(2, 'asdasdsa', '40028922000', 'joseg081@gmail.com', 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `valor` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `titulo`, `valor`, `descricao`, `imagem`) VALUES
(1, 'Camisa Amarela Space Festival', '250,00', 'G', 'https://serving.photos.photobox.com/22484384f4584e3f8eff1310ffbb5e7e26989bc813b2f9a98eea6afac7a955b330b8f234.jpg'),
(2, 'Camisa Lilas Space Festival', '250,00', 'M', 'https://serving.photos.photobox.com/78992210c886144ad8fbce3379e7581efc9a09885e73685ff00eec48992c456280807312.jpg'),
(5, 'Camisa Azul Space Festival', '200,00', 'GG', 'https://serving.photos.photobox.com/874240060ec67032bf3fe0d404456e9ff50809c17635c99783b48984a7792c4baa57bdfc.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `ingresso`
--
ALTER TABLE `ingresso`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `pedido_ingresso`
--
ALTER TABLE `pedido_ingresso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_ingresso` (`id_ingresso`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `ingresso`
--
ALTER TABLE `ingresso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `pedido_ingresso`
--
ALTER TABLE `pedido_ingresso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `pedido_ingresso`
--
ALTER TABLE `pedido_ingresso`
  ADD CONSTRAINT `pedido_ingresso_ibfk_1` FOREIGN KEY (`id_ingresso`) REFERENCES `ingresso` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
