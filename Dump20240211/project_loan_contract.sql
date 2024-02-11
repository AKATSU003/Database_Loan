-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: project_loan
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `contract`
--

DROP TABLE IF EXISTS `contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract` (
  `ConID` int NOT NULL AUTO_INCREMENT,
  `LoanDate` date NOT NULL,
  `ReturnDate` date NOT NULL,
  `Duration` int NOT NULL,
  `Status` varchar(255) NOT NULL,
  `Priciple` int NOT NULL,
  `interest` double NOT NULL,
  `Penality` varchar(255) NOT NULL,
  `ReturnMoney` int NOT NULL,
  `CusID` int NOT NULL,
  `AID` int NOT NULL,
  PRIMARY KEY (`ConID`),
  KEY `CusID_idx` (`CusID`),
  KEY `AID_idx` (`AID`),
  CONSTRAINT `AID` FOREIGN KEY (`AID`) REFERENCES `admin` (`AID`),
  CONSTRAINT `CusID` FOREIGN KEY (`CusID`) REFERENCES `customers` (`CusID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contract`
--

LOCK TABLES `contract` WRITE;
/*!40000 ALTER TABLE `contract` DISABLE KEYS */;
INSERT INTO `contract` VALUES (1,'2020-12-11','2020-12-20',10,'ชำระแล้ว',20000,0.5,'iphoneV',10000,1,1),(2,'2020-05-22','2020-05-26',5,'ชำระแล้ว',15000,1,'mac',15750,1,2),(3,'2020-05-21','2020-05-25',5,'ชำระแล้ว',15000,0.5,'mac',15750,1,2),(4,'2024-02-01','2024-02-03',3,'ค้างชำระ',40000,0.5,'PC',10000,2,2);
/*!40000 ALTER TABLE `contract` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-11 16:49:15
