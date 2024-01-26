-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: evoscooter
-- ------------------------------------------------------
-- Server version	11.1.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `rentals`
--

DROP TABLE IF EXISTS `rentals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rentals` (
  `UserEmail` varchar(100) NOT NULL,
  `VehicleId` int(11) NOT NULL,
  `StartTime` datetime NOT NULL DEFAULT '2023-01-01 00:00:00',
  `EndTime` datetime NOT NULL DEFAULT '2023-01-02 00:00:00',
  `State` varchar(100) NOT NULL,
  PRIMARY KEY (`UserEmail`,`VehicleId`, `StartTime`), 
  KEY `VehicleKey` (`VehicleId`),
  CONSTRAINT `UserKey` FOREIGN KEY (`UserEmail`) REFERENCES `user` (`Email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `VehicleKey` FOREIGN KEY (`VehicleId`) REFERENCES `vehicle` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentals`
--

LOCK TABLES `rentals` WRITE;
/*!40000 ALTER TABLE `rentals` DISABLE KEYS */;
INSERT INTO `rentals` VALUES ('admin@admin.com',1,'2024-01-24 21:15:00','2024-01-31 21:15:00','Approved'),('admin@admin.com',2,'2024-01-25 12:20:00','2024-01-29 12:20:00','Declined'),('admin@admin.com',4,'2024-01-26 13:00:00','2024-01-31 13:00:00','Declined');
/*!40000 ALTER TABLE `rentals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site`
--

DROP TABLE IF EXISTS `site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site` (
  `Address` varchar(100) NOT NULL,
  UNIQUE KEY `Address` (`Address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site`
--

LOCK TABLES `site` WRITE;
/*!40000 ALTER TABLE `site` DISABLE KEYS */;
INSERT INTO `site` VALUES ('Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország'),('Miskolc, Arany János tér 1, 3526 Magyarország'),('Szeged, Horváth Mihály u. 5, 6720 Magyarország');
/*!40000 ALTER TABLE `site` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `Email` varchar(100) NOT NULL,
  `Name` varchar(250) NOT NULL,
  `LicenseNumber` varchar(100) DEFAULT NULL,
  `Type` varchar(10) NOT NULL,
  `SiteAddress` varchar(100) DEFAULT 'Szeged, Horváth Mihály u. 5, 6720 Magyarország',
  `Password` varchar(100) NOT NULL,
  PRIMARY KEY (`Email`),
  UNIQUE KEY `Email` (`Email`),
  KEY `SiteKey` (`SiteAddress`),
  CONSTRAINT `SiteKey` FOREIGN KEY (`SiteAddress`) REFERENCES `site` (`Address`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('admin@admin.com','Tam Da Dam',NULL,'usr','Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország','$2b$10$pMvC.ntPo269.eD.MviVHOrBUXwpspn2KY9rSQ65epzoMzKJnAZY6'),('user1@example.com','John Smith',NULL,'usr','Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország','$2b$10$pMvC.ntPo269.eD.MviVHOrBUXwpspn2KY9rSQ65epzoMzKJnAZY6'),('user4@example.com','Emily Davis',NULL,'usr','Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország','$2b$10$pMvC.ntPo269.eD.MviVHOrBUXwpspn2KY9rSQ65epzoMzKJnAZY6'),('user5@example.com','Michael Brown',NULL,'usr','Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország','$2b$10$pMvC.ntPo269.eD.MviVHOrBUXwpspn2KY9rSQ65epzoMzKJnAZY6'),('user8@example.com','Olivia Garcia',NULL,'usr','Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország','$2b$10$pMvC.ntPo269.eD.MviVHOrBUXwpspn2KY9rSQ65epzoMzKJnAZY6');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Type` varchar(100) NOT NULL,
  `Rentable` tinyint(4) NOT NULL,
  `Site.Address` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `ID` (`Id`),
  KEY `Site.Address` (`Site.Address`),
  CONSTRAINT `OtherSiteKey` FOREIGN KEY (`Site.Address`) REFERENCES `site` (`Address`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (1,'Electric Scooter Model A',0,'Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország'),(2,'Electric Scooter Model B',1,'Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország'),(3,'Electric Scooter Model C',1,'Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország'),(4,'Electric Scooter Model D',1,'Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország'),(6,'Electric Scooter Model F',1,'Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország'),(7,'Electric Scooter Model G',1,'Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország'),(8,'Electric Scooter Model H',1,'Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország'),(9,'Electric Scooter Model I',1,'Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország'),(10,'Electric Scooter Model J',1,'Budapest, Magyar Tudósok Körútja 11, 1117 Magyarország');
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'evoscooter'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-26 11:43:28
