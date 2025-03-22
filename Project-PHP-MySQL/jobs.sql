-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2022 at 04:07 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobs`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
  `id` int(11) NOT NULL,
  `candname` varchar(255) NOT NULL,
  `compname` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `qualification` varchar(50) NOT NULL,
  `year` varchar(50) NOT NULL,
  `mail` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`id`, `candname`, `compname`, `position`, `qualification`, `year`, `mail`) VALUES
(1, 'My Name', 'Google', 'Web Developer', 'B Tech', '2022', ''),
(12, 'Name', 'Infosys', 'Android App Developer', 'B Tech', '2022', ''),
(13, 'random', 'google', 'web developer', 'be', '2019', 'mail@mail.mail');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `cname` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `jdesc` varchar(200) NOT NULL,
  `skills` varchar(50) NOT NULL,
  `ctc` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `cname`, `position`, `jdesc`, `skills`, `ctc`) VALUES
(5, 'Google', 'Web Developer', 'Web Developer Required', 'HTML, CSS, JavaScript, SQL,PHP', '12 LPA'),
(6, 'Infosys', 'Android App Developer', 'App Developer is required', 'Java, Android', '6 LPA'),
(7, 'Microsoft', 'HR', 'Required HR', 'Communication Skills', '14 LPA'),
(8, 'Coincent', 'Teacher', 'Maths Teacher Required', 'Mathematics', '4 LPA');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(110) NOT NULL,
  `phone_no` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone_no`, `password`) VALUES
(1, 'Sample Name', 'sample@email.com', '9876543210', 'asdf'),
(2, 'Person', 'person@mail.com', '7894561230', 'pass'),
(3, 'KASHYAP K.V.H', 'kashyapkvh@gmail.com', '9392384155', 'Kashyap@1'),
(4, 'Sample Name', 'sample@email.com', '9887456123', 'asdf'),
(5, 'Name Of the Person', 'HJV@gs.com', '98746513200', 'asdfq'),
(6, 'Sample Name q', 'person1@mail.com', '123456', 'qwerty');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidates`
--
ALTER TABLE `candidates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidates`
--
ALTER TABLE `candidates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
