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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(255) DEFAULT NULL,
  `sharedevent` int DEFAULT NULL,
  `user` int NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `comments_sharedevents_sharedevent_id_fk` (`sharedevent`),
  KEY `comments_user_user_id_fk` (`user`),
  CONSTRAINT `comments_sharedevents_sharedevent_id_fk` FOREIGN KEY (`sharedevent`) REFERENCES `sharedevents` (`sharedevent_id`),
  CONSTRAINT `comments_user_user_id_fk` FOREIGN KEY (`user`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

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
  `cover` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `event_user` (`user`),
  CONSTRAINT `event_user` FOREIGN KEY (`user`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (21,'group7','','2023/05/15/17/23/49','2023/05/15/17/24/09',1,121.48000,31.24000,11,NULL),(23,'group7','C/E/F','2023/05/15/17/24/32','2023/05/15/17/24/49',1,121.48000,31.24000,10,NULL),(25,'group7','C/H','2023/05/15/17/25/05','2023/05/15/17/25/31',1,121.48000,31.24000,18,NULL),(26,'group7','','2023/05/15/17/25/57','2023/05/15/17/26/18',1,121.48000,31.24000,13,NULL),(32,'group7','B/D/H','2023/05/18/20/52/44','2023/05/18/20/53/22',1,121.48000,31.24000,89,NULL),(33,'group7','A/F','2023/05/18/20/56/35','2023/05/18/20/56/59',1,121.48000,31.24000,21,NULL),(34,'group7','B/F','2023/05/18/21/01/34','2023/05/18/21/02/01',1,121.44000,31.03000,21,NULL),(35,'group7','','2023/05/18/21/12/50','2023/05/18/21/15/56',1,121.44000,31.03000,15,NULL),(46,'group7','','2023/05/19/12/43/06','2023/05/19/12/43/17',1,121.44012,31.03230,0,NULL),(47,'group7','A/D/F','2023/05/19/14/07/14','2023/05/19/14/07/43',1,121.44000,31.03000,0,NULL),(48,'group7','C','2023/05/19/14/10/12','2023/05/19/14/10/28',1,121.43838,31.02538,0,NULL),(49,'group7','D/B','2023/05/19/16/06/24','2023/05/19/16/06/54',1,121.43969,31.02834,221,NULL),(50,'group7','','2023/06/04/10/02/52','2023/06/04/10/03/30',1,121.48054,31.23593,0,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES ('2023/05/15/17/23/55','msg','qsqsqsqsqs',28,21),('2023/05/15/17/23/59','msg','asasasas',29,21),('2023/05/15/17/24/34','msg','dwdw',30,23),('2023/05/15/17/25/22','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1684142721/aiyuepxg2d4sgxxn8gnn.png',31,25),('2023/05/15/17/26/01','msg','qd',32,26),('2023/05/15/17/26/07','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1684142767/yzufsnnvpwxfyh8kbfuj.png',33,26),('2023/05/15/17/26/08','msg','dw',34,26),('2023/05/18/20/52/17','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1684414337/fc8iic15ukrfzatynmhh.png',35,32),('2023/05/18/20/52/32','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1684414352/bhmbarbd9x6h1eu7pxt7.png',36,32),('2023/05/18/20/52/38','msg','wd',37,32),('2023/05/18/20/52/57','msg','dwddwwd',38,32),('2023/05/18/20/53/10','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1684414389/tckyklkyvp1bqpm1mx6g.png',39,32),('2023/05/18/20/56/55','msg','wd',40,33),('2023/05/18/21/01/44','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1684414904/bbs7xrroeswvzcxwjybx.png',41,34),('2023/05/18/21/01/48','msg','dw',42,34),('2023/05/18/21/01/50','msg','dwdwf',43,34),('2023/05/18/21/12/44','msg','dwd',45,35),('2023/05/19/12/35/39','msg','dfdfqef',63,46),('2023/05/19/12/35/47','msg','efwvW',64,46),('2023/05/19/12/36/00','msg','EWFWAEVGER',65,46),('2023/05/19/12/45/57','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1684471558/yrkbxjflw74cxclaepuo.png',66,23),('2023/05/19/14/07/16','msg','efewf',67,47),('2023/05/19/14/07/33','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1684476453/to2esobhjpdzpzfnlflh.png',68,47),('2023/05/19/14/07/39','msg','fw',69,47),('2023/05/19/14/10/15','msg','wddqwqdqddw',70,48),('2023/05/19/14/10/22','msg','ewfwefw',71,48),('2023/05/19/16/02/55','msg','心得xxxx',72,49),('2023/05/19/16/03/03','msg','心得2',73,49),('2023/05/19/16/04/37','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1684483478/sn7auw3vakaa6boan0xx.png',74,49),('2023/05/19/16/04/37','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1684483478/xfaqtgrmuvdtm4ayxnj8.png',75,49),('2023/05/19/16/04/53','msg','一段话',76,49),('2023/05/19/16/05/29','img','https://res.cloudinary.com/dqqesuzb8/image/upload/v1684483530/czl7rhcqtrpliwb7ouxx.png',77,49),('2023/05/19/16/06/39','msg','一段话2',78,49),('2023/05/19/16/07/32','msg','感想3',79,49),('2023/06/04/10/02/59','msg','dwdwd',80,50),('2023/06/04/10/03/04','msg','无敌无敌无敌、、',81,50);
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sentence_`
--

LOCK TABLES `sentence_` WRITE;
/*!40000 ALTER TABLE `sentence_` DISABLE KEYS */;
INSERT INTO `sentence_` VALUES ('学无止境，您的求知精神实在令人敬佩。不过，博士，也请不要过度透支自己，保重身体哦。\n',1,1,'study'),('博士，锻炼是非常好的，能让我们在战斗中更加强大。只是别忘了，过度劳累也是会影响战斗力的哦。',1,2,'exercise'),('您一直为罗德岛付出了很多，我们都看在眼里。请记得适时调整，我们都会支持您的。\n',1,3,'work'),('与干员们建立信赖关系是很有必要的，博士。请继续与大家形成联系，我们一起守护这片大地，同时也要注意休息。\n',1,4,'social'),('休息也是为了走更长远的路，博士。请好好享受这片刻的宁静，我们需要您充满活力的回归。\n',1,5,'relax'),('博士，生活中的欢乐让我们更有力量面对挑战。尽情享受这些美好时光，我们会在您身后支持您。\n',1,6,'entertain'),('您只需要做您的事情就好，我会一直在您身边支持您的。请照顾好自己，我们会一起战胜一切困难，守护这片土地。\n',1,7,'other'),('博士，您还好吗？要去休息一下吗，我扶您去吧。不用担心，我挺好的，只要您休息好就可以了。',1,8,'default');
/*!40000 ALTER TABLE `sentence_` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sharedevents`
--

DROP TABLE IF EXISTS `sharedevents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sharedevents` (
  `sharedevent_id` int NOT NULL AUTO_INCREMENT,
  `event` int DEFAULT NULL,
  `sharetime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sharedevent_id`),
  KEY `sharedevents_events_event_id_fk` (`event`),
  CONSTRAINT `sharedevents_events_event_id_fk` FOREIGN KEY (`event`) REFERENCES `events` (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sharedevents`
--

LOCK TABLES `sharedevents` WRITE;
/*!40000 ALTER TABLE `sharedevents` DISABLE KEYS */;
/*!40000 ALTER TABLE `sharedevents` ENABLE KEYS */;
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
  `tel` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `user_id` int NOT NULL AUTO_INCREMENT,
  `userauth` int DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `user_userauth_userauth_id_fk` (`userauth`),
  CONSTRAINT `user_userauth_userauth_id_fk` FOREIGN KEY (`userauth`) REFERENCES `userauth` (`userauth_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('g7','12345678910','where',1,1),('ac','12345678911','Shanghai',2,2),(NULL,NULL,NULL,3,5),(NULL,NULL,NULL,4,6),(NULL,NULL,NULL,5,7),(NULL,NULL,NULL,6,8);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userauth`
--

DROP TABLE IF EXISTS `userauth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userauth` (
  `userauth_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `usertype` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userauth_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userauth`
--

LOCK TABLES `userauth` WRITE;
/*!40000 ALTER TABLE `userauth` DISABLE KEYS */;
INSERT INTO `userauth` VALUES (1,'group7','sjtuse2021','typical'),(2,'acoustic','acoustic','typical'),(5,'acoustic2','acoustic2','typical'),(6,'acoustic3','acoustic3','typical'),(7,'acoustic4','acoustic4','typical'),(8,'acoustic8','acoustic8','typical');
/*!40000 ALTER TABLE `userauth` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-05 14:53:41
