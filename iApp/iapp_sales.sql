-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 129.150.202.181    Database: iapp
-- ------------------------------------------------------
-- Server version	5.7.21-enterprise-commercial-advanced-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED='51c43b69-476a-11e8-b886-c6b0c5449d5a:1-131';

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `sales_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sales_number` int(10) unsigned DEFAULT NULL,
  `fabricator` varchar(500) DEFAULT NULL,
  `project_name` varchar(500) DEFAULT NULL,
  `bid_number` int(10) unsigned DEFAULT NULL,
  `bid_received_date` datetime DEFAULT NULL,
  `bid_due_date` datetime DEFAULT NULL,
  `bid_sent_date` datetime DEFAULT NULL,
  `executive` varchar(500) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `fabricator_address` varchar(500) DEFAULT NULL,
  `fabricator_Url` varchar(100) DEFAULT NULL,
  `fabricator_phone` varchar(45) DEFAULT NULL,
  `bid_received_from` varchar(100) DEFAULT NULL,
  `document_received` varchar(5) DEFAULT NULL,
  `document_path` varchar(45) DEFAULT NULL,
  `main_steel_hours` int(11) DEFAULT NULL,
  `misc_steel_hours` int(11) DEFAULT NULL,
  `main_steel_est_schedule` datetime DEFAULT NULL,
  `misc_steel_est_schedule` datetime DEFAULT NULL,
  `bid_type` varchar(45) DEFAULT NULL,
  `inclusion` varchar(500) DEFAULT NULL,
  `exclusion` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`sales_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (10,NULL,'Fab#1',NULL,12345,'2018-04-18 00:00:00',NULL,'2018-04-28 00:00:00','Subodh Kumar',NULL,'Test Address','Test URL','900012345',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,NULL,'fab#2',NULL,34456,'2018-04-12 00:00:00',NULL,'2018-04-28 00:00:00','Sriram Sanka',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,NULL,'Fab#3',NULL,43256,'2018-04-26 00:00:00',NULL,'2018-04-30 00:00:00','Sanjay',NULL,NULL,'Test URL','900012345',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,NULL,'Name',NULL,222,'2018-05-03 00:00:00',NULL,'2018-05-03 00:00:00','Subodh Kumar','BidStatus','Address','URL','111','RFrom','DocR','DocP',10,20,'2018-05-03 00:00:00',NULL,'BidT',NULL,NULL),(24,NULL,'FName',NULL,998877,'2018-05-10 00:00:00',NULL,'2018-05-17 00:00:00','Subodh Kumar','Status','FAddress','FUrl','907865457','Subodh','Yes','DPath',22,44,'2018-05-17 00:00:00',NULL,'BType','Structural,Engineering',NULL),(25,NULL,NULL,NULL,334455,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Miscellaneous','Structural,Engineering');
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-21 12:04:02
