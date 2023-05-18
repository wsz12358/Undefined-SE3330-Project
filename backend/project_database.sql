-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sep_project
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `curevent`
--

DROP TABLE IF EXISTS `curevent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curevent` (
  `curevent_id` int NOT NULL AUTO_INCREMENT,
  `Timestamp` varchar(255) DEFAULT NULL,
  `Datatype` varchar(255) DEFAULT NULL,
  `Message` varchar(255) DEFAULT NULL,
  `user` int DEFAULT NULL,
  PRIMARY KEY (`curevent_id`),
  KEY `curevent_user_user_id_fk` (`user`),
  CONSTRAINT `curevent_user_user_id_fk` FOREIGN KEY (`user`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curevent`
--

LOCK TABLES `curevent` WRITE;
/*!40000 ALTER TABLE `curevent` DISABLE KEYS */;
INSERT INTO `curevent` VALUES (6,'4','5','6',2);
/*!40000 ALTER TABLE `curevent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `begintime` varchar(255) DEFAULT NULL,
  `finishtime` varchar(255) DEFAULT NULL,
  `user` int DEFAULT NULL,
  `mul` decimal(10,5) DEFAULT NULL,
  `lat` decimal(10,5) DEFAULT NULL,
  `duration` int DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `event_user` (`user`),
  CONSTRAINT `event_user` FOREIGN KEY (`user`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'test','test/study','2023/4/10/23/13/55','2023/4/10/23/14/55',1,50.00000,50.00000,1),(2,'firstevent','love/death/robot','2023/4/10/23/13/55','2023/4/11/23/13/55',1,55.00000,55.00000,2),(3,'secondevent','study','2023/4/10/23/13/55','2023/4/11/23/13/55',2,60.00000,60.00000,3),(4,'empty','tags','begintime','finishtime',2,65.00000,65.00000,5),(5,'empty','tags','begintime','finishtime',2,70.00000,70.00000,7),(6,'empty','tags','begintime','finishtime',2,75.00000,75.00000,9),(14,NULL,NULL,NULL,NULL,1,345.60000,123.40000,3),(15,'group7','E','2023/05/11/21/37/57','2023/05/11/21/39/10',1,121.48000,31.24000,68);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (2);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `Timestamp` varchar(255) DEFAULT NULL,
  `Datatype` varchar(255) DEFAULT NULL,
  `Message` varchar(255) DEFAULT NULL,
  `message_id` int NOT NULL AUTO_INCREMENT,
  `event` int DEFAULT NULL,
  PRIMARY KEY (`message_id`),
  KEY `event_` (`event`),
  CONSTRAINT `event_` FOREIGN KEY (`event`) REFERENCES `events` (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES ('2023/4/10/14/58/55','msg','test1234567',1,1),('2023/4/11/9/33/52','msg','the first message',2,1),('2023/4/11/9/33/52','msg','the first message',3,1),('2023/4/11/10/18/20','msg','my message',4,1),('2023/2/29/','msg','pizza and more',5,NULL),('2023/2/29/','msg','不许喝百事',6,NULL),('1','msg','123',18,14),('2023/05/11/21/38/07','msg','123',19,15),('2023/05/11/21/38/21','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1683812302/a1hlnzhehundqsqqqd1g.png',20,15),('2023/05/11/21/38/35','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1683812315/tr2kg3cggzlxj8niveo1.jpg',21,15);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sentence_`
--

DROP TABLE IF EXISTS `sentence_`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sentence_` (
  `sentence` varchar(255) DEFAULT NULL,
  `robot_id` int DEFAULT NULL,
  `sentence_id` int NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sentence_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sentence_`
--

LOCK TABLES `sentence_` WRITE;
/*!40000 ALTER TABLE `sentence_` DISABLE KEYS */;
INSERT INTO `sentence_` VALUES ('test',1,1,'study'),('运动开始，要开始留点汗了~',1,2,'exercise'),('已经学习两个小时了，加油噢~',1,3,'study'),('运动半小时了，注意休息哦~',1,4,'exercise');
/*!40000 ALTER TABLE `sentence_` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempevent`
--

DROP TABLE IF EXISTS `tempevent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempevent` (
  `tempevent_id` int NOT NULL AUTO_INCREMENT,
  `begintime` varchar(255) NOT NULL,
  `duration` int NOT NULL,
  `tag` varchar(255) NOT NULL,
  `user` int NOT NULL,
  PRIMARY KEY (`tempevent_id`),
  KEY `tempevent_user_user_id_fk` (`user`),
  CONSTRAINT `tempevent_user_user_id_fk` FOREIGN KEY (`user`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempevent`
--

LOCK TABLES `tempevent` WRITE;
/*!40000 ALTER TABLE `tempevent` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempevent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `nickname` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('g7','group7','12345678910','where','sjtuse2021',1),('ac','acoustic','12345678911','Shanghai','acoustic',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_auth`
--

DROP TABLE IF EXISTS `user_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_auth` (
  `user_id` int NOT NULL,
  `user_type` int DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_auth`
--

LOCK TABLES `user_auth` WRITE;
/*!40000 ALTER TABLE `user_auth` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_auth` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-13 17:26:42
