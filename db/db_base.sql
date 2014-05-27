CREATE DATABASE  IF NOT EXISTS `db302859_11` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db302859_11`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: localhost    Database: db302859_11
-- ------------------------------------------------------
-- Server version	5.5.15

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

--
-- Table structure for table `consultant`
--

DROP TABLE IF EXISTS `consultant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consultant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pictureid` int(11) DEFAULT NULL,
  `fullname` varchar(2048) NOT NULL,
  `start` date NOT NULL,
  `locations` varchar(4096) DEFAULT NULL,
  `keyskills` varchar(4096) DEFAULT NULL,
  `address` varchar(2048) DEFAULT NULL,
  `address_billing` varchar(2048) DEFAULT NULL,
  `shortdescription` varchar(4096) DEFAULT NULL,
  `email` varchar(260) NOT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `fax` varchar(45) DEFAULT NULL,
  `created` timestamp NULL DEFAULT NULL,
  `changed` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultant`
--

LOCK TABLES `consultant` WRITE;
/*!40000 ALTER TABLE `consultant` DISABLE KEYS */;
INSERT INTO `consultant` VALUES (1,NULL,'Christoph Hanf','2001-07-20','Berlin, MÃ¼nchen, NÃ¼rnberg','Java EE, Spring, JPA, DB2, Oracle, Coremedia, Hybris, TTCN-3','Wallstrasse 75\n06484 Quedlinburg\nSachsen-Anhalt\nDeutschland','Wallstrasse 75\n06484 Quedlinburg\nSachsen-Anhalt\nDeutschland','','hanf@parimeo.com','0176 / 81 09 62 13','03641 / 12345','03641 / 123456',NULL,NULL,'2014-04-07 22:20:05'),(2,NULL,'Christian Raab','2001-07-20','Dresden','Java EE, Scrum Master, Product Owner',NULL,NULL,NULL,'raab@parimeo.com',NULL,NULL,NULL,NULL,NULL,NULL),(3,NULL,'Christian Meng','2014-04-01','Bonn, Essen, Frankfurt','Bla, Blubb',NULL,NULL,NULL,'meng@parimeo.com',NULL,NULL,NULL,NULL,NULL,NULL),(4,NULL,'Robert Wloch','2014-04-01','Dresden, Berlin, Jena, Leipzig','RCP, Java EE, DSL, MDD, BPM',NULL,NULL,NULL,'wloch@parimeo.com',NULL,NULL,NULL,NULL,NULL,NULL),(5,NULL,'Markus Schwarz','2014-04-01','Muenchen','Coremedia, Java EE, Scrum Master',NULL,NULL,NULL,'schwarz@parimeo.com',NULL,NULL,NULL,NULL,NULL,NULL),(6,NULL,'Alexander Marquart','2014-01-01','Karlsruhe, Frankfurt, Stuttgart, Muenchen','Projektleiter (agil / klassisch), Produkt Owner, Scrum Master',NULL,NULL,NULL,'marquart@parimeo.com',NULL,NULL,NULL,NULL,NULL,NULL),(7,NULL,'Doris Nitsche','2014-06-01','Bern, Zuerich, Jena, Muenchen, Berlin','Anforderungsmanagement, Scrum Product Owner',NULL,NULL,NULL,'nitsche@parimeo.com',NULL,NULL,NULL,NULL,NULL,NULL),(8,NULL,'Dr. Vladimir Rubin','2014-06-01','Mannheim, Frankfurt, Duesseldorf','Java EE, BPM, MDD',NULL,NULL,NULL,'rubin@parimeo.com',NULL,NULL,NULL,NULL,NULL,NULL),(12,NULL,'kirsche','2002-02-20','','','','','','kirsche@parimeo.com','','','',NULL,NULL,NULL),(13,NULL,'asdf','2007-04-20','','','','','','asdf@asdf.de','','','',NULL,NULL,NULL),(14,NULL,'1234','2030-04-20','','','','','','1234@1234.de','','','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `consultant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cv`
--

DROP TABLE IF EXISTS `cv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idconsultant` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(2048) DEFAULT NULL,
  `filetype` varchar(100) DEFAULT NULL,
  `file` longblob,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `idconsultant_idx` (`idconsultant`),
  CONSTRAINT `FK_Consultant` FOREIGN KEY (`idconsultant`) REFERENCES `consultant` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cv`
--

LOCK TABLES `cv` WRITE;
/*!40000 ALTER TABLE `cv` DISABLE KEYS */;
INSERT INTO `cv` VALUES (1,1,'Christoph Hanf','Lebenslauf von Christoph Hanf','',NULL),(2,2,'Christian Raab','Lebenslauf von Christian Raab','',NULL),(3,1,'Curiculum Vitae','Laberrarbarberlumpensack',NULL,NULL);
/*!40000 ALTER TABLE `cv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `picture`
--

DROP TABLE IF EXISTS `picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `picture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `picture`
--

LOCK TABLES `picture` WRITE;
/*!40000 ALTER TABLE `picture` DISABLE KEYS */;
/*!40000 ALTER TABLE `picture` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-05-27 19:36:37
