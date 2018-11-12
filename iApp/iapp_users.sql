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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) DEFAULT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_contact_number` varchar(20) DEFAULT NULL,
  `user_role_code` varchar(100) DEFAULT NULL,
  `user_username` varchar(100) DEFAULT NULL,
  `user_token` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email_UNIQUE` (`user_email`),
  UNIQUE KEY `user_contact_number_UNIQUE` (`user_contact_number`),
  UNIQUE KEY `user_auth_code_UNIQUE` (`user_role_code`),
  UNIQUE KEY `user_username_UNIQUE` (`user_username`),
  CONSTRAINT `role_code` FOREIGN KEY (`user_role_code`) REFERENCES `roles` (`role_code`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (20,'user','$2a$10$1kYAhN6y2FAH8sZZw0N4OuutARN3eJ2ppCOf97fUEvdWHQY1hGuWK','user',NULL,NULL,'user','$2a$10$I04Pu.mwZ/a7l/J/KCdeB.YMOYMOcTyHdmgBNlNQ2eTE24e8UWOLW'),(24,'salesuser','$2a$10$S/vMtlzB/c8ylESBKOvMcu089dsLJtL6iTgESlviWjGuwuxxBlNMS','su@su,com',NULL,'sales_user','salesuser','$2a$10$7zVXbUtLnklwqgB96d3d2OWdMzh05lntG4z.gFhTQtdoe7umsughO'),(25,'estuser','$2a$10$jNejXHOcnUHPknL48zWj3u3e1EE53uGXrsSj6JxwNd29ZeIKegdia','est@est,cin',NULL,'estimation_user','estuser','$2a$10$wpF./HLBto4nwkM6KrL9UuzrKD68K9g2DGWp7V94vOkVpDNMe/x5e'),(26,'admin','$2a$10$bzlhm5IxaBmAey8T1zj1P.prja2XTNO/fpL4y91BHdPEE6Yk2//T6','admin@su.com',NULL,'admin','admin','$2a$10$rhet90E0OTzrMmDmSjWEOugB9DIccI3y2Ie9FONB6KKslONr9RN3W');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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

-- Dump completed on 2018-05-21 12:03:48
