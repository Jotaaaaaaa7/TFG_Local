<<<<<<< HEAD
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: db_tfg
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `alimentos`
--

DROP TABLE IF EXISTS `alimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alimentos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `prot` decimal(10,2) DEFAULT NULL,
  `carbs` decimal(10,2) DEFAULT NULL,
  `fat` decimal(10,2) DEFAULT NULL,
  `kcal` decimal(10,2) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `isVegan` tinyint(1) DEFAULT NULL,
  `GlutenFree` tinyint(1) DEFAULT NULL,
  `unidad` int(11) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `alimentos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias_alimentos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=210 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alimentos`
--

LOCK TABLES `alimentos` WRITE;
/*!40000 ALTER TABLE `alimentos` DISABLE KEYS */;
INSERT INTO `alimentos` VALUES (1,'Albaricoque',0.40,12.50,0.10,52.00,1.20,1,1,80,1),(2,'Aguacate',1.90,3.20,23.50,232.00,2.50,1,1,165,1),(3,'Arandano',0.60,10.10,0.40,41.00,3.00,1,1,2,1),(4,'Cereza',0.80,11.70,0.10,48.00,2.80,1,1,5,1),(5,'Ciruela',0.50,8.90,0.10,36.00,1.50,1,1,70,1),(6,'Frambuesa',1.00,5.60,0.60,30.00,2.40,1,1,3,1),(7,'Fresa',0.90,5.60,0.40,27.00,1.80,1,1,25,1),(8,'Granada',0.50,15.90,0.10,62.00,2.30,1,1,220,1),(9,'Grosella',0.90,8.30,0.60,37.00,1.70,1,1,3,1),(10,'Higo fresco',0.90,11.20,0.20,47.00,2.10,1,1,60,1),(11,'Limón',0.60,3.20,0.00,14.00,0.80,1,1,50,1),(12,'Mandarina',0.70,9.10,0.40,41.00,1.90,1,1,120,1),(13,'Mango',0.70,16.80,0.40,73.00,3.50,1,1,200,1),(14,'Manzana',0.20,10.40,0.30,45.00,1.30,1,1,150,1),(15,'Melocotón',0.80,6.90,0.10,30.00,1.60,1,1,120,1),(16,'Melón',0.80,7.40,0.20,30.00,1.60,1,1,100,1),(17,'Mora',1.00,6.50,0.60,35.00,1.90,1,1,5,1),(18,'Naranja',1.00,11.70,0.20,53.00,2.20,1,1,150,1),(19,'Níspero',0.40,6.10,0.40,28.00,1.40,1,1,100,1),(20,'Papaya',0.50,10.80,0.30,43.00,2.00,1,1,100,1),(21,'Pasa',3.10,65.90,0.50,299.00,1.50,1,1,2,1),(22,'Piña',0.50,12.70,0.20,55.00,2.40,1,1,100,1),(23,'Pera',0.70,2.00,0.10,38.00,1.10,1,1,120,1),(24,'Plátano',1.20,19.50,0.30,85.00,1.90,1,1,150,1),(25,'Pomelo',0.60,6.20,0.00,26.00,1.30,1,1,150,1),(26,'Sandía',0.70,3.70,0.00,15.00,1.00,1,1,100,1),(27,'Uva',0.50,15.60,0.10,61.00,2.70,1,1,4,1),(28,'Coco',3.30,6.20,33.50,354.00,3.00,1,1,100,1),(29,'Kiwi',1.10,14.70,0.50,61.00,1.80,1,1,100,1),(30,'Melón',0.80,7.40,0.20,30.00,1.60,1,1,100,1),(31,'Bistec de ternera',20.70,0.50,1.00,92.00,2.75,0,1,NULL,NULL),(32,'Carne picada de vacuno',14.50,0.00,37.30,398.00,1.80,0,1,NULL,NULL),(33,'Carne picada de cerdo',14.50,0.00,37.30,398.00,1.80,0,1,NULL,NULL),(34,'Ciervo',20.30,0.60,3.70,120.00,4.00,0,1,NULL,2),(35,'Cerdo carne grasa',14.50,0.00,37.30,398.00,1.80,0,1,NULL,2),(36,'Cabrito',19.20,0.70,17.00,127.00,3.25,0,1,NULL,2),(37,'Cerdo carne magra',19.90,0.00,6.80,146.00,2.40,0,1,NULL,2),(38,'Codorniz',25.00,0.00,6.80,162.00,3.30,0,1,NULL,2),(39,'Cordero Lechal',21.00,0.00,2.40,105.00,3.90,0,1,NULL,2),(40,'Cordero (Pierna)',17.10,0.00,3.30,98.00,3.00,0,1,NULL,2),(41,'Faisán',24.30,0.00,5.20,144.00,4.10,0,1,NULL,2),(42,'Hígado de cerdo',22.80,1.50,4.80,141.00,1.70,0,1,NULL,2),(43,'Higado de vacuno',21.00,0.90,4.40,129.00,2.30,0,1,NULL,2),(44,'Jabalí',21.00,0.40,2.00,107.00,4.00,0,1,NULL,2),(45,'Lacón',19.20,0.00,31.60,361.00,2.60,0,1,NULL,2),(46,'Liebre',22.80,0.00,3.20,126.00,3.80,0,1,NULL,2),(47,'Pato',15.90,0.00,24.90,288.00,3.20,0,1,NULL,2),(48,'Pavo pechuga',22.00,0.40,4.90,134.00,2.60,0,1,NULL,2),(49,'Pavo muslo',20.90,0.40,11.20,186.00,2.40,0,1,NULL,2),(50,'Perdiz',25.00,0.50,1.40,120.00,4.10,0,1,NULL,2),(51,'Pollo muslo',25.00,0.50,1.40,130.00,1.80,0,1,NULL,2),(52,'Pollo pechuga',22.40,0.00,2.10,108.00,2.60,0,1,NULL,2),(53,'Ternera carne magra',20.70,0.50,1.00,92.00,2.75,0,1,NULL,2),(54,'Ternera carne grasa',14.50,0.00,37.30,398.00,1.80,0,1,NULL,2),(55,'Ternera hígado',21.00,0.90,4.40,129.00,2.30,0,1,NULL,2),(56,'Ternera riñón',17.80,0.50,3.70,109.00,2.20,0,1,NULL,2),(57,'Ternera sesos',10.70,0.50,8.60,122.00,2.40,0,1,NULL,2),(58,'Conejo',21.20,0.00,6.60,120.00,2.80,0,1,NULL,2),(59,'Arroz',7.00,87.60,0.60,362.00,0.40,1,1,NULL,NULL),(60,'Avena',16.90,66.30,6.90,389.00,0.50,1,0,NULL,3),(61,'Centeno',9.40,76.00,1.00,350.00,0.50,1,0,NULL,3),(62,'Copos de Maiz',7.60,85.20,1.00,372.00,0.30,1,1,NULL,3),(63,'Cebada',10.40,82.30,1.40,373.00,0.45,1,0,NULL,3),(64,'Harina Integral',11.00,69.70,1.90,321.00,0.35,1,0,NULL,3),(65,'Galletas María',6.80,82.30,8.10,409.00,0.40,0,0,NULL,3),(66,'Harina',11.00,73.60,0.70,345.00,0.35,1,1,NULL,3),(67,'Harina de trigo',10.40,73.90,1.30,364.00,0.35,1,0,NULL,3),(68,'Maíz',9.20,73.00,3.80,363.00,0.30,1,1,NULL,3),(69,'Pan Blanco',8.10,64.00,0.50,270.00,0.35,1,0,NULL,3),(70,'Pan Integral',9.00,47.50,1.00,230.00,0.45,1,0,NULL,3),(71,'Pan Tostado',11.30,83.00,6.00,420.00,0.40,1,0,NULL,3),(72,'Polenta (Harina de Maíz',8.70,79.80,2.70,358.00,0.30,1,1,NULL,3),(73,'Sémola',11.50,77.60,0.50,361.00,0.40,1,0,NULL,3),(74,'Tapioca',0.60,86.40,0.20,363.00,0.50,1,1,NULL,3),(75,'Trigo duro',13.00,70.80,2.90,361.00,0.40,1,0,NULL,3),(76,'Yogur entero',3.30,4.00,3.50,61.00,0.25,0,0,NULL,4),(77,'Leche entera',3.20,4.60,3.70,63.00,0.15,0,1,NULL,4),(78,'Leche semidesnatada',3.50,5.00,1.80,49.00,0.15,0,1,NULL,4),(79,'Leche desnatada',3.40,4.70,0.20,33.00,0.15,0,1,NULL,4),(80,'Yogur desnatado',3.30,4.00,0.90,36.00,0.25,0,0,NULL,4),(81,'Yogur con frutas',2.80,12.60,3.30,89.00,0.30,0,0,NULL,4),(82,'Nata',2.30,3.40,35.00,337.00,0.75,0,1,NULL,4),(83,'Leche de Almendras',0.40,1.30,1.10,17.00,1.80,1,1,NULL,4),(84,'Leche de Avena',1.00,6.80,0.50,39.00,2.00,1,1,NULL,4),(85,'Leche de Coco',2.00,5.00,23.00,230.00,2.50,1,1,NULL,4),(86,'Leche de Soja',3.30,1.70,1.80,33.00,1.80,1,1,NULL,4),(87,'Leche de Arroz',0.30,9.80,1.00,47.00,2.00,1,1,NULL,4),(88,'Alubia (judía seca)',23.00,61.00,1.30,316.00,1.00,1,1,35,5),(89,'Garbanzo',21.80,54.30,4.90,338.00,0.80,1,1,35,5),(90,'Guisantes secos',21.70,53.60,2.00,304.00,1.20,1,1,35,5),(91,'Haba seca',27.00,46.50,2.40,304.00,1.00,1,1,35,5),(92,'Lenteja',25.00,54.00,2.50,325.00,1.00,1,1,35,5),(93,'Soja',36.50,17.30,19.50,416.00,1.50,1,1,35,5),(94,'Alubia (judía verde)',2.20,4.90,0.20,31.00,1.00,1,1,35,5),(95,'Guisantes frescos',5.50,12.50,0.40,81.00,1.20,1,1,35,5),(96,'Haba fresca',7.00,12.50,0.60,81.00,1.00,1,1,35,5),(97,'Almeja',10.20,2.20,2.50,73.00,2.00,0,1,NULL,6),(98,'Anguila',11.80,0.10,23.70,264.00,3.50,0,1,NULL,6),(99,'Arenque',17.70,0.00,11.50,174.00,1.25,0,1,NULL,6),(100,'Atún fresco',21.50,0.00,8.00,158.00,3.00,0,1,NULL,6),(101,'Bacalao',29.00,0.00,0.70,122.00,2.25,0,1,NULL,6),(102,'Boquerón',16.80,1.50,2.60,96.00,0.75,0,1,NULL,6),(103,'Caballa',17.00,0.00,11.10,170.00,1.50,0,1,NULL,6),(104,'Calamar',12.60,0.70,1.70,68.00,2.25,0,1,NULL,6),(105,'Dorada',19.80,0.00,1.20,80.00,3.00,0,1,NULL,6),(106,'Gallo',16.20,1.20,0.90,78.00,2.00,0,1,NULL,6),(107,'Gamba',13.60,2.90,0.60,65.00,4.50,0,1,NULL,6),(108,'Langosta',16.20,1.00,1.90,88.00,7.50,0,1,NULL,6),(109,'Lenguado',16.90,0.80,1.70,82.00,3.00,0,1,NULL,6),(110,'Lubina',16.60,0.60,1.50,82.00,4.00,0,1,NULL,6),(111,'Lucio',18.00,0.00,0.60,81.00,2.75,0,1,NULL,6),(112,'Mejillones',11.70,3.40,2.70,66.00,0.75,0,1,NULL,6),(113,'Merluza',17.00,0.00,0.30,71.00,2.25,0,1,NULL,6),(114,'Mero',17.90,0.60,0.70,80.00,4.50,0,1,NULL,6),(115,'Pez espada',16.90,1.00,4.20,109.00,4.50,0,1,NULL,6),(116,'Pulpo',10.60,1.40,1.00,57.00,3.00,0,1,NULL,6),(117,'Rodaballo',16.30,1.20,1.30,81.00,6.00,0,1,NULL,6),(118,'Salmón',18.40,0.00,12.00,176.00,4.50,0,1,NULL,6),(119,'Salmonete',15.80,1.10,6.20,123.00,3.00,0,1,NULL,6),(120,'Sardina',15.00,1.00,4.40,124.00,0.75,0,1,NULL,6),(121,'Sepia',14.00,0.70,1.50,73.00,3.00,0,1,NULL,6),(122,'Trucha',18.50,0.00,4.90,96.00,3.00,0,1,NULL,6),(123,'Vieira',12.50,1.20,1.80,70.00,4.50,0,1,NULL,6),(124,'Bacalao',29.00,0.00,0.70,122.00,2.25,0,1,NULL,6),(125,'Ajo',6.00,26.30,0.10,124.00,0.10,1,1,5,7),(126,'Alcachofa',1.40,2.30,0.20,17.00,1.40,1,1,120,7),(127,'Apio',2.30,2.40,0.20,22.00,1.40,1,1,100,7),(128,'Berenjena',1.10,2.60,0.10,16.00,1.40,1,1,200,7),(129,'Berro',2.40,1.60,0.20,13.20,1.40,1,1,25,7),(130,'Brécol',3.30,4.00,0.20,31.00,1.40,1,1,200,7),(131,'Brocoli',3.30,4.00,0.20,31.00,1.40,1,1,200,7),(132,'Rabano',1.30,2.80,0.10,16.00,1.40,1,1,50,7),(133,'Calabacín',1.30,1.40,0.10,12.00,1.40,1,1,100,7),(134,'Calabaza',1.10,3.50,0.10,18.00,1.40,1,1,150,7),(135,'Cardo',0.60,1.70,0.10,10.00,1.40,1,1,100,7),(136,'Cebolla',1.00,5.20,0.00,24.00,1.40,1,1,120,7),(137,'Col lombarda',1.90,3.40,0.20,20.00,1.40,1,1,100,7),(138,'Coles de Bruselas',4.20,4.30,0.50,31.00,1.40,1,1,100,7),(139,'Coliflor',3.20,2.70,0.20,25.00,1.40,1,1,100,7),(140,'Espárrago',3.60,2.90,0.20,27.00,1.40,1,1,100,7),(141,'Espinaca',3.40,3.00,0.70,31.00,1.40,1,1,100,7),(142,'Guisantes frescos',7.00,10.60,0.20,70.00,1.40,1,1,100,7),(143,'Haba fresca',4.10,7.70,0.80,52.00,1.40,1,1,100,7),(144,'Hinojo',0.50,3.20,0.30,16.00,1.40,1,1,100,7),(145,'Lechuga',1.80,2.20,0.40,19.00,1.40,1,1,100,7),(146,'Nabo',1.00,3.30,0.00,16.00,1.40,1,1,100,7),(147,'Patata',2.10,18.00,1.00,80.00,1.40,1,1,150,7),(148,'Pepino',0.70,2.00,0.10,10.40,1.40,1,1,100,7),(149,'Puerro',2.10,6.00,0.10,26.00,1.40,1,1,100,7),(150,'Remolacha',1.50,8.20,0.10,42.00,1.40,1,1,100,7),(151,'Repollo',2.10,2.50,0.10,19.00,1.40,1,1,100,7),(152,'Seta',4.60,5.20,0.40,35.00,1.40,1,1,40,7),(153,'Tomate',1.00,2.90,0.20,16.00,1.40,1,1,100,7),(154,'Trufa',6.00,0.70,0.50,30.00,1.40,1,1,10,7),(155,'Zanahoria',1.00,7.80,0.20,37.00,1.40,1,1,100,7),(156,'Acelga',1.60,2.10,0.20,19.00,1.40,1,1,100,7),(157,'Albahaca',3.20,2.70,0.60,23.00,1.40,1,1,10,7),(158,'Alfalfa',3.90,2.10,0.70,23.00,1.40,1,1,10,7),(159,'Huevo de gallina',13.00,1.10,11.10,156.00,0.15,0,1,50,8),(160,'Clara de huevo',11.00,1.10,0.00,52.00,0.05,0,1,NULL,8),(161,'Yema de huevo',16.00,1.10,27.00,322.00,0.10,0,1,NULL,8),(162,'Huevo de codorniz',13.00,1.10,11.00,158.00,0.30,0,1,12,8),(163,'Huevo de pato',12.00,1.10,14.00,185.00,0.40,0,1,70,8),(164,'Almendra',16.00,4.00,51.40,499.00,2.00,1,1,35,9),(165,'Avellana',13.00,1.80,62.90,625.00,2.00,1,1,35,9),(166,'Cacahuete',20.40,35.00,25.60,452.00,0.75,1,1,35,9),(167,'Castaña',4.70,89.00,3.00,349.00,1.50,1,1,35,9),(168,'Ciruela pasa',2.20,43.70,0.50,177.00,0.75,1,1,35,9),(169,'Dátil seco',2.70,63.10,0.60,256.00,1.50,1,1,35,9),(170,'Higo seco',3.50,66.60,2.70,270.00,1.50,1,1,35,9),(171,'Nuez',15.60,11.20,63.30,670.00,2.00,1,1,35,9),(172,'Piñón',29.60,5.00,47.80,568.00,4.00,1,1,35,9),(173,'Pistacho',20.00,28.00,45.00,600.00,2.50,1,1,35,9),(174,'Uva Pasa',1.90,72.00,0.60,301.00,1.00,1,1,35,9),(175,'Brie',17.00,1.67,21.00,263.00,1.50,0,1,NULL,10),(176,'Camembert',20.50,0.90,25.70,301.00,1.50,0,1,NULL,10),(177,'Cheddar',25.00,0.50,31.00,381.00,1.20,0,1,NULL,10),(178,'Edam',26.00,1.00,22.00,306.00,1.30,0,1,NULL,10),(179,'Emmental',28.50,3.60,30.60,404.00,1.40,0,1,NULL,10),(180,'Gruyère',29.00,1.50,30.00,393.00,1.50,0,1,NULL,10),(181,'Mozzarella',19.90,4.90,16.10,245.00,1.00,0,1,NULL,10),(182,'Parmesano',36.00,0.50,25.60,374.00,2.00,0,1,NULL,10),(183,'Queso de Oveja',28.20,0.50,29.50,380.00,1.50,0,1,NULL,10),(184,'Requesón',13.60,1.40,4.00,96.00,0.80,0,1,NULL,10),(185,'Roquefort',23.00,2.00,35.00,413.00,2.50,0,1,NULL,10),(186,'Pasta de huevo',19.00,73.40,0.20,368.00,0.00,0,0,NULL,11),(187,'Pasta de sémola',13.00,78.60,0.30,336.00,0.00,1,0,NULL,11),(188,'Pasta de trigo',10.00,70.00,1.00,350.00,1.00,1,0,NULL,11),(189,'Pasta integral',12.00,65.00,2.00,320.00,1.50,1,0,NULL,11),(190,'Pasta sin gluten',8.00,60.00,1.50,300.00,2.00,1,1,NULL,11),(191,'Pasta de legumbres',15.00,55.00,1.00,280.00,2.50,1,1,NULL,11),(192,'Bollería',6.00,50.00,20.00,400.00,1.00,1,0,NULL,12),(193,'Patatas fritas',5.00,50.00,30.00,500.00,1.00,1,1,NULL,12),(194,'Refrescos',0.00,40.00,0.00,150.00,1.00,1,1,NULL,12),(195,'Snacks',5.00,50.00,20.00,400.00,1.00,1,0,NULL,12),(196,'Ketchup',1.50,23.00,0.10,100.00,1.00,1,1,NULL,13),(197,'Mayonesa',1.10,1.50,75.00,680.00,1.00,1,1,NULL,13),(198,'Mostaza',5.70,6.50,3.40,66.00,1.00,1,1,NULL,13),(199,'Pesto',5.50,6.50,32.00,332.00,1.50,1,1,NULL,13),(200,'Salsa de soja',10.00,6.00,0.50,60.00,1.00,1,0,NULL,13),(201,'Salsa de tomate',1.20,8.70,0.20,40.00,1.00,1,1,NULL,13),(202,'Salsa de yogur',3.50,4.50,3.50,60.00,1.00,0,1,NULL,13),(203,'Azúcar',0.00,99.80,0.00,387.00,0.50,1,1,NULL,14),(204,'Chocolate',8.90,50.80,37.90,564.00,1.00,1,1,NULL,14),(205,'Cacao en polvo',19.00,54.00,14.00,228.00,1.50,1,1,NULL,14),(206,'Caramelo',0.00,99.50,0.00,394.00,0.50,1,1,NULL,14),(207,'Galletas',7.00,75.00,13.00,440.00,1.00,1,0,NULL,14),(208,'Mermelada',0.50,63.00,0.10,250.00,1.00,1,1,NULL,14),(209,'Miel',0.60,80.00,0.00,300.00,1.50,0,1,NULL,14);
/*!40000 ALTER TABLE `alimentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias_alimentos`
--

DROP TABLE IF EXISTS `categorias_alimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias_alimentos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias_alimentos`
--

LOCK TABLES `categorias_alimentos` WRITE;
/*!40000 ALTER TABLE `categorias_alimentos` DISABLE KEYS */;
INSERT INTO `categorias_alimentos` VALUES (1,'Frutas'),(2,'Carnes'),(3,'Cereales'),(4,'Lacteos'),(5,'Legumbres'),(6,'Pescados'),(7,'Verduras'),(8,'Huevos'),(9,'Frutos Secos'),(10,'Quesos'),(11,'Pastas'),(12,'Procesados'),(13,'Salsas'),(14,'Dulces');
/*!40000 ALTER TABLE `categorias_alimentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comidas`
--

DROP TABLE IF EXISTS `comidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comidas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `prot` decimal(10,2) DEFAULT NULL,
  `carbs` decimal(10,2) DEFAULT NULL,
  `fat` decimal(10,2) DEFAULT NULL,
  `kcal` decimal(10,2) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `isVegan` tinyint(1) DEFAULT NULL,
  `GlutenFree` tinyint(1) DEFAULT NULL,
  `missing_fields` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comidas`
--

LOCK TABLES `comidas` WRITE;
/*!40000 ALTER TABLE `comidas` DISABLE KEYS */;
/*!40000 ALTER TABLE `comidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comidas_items`
--

DROP TABLE IF EXISTS `comidas_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comidas_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comida_id` int(11) NOT NULL,
  `alimento_id` int(11) DEFAULT NULL,
  `receta_id` int(11) DEFAULT NULL,
  `cantidad_alimento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comida_id` (`comida_id`),
  KEY `alimento_id` (`alimento_id`),
  KEY `receta_id` (`receta_id`),
  CONSTRAINT `comidas_items_ibfk_1` FOREIGN KEY (`comida_id`) REFERENCES `comidas` (`id`),
  CONSTRAINT `comidas_items_ibfk_2` FOREIGN KEY (`alimento_id`) REFERENCES `alimentos` (`id`),
  CONSTRAINT `comidas_items_ibfk_3` FOREIGN KEY (`receta_id`) REFERENCES `recetas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comidas_items`
--

LOCK TABLES `comidas_items` WRITE;
/*!40000 ALTER TABLE `comidas_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `comidas_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dias`
--

DROP TABLE IF EXISTS `dias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `prot` decimal(10,2) DEFAULT NULL,
  `carbs` decimal(10,2) DEFAULT NULL,
  `fat` decimal(10,2) DEFAULT NULL,
  `kcal` decimal(10,2) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `isVegan` tinyint(1) DEFAULT NULL,
  `GlutenFree` tinyint(1) DEFAULT NULL,
  `missing_fields` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dias`
--

LOCK TABLES `dias` WRITE;
/*!40000 ALTER TABLE `dias` DISABLE KEYS */;
/*!40000 ALTER TABLE `dias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dias_comidas`
--

DROP TABLE IF EXISTS `dias_comidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dias_comidas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dia_id` int(11) NOT NULL,
  `comida_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dia_id` (`dia_id`),
  KEY `comida_id` (`comida_id`),
  CONSTRAINT `dias_comidas_ibfk_1` FOREIGN KEY (`dia_id`) REFERENCES `dias` (`id`),
  CONSTRAINT `dias_comidas_ibfk_2` FOREIGN KEY (`comida_id`) REFERENCES `comidas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dias_comidas`
--

LOCK TABLES `dias_comidas` WRITE;
/*!40000 ALTER TABLE `dias_comidas` DISABLE KEYS */;
/*!40000 ALTER TABLE `dias_comidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejercicios`
--

DROP TABLE IF EXISTS `ejercicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ejercicios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `nivel` varchar(255) DEFAULT NULL,
  `video` text DEFAULT NULL,
  `equipo` varchar(255) DEFAULT NULL,
  `missing_muscles` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejercicios`
--

LOCK TABLES `ejercicios` WRITE;
/*!40000 ALTER TABLE `ejercicios` DISABLE KEYS */;
INSERT INTO `ejercicios` VALUES (1,'Press de pecho en máquina','https://eresfitness.com/press-de-pecho-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/05771205-Lever-Chest-Press_Chest.mp4?_=1','Gym',0),(2,'Press de pecho declinado en máquina','https://eresfitness.com/press-de-pecho-declinado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/13001205-Lever-Decline-Chest-Press_Chest-flat.mp4?_=1','Gym',0),(3,'Press declinado con Mancuernas','https://eresfitness.com/press-de-banca-declinado-con-Mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/03011205-Dumbbell-Decline-Bench-Press_Chest-flat-1.mp4?_=1','Mancuernas, Banco abdominales',0),(4,'Press inclinado con poleas','https://eresfitness.com/press-de-banca-inclinado-con-poleas/','Intermedio','https://eresfitness.com/wp-content/uploads/01691205-Cable-Incline-Bench-Press_Chest-flat.mp4?_=1','Gym',0),(5,'Press plano con Mancuernas','https://eresfitness.com/press-martillo-con-Mancuernas-en-banco-plano/','Principiante','https://eresfitness.com/wp-content/uploads/03401205-Dumbbell-Lying-Hammer-Press_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(6,'Press inclinado con Mancuernas','https://eresfitness.com/press-martillo-en-banco-inclinado-con-Mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/03211205-Dumbbell-Incline-Hammer-Press_Chest-flat.mp4?_=1','Mancuernas, Banco regulable',0),(7,'Press declinado alterno con Mancuernas','https://eresfitness.com/press-de-banca-declinado-alternado-con-Mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/50971205-Dumbbell-Single-Arm-Alternate-Decline-Bench-Press.mp4?_=1','Mancuernas, Banco abdominales',0),(8,'Press banca inclinado con barra','https://eresfitness.com/press-de-banca-inclinado-con-barra/','Principiante','https://eresfitness.com/wp-content/uploads/00471205-Barbell-Incline-Bench-Press_Chest-flat.mp4?_=1','Gym',0),(9,'Pullover en máquina','https://eresfitness.com/pullover-en-maquina/','Intermedio','https://eresfitness.com/wp-content/uploads/22851205-Lever-Pullover-plate-loaded-_Back-flat.mp4?_=1','Gym',0),(10,'Press banca con Mancuernas','https://eresfitness.com/press-de-banca-con-Mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/02891205-Dumbbell-Bench-Press_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(11,'Press inclinado alterno con Mancuernas','https://eresfitness.com/press-alternado-inclinado-con-Mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/35451205-Dumbbell-Incline-Alternate-Press_Chest-flat.mp4?_=1','Mancuernas, Banco regulable',0),(12,'Press plano alterno con Mancuernas','https://eresfitness.com/press-alternado-con-Mancuernas-en-banco-plano/','Intermedio','https://eresfitness.com/wp-content/uploads/36951205-Dumbbell-Alternate-Bench-Press-high-start_Chest-.mp4?_=1','Mancuernas, Banco',0),(13,'Flexiones inclinadas','https://eresfitness.com/flexiones-inclinadas/','Principiante','https://eresfitness.com/wp-content/uploads/51601205-Incline-Close-Grip-Push-Up_Upper-Arms-flat.mp4?_=1','Peso corporal, Banco',0),(14,'Fondos con 2 sillas','https://eresfitness.com/fondos-con-dos-sillas/','Avanzado','https://eresfitness.com/wp-content/uploads/33871205-Dips-between-Chairs_Chest-flat.mp4?_=1','Peso corporal',0),(15,'Fondos con 1 silla','https://eresfitness.com/fondos-con-una-silla/','Principiante','https://eresfitness.com/wp-content/uploads/34431205-Dip-on-Floor-with-Chair_Chest-flat.mp4?_=1','Peso corporal',0),(16,'Fondos de pecho en máquina','https://eresfitness.com/fondos-de-pecho-en-maquina-asistida/','Principiante','https://eresfitness.com/wp-content/uploads/00091205-Assisted-Chest-Dip-kneeling_Chest-flat.mp4?_=1','Gym',0),(17,'Flexiones superman','https://eresfitness.com/flexiones-superman/','Avanzado','https://eresfitness.com/wp-content/uploads/08031205-Superman-Push-up_Chest-flat.mp4?_=1','Peso corporal',0),(18,'Flexión de brazos contra la pared','https://eresfitness.com/flexion-de-brazos-contra-la-pared/','Principiante','https://eresfitness.com/wp-content/uploads/06581205-Push-up-wall-II_Chest-flat.mp4?_=1','Peso corporal',0),(19,'Flexiones con bosu ball','https://eresfitness.com/flexiones-con-bosu-ball/','Intermedio','https://eresfitness.com/wp-content/uploads/06531205-Push-up-bosu-ball_Chest-flat.mp4?_=1','Peso corporal, Bosu ball',0),(20,'Flexiones con toque de pecho','https://eresfitness.com/flexiones-con-toque-de-pecho/','Avanzado','https://eresfitness.com/wp-content/uploads/32161205-Chest-Tap-Push-up-male-flat.mp4?_=1','Peso corporal',0),(21,'Flexiones a 1 mano','https://eresfitness.com/flexiones-a-una-mano/','Avanzado','https://eresfitness.com/wp-content/uploads/07251205-Single-Arm-Push-up_Chest-flat.mp4?_=1','Peso corporal',0),(22,'Flexiones abiertas','https://eresfitness.com/flexiones-abiertas/','Principiante','https://eresfitness.com/wp-content/uploads/13111205-Wide-Hand-Push-up_Chest-flat.mp4?_=1','Peso corporal',0),(23,'Apertura en banco plano con poleas','https://eresfitness.com/ejercicios/pectorales/page/3/','Intermedio','https://eresfitness.com/wp-content/uploads/01851205-Cable-Lying-Fly_Chest-flat.mp4?_=1','Gym',0),(24,'Squeeze Bench Press','https://eresfitness.com/squeeze-bench-press/','Principiante','https://eresfitness.com/wp-content/uploads/36811205-Dumbbell-Squeeze-Bench-Press_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(25,'Squeeze Press inclinado con mancuernas','https://eresfitness.com/squeeze-press-inclinado-con-mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/50671205-Dumbbell-Incline-Squeeze-Press_Upper-Arms-flat.mp4?_=1','Mancuernas, Banco regulable',0),(26,'Vuelos a 1 mano con mancuerna','https://eresfitness.com/vuelos-a-una-mano-con-mancuerna/','Principiante','https://eresfitness.com/wp-content/uploads/41501205-Dumbbell-One-Arm-Low-Fly_Chest-flat.mp4?_=1','Mancuernas',0),(27,'Press plano con poleas','https://eresfitness.com/press-de-banca-plano-con-poleas/','Intermedio','https://eresfitness.com/wp-content/uploads/01511205-Cable-Bench-Press_Chest.mp4?_=1','Gym',0),(28,'Press banca','https://eresfitness.com/press-de-banca-con-barra/','Principiante','https://eresfitness.com/wp-content/uploads/2020/04/00251205-Barbell-Bench-Press_Chest-flat.mp4?_=1','Gym',0),(29,'Fondos de pecho','https://eresfitness.com/fondos-de-pecho/','Intermedio','https://eresfitness.com/wp-content/uploads/2020/04/14301205-Chest-Dip-on-dip-pull-up-cage_Chest-flat.mp4?_=1','Peso corporal',0),(30,'Press banca declinado','https://eresfitness.com/press-declinado-con-barra/','Principiante','https://eresfitness.com/wp-content/uploads/2019/11/00331205-Barbell-Decline-Bench-Press_Chest-flat.mp4?_=1','Gym',0),(31,'Flexiones','https://eresfitness.com/flexiones-o-lagartijas/','Principiante','https://eresfitness.com/wp-content/uploads/2019/09/06621205-Push-up-male_Chest-flat.mp4?_=1','Peso corporal',0),(32,'Aperturas con mancuernas','https://eresfitness.com/apertura-con-mancuernas-en-banco-plano/','Principiante','https://eresfitness.com/wp-content/uploads/03081205-Dumbbell-Fly_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(33,'Aperturas inclinadas con mancuernas','https://eresfitness.com/aperturas-con-mancuernas-en-banco-inclinado/','Principiante','https://eresfitness.com/wp-content/uploads/2019/07/03191205-Dumbbell-Incline-Fly_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(34,'Pullover con mancuerna','https://eresfitness.com/pullover-con-mancuerna/','Intermedio','https://eresfitness.com/wp-content/uploads/03751205-Dumbbell-Pullover_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(35,'Cruces en polea baja','https://eresfitness.com/cruces-en-polea-baja/','Intermedio','https://eresfitness.com/wp-content/uploads/01791205-Cable-Low-Fly_Chest.mp4?_=1','Gym',0),(36,'Cruces en polea alta','https://eresfitness.com/cruces-en-polea-alta-crossover/','Intermedio','https://eresfitness.com/wp-content/uploads/12691205-Cable-Standing-Up-Straight-Crossovers_Chest-flat.mp4?_=1','Gym',0),(37,'Aperturas en máquina','https://eresfitness.com/aperturas-en-contractor-de-pecho/','Principiante','https://eresfitness.com/wp-content/uploads/2019/05/05961205-Lever-Seated-Fly_Chest.mp4?_=1','Gym',0),(38,'Remos supino con mancuernas','https://eresfitness.com/wp-content/uploads/2019/07/03191205-Dumbbell-Incline-Fly_Chest-flat.mp4?_=1','Principiante','https://eresfitness.com/wp-content/uploads/37991205-Dumbbell-Bent-Over-Reverse-Row_Back-flat.mp4?_=1','Mancuernas',0),(39,'Remo supino en polea baja','https://eresfitness.com/remo-supino-en-polea-baja-de-pie/','Intermedio','https://eresfitness.com/wp-content/uploads/43671205-Cable-Bent-Over-Reverse-Grip-Row_Back-flat.mp4?_=1','Gym',0),(40,'Remo gironda con agarre de cuerda','https://eresfitness.com/remo-sentado-en-polea-con-agarre-en-cuerda/','Intermedio','https://eresfitness.com/wp-content/uploads/13231205-Cable-Rope-Seated-Row_Back-flat.mp4?_=1','Gym',0),(41,'Remo en máquina','https://eresfitness.com/remo-sentado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/13501205-Lever-Seated-Row_Back-flat.mp4?_=1','Gym',0),(42,'Remo invertido con agarre supino','https://eresfitness.com/remo-invertido-agarre-supino/','Intermedio','https://eresfitness.com/wp-content/uploads/12231205-Underhand-Grip-Inverted-Back-Row_Back-flat.mp4?_=1','Peso corporal',0),(43,'Remo inclinado con mancuernas','https://eresfitness.com/remo-en-banco-inclinado-con-mancuernas-agarre-neutro/','Intermedio','https://eresfitness.com/wp-content/uploads/33201205-Dumbbell-Hammer-Grip-Incline-Bench-Two-Arm-Row_Back-flat.mp4?_=1','Mancuernas, Banco regulable',0),(44,'Remo en polea con agarre supino','https://eresfitness.com/remo-en-polea-agarre-supino/','Principiante','https://eresfitness.com/wp-content/uploads/32331205-Cable-Seated-Supine-grip-Row-male_Back-flat.mp4?_=1','Gym',0),(45,'Remo sentado en polea con agarre abierto','https://eresfitness.com/remo-sentado-en-polea-con-agarre-abierto/','Intermedio','https://eresfitness.com/wp-content/uploads/02181205-Cable-Seated-Wide-grip-Row_Back-flat.mp4?_=1','Gym',0),(46,'Remo con mancuernas','https://eresfitness.com/remo-con-mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/02931205-Dumbbell-Bent-Over-Row_Back-flat.mp4?_=1','Mancuernas',0),(47,'Remo con barra','https://eresfitness.com/remo-con-barra-z-agarre-supino/','Intermedio','https://eresfitness.com/wp-content/uploads/13441205-EZ-Bar-Reverse-Grip-Bent-Over-Row_Back-flat.mp4?_=1','Gym',0),(48,'Remo con barra landmine','https://eresfitness.com/remo-con-barra-landmine-agarre-v/','Intermedio','https://eresfitness.com/wp-content/uploads/32001205-Lever-Bent-over-Row-with-V-bar-plate-loaded_Back.mp4?_=1','Gym',0),(49,'Jalón al pecho tras nuca','https://eresfitness.com/jalon-al-pecho-tras-nuca/','Avanzado','https://eresfitness.com/wp-content/uploads/02051205-Cable-Rear-Pulldown_Back-flat.mp4?_=1','Gym',0),(50,'Jalón al pecho a 1 mano con polea','https://eresfitness.com/jalon-al-pecho-a-una-mano-sentado-con-polea/','Principiante','https://eresfitness.com/wp-content/uploads/12041205-Cable-one-arm-lat-pulldown_back-flat.mp4?_=1','Gym',0),(51,'encogimiento de hombros en MP','https://eresfitness.com/encogimiento-de-hombros-en-maquina-smith-agarre-abierto/','Principiante','https://eresfitness.com/wp-content/uploads/52231205-Smith-Wide-Shrug_Back-flat.mp4?_=1','Gym',0),(52,'Remo con mancuerna UL','https://eresfitness.com/remo-con-mancuerna-unilateral/','Principiante','https://eresfitness.com/wp-content/uploads/02921205-Dumbbell-Bent-over-Row_back_Back-flat.mp4?_=1','Mancuernas',0),(53,'Superman','https://eresfitness.com/twist-superman/','Intermedio','https://eresfitness.com/wp-content/uploads/40911205-Twist-Superman-male_Hips-flat_1.mp4?_=1','Peso corporal',0),(54,'Remo gironda','https://eresfitness.com/remo-sentado-en-polea-baja/','Principiante','https://eresfitness.com/wp-content/uploads/2020/02/26611205-Cable-Seated-Row-with-V-bar_Back-flat.mp4?_=1','Gym',0),(55,'Jalón al pecho','https://eresfitness.com/jalon-al-pecho-agarre-abierto/','Principiante','https://eresfitness.com/wp-content/uploads/2020/02/01971205-Cable-Pulldown-pro-lat-bar_Back-flat.mp4?_=1','Gym',0),(56,'Peso muerto rumano con barra','https://eresfitness.com/peso-muerto-rumano/','Principiante','https://eresfitness.com/wp-content/uploads/22131105-Barbell-Romanian-Deadlift-female_Hips-FIX_max.webp','Gym',0),(57,'Remo en barra T','https://eresfitness.com/remo-en-barra-t/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/05/06061205-Lever-T-bar-Row-plate-loaded_Back-flat.mp4?_=1','Gym',0),(58,'Curl predicador a 1 mano con mancuerna','https://eresfitness.com/curl-predicador-a-una-mano-con-mancuerna/','Principiante','https://eresfitness.com/wp-content/uploads/52981205-Dumbbell-Preacher-Curl-Turned-Torso_Upper-Arms-f.mp4?_=1','Mancuernas',0),(59,'Curl martillo en polea con cuerda','https://eresfitness.com/curl-martillo-en-polea-con-cuerda/','Principiante','https://eresfitness.com/wp-content/uploads/01651205-Cable-Hammer-Curl-with-rope-male_Forearms-flat.mp4?_=1','Gym',0),(60,'Curl de Bíceps sentado en máquina','https://eresfitness.com/curl-de-biceps-sentado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/43361205-Lever-Biceps-Curl_Upper-Arms-flat.mp4?_=1','Gym',0),(61,'Curl con barra','https://eresfitness.com/curl-con-barra-z/','Principiante','https://eresfitness.com/wp-content/uploads/04471205-EZ-Barbell-Curl_Upper-Arms-flat.mp4?_=1','Gym',0),(62,'Curl en polea','https://eresfitness.com/curl-a-un-brazo-en-polea/','Principiante','https://eresfitness.com/wp-content/uploads/01901205-Cable-One-Arm-Curl_Upper-Arms-flat.mp4?_=1','Gym',0),(63,'Curl de bíceps en máquina','https://eresfitness.com/curl-concentrado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/2020/12/18721205-Lever-Preacher-Curl-plate-loaded_Upper-Arms.mp4?_=1','Gym',0),(64,'Curl bíceps inclinado con mancuerna','https://eresfitness.com/curl-biceps-inclinado-con-mancuerna/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/03151205-Dumbbell-Incline-Biceps-Curl_Upper-Arms.mp4?_=1','mancuernas, Banco regulable',0),(65,'Bíceps alterno con mancuernas','https://eresfitness.com/curl-de-biceps/','Principiante','https://eresfitness.com/wp-content/uploads/04161205-Dumbbell-Standing-Biceps-Curl_Upper-Arms-flat.mp4?_=1','Mancuernas',0),(66,'Bíceps martillo con mancuernas','https://eresfitness.com/curl-martillo-con-mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/2019/05/03131205-Dumbbell-Hammer-Curl_Forearms-flat.mp4?_=1','Mancuernas',0),(67,'Curl concentrado con mancuerna','https://eresfitness.com/curl-concentrado-biceps/','Principiante','https://eresfitness.com/wp-content/uploads/2019/05/02971205-Dumbbell-Concentration-Curl_Upper-Arms-FIX-flat.mp4?_=1','Mancuernas',0),(68,'Press francés con polea baja','https://eresfitness.com/press-frances-con-polea-baja/','Intermedio','https://eresfitness.com/wp-content/uploads/52431205-Cable-Lying-Triceps-Extension-Low_Upper-Arms-fla-1.mp4?_=1','Gym',0),(69,'Press de copa con mancuerna','https://eresfitness.com/press-de-copa-con-mancuerna-de-pie/','Intermedio','https://eresfitness.com/wp-content/uploads/04301205-Dumbbell-Standing-Triceps-Extension_Upper-Arms-flat.mp4?_=1','Mancuernas',0),(70,'Patada de glúteo','https://eresfitness.com/patada-de-gluteo-rodilla-flexionada/','Principiante','https://eresfitness.com/wp-content/uploads/05571205-Kicks-Leg-Bent_Hips.mp4?_=1','Peso corporal',0),(71,'Patada tríceps con mancuerna','https://eresfitness.com/patada-de-triceps-con-mancuerna/','Principiante','https://eresfitness.com/wp-content/uploads/03541205-Dumbbell-One-Arm-Kickback_Upper-Arms-flat.mp4?_=1','Mancuernas',0),(72,'Flexiones sobre los antebrazos','https://eresfitness.com/flexiones-sobre-los-antebrazos/','Avanzado','https://eresfitness.com/wp-content/uploads/14671205-Push-up-on-Forearms_Upper-Arms-flat.mp4?_=1','Peso corporal',0),(73,'Flexiones Diamante','https://eresfitness.com/flexiones-diamante/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/02831205-Diamond-Push-up_Upper-Arms-flat.mp4?_=1','Peso corporal',0),(74,'Extensión de tríceps sobre la cabeza en polea alta','https://eresfitness.com/extension-de-triceps-sobre-la-cabeza-con-polea/','Intermedio','https://eresfitness.com/wp-content/uploads/01941205-Cable-Overhead-Triceps-Extension-rope-attachment.mp4?_=1','Gym',0),(75,'Rompecráneos con mancuernas','https://eresfitness.com/rompecraneos-con-mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/03511205-Dumbbell-Lying-Triceps-Extension_Upper-Arms-flat.mp4?_=1','Mancuernas, Banco',0),(76,'Extensión de tríceps con polea','https://eresfitness.com/extensiones-de-triceps-con-agarre-en-v-en-polea/','Principiante','https://eresfitness.com/wp-content/uploads/02411205-Cable-Triceps-Pushdown-V-bar-attachment_Upper-Ar.mp4?_=1','Gym',0),(77,'Extensión de tríceps con cuerda','https://eresfitness.com/extension-de-triceps-a-una-mano-en-polea-agarre-cuerda/','Principiante','https://eresfitness.com/wp-content/uploads/12271205-Cable-Standing-One-Arm-Tricep-Pushdown-Overhand-G.mp4?_=1','Gym',0),(78,'Flexiones brazoas cerrados','https://eresfitness.com/flexiones-de-brazo-cerradas/','Intermedio','https://eresfitness.com/wp-content/uploads/2021/01/Flexiones-de-relo.webp','Peso corporal',0),(79,'Press banca con agarre cerrado','https://eresfitness.com/press-de-banca-con-agarre-cerrado/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/11/00301205-Barbell-Close-Grip-Bench-Press_Upper-Arms.mp4?_=1','Gym',0),(80,'Extensión mancuerna tras nuca','https://eresfitness.com/extension-mancuerna-tras-nuca-con-una-mano/','Principiante','https://eresfitness.com/wp-content/uploads/2019/11/04231205-Dumbbell-Standing-One-Arm-Extension_Upper-Arms-fla.mp4?_=1','Mancuernas',0),(81,'Extensión de tríceps tras nuca con mancuerna','https://eresfitness.com/extension-de-triceps-tras-nuca-con-mancuerna/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/21881205-Dumbbell-Seated-Triceps-Extension_Upper-Arms-flat.mp4?_=1','Mancuernas',0),(82,'Rueda abdominal','https://eresfitness.com/rueda-abdominal-de-pie/','Avanzado','https://eresfitness.com/wp-content/uploads/07961205-Standing-Wheel-Rollout_Waist-flat.mp4?_=1','Rueda abdominal',0),(83,'Plancha lateral','https://eresfitness.com/plancha-lateral/','Intermedio','https://eresfitness.com/wp-content/uploads/07151205-Side-Plank-m_Waist-flat.mp4?_=1','Peso corporal',0),(84,'Plancha','https://eresfitness.com/plancha-de-rodillas/','Principiante','https://eresfitness.com/wp-content/uploads/32381205-Kneeling-plank-male_Waist-flat.mp4?_=1','Peso corporal',0),(85,'Inchworm','https://eresfitness.com/inchworm/','Intermedio','https://eresfitness.com/wp-content/uploads/14711205-Inchworm_Waist-flat.mp4?_=1','Peso corporal',0),(86,'Hollow hold','https://eresfitness.com/hollow-hold/','Intermedio','https://eresfitness.com/wp-content/uploads/12461205-Hollow-Hold_Waist-flat.mp4?_=1','Peso corporal',0),(87,'Giro ruso con mancuernas','https://eresfitness.com/giro-ruso-con-mancuerna/','Avanzado','https://eresfitness.com/wp-content/uploads/42491205-Dumbbell-Straight-Leg-Russian-Twist_Waist-flat.mp4?_=1','Mancuernas',0),(88,'Crunch en máquina','https://eresfitness.com/crunch-sentado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/14521205-Lever-Seated-Crunch_Waist-flat.mp4?_=1','Gym',0),(89,'Piernas arriba','https://eresfitness.com/8-leg-crunch/','Avanzado','https://eresfitness.com/wp-content/uploads/40221205-Seated-8-Leg-Crunch_Waist-flat.mp4?_=1','Peso corporal',0),(90,'Abdominales','https://eresfitness.com/abdominales-cruzados/','Intermedio','https://eresfitness.com/wp-content/uploads/2020/02/02621105-Cross-Body-Crunch_waist_max.jpg','Peso corporal',0),(91,'Rotación interna de hombro en polea','https://eresfitness.com/rotacion-interna-de-hombro-en-polea/','Principiante','https://eresfitness.com/wp-content/uploads/50881205-Cable-Shoulder-Internal-Rotation_Shoulders-flat.mp4?_=1','Gym',0),(92,'Rotación externa de hombro en polea','https://eresfitness.com/rotacion-externa-de-hombro-en-polea/','Principiante','https://eresfitness.com/wp-content/uploads/02351205-Cable-Standing-Shoulder-External-Rotation_Back-fla.mp4?_=1','Gym',0),(93,'Rotación externa de hombro con mancuerna','https://eresfitness.com/rotacion-externa-de-hombro-con-mancuerna/','Principiante','https://eresfitness.com/wp-content/uploads/36841205-Dumbbell-External-Rotation_Back-flat.mp4?_=1','Mancuernas',0),(94,'Remo de deltoides posterior con mancuerna','https://eresfitness.com/remo-de-deltoides-posterior-con-mancuerna/','Intermedio','https://eresfitness.com/wp-content/uploads/03771205-Dumbbell-Rear-Delt-Row_shoulder-flat.mp4?_=1','mancuernas',0),(95,'Press militar con barra','https://eresfitness.com/press-militar-de-pie-en-maquina-smith/','Intermedio','https://eresfitness.com/wp-content/uploads/07741205-Smith-Standing-Military-Press_Shoulders-flat.mp4?_=1','Gym',0),(96,'Press de hombro alterno con mancuernas','https://eresfitness.com/press-de-hombros-alternado-con-mancuernas-sentado/','Intermedio','https://eresfitness.com/wp-content/uploads/03881205-Dumbbell-Seated-Alternate-Press_Shoulders-flat.mp4?_=1','Mancuernas',0),(97,'Clean and jerk con pesa rusa','https://eresfitness.com/clean-and-jerk-a-una-mano-con-pesa-rusa/','Avanzado','https://eresfitness.com/wp-content/uploads/05371205-Kettlebell-One-Arm-Clean-and-Jerk_Shoulders-flat.mp4?_=1','Gym',0),(98,'Remo a la cara con cuerda en polea alta','https://eresfitness.com/remo-a-la-cara-con-cuerda-en-polea-alta/','Intermedio','https://eresfitness.com/wp-content/uploads/2021/01/02331105-Cable-Standing-Rear-Delt-Row-with-rope_shoulder_max.jpg','Gym',0),(99,'Elevaciones laterales en máquina','https://eresfitness.com/elevaciones-laterales-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/2021/01/05841205-Lever-Lateral-Raise_shoulder-flat.mp4?_=1','Gym',0),(100,'Aperturas invertidas en máquina','https://eresfitness.com/aperturas-invertidas-en-maquina/','Intermedio','https://eresfitness.com/wp-content/uploads/2020/12/06021205-Lever-Seated-Reverse-Fly_Shoulders-flat.mp4?_=1','Gym',0),(101,'Press de hombros en máquina','https://eresfitness.com/press-de-hombros-en-maquina/','Intermedio','https://eresfitness.com/wp-content/uploads/2020/12/14541205-Lever-Seated-Shoulder-Press_Shoulders-flat.mp4?_=1','Gym',0),(102,'Press cubano con mancuernas','https://eresfitness.com/press-cubano/','Avanzado','https://eresfitness.com/wp-content/uploads/2019/11/21361205-Dumbbell-Cuban-Press-version-2_Shoulders-flat.mp4?_=1','Mancuernas',0),(103,'Elevaciones posteriores con mancuernas','https://eresfitness.com/elevaciones-posteriores-con-mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/Elevaciones-posteriores-con-mancuernas.jpg.webp','Mancuernas',0),(104,'Elevaciones laterales','https://eresfitness.com/elevaciones-laterales-con-mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/03341205-Dumbbell-Lateral-Raise_shoulder-flat.mp4?_=1','Mancuernas',0),(105,'Elevaciones frontales con mancuernas','https://eresfitness.com/elevacion-frontal-con-mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/2019/09/03101205-Dumbbell-Front-Raise_Shoulders-flat.mp4?_=1','Mancuernas',0),(106,'Press militar con mancuernas','https://eresfitness.com/press-militar-con-mancuernas-o-barra/','Principiante','https://eresfitness.com/wp-content/uploads/2019/05/04051205-Dumbbell-Seated-Shoulder-Press_Shoulders-flat.mp4?_=1','Mancuernas',0),(107,'Sentadilla sumo','https://eresfitness.com/sentadilla-sumo-sin-equipo/','Principiante','https://eresfitness.com/wp-content/uploads/44171205-Sumo-Squat-Floor-Touch_Hips-flat_1.mp4?_=1','Peso corporal',0),(108,'Sentadilla MP','https://eresfitness.com/sentadilla-sumo-en-maquina-smith/','Intermedio','https://eresfitness.com/wp-content/uploads/31421205-Smith-Sumo-Squat_Hips-flat_1.mp4?_=1','Gym',0),(109,'Sentadilla con barra landmine','https://eresfitness.com/sentadilla-sumo-con-barra-landmine/','Intermedio','https://eresfitness.com/wp-content/uploads/40901205-Landmine-Sumo-Squat-male_Hips-flat_1.mp4?_=1','Gym',0),(110,'Zancadas','https://eresfitness.com/estocada-con-mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/03361205-Dumbbell-Lunge_Hips-flat_1.mp4?_=1','Peso corporal',0),(111,'Sentadilla silla MP','https://eresfitness.com/sentadilla-silla-en-maquina-smith/','Intermedio','https://eresfitness.com/wp-content/uploads/07501205-Smith-Chair-Squat_Thighs-flat.mp4?_=1','Gym',0),(112,'Prensa horizontal','https://eresfitness.com/press-de-pierna-horizontal-sentado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/22671205-Lever-Seated-Leg-Press_Thighs.mp4?_=1','Gym',0),(113,'Extensión de cuádriceps en máquina','https://eresfitness.com/extension-de-piernas-en-maquina/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/05851205-Lever-Leg-Extension_Thighs-FIX-flat.mp4?_=1','Gym',0),(114,'Step Up','https://eresfitness.com/step-up-con-mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/04311205-Dumbbell-Step-up_Hips-flat_1.mp4?_=1','Peso corporal',0),(115,'Prensa desde abajo','https://eresfitness.com/press-de-pierna/','Principiante','https://eresfitness.com/wp-content/uploads/2020/12/07391205Sled45legpress-Hipsflat-1-e.mp4?_=1','Gym',0),(116,'Sentadilla Hack squat','https://eresfitness.com/sentadilla-hack-squat/','Principiante','https://eresfitness.com/wp-content/uploads/2020/12/41001205-Sled-Wide-Hack-Squat-male_Thighs-flat.mp4?_=1','Gym',0),(117,'peso muestro con barra','https://eresfitness.com/peso-muerto-con-barra/','Principiante','https://eresfitness.com/wp-content/uploads/2020/02/00321105-Barbell-Deadlift_Hips-FIX_max.png','Gym',0),(118,'Peso muerto rumano','https://eresfitness.com/peso-muerto-rumano/','Principiante','https://eresfitness.com/wp-content/uploads/22131105-Barbell-Romanian-Deadlift-female_Hips-FIX_max.webp','Gym',0),(119,'Curl femoral sentado','https://eresfitness.com/curl-femoral-sentado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/2019/09/05991205-Lever-Seated-Leg-Curl_Thighs.mp4?_=1','Gym',0),(120,'Curl femoral tumbado','https://eresfitness.com/curl-femoral-acostado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/2019/09/05861205-Lever-Lying-Leg-Curl_Thighs-flat.mp4?_=1','Gym',0),(121,'Patada glúteo en polea baja','https://eresfitness.com/patada-de-gluteo-en-polea-baja/','Principiante','https://eresfitness.com/wp-content/uploads/2019/06/Patada-de-gl%C3%BAteo-en-polea-baja.jpg.webp','Gym',0),(122,'Abductores en máquina','https://eresfitness.com/aductores-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/05981205-Lever-Seated-Hip-Adduction_Thighs.mp4?_=1','Gym',0);
/*!40000 ALTER TABLE `ejercicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejercicios_musculos`
--

DROP TABLE IF EXISTS `ejercicios_musculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ejercicios_musculos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_ejercicio` int(11) NOT NULL,
  `id_musculo` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ejercicio` (`id_ejercicio`),
  KEY `id_musculo` (`id_musculo`),
  CONSTRAINT `ejercicios_musculos_ibfk_1` FOREIGN KEY (`id_ejercicio`) REFERENCES `ejercicios` (`id`),
  CONSTRAINT `ejercicios_musculos_ibfk_2` FOREIGN KEY (`id_musculo`) REFERENCES `musculos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=258 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejercicios_musculos`
--

LOCK TABLES `ejercicios_musculos` WRITE;
/*!40000 ALTER TABLE `ejercicios_musculos` DISABLE KEYS */;
INSERT INTO `ejercicios_musculos` VALUES (1,3,1),(2,4,2),(3,5,2),(4,1,1),(5,7,1),(6,6,2),(7,9,1),(8,2,1),(9,8,2),(10,10,2),(11,12,2),(12,11,2),(13,13,2),(14,14,1),(15,15,1),(16,16,1),(17,17,1),(18,18,1),(19,19,2),(20,20,2),(21,21,2),(22,22,2),(23,23,2),(24,24,2),(25,26,2),(26,25,2),(27,28,2),(28,29,1),(29,27,2),(30,30,1),(31,31,1),(32,32,2),(33,33,2),(34,34,1),(35,35,2),(36,36,2),(37,37,1),(38,38,6),(39,40,6),(40,39,6),(41,41,6),(42,42,6),(43,43,6),(44,44,6),(45,45,6),(46,46,6),(47,49,6),(48,48,6),(49,47,6),(50,50,6),(51,51,12),(52,54,6),(53,52,6),(54,56,14),(55,53,14),(56,55,6),(57,57,6),(58,58,16),(59,60,16),(60,59,17),(61,61,16),(62,63,18),(63,62,16),(64,66,17),(65,65,16),(66,64,16),(67,67,18),(68,68,3),(69,70,13),(70,69,3),(71,71,3),(72,72,3),(73,75,3),(74,73,3),(75,74,3),(76,76,3),(77,77,3),(78,78,3),(79,79,3),(80,80,3),(81,82,19),(82,81,3),(83,83,20),(84,84,4),(85,85,5),(86,87,20),(87,86,19),(88,88,4),(89,89,21),(90,91,5),(91,92,27),(92,90,4),(93,93,8),(94,94,27),(95,95,5),(96,96,5),(97,97,23),(98,98,27),(99,99,29),(100,104,29),(101,100,27),(102,103,27),(103,101,5),(104,102,29),(105,105,5),(106,106,5),(107,108,28),(108,107,28),(109,110,28),(110,111,28),(111,109,28),(112,112,28),(113,113,28),(114,115,28),(115,114,28),(116,116,28),(117,118,14),(118,117,28),(119,120,15),(120,121,13),(121,119,15),(122,122,21),(123,5,1),(124,10,1),(125,12,1),(126,14,3),(127,15,3),(128,17,4),(129,16,3),(130,19,1),(131,21,1),(132,20,1),(133,23,1),(134,22,1),(135,24,1),(136,28,1),(137,27,1),(138,36,1),(139,38,7),(140,39,7),(141,40,7),(142,42,7),(143,41,7),(144,45,7),(145,43,7),(146,44,7),(147,46,7),(148,48,7),(149,47,7),(150,54,7),(151,56,13),(152,52,7),(153,53,13),(154,57,7),(155,82,4),(156,85,4),(157,86,4),(158,91,2),(159,89,4),(160,92,9),(161,93,9),(162,97,16),(163,102,27),(164,108,13),(165,111,13),(166,107,13),(167,110,13),(168,112,13),(169,109,13),(170,115,13),(171,114,13),(172,116,13),(173,118,13),(174,117,13),(175,122,22),(176,24,5),(177,42,8),(178,39,8),(179,38,8),(180,40,8),(181,41,8),(182,43,8),(183,46,8),(184,44,8),(185,45,8),(186,48,8),(187,47,8),(188,56,15),(189,54,8),(190,52,8),(191,53,20),(192,57,8),(193,85,20),(194,91,1),(195,97,18),(196,89,20),(197,118,15),(198,122,23),(199,42,9),(200,38,9),(201,39,9),(202,40,9),(203,41,9),(204,43,9),(205,46,9),(206,45,9),(207,44,9),(208,48,9),(209,47,9),(210,52,9),(211,54,9),(212,97,17),(213,57,9),(214,85,3),(215,89,19),(216,38,10),(217,42,10),(218,39,10),(219,122,25),(220,40,10),(221,43,10),(222,46,10),(223,41,10),(224,45,10),(225,44,10),(226,48,10),(227,52,10),(228,47,10),(229,54,10),(230,97,28),(231,57,10),(232,38,11),(233,89,22),(234,42,11),(235,39,11),(236,46,11),(237,43,11),(238,40,11),(239,41,11),(240,45,11),(241,44,11),(242,52,11),(243,48,11),(244,47,11),(245,54,11),(246,97,5),(247,57,11),(248,89,23),(249,89,25),(250,97,29),(251,89,24),(252,97,30),(253,97,13),(254,97,15),(255,97,32),(256,97,31),(257,97,3);
/*!40000 ALTER TABLE `ejercicios_musculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupos_musculares`
--

DROP TABLE IF EXISTS `grupos_musculares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grupos_musculares` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupos_musculares`
--

LOCK TABLES `grupos_musculares` WRITE;
/*!40000 ALTER TABLE `grupos_musculares` DISABLE KEYS */;
INSERT INTO `grupos_musculares` VALUES (1,'Pectorales'),(2,'Triceps'),(3,'Abdomen'),(4,'Hombros'),(5,'Espalda'),(6,'Piernas'),(7,'Biceps');
/*!40000 ALTER TABLE `grupos_musculares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredientes`
--

DROP TABLE IF EXISTS `ingredientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_alimento` int(11) NOT NULL,
  `id_receta` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_alimento` (`id_alimento`),
  KEY `id_receta` (`id_receta`),
  CONSTRAINT `ingredientes_ibfk_1` FOREIGN KEY (`id_alimento`) REFERENCES `alimentos` (`id`),
  CONSTRAINT `ingredientes_ibfk_2` FOREIGN KEY (`id_receta`) REFERENCES `recetas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredientes`
--

LOCK TABLES `ingredientes` WRITE;
/*!40000 ALTER TABLE `ingredientes` DISABLE KEYS */;
INSERT INTO `ingredientes` VALUES (10,59,2,120),(11,52,2,250),(19,2,1,300),(20,86,1,300),(28,5,10,100),(29,6,11,100),(30,5,12,100);
/*!40000 ALTER TABLE `ingredientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_dias`
--

DROP TABLE IF EXISTS `menu_dias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_dias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) NOT NULL,
  `dia_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_id` (`menu_id`),
  KEY `dia_id` (`dia_id`),
  CONSTRAINT `menu_dias_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu_semanal` (`id`),
  CONSTRAINT `menu_dias_ibfk_2` FOREIGN KEY (`dia_id`) REFERENCES `dias` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_dias`
--

LOCK TABLES `menu_dias` WRITE;
/*!40000 ALTER TABLE `menu_dias` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu_dias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_semanal`
--

DROP TABLE IF EXISTS `menu_semanal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_semanal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_semanal`
--

LOCK TABLES `menu_semanal` WRITE;
/*!40000 ALTER TABLE `menu_semanal` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu_semanal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `musculos`
--

DROP TABLE IF EXISTS `musculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `musculos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `id_grupo_muscular` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_grupo_muscular` (`id_grupo_muscular`),
  CONSTRAINT `musculos_ibfk_1` FOREIGN KEY (`id_grupo_muscular`) REFERENCES `grupos_musculares` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musculos`
--

LOCK TABLES `musculos` WRITE;
/*!40000 ALTER TABLE `musculos` DISABLE KEYS */;
INSERT INTO `musculos` VALUES (1,'Pectoral mayor esternal',1),(2,'Pectoral mayor clavicular',1),(3,'Tríceps braquial',2),(4,'Recto abdominal',3),(5,'Deltoides anterior',4),(6,'Dorsal ancho',5),(7,'Infraespinoso',5),(8,'Redondo mayor',5),(9,'Redondo menor',5),(10,'Trapecio fibras inferiores',5),(11,'Trapecio fibras medias',5),(12,'Trapecio fibras superiores',5),(13,'Glúteo mayor',6),(14,'Erector de la columna',5),(15,'Isquiotibiales',6),(16,'Bíceps braquial',7),(17,'Braquiorradial',7),(18,'Braquial',7),(19,'Iliopsoas',6),(20,'Oblicuos',3),(21,'Abductor corto',6),(22,'Abductor largo',6),(23,'Abductor mayor',6),(24,'Glúteo medio',6),(25,'Pectíneo',6),(26,'Deltoides anterior',4),(27,'Deltoides posterior',4),(28,'Cuádriceps',6),(29,'Deltoides lateral',4),(30,'Gastrocnemio',6),(31,'Sóleo',6),(32,'Serrato anterior',4),(33,'Erector de la columna',5);
/*!40000 ALTER TABLE `musculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recetas`
--

DROP TABLE IF EXISTS `recetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recetas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `foto` text DEFAULT NULL,
  `prot` decimal(10,2) DEFAULT NULL,
  `carbs` decimal(10,2) DEFAULT NULL,
  `fat` decimal(10,2) DEFAULT NULL,
  `kcal` decimal(10,2) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `isVegan` tinyint(1) DEFAULT NULL,
  `GlutenFree` tinyint(1) DEFAULT NULL,
  `missing_fields` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recetas`
--

LOCK TABLES `recetas` WRITE;
/*!40000 ALTER TABLE `recetas` DISABLE KEYS */;
INSERT INTO `recetas` VALUES (1,'Ensalada','','https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_1280.jpg',15.60,14.70,75.90,795.00,12.90,1,1,0),(2,'Arroz y pollo','','',64.40,105.12,5.97,704.40,6.98,0,1,1),(10,'','','',0.50,8.90,0.10,36.00,1.50,1,1,0),(11,'','','',1.00,5.60,0.60,30.00,2.40,1,1,0),(12,'','','',0.50,8.90,0.10,36.00,1.50,1,1,0);
/*!40000 ALTER TABLE `recetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutinas`
--

DROP TABLE IF EXISTS `rutinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutinas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `missing_fields` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutinas`
--

LOCK TABLES `rutinas` WRITE;
/*!40000 ALTER TABLE `rutinas` DISABLE KEYS */;
INSERT INTO `rutinas` VALUES (17,'aaaaaaaayyyyyyyyyyyyyyyy','aaaaaaaayyyyyyyaaaaaaaaaaa',0),(18,'ggggggggggggggggggggggggggggggggggggg','ggggggggggggggggggg',0);
/*!40000 ALTER TABLE `rutinas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutinas_ejercicios`
--

DROP TABLE IF EXISTS `rutinas_ejercicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutinas_ejercicios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_rutina` int(11) NOT NULL,
  `id_ejercicio` int(11) NOT NULL,
  `series` int(11) NOT NULL,
  `repeticiones` int(11) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_rutina` (`id_rutina`),
  KEY `id_ejercicio` (`id_ejercicio`),
  CONSTRAINT `rutinas_ejercicios_ibfk_1` FOREIGN KEY (`id_rutina`) REFERENCES `rutinas` (`id`),
  CONSTRAINT `rutinas_ejercicios_ibfk_2` FOREIGN KEY (`id_ejercicio`) REFERENCES `ejercicios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutinas_ejercicios`
--

LOCK TABLES `rutinas_ejercicios` WRITE;
/*!40000 ALTER TABLE `rutinas_ejercicios` DISABLE KEYS */;
INSERT INTO `rutinas_ejercicios` VALUES (73,18,3,5,5,'dfd'),(74,18,5,5,5,'fd'),(75,18,6,5,5444,'df'),(76,17,4,666666,777777,'eeeeeeeeeee'),(77,17,5,666666666,777777777,'eeeeeeeeeeee');
/*!40000 ALTER TABLE `rutinas_ejercicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutinas_semana`
--

DROP TABLE IF EXISTS `rutinas_semana`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutinas_semana` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutinas_semana`
--

LOCK TABLES `rutinas_semana` WRITE;
/*!40000 ALTER TABLE `rutinas_semana` DISABLE KEYS */;
/*!40000 ALTER TABLE `rutinas_semana` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutinassemana_rutinas`
--

DROP TABLE IF EXISTS `rutinassemana_rutinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutinassemana_rutinas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_rutina` int(11) NOT NULL,
  `id_rutina_semana` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_rutina` (`id_rutina`),
  KEY `id_rutina_semana` (`id_rutina_semana`),
  CONSTRAINT `rutinassemana_rutinas_ibfk_1` FOREIGN KEY (`id_rutina`) REFERENCES `rutinas` (`id`),
  CONSTRAINT `rutinassemana_rutinas_ibfk_2` FOREIGN KEY (`id_rutina_semana`) REFERENCES `rutinas_semana` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutinassemana_rutinas`
--

LOCK TABLES `rutinassemana_rutinas` WRITE;
/*!40000 ALTER TABLE `rutinassemana_rutinas` DISABLE KEYS */;
/*!40000 ALTER TABLE `rutinassemana_rutinas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-30 17:27:19
=======
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: db_tfg
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `alimentos`
--

DROP TABLE IF EXISTS `alimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alimentos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `prot` decimal(10,2) DEFAULT NULL,
  `carbs` decimal(10,2) DEFAULT NULL,
  `fat` decimal(10,2) DEFAULT NULL,
  `kcal` decimal(10,2) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `isVegan` tinyint(1) DEFAULT NULL,
  `GlutenFree` tinyint(1) DEFAULT NULL,
  `unidad` int(11) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `alimentos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias_alimentos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=210 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alimentos`
--

LOCK TABLES `alimentos` WRITE;
/*!40000 ALTER TABLE `alimentos` DISABLE KEYS */;
INSERT INTO `alimentos` VALUES (1,'Albaricoque',0.40,12.50,0.10,52.00,1.20,1,1,80,1),(2,'Aguacate',1.90,3.20,23.50,232.00,2.50,1,1,165,1),(3,'Arandano',0.60,10.10,0.40,41.00,3.00,1,1,2,1),(4,'Cereza',0.80,11.70,0.10,48.00,2.80,1,1,5,1),(5,'Ciruela',0.50,8.90,0.10,36.00,1.50,1,1,70,1),(6,'Frambuesa',1.00,5.60,0.60,30.00,2.40,1,1,3,1),(7,'Fresa',0.90,5.60,0.40,27.00,1.80,1,1,25,1),(8,'Granada',0.50,15.90,0.10,62.00,2.30,1,1,220,1),(9,'Grosella',0.90,8.30,0.60,37.00,1.70,1,1,3,1),(10,'Higo fresco',0.90,11.20,0.20,47.00,2.10,1,1,60,1),(11,'Limón',0.60,3.20,0.00,14.00,0.80,1,1,50,1),(12,'Mandarina',0.70,9.10,0.40,41.00,1.90,1,1,120,1),(13,'Mango',0.70,16.80,0.40,73.00,3.50,1,1,200,1),(14,'Manzana',0.20,10.40,0.30,45.00,1.30,1,1,150,1),(15,'Melocotón',0.80,6.90,0.10,30.00,1.60,1,1,120,1),(16,'Melón',0.80,7.40,0.20,30.00,1.60,1,1,100,1),(17,'Mora',1.00,6.50,0.60,35.00,1.90,1,1,5,1),(18,'Naranja',1.00,11.70,0.20,53.00,2.20,1,1,150,1),(19,'Níspero',0.40,6.10,0.40,28.00,1.40,1,1,100,1),(20,'Papaya',0.50,10.80,0.30,43.00,2.00,1,1,100,1),(21,'Pasa',3.10,65.90,0.50,299.00,1.50,1,1,2,1),(22,'Piña',0.50,12.70,0.20,55.00,2.40,1,1,100,1),(23,'Pera',0.70,2.00,0.10,38.00,1.10,1,1,120,1),(24,'Plátano',1.20,19.50,0.30,85.00,1.90,1,1,150,1),(25,'Pomelo',0.60,6.20,0.00,26.00,1.30,1,1,150,1),(26,'Sandía',0.70,3.70,0.00,15.00,1.00,1,1,100,1),(27,'Uva',0.50,15.60,0.10,61.00,2.70,1,1,4,1),(28,'Coco',3.30,6.20,33.50,354.00,3.00,1,1,100,1),(29,'Kiwi',1.10,14.70,0.50,61.00,1.80,1,1,100,1),(30,'Melón',0.80,7.40,0.20,30.00,1.60,1,1,100,1),(31,'Bistec de ternera',20.70,0.50,1.00,92.00,2.75,0,1,NULL,NULL),(32,'Carne picada de vacuno',14.50,0.00,37.30,398.00,1.80,0,1,NULL,NULL),(33,'Carne picada de cerdo',14.50,0.00,37.30,398.00,1.80,0,1,NULL,NULL),(34,'Ciervo',20.30,0.60,3.70,120.00,4.00,0,1,NULL,2),(35,'Cerdo carne grasa',14.50,0.00,37.30,398.00,1.80,0,1,NULL,2),(36,'Cabrito',19.20,0.70,17.00,127.00,3.25,0,1,NULL,2),(37,'Cerdo carne magra',19.90,0.00,6.80,146.00,2.40,0,1,NULL,2),(38,'Codorniz',25.00,0.00,6.80,162.00,3.30,0,1,NULL,2),(39,'Cordero Lechal',21.00,0.00,2.40,105.00,3.90,0,1,NULL,2),(40,'Cordero (Pierna)',17.10,0.00,3.30,98.00,3.00,0,1,NULL,2),(41,'Faisán',24.30,0.00,5.20,144.00,4.10,0,1,NULL,2),(42,'Hígado de cerdo',22.80,1.50,4.80,141.00,1.70,0,1,NULL,2),(43,'Higado de vacuno',21.00,0.90,4.40,129.00,2.30,0,1,NULL,2),(44,'Jabalí',21.00,0.40,2.00,107.00,4.00,0,1,NULL,2),(45,'Lacón',19.20,0.00,31.60,361.00,2.60,0,1,NULL,2),(46,'Liebre',22.80,0.00,3.20,126.00,3.80,0,1,NULL,2),(47,'Pato',15.90,0.00,24.90,288.00,3.20,0,1,NULL,2),(48,'Pavo pechuga',22.00,0.40,4.90,134.00,2.60,0,1,NULL,2),(49,'Pavo muslo',20.90,0.40,11.20,186.00,2.40,0,1,NULL,2),(50,'Perdiz',25.00,0.50,1.40,120.00,4.10,0,1,NULL,2),(51,'Pollo muslo',25.00,0.50,1.40,130.00,1.80,0,1,NULL,2),(52,'Pollo pechuga',22.40,0.00,2.10,108.00,2.60,0,1,NULL,2),(53,'Ternera carne magra',20.70,0.50,1.00,92.00,2.75,0,1,NULL,2),(54,'Ternera carne grasa',14.50,0.00,37.30,398.00,1.80,0,1,NULL,2),(55,'Ternera hígado',21.00,0.90,4.40,129.00,2.30,0,1,NULL,2),(56,'Ternera riñón',17.80,0.50,3.70,109.00,2.20,0,1,NULL,2),(57,'Ternera sesos',10.70,0.50,8.60,122.00,2.40,0,1,NULL,2),(58,'Conejo',21.20,0.00,6.60,120.00,2.80,0,1,NULL,2),(59,'Arroz',7.00,87.60,0.60,362.00,0.40,1,1,NULL,NULL),(60,'Avena',16.90,66.30,6.90,389.00,0.50,1,0,NULL,3),(61,'Centeno',9.40,76.00,1.00,350.00,0.50,1,0,NULL,3),(62,'Copos de Maiz',7.60,85.20,1.00,372.00,0.30,1,1,NULL,3),(63,'Cebada',10.40,82.30,1.40,373.00,0.45,1,0,NULL,3),(64,'Harina Integral',11.00,69.70,1.90,321.00,0.35,1,0,NULL,3),(65,'Galletas María',6.80,82.30,8.10,409.00,0.40,0,0,NULL,3),(66,'Harina',11.00,73.60,0.70,345.00,0.35,1,1,NULL,3),(67,'Harina de trigo',10.40,73.90,1.30,364.00,0.35,1,0,NULL,3),(68,'Maíz',9.20,73.00,3.80,363.00,0.30,1,1,NULL,3),(69,'Pan Blanco',8.10,64.00,0.50,270.00,0.35,1,0,NULL,3),(70,'Pan Integral',9.00,47.50,1.00,230.00,0.45,1,0,NULL,3),(71,'Pan Tostado',11.30,83.00,6.00,420.00,0.40,1,0,NULL,3),(72,'Polenta (Harina de Maíz',8.70,79.80,2.70,358.00,0.30,1,1,NULL,3),(73,'Sémola',11.50,77.60,0.50,361.00,0.40,1,0,NULL,3),(74,'Tapioca',0.60,86.40,0.20,363.00,0.50,1,1,NULL,3),(75,'Trigo duro',13.00,70.80,2.90,361.00,0.40,1,0,NULL,3),(76,'Yogur entero',3.30,4.00,3.50,61.00,0.25,0,0,NULL,4),(77,'Leche entera',3.20,4.60,3.70,63.00,0.15,0,1,NULL,4),(78,'Leche semidesnatada',3.50,5.00,1.80,49.00,0.15,0,1,NULL,4),(79,'Leche desnatada',3.40,4.70,0.20,33.00,0.15,0,1,NULL,4),(80,'Yogur desnatado',3.30,4.00,0.90,36.00,0.25,0,0,NULL,4),(81,'Yogur con frutas',2.80,12.60,3.30,89.00,0.30,0,0,NULL,4),(82,'Nata',2.30,3.40,35.00,337.00,0.75,0,1,NULL,4),(83,'Leche de Almendras',0.40,1.30,1.10,17.00,1.80,1,1,NULL,4),(84,'Leche de Avena',1.00,6.80,0.50,39.00,2.00,1,1,NULL,4),(85,'Leche de Coco',2.00,5.00,23.00,230.00,2.50,1,1,NULL,4),(86,'Leche de Soja',3.30,1.70,1.80,33.00,1.80,1,1,NULL,4),(87,'Leche de Arroz',0.30,9.80,1.00,47.00,2.00,1,1,NULL,4),(88,'Alubia (judía seca)',23.00,61.00,1.30,316.00,1.00,1,1,35,5),(89,'Garbanzo',21.80,54.30,4.90,338.00,0.80,1,1,35,5),(90,'Guisantes secos',21.70,53.60,2.00,304.00,1.20,1,1,35,5),(91,'Haba seca',27.00,46.50,2.40,304.00,1.00,1,1,35,5),(92,'Lenteja',25.00,54.00,2.50,325.00,1.00,1,1,35,5),(93,'Soja',36.50,17.30,19.50,416.00,1.50,1,1,35,5),(94,'Alubia (judía verde)',2.20,4.90,0.20,31.00,1.00,1,1,35,5),(95,'Guisantes frescos',5.50,12.50,0.40,81.00,1.20,1,1,35,5),(96,'Haba fresca',7.00,12.50,0.60,81.00,1.00,1,1,35,5),(97,'Almeja',10.20,2.20,2.50,73.00,2.00,0,1,NULL,6),(98,'Anguila',11.80,0.10,23.70,264.00,3.50,0,1,NULL,6),(99,'Arenque',17.70,0.00,11.50,174.00,1.25,0,1,NULL,6),(100,'Atún fresco',21.50,0.00,8.00,158.00,3.00,0,1,NULL,6),(101,'Bacalao',29.00,0.00,0.70,122.00,2.25,0,1,NULL,6),(102,'Boquerón',16.80,1.50,2.60,96.00,0.75,0,1,NULL,6),(103,'Caballa',17.00,0.00,11.10,170.00,1.50,0,1,NULL,6),(104,'Calamar',12.60,0.70,1.70,68.00,2.25,0,1,NULL,6),(105,'Dorada',19.80,0.00,1.20,80.00,3.00,0,1,NULL,6),(106,'Gallo',16.20,1.20,0.90,78.00,2.00,0,1,NULL,6),(107,'Gamba',13.60,2.90,0.60,65.00,4.50,0,1,NULL,6),(108,'Langosta',16.20,1.00,1.90,88.00,7.50,0,1,NULL,6),(109,'Lenguado',16.90,0.80,1.70,82.00,3.00,0,1,NULL,6),(110,'Lubina',16.60,0.60,1.50,82.00,4.00,0,1,NULL,6),(111,'Lucio',18.00,0.00,0.60,81.00,2.75,0,1,NULL,6),(112,'Mejillones',11.70,3.40,2.70,66.00,0.75,0,1,NULL,6),(113,'Merluza',17.00,0.00,0.30,71.00,2.25,0,1,NULL,6),(114,'Mero',17.90,0.60,0.70,80.00,4.50,0,1,NULL,6),(115,'Pez espada',16.90,1.00,4.20,109.00,4.50,0,1,NULL,6),(116,'Pulpo',10.60,1.40,1.00,57.00,3.00,0,1,NULL,6),(117,'Rodaballo',16.30,1.20,1.30,81.00,6.00,0,1,NULL,6),(118,'Salmón',18.40,0.00,12.00,176.00,4.50,0,1,NULL,6),(119,'Salmonete',15.80,1.10,6.20,123.00,3.00,0,1,NULL,6),(120,'Sardina',15.00,1.00,4.40,124.00,0.75,0,1,NULL,6),(121,'Sepia',14.00,0.70,1.50,73.00,3.00,0,1,NULL,6),(122,'Trucha',18.50,0.00,4.90,96.00,3.00,0,1,NULL,6),(123,'Vieira',12.50,1.20,1.80,70.00,4.50,0,1,NULL,6),(124,'Bacalao',29.00,0.00,0.70,122.00,2.25,0,1,NULL,6),(125,'Ajo',6.00,26.30,0.10,124.00,0.10,1,1,5,7),(126,'Alcachofa',1.40,2.30,0.20,17.00,1.40,1,1,120,7),(127,'Apio',2.30,2.40,0.20,22.00,1.40,1,1,100,7),(128,'Berenjena',1.10,2.60,0.10,16.00,1.40,1,1,200,7),(129,'Berro',2.40,1.60,0.20,13.20,1.40,1,1,25,7),(130,'Brécol',3.30,4.00,0.20,31.00,1.40,1,1,200,7),(131,'Brocoli',3.30,4.00,0.20,31.00,1.40,1,1,200,7),(132,'Rabano',1.30,2.80,0.10,16.00,1.40,1,1,50,7),(133,'Calabacín',1.30,1.40,0.10,12.00,1.40,1,1,100,7),(134,'Calabaza',1.10,3.50,0.10,18.00,1.40,1,1,150,7),(135,'Cardo',0.60,1.70,0.10,10.00,1.40,1,1,100,7),(136,'Cebolla',1.00,5.20,0.00,24.00,1.40,1,1,120,7),(137,'Col lombarda',1.90,3.40,0.20,20.00,1.40,1,1,100,7),(138,'Coles de Bruselas',4.20,4.30,0.50,31.00,1.40,1,1,100,7),(139,'Coliflor',3.20,2.70,0.20,25.00,1.40,1,1,100,7),(140,'Espárrago',3.60,2.90,0.20,27.00,1.40,1,1,100,7),(141,'Espinaca',3.40,3.00,0.70,31.00,1.40,1,1,100,7),(142,'Guisantes frescos',7.00,10.60,0.20,70.00,1.40,1,1,100,7),(143,'Haba fresca',4.10,7.70,0.80,52.00,1.40,1,1,100,7),(144,'Hinojo',0.50,3.20,0.30,16.00,1.40,1,1,100,7),(145,'Lechuga',1.80,2.20,0.40,19.00,1.40,1,1,100,7),(146,'Nabo',1.00,3.30,0.00,16.00,1.40,1,1,100,7),(147,'Patata',2.10,18.00,1.00,80.00,1.40,1,1,150,7),(148,'Pepino',0.70,2.00,0.10,10.40,1.40,1,1,100,7),(149,'Puerro',2.10,6.00,0.10,26.00,1.40,1,1,100,7),(150,'Remolacha',1.50,8.20,0.10,42.00,1.40,1,1,100,7),(151,'Repollo',2.10,2.50,0.10,19.00,1.40,1,1,100,7),(152,'Seta',4.60,5.20,0.40,35.00,1.40,1,1,40,7),(153,'Tomate',1.00,2.90,0.20,16.00,1.40,1,1,100,7),(154,'Trufa',6.00,0.70,0.50,30.00,1.40,1,1,10,7),(155,'Zanahoria',1.00,7.80,0.20,37.00,1.40,1,1,100,7),(156,'Acelga',1.60,2.10,0.20,19.00,1.40,1,1,100,7),(157,'Albahaca',3.20,2.70,0.60,23.00,1.40,1,1,10,7),(158,'Alfalfa',3.90,2.10,0.70,23.00,1.40,1,1,10,7),(159,'Huevo de gallina',13.00,1.10,11.10,156.00,0.15,0,1,50,8),(160,'Clara de huevo',11.00,1.10,0.00,52.00,0.05,0,1,NULL,8),(161,'Yema de huevo',16.00,1.10,27.00,322.00,0.10,0,1,NULL,8),(162,'Huevo de codorniz',13.00,1.10,11.00,158.00,0.30,0,1,12,8),(163,'Huevo de pato',12.00,1.10,14.00,185.00,0.40,0,1,70,8),(164,'Almendra',16.00,4.00,51.40,499.00,2.00,1,1,35,9),(165,'Avellana',13.00,1.80,62.90,625.00,2.00,1,1,35,9),(166,'Cacahuete',20.40,35.00,25.60,452.00,0.75,1,1,35,9),(167,'Castaña',4.70,89.00,3.00,349.00,1.50,1,1,35,9),(168,'Ciruela pasa',2.20,43.70,0.50,177.00,0.75,1,1,35,9),(169,'Dátil seco',2.70,63.10,0.60,256.00,1.50,1,1,35,9),(170,'Higo seco',3.50,66.60,2.70,270.00,1.50,1,1,35,9),(171,'Nuez',15.60,11.20,63.30,670.00,2.00,1,1,35,9),(172,'Piñón',29.60,5.00,47.80,568.00,4.00,1,1,35,9),(173,'Pistacho',20.00,28.00,45.00,600.00,2.50,1,1,35,9),(174,'Uva Pasa',1.90,72.00,0.60,301.00,1.00,1,1,35,9),(175,'Brie',17.00,1.67,21.00,263.00,1.50,0,1,NULL,10),(176,'Camembert',20.50,0.90,25.70,301.00,1.50,0,1,NULL,10),(177,'Cheddar',25.00,0.50,31.00,381.00,1.20,0,1,NULL,10),(178,'Edam',26.00,1.00,22.00,306.00,1.30,0,1,NULL,10),(179,'Emmental',28.50,3.60,30.60,404.00,1.40,0,1,NULL,10),(180,'Gruyère',29.00,1.50,30.00,393.00,1.50,0,1,NULL,10),(181,'Mozzarella',19.90,4.90,16.10,245.00,1.00,0,1,NULL,10),(182,'Parmesano',36.00,0.50,25.60,374.00,2.00,0,1,NULL,10),(183,'Queso de Oveja',28.20,0.50,29.50,380.00,1.50,0,1,NULL,10),(184,'Requesón',13.60,1.40,4.00,96.00,0.80,0,1,NULL,10),(185,'Roquefort',23.00,2.00,35.00,413.00,2.50,0,1,NULL,10),(186,'Pasta de huevo',19.00,73.40,0.20,368.00,0.00,0,0,NULL,11),(187,'Pasta de sémola',13.00,78.60,0.30,336.00,0.00,1,0,NULL,11),(188,'Pasta de trigo',10.00,70.00,1.00,350.00,1.00,1,0,NULL,11),(189,'Pasta integral',12.00,65.00,2.00,320.00,1.50,1,0,NULL,11),(190,'Pasta sin gluten',8.00,60.00,1.50,300.00,2.00,1,1,NULL,11),(191,'Pasta de legumbres',15.00,55.00,1.00,280.00,2.50,1,1,NULL,11),(192,'Bollería',6.00,50.00,20.00,400.00,1.00,1,0,NULL,12),(193,'Patatas fritas',5.00,50.00,30.00,500.00,1.00,1,1,NULL,12),(194,'Refrescos',0.00,40.00,0.00,150.00,1.00,1,1,NULL,12),(195,'Snacks',5.00,50.00,20.00,400.00,1.00,1,0,NULL,12),(196,'Ketchup',1.50,23.00,0.10,100.00,1.00,1,1,NULL,13),(197,'Mayonesa',1.10,1.50,75.00,680.00,1.00,1,1,NULL,13),(198,'Mostaza',5.70,6.50,3.40,66.00,1.00,1,1,NULL,13),(199,'Pesto',5.50,6.50,32.00,332.00,1.50,1,1,NULL,13),(200,'Salsa de soja',10.00,6.00,0.50,60.00,1.00,1,0,NULL,13),(201,'Salsa de tomate',1.20,8.70,0.20,40.00,1.00,1,1,NULL,13),(202,'Salsa de yogur',3.50,4.50,3.50,60.00,1.00,0,1,NULL,13),(203,'Azúcar',0.00,99.80,0.00,387.00,0.50,1,1,NULL,14),(204,'Chocolate',8.90,50.80,37.90,564.00,1.00,1,1,NULL,14),(205,'Cacao en polvo',19.00,54.00,14.00,228.00,1.50,1,1,NULL,14),(206,'Caramelo',0.00,99.50,0.00,394.00,0.50,1,1,NULL,14),(207,'Galletas',7.00,75.00,13.00,440.00,1.00,1,0,NULL,14),(208,'Mermelada',0.50,63.00,0.10,250.00,1.00,1,1,NULL,14),(209,'Miel',0.60,80.00,0.00,300.00,1.50,0,1,NULL,14);
/*!40000 ALTER TABLE `alimentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias_alimentos`
--

DROP TABLE IF EXISTS `categorias_alimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias_alimentos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias_alimentos`
--

LOCK TABLES `categorias_alimentos` WRITE;
/*!40000 ALTER TABLE `categorias_alimentos` DISABLE KEYS */;
INSERT INTO `categorias_alimentos` VALUES (1,'Frutas'),(2,'Carnes'),(3,'Cereales'),(4,'Lacteos'),(5,'Legumbres'),(6,'Pescados'),(7,'Verduras'),(8,'Huevos'),(9,'Frutos Secos'),(10,'Quesos'),(11,'Pastas'),(12,'Procesados'),(13,'Salsas'),(14,'Dulces');
/*!40000 ALTER TABLE `categorias_alimentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comidas`
--

DROP TABLE IF EXISTS `comidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comidas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `prot` decimal(10,2) DEFAULT NULL,
  `carbs` decimal(10,2) DEFAULT NULL,
  `fat` decimal(10,2) DEFAULT NULL,
  `kcal` decimal(10,2) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `isVegan` tinyint(1) DEFAULT NULL,
  `GlutenFree` tinyint(1) DEFAULT NULL,
  `missing_fields` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comidas`
--

LOCK TABLES `comidas` WRITE;
/*!40000 ALTER TABLE `comidas` DISABLE KEYS */;
/*!40000 ALTER TABLE `comidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comidas_items`
--

DROP TABLE IF EXISTS `comidas_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comidas_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comida_id` int(11) NOT NULL,
  `alimento_id` int(11) DEFAULT NULL,
  `receta_id` int(11) DEFAULT NULL,
  `cantidad_alimento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comida_id` (`comida_id`),
  KEY `alimento_id` (`alimento_id`),
  KEY `receta_id` (`receta_id`),
  CONSTRAINT `comidas_items_ibfk_1` FOREIGN KEY (`comida_id`) REFERENCES `comidas` (`id`),
  CONSTRAINT `comidas_items_ibfk_2` FOREIGN KEY (`alimento_id`) REFERENCES `alimentos` (`id`),
  CONSTRAINT `comidas_items_ibfk_3` FOREIGN KEY (`receta_id`) REFERENCES `recetas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comidas_items`
--

LOCK TABLES `comidas_items` WRITE;
/*!40000 ALTER TABLE `comidas_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `comidas_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dias`
--

DROP TABLE IF EXISTS `dias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `prot` decimal(10,2) DEFAULT NULL,
  `carbs` decimal(10,2) DEFAULT NULL,
  `fat` decimal(10,2) DEFAULT NULL,
  `kcal` decimal(10,2) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `isVegan` tinyint(1) DEFAULT NULL,
  `GlutenFree` tinyint(1) DEFAULT NULL,
  `missing_fields` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dias`
--

LOCK TABLES `dias` WRITE;
/*!40000 ALTER TABLE `dias` DISABLE KEYS */;
/*!40000 ALTER TABLE `dias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dias_comidas`
--

DROP TABLE IF EXISTS `dias_comidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dias_comidas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dia_id` int(11) NOT NULL,
  `comida_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dia_id` (`dia_id`),
  KEY `comida_id` (`comida_id`),
  CONSTRAINT `dias_comidas_ibfk_1` FOREIGN KEY (`dia_id`) REFERENCES `dias` (`id`),
  CONSTRAINT `dias_comidas_ibfk_2` FOREIGN KEY (`comida_id`) REFERENCES `comidas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dias_comidas`
--

LOCK TABLES `dias_comidas` WRITE;
/*!40000 ALTER TABLE `dias_comidas` DISABLE KEYS */;
/*!40000 ALTER TABLE `dias_comidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejercicios`
--

DROP TABLE IF EXISTS `ejercicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ejercicios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `nivel` varchar(255) DEFAULT NULL,
  `video` text DEFAULT NULL,
  `equipo` varchar(255) DEFAULT NULL,
  `missing_muscles` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejercicios`
--

LOCK TABLES `ejercicios` WRITE;
/*!40000 ALTER TABLE `ejercicios` DISABLE KEYS */;
INSERT INTO `ejercicios` VALUES (1,'Press de pecho en máquina','https://eresfitness.com/press-de-pecho-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/05771205-Lever-Chest-Press_Chest.mp4?_=1','Gym',0),(2,'Press de pecho declinado en máquina','https://eresfitness.com/press-de-pecho-declinado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/13001205-Lever-Decline-Chest-Press_Chest-flat.mp4?_=1','Gym',0),(3,'Press declinado con Mancuernas','https://eresfitness.com/press-de-banca-declinado-con-Mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/03011205-Dumbbell-Decline-Bench-Press_Chest-flat-1.mp4?_=1','Mancuernas, Banco abdominales',0),(4,'Press inclinado con poleas','https://eresfitness.com/press-de-banca-inclinado-con-poleas/','Intermedio','https://eresfitness.com/wp-content/uploads/01691205-Cable-Incline-Bench-Press_Chest-flat.mp4?_=1','Gym',0),(5,'Press plano con Mancuernas','https://eresfitness.com/press-martillo-con-Mancuernas-en-banco-plano/','Principiante','https://eresfitness.com/wp-content/uploads/03401205-Dumbbell-Lying-Hammer-Press_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(6,'Press inclinado con Mancuernas','https://eresfitness.com/press-martillo-en-banco-inclinado-con-Mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/03211205-Dumbbell-Incline-Hammer-Press_Chest-flat.mp4?_=1','Mancuernas, Banco regulable',0),(7,'Press declinado alterno con Mancuernas','https://eresfitness.com/press-de-banca-declinado-alternado-con-Mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/50971205-Dumbbell-Single-Arm-Alternate-Decline-Bench-Press.mp4?_=1','Mancuernas, Banco abdominales',0),(8,'Press banca inclinado con barra','https://eresfitness.com/press-de-banca-inclinado-con-barra/','Principiante','https://eresfitness.com/wp-content/uploads/00471205-Barbell-Incline-Bench-Press_Chest-flat.mp4?_=1','Gym',0),(9,'Pullover en máquina','https://eresfitness.com/pullover-en-maquina/','Intermedio','https://eresfitness.com/wp-content/uploads/22851205-Lever-Pullover-plate-loaded-_Back-flat.mp4?_=1','Gym',0),(10,'Press banca con Mancuernas','https://eresfitness.com/press-de-banca-con-Mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/02891205-Dumbbell-Bench-Press_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(11,'Press inclinado alterno con Mancuernas','https://eresfitness.com/press-alternado-inclinado-con-Mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/35451205-Dumbbell-Incline-Alternate-Press_Chest-flat.mp4?_=1','Mancuernas, Banco regulable',0),(12,'Press plano alterno con Mancuernas','https://eresfitness.com/press-alternado-con-Mancuernas-en-banco-plano/','Intermedio','https://eresfitness.com/wp-content/uploads/36951205-Dumbbell-Alternate-Bench-Press-high-start_Chest-.mp4?_=1','Mancuernas, Banco',0),(13,'Flexiones inclinadas','https://eresfitness.com/flexiones-inclinadas/','Principiante','https://eresfitness.com/wp-content/uploads/51601205-Incline-Close-Grip-Push-Up_Upper-Arms-flat.mp4?_=1','Peso corporal, Banco',0),(14,'Fondos con 2 sillas','https://eresfitness.com/fondos-con-dos-sillas/','Avanzado','https://eresfitness.com/wp-content/uploads/33871205-Dips-between-Chairs_Chest-flat.mp4?_=1','Peso corporal',0),(15,'Fondos con 1 silla','https://eresfitness.com/fondos-con-una-silla/','Principiante','https://eresfitness.com/wp-content/uploads/34431205-Dip-on-Floor-with-Chair_Chest-flat.mp4?_=1','Peso corporal',0),(16,'Fondos de pecho en máquina','https://eresfitness.com/fondos-de-pecho-en-maquina-asistida/','Principiante','https://eresfitness.com/wp-content/uploads/00091205-Assisted-Chest-Dip-kneeling_Chest-flat.mp4?_=1','Gym',0),(17,'Flexiones superman','https://eresfitness.com/flexiones-superman/','Avanzado','https://eresfitness.com/wp-content/uploads/08031205-Superman-Push-up_Chest-flat.mp4?_=1','Peso corporal',0),(18,'Flexión de brazos contra la pared','https://eresfitness.com/flexion-de-brazos-contra-la-pared/','Principiante','https://eresfitness.com/wp-content/uploads/06581205-Push-up-wall-II_Chest-flat.mp4?_=1','Peso corporal',0),(19,'Flexiones con bosu ball','https://eresfitness.com/flexiones-con-bosu-ball/','Intermedio','https://eresfitness.com/wp-content/uploads/06531205-Push-up-bosu-ball_Chest-flat.mp4?_=1','Peso corporal, Bosu ball',0),(20,'Flexiones con toque de pecho','https://eresfitness.com/flexiones-con-toque-de-pecho/','Avanzado','https://eresfitness.com/wp-content/uploads/32161205-Chest-Tap-Push-up-male-flat.mp4?_=1','Peso corporal',0),(21,'Flexiones a 1 mano','https://eresfitness.com/flexiones-a-una-mano/','Avanzado','https://eresfitness.com/wp-content/uploads/07251205-Single-Arm-Push-up_Chest-flat.mp4?_=1','Peso corporal',0),(22,'Flexiones abiertas','https://eresfitness.com/flexiones-abiertas/','Principiante','https://eresfitness.com/wp-content/uploads/13111205-Wide-Hand-Push-up_Chest-flat.mp4?_=1','Peso corporal',0),(23,'Apertura en banco plano con poleas','https://eresfitness.com/ejercicios/pectorales/page/3/','Intermedio','https://eresfitness.com/wp-content/uploads/01851205-Cable-Lying-Fly_Chest-flat.mp4?_=1','Gym',0),(24,'Squeeze Bench Press','https://eresfitness.com/squeeze-bench-press/','Principiante','https://eresfitness.com/wp-content/uploads/36811205-Dumbbell-Squeeze-Bench-Press_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(25,'Squeeze Press inclinado con mancuernas','https://eresfitness.com/squeeze-press-inclinado-con-mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/50671205-Dumbbell-Incline-Squeeze-Press_Upper-Arms-flat.mp4?_=1','Mancuernas, Banco regulable',0),(26,'Vuelos a 1 mano con mancuerna','https://eresfitness.com/vuelos-a-una-mano-con-mancuerna/','Principiante','https://eresfitness.com/wp-content/uploads/41501205-Dumbbell-One-Arm-Low-Fly_Chest-flat.mp4?_=1','Mancuernas',0),(27,'Press plano con poleas','https://eresfitness.com/press-de-banca-plano-con-poleas/','Intermedio','https://eresfitness.com/wp-content/uploads/01511205-Cable-Bench-Press_Chest.mp4?_=1','Gym',0),(28,'Press banca','https://eresfitness.com/press-de-banca-con-barra/','Principiante','https://eresfitness.com/wp-content/uploads/2020/04/00251205-Barbell-Bench-Press_Chest-flat.mp4?_=1','Gym',0),(29,'Fondos de pecho','https://eresfitness.com/fondos-de-pecho/','Intermedio','https://eresfitness.com/wp-content/uploads/2020/04/14301205-Chest-Dip-on-dip-pull-up-cage_Chest-flat.mp4?_=1','Peso corporal',0),(30,'Press banca declinado','https://eresfitness.com/press-declinado-con-barra/','Principiante','https://eresfitness.com/wp-content/uploads/2019/11/00331205-Barbell-Decline-Bench-Press_Chest-flat.mp4?_=1','Gym',0),(31,'Flexiones','https://eresfitness.com/flexiones-o-lagartijas/','Principiante','https://eresfitness.com/wp-content/uploads/2019/09/06621205-Push-up-male_Chest-flat.mp4?_=1','Peso corporal',0),(32,'Aperturas con mancuernas','https://eresfitness.com/apertura-con-mancuernas-en-banco-plano/','Principiante','https://eresfitness.com/wp-content/uploads/03081205-Dumbbell-Fly_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(33,'Aperturas inclinadas con mancuernas','https://eresfitness.com/aperturas-con-mancuernas-en-banco-inclinado/','Principiante','https://eresfitness.com/wp-content/uploads/2019/07/03191205-Dumbbell-Incline-Fly_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(34,'Pullover con mancuerna','https://eresfitness.com/pullover-con-mancuerna/','Intermedio','https://eresfitness.com/wp-content/uploads/03751205-Dumbbell-Pullover_Chest-flat.mp4?_=1','Mancuernas, Banco',0),(35,'Cruces en polea baja','https://eresfitness.com/cruces-en-polea-baja/','Intermedio','https://eresfitness.com/wp-content/uploads/01791205-Cable-Low-Fly_Chest.mp4?_=1','Gym',0),(36,'Cruces en polea alta','https://eresfitness.com/cruces-en-polea-alta-crossover/','Intermedio','https://eresfitness.com/wp-content/uploads/12691205-Cable-Standing-Up-Straight-Crossovers_Chest-flat.mp4?_=1','Gym',0),(37,'Aperturas en máquina','https://eresfitness.com/aperturas-en-contractor-de-pecho/','Principiante','https://eresfitness.com/wp-content/uploads/2019/05/05961205-Lever-Seated-Fly_Chest.mp4?_=1','Gym',0),(38,'Remos supino con mancuernas','https://eresfitness.com/wp-content/uploads/2019/07/03191205-Dumbbell-Incline-Fly_Chest-flat.mp4?_=1','Principiante','https://eresfitness.com/wp-content/uploads/37991205-Dumbbell-Bent-Over-Reverse-Row_Back-flat.mp4?_=1','Mancuernas',0),(39,'Remo supino en polea baja','https://eresfitness.com/remo-supino-en-polea-baja-de-pie/','Intermedio','https://eresfitness.com/wp-content/uploads/43671205-Cable-Bent-Over-Reverse-Grip-Row_Back-flat.mp4?_=1','Gym',0),(40,'Remo gironda con agarre de cuerda','https://eresfitness.com/remo-sentado-en-polea-con-agarre-en-cuerda/','Intermedio','https://eresfitness.com/wp-content/uploads/13231205-Cable-Rope-Seated-Row_Back-flat.mp4?_=1','Gym',0),(41,'Remo en máquina','https://eresfitness.com/remo-sentado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/13501205-Lever-Seated-Row_Back-flat.mp4?_=1','Gym',0),(42,'Remo invertido con agarre supino','https://eresfitness.com/remo-invertido-agarre-supino/','Intermedio','https://eresfitness.com/wp-content/uploads/12231205-Underhand-Grip-Inverted-Back-Row_Back-flat.mp4?_=1','Peso corporal',0),(43,'Remo inclinado con mancuernas','https://eresfitness.com/remo-en-banco-inclinado-con-mancuernas-agarre-neutro/','Intermedio','https://eresfitness.com/wp-content/uploads/33201205-Dumbbell-Hammer-Grip-Incline-Bench-Two-Arm-Row_Back-flat.mp4?_=1','Mancuernas, Banco regulable',0),(44,'Remo en polea con agarre supino','https://eresfitness.com/remo-en-polea-agarre-supino/','Principiante','https://eresfitness.com/wp-content/uploads/32331205-Cable-Seated-Supine-grip-Row-male_Back-flat.mp4?_=1','Gym',0),(45,'Remo sentado en polea con agarre abierto','https://eresfitness.com/remo-sentado-en-polea-con-agarre-abierto/','Intermedio','https://eresfitness.com/wp-content/uploads/02181205-Cable-Seated-Wide-grip-Row_Back-flat.mp4?_=1','Gym',0),(46,'Remo con mancuernas','https://eresfitness.com/remo-con-mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/02931205-Dumbbell-Bent-Over-Row_Back-flat.mp4?_=1','Mancuernas',0),(47,'Remo con barra','https://eresfitness.com/remo-con-barra-z-agarre-supino/','Intermedio','https://eresfitness.com/wp-content/uploads/13441205-EZ-Bar-Reverse-Grip-Bent-Over-Row_Back-flat.mp4?_=1','Gym',0),(48,'Remo con barra landmine','https://eresfitness.com/remo-con-barra-landmine-agarre-v/','Intermedio','https://eresfitness.com/wp-content/uploads/32001205-Lever-Bent-over-Row-with-V-bar-plate-loaded_Back.mp4?_=1','Gym',0),(49,'Jalón al pecho tras nuca','https://eresfitness.com/jalon-al-pecho-tras-nuca/','Avanzado','https://eresfitness.com/wp-content/uploads/02051205-Cable-Rear-Pulldown_Back-flat.mp4?_=1','Gym',0),(50,'Jalón al pecho a 1 mano con polea','https://eresfitness.com/jalon-al-pecho-a-una-mano-sentado-con-polea/','Principiante','https://eresfitness.com/wp-content/uploads/12041205-Cable-one-arm-lat-pulldown_back-flat.mp4?_=1','Gym',0),(51,'encogimiento de hombros en MP','https://eresfitness.com/encogimiento-de-hombros-en-maquina-smith-agarre-abierto/','Principiante','https://eresfitness.com/wp-content/uploads/52231205-Smith-Wide-Shrug_Back-flat.mp4?_=1','Gym',0),(52,'Remo con mancuerna UL','https://eresfitness.com/remo-con-mancuerna-unilateral/','Principiante','https://eresfitness.com/wp-content/uploads/02921205-Dumbbell-Bent-over-Row_back_Back-flat.mp4?_=1','Mancuernas',0),(53,'Superman','https://eresfitness.com/twist-superman/','Intermedio','https://eresfitness.com/wp-content/uploads/40911205-Twist-Superman-male_Hips-flat_1.mp4?_=1','Peso corporal',0),(54,'Remo gironda','https://eresfitness.com/remo-sentado-en-polea-baja/','Principiante','https://eresfitness.com/wp-content/uploads/2020/02/26611205-Cable-Seated-Row-with-V-bar_Back-flat.mp4?_=1','Gym',0),(55,'Jalón al pecho','https://eresfitness.com/jalon-al-pecho-agarre-abierto/','Principiante','https://eresfitness.com/wp-content/uploads/2020/02/01971205-Cable-Pulldown-pro-lat-bar_Back-flat.mp4?_=1','Gym',0),(56,'Peso muerto rumano con barra','https://eresfitness.com/peso-muerto-rumano/','Principiante','https://eresfitness.com/wp-content/uploads/22131105-Barbell-Romanian-Deadlift-female_Hips-FIX_max.webp','Gym',0),(57,'Remo en barra T','https://eresfitness.com/remo-en-barra-t/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/05/06061205-Lever-T-bar-Row-plate-loaded_Back-flat.mp4?_=1','Gym',0),(58,'Curl predicador a 1 mano con mancuerna','https://eresfitness.com/curl-predicador-a-una-mano-con-mancuerna/','Principiante','https://eresfitness.com/wp-content/uploads/52981205-Dumbbell-Preacher-Curl-Turned-Torso_Upper-Arms-f.mp4?_=1','Mancuernas',0),(59,'Curl martillo en polea con cuerda','https://eresfitness.com/curl-martillo-en-polea-con-cuerda/','Principiante','https://eresfitness.com/wp-content/uploads/01651205-Cable-Hammer-Curl-with-rope-male_Forearms-flat.mp4?_=1','Gym',0),(60,'Curl de Bíceps sentado en máquina','https://eresfitness.com/curl-de-biceps-sentado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/43361205-Lever-Biceps-Curl_Upper-Arms-flat.mp4?_=1','Gym',0),(61,'Curl con barra','https://eresfitness.com/curl-con-barra-z/','Principiante','https://eresfitness.com/wp-content/uploads/04471205-EZ-Barbell-Curl_Upper-Arms-flat.mp4?_=1','Gym',0),(62,'Curl en polea','https://eresfitness.com/curl-a-un-brazo-en-polea/','Principiante','https://eresfitness.com/wp-content/uploads/01901205-Cable-One-Arm-Curl_Upper-Arms-flat.mp4?_=1','Gym',0),(63,'Curl de bíceps en máquina','https://eresfitness.com/curl-concentrado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/2020/12/18721205-Lever-Preacher-Curl-plate-loaded_Upper-Arms.mp4?_=1','Gym',0),(64,'Curl bíceps inclinado con mancuerna','https://eresfitness.com/curl-biceps-inclinado-con-mancuerna/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/03151205-Dumbbell-Incline-Biceps-Curl_Upper-Arms.mp4?_=1','mancuernas, Banco regulable',0),(65,'Bíceps alterno con mancuernas','https://eresfitness.com/curl-de-biceps/','Principiante','https://eresfitness.com/wp-content/uploads/04161205-Dumbbell-Standing-Biceps-Curl_Upper-Arms-flat.mp4?_=1','Mancuernas',0),(66,'Bíceps martillo con mancuernas','https://eresfitness.com/curl-martillo-con-mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/2019/05/03131205-Dumbbell-Hammer-Curl_Forearms-flat.mp4?_=1','Mancuernas',0),(67,'Curl concentrado con mancuerna','https://eresfitness.com/curl-concentrado-biceps/','Principiante','https://eresfitness.com/wp-content/uploads/2019/05/02971205-Dumbbell-Concentration-Curl_Upper-Arms-FIX-flat.mp4?_=1','Mancuernas',0),(68,'Press francés con polea baja','https://eresfitness.com/press-frances-con-polea-baja/','Intermedio','https://eresfitness.com/wp-content/uploads/52431205-Cable-Lying-Triceps-Extension-Low_Upper-Arms-fla-1.mp4?_=1','Gym',0),(69,'Press de copa con mancuerna','https://eresfitness.com/press-de-copa-con-mancuerna-de-pie/','Intermedio','https://eresfitness.com/wp-content/uploads/04301205-Dumbbell-Standing-Triceps-Extension_Upper-Arms-flat.mp4?_=1','Mancuernas',0),(70,'Patada de glúteo','https://eresfitness.com/patada-de-gluteo-rodilla-flexionada/','Principiante','https://eresfitness.com/wp-content/uploads/05571205-Kicks-Leg-Bent_Hips.mp4?_=1','Peso corporal',0),(71,'Patada tríceps con mancuerna','https://eresfitness.com/patada-de-triceps-con-mancuerna/','Principiante','https://eresfitness.com/wp-content/uploads/03541205-Dumbbell-One-Arm-Kickback_Upper-Arms-flat.mp4?_=1','Mancuernas',0),(72,'Flexiones sobre los antebrazos','https://eresfitness.com/flexiones-sobre-los-antebrazos/','Avanzado','https://eresfitness.com/wp-content/uploads/14671205-Push-up-on-Forearms_Upper-Arms-flat.mp4?_=1','Peso corporal',0),(73,'Flexiones Diamante','https://eresfitness.com/flexiones-diamante/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/02831205-Diamond-Push-up_Upper-Arms-flat.mp4?_=1','Peso corporal',0),(74,'Extensión de tríceps sobre la cabeza en polea alta','https://eresfitness.com/extension-de-triceps-sobre-la-cabeza-con-polea/','Intermedio','https://eresfitness.com/wp-content/uploads/01941205-Cable-Overhead-Triceps-Extension-rope-attachment.mp4?_=1','Gym',0),(75,'Rompecráneos con mancuernas','https://eresfitness.com/rompecraneos-con-mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/03511205-Dumbbell-Lying-Triceps-Extension_Upper-Arms-flat.mp4?_=1','Mancuernas, Banco',0),(76,'Extensión de tríceps con polea','https://eresfitness.com/extensiones-de-triceps-con-agarre-en-v-en-polea/','Principiante','https://eresfitness.com/wp-content/uploads/02411205-Cable-Triceps-Pushdown-V-bar-attachment_Upper-Ar.mp4?_=1','Gym',0),(77,'Extensión de tríceps con cuerda','https://eresfitness.com/extension-de-triceps-a-una-mano-en-polea-agarre-cuerda/','Principiante','https://eresfitness.com/wp-content/uploads/12271205-Cable-Standing-One-Arm-Tricep-Pushdown-Overhand-G.mp4?_=1','Gym',0),(78,'Flexiones brazoas cerrados','https://eresfitness.com/flexiones-de-brazo-cerradas/','Intermedio','https://eresfitness.com/wp-content/uploads/2021/01/Flexiones-de-relo.webp','Peso corporal',0),(79,'Press banca con agarre cerrado','https://eresfitness.com/press-de-banca-con-agarre-cerrado/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/11/00301205-Barbell-Close-Grip-Bench-Press_Upper-Arms.mp4?_=1','Gym',0),(80,'Extensión mancuerna tras nuca','https://eresfitness.com/extension-mancuerna-tras-nuca-con-una-mano/','Principiante','https://eresfitness.com/wp-content/uploads/2019/11/04231205-Dumbbell-Standing-One-Arm-Extension_Upper-Arms-fla.mp4?_=1','Mancuernas',0),(81,'Extensión de tríceps tras nuca con mancuerna','https://eresfitness.com/extension-de-triceps-tras-nuca-con-mancuerna/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/21881205-Dumbbell-Seated-Triceps-Extension_Upper-Arms-flat.mp4?_=1','Mancuernas',0),(82,'Rueda abdominal','https://eresfitness.com/rueda-abdominal-de-pie/','Avanzado','https://eresfitness.com/wp-content/uploads/07961205-Standing-Wheel-Rollout_Waist-flat.mp4?_=1','Rueda abdominal',0),(83,'Plancha lateral','https://eresfitness.com/plancha-lateral/','Intermedio','https://eresfitness.com/wp-content/uploads/07151205-Side-Plank-m_Waist-flat.mp4?_=1','Peso corporal',0),(84,'Plancha','https://eresfitness.com/plancha-de-rodillas/','Principiante','https://eresfitness.com/wp-content/uploads/32381205-Kneeling-plank-male_Waist-flat.mp4?_=1','Peso corporal',0),(85,'Inchworm','https://eresfitness.com/inchworm/','Intermedio','https://eresfitness.com/wp-content/uploads/14711205-Inchworm_Waist-flat.mp4?_=1','Peso corporal',0),(86,'Hollow hold','https://eresfitness.com/hollow-hold/','Intermedio','https://eresfitness.com/wp-content/uploads/12461205-Hollow-Hold_Waist-flat.mp4?_=1','Peso corporal',0),(87,'Giro ruso con mancuernas','https://eresfitness.com/giro-ruso-con-mancuerna/','Avanzado','https://eresfitness.com/wp-content/uploads/42491205-Dumbbell-Straight-Leg-Russian-Twist_Waist-flat.mp4?_=1','Mancuernas',0),(88,'Crunch en máquina','https://eresfitness.com/crunch-sentado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/14521205-Lever-Seated-Crunch_Waist-flat.mp4?_=1','Gym',0),(89,'Piernas arriba','https://eresfitness.com/8-leg-crunch/','Avanzado','https://eresfitness.com/wp-content/uploads/40221205-Seated-8-Leg-Crunch_Waist-flat.mp4?_=1','Peso corporal',0),(90,'Abdominales','https://eresfitness.com/abdominales-cruzados/','Intermedio','https://eresfitness.com/wp-content/uploads/2020/02/02621105-Cross-Body-Crunch_waist_max.jpg','Peso corporal',0),(91,'Rotación interna de hombro en polea','https://eresfitness.com/rotacion-interna-de-hombro-en-polea/','Principiante','https://eresfitness.com/wp-content/uploads/50881205-Cable-Shoulder-Internal-Rotation_Shoulders-flat.mp4?_=1','Gym',0),(92,'Rotación externa de hombro en polea','https://eresfitness.com/rotacion-externa-de-hombro-en-polea/','Principiante','https://eresfitness.com/wp-content/uploads/02351205-Cable-Standing-Shoulder-External-Rotation_Back-fla.mp4?_=1','Gym',0),(93,'Rotación externa de hombro con mancuerna','https://eresfitness.com/rotacion-externa-de-hombro-con-mancuerna/','Principiante','https://eresfitness.com/wp-content/uploads/36841205-Dumbbell-External-Rotation_Back-flat.mp4?_=1','Mancuernas',0),(94,'Remo de deltoides posterior con mancuerna','https://eresfitness.com/remo-de-deltoides-posterior-con-mancuerna/','Intermedio','https://eresfitness.com/wp-content/uploads/03771205-Dumbbell-Rear-Delt-Row_shoulder-flat.mp4?_=1','mancuernas',0),(95,'Press militar con barra','https://eresfitness.com/press-militar-de-pie-en-maquina-smith/','Intermedio','https://eresfitness.com/wp-content/uploads/07741205-Smith-Standing-Military-Press_Shoulders-flat.mp4?_=1','Gym',0),(96,'Press de hombro alterno con mancuernas','https://eresfitness.com/press-de-hombros-alternado-con-mancuernas-sentado/','Intermedio','https://eresfitness.com/wp-content/uploads/03881205-Dumbbell-Seated-Alternate-Press_Shoulders-flat.mp4?_=1','Mancuernas',0),(97,'Clean and jerk con pesa rusa','https://eresfitness.com/clean-and-jerk-a-una-mano-con-pesa-rusa/','Avanzado','https://eresfitness.com/wp-content/uploads/05371205-Kettlebell-One-Arm-Clean-and-Jerk_Shoulders-flat.mp4?_=1','Gym',0),(98,'Remo a la cara con cuerda en polea alta','https://eresfitness.com/remo-a-la-cara-con-cuerda-en-polea-alta/','Intermedio','https://eresfitness.com/wp-content/uploads/2021/01/02331105-Cable-Standing-Rear-Delt-Row-with-rope_shoulder_max.jpg','Gym',0),(99,'Elevaciones laterales en máquina','https://eresfitness.com/elevaciones-laterales-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/2021/01/05841205-Lever-Lateral-Raise_shoulder-flat.mp4?_=1','Gym',0),(100,'Aperturas invertidas en máquina','https://eresfitness.com/aperturas-invertidas-en-maquina/','Intermedio','https://eresfitness.com/wp-content/uploads/2020/12/06021205-Lever-Seated-Reverse-Fly_Shoulders-flat.mp4?_=1','Gym',0),(101,'Press de hombros en máquina','https://eresfitness.com/press-de-hombros-en-maquina/','Intermedio','https://eresfitness.com/wp-content/uploads/2020/12/14541205-Lever-Seated-Shoulder-Press_Shoulders-flat.mp4?_=1','Gym',0),(102,'Press cubano con mancuernas','https://eresfitness.com/press-cubano/','Avanzado','https://eresfitness.com/wp-content/uploads/2019/11/21361205-Dumbbell-Cuban-Press-version-2_Shoulders-flat.mp4?_=1','Mancuernas',0),(103,'Elevaciones posteriores con mancuernas','https://eresfitness.com/elevaciones-posteriores-con-mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/Elevaciones-posteriores-con-mancuernas.jpg.webp','Mancuernas',0),(104,'Elevaciones laterales','https://eresfitness.com/elevaciones-laterales-con-mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/03341205-Dumbbell-Lateral-Raise_shoulder-flat.mp4?_=1','Mancuernas',0),(105,'Elevaciones frontales con mancuernas','https://eresfitness.com/elevacion-frontal-con-mancuernas/','Principiante','https://eresfitness.com/wp-content/uploads/2019/09/03101205-Dumbbell-Front-Raise_Shoulders-flat.mp4?_=1','Mancuernas',0),(106,'Press militar con mancuernas','https://eresfitness.com/press-militar-con-mancuernas-o-barra/','Principiante','https://eresfitness.com/wp-content/uploads/2019/05/04051205-Dumbbell-Seated-Shoulder-Press_Shoulders-flat.mp4?_=1','Mancuernas',0),(107,'Sentadilla sumo','https://eresfitness.com/sentadilla-sumo-sin-equipo/','Principiante','https://eresfitness.com/wp-content/uploads/44171205-Sumo-Squat-Floor-Touch_Hips-flat_1.mp4?_=1','Peso corporal',0),(108,'Sentadilla MP','https://eresfitness.com/sentadilla-sumo-en-maquina-smith/','Intermedio','https://eresfitness.com/wp-content/uploads/31421205-Smith-Sumo-Squat_Hips-flat_1.mp4?_=1','Gym',0),(109,'Sentadilla con barra landmine','https://eresfitness.com/sentadilla-sumo-con-barra-landmine/','Intermedio','https://eresfitness.com/wp-content/uploads/40901205-Landmine-Sumo-Squat-male_Hips-flat_1.mp4?_=1','Gym',0),(110,'Zancadas','https://eresfitness.com/estocada-con-mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/03361205-Dumbbell-Lunge_Hips-flat_1.mp4?_=1','Peso corporal',0),(111,'Sentadilla silla MP','https://eresfitness.com/sentadilla-silla-en-maquina-smith/','Intermedio','https://eresfitness.com/wp-content/uploads/07501205-Smith-Chair-Squat_Thighs-flat.mp4?_=1','Gym',0),(112,'Prensa horizontal','https://eresfitness.com/press-de-pierna-horizontal-sentado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/22671205-Lever-Seated-Leg-Press_Thighs.mp4?_=1','Gym',0),(113,'Extensión de cuádriceps en máquina','https://eresfitness.com/extension-de-piernas-en-maquina/','Intermedio','https://eresfitness.com/wp-content/uploads/2019/09/05851205-Lever-Leg-Extension_Thighs-FIX-flat.mp4?_=1','Gym',0),(114,'Step Up','https://eresfitness.com/step-up-con-mancuernas/','Intermedio','https://eresfitness.com/wp-content/uploads/04311205-Dumbbell-Step-up_Hips-flat_1.mp4?_=1','Peso corporal',0),(115,'Prensa desde abajo','https://eresfitness.com/press-de-pierna/','Principiante','https://eresfitness.com/wp-content/uploads/2020/12/07391205Sled45legpress-Hipsflat-1-e.mp4?_=1','Gym',0),(116,'Sentadilla Hack squat','https://eresfitness.com/sentadilla-hack-squat/','Principiante','https://eresfitness.com/wp-content/uploads/2020/12/41001205-Sled-Wide-Hack-Squat-male_Thighs-flat.mp4?_=1','Gym',0),(117,'peso muestro con barra','https://eresfitness.com/peso-muerto-con-barra/','Principiante','https://eresfitness.com/wp-content/uploads/2020/02/00321105-Barbell-Deadlift_Hips-FIX_max.png','Gym',0),(118,'Peso muerto rumano','https://eresfitness.com/peso-muerto-rumano/','Principiante','https://eresfitness.com/wp-content/uploads/22131105-Barbell-Romanian-Deadlift-female_Hips-FIX_max.webp','Gym',0),(119,'Curl femoral sentado','https://eresfitness.com/curl-femoral-sentado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/2019/09/05991205-Lever-Seated-Leg-Curl_Thighs.mp4?_=1','Gym',0),(120,'Curl femoral tumbado','https://eresfitness.com/curl-femoral-acostado-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/2019/09/05861205-Lever-Lying-Leg-Curl_Thighs-flat.mp4?_=1','Gym',0),(121,'Patada glúteo en polea baja','https://eresfitness.com/patada-de-gluteo-en-polea-baja/','Principiante','https://eresfitness.com/wp-content/uploads/2019/06/Patada-de-gl%C3%BAteo-en-polea-baja.jpg.webp','Gym',0),(122,'Abductores en máquina','https://eresfitness.com/aductores-en-maquina/','Principiante','https://eresfitness.com/wp-content/uploads/05981205-Lever-Seated-Hip-Adduction_Thighs.mp4?_=1','Gym',0);
/*!40000 ALTER TABLE `ejercicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejercicios_musculos`
--

DROP TABLE IF EXISTS `ejercicios_musculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ejercicios_musculos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_ejercicio` int(11) NOT NULL,
  `id_musculo` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ejercicio` (`id_ejercicio`),
  KEY `id_musculo` (`id_musculo`),
  CONSTRAINT `ejercicios_musculos_ibfk_1` FOREIGN KEY (`id_ejercicio`) REFERENCES `ejercicios` (`id`),
  CONSTRAINT `ejercicios_musculos_ibfk_2` FOREIGN KEY (`id_musculo`) REFERENCES `musculos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=258 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejercicios_musculos`
--

LOCK TABLES `ejercicios_musculos` WRITE;
/*!40000 ALTER TABLE `ejercicios_musculos` DISABLE KEYS */;
INSERT INTO `ejercicios_musculos` VALUES (1,3,1),(2,4,2),(3,5,2),(4,1,1),(5,7,1),(6,6,2),(7,9,1),(8,2,1),(9,8,2),(10,10,2),(11,12,2),(12,11,2),(13,13,2),(14,14,1),(15,15,1),(16,16,1),(17,17,1),(18,18,1),(19,19,2),(20,20,2),(21,21,2),(22,22,2),(23,23,2),(24,24,2),(25,26,2),(26,25,2),(27,28,2),(28,29,1),(29,27,2),(30,30,1),(31,31,1),(32,32,2),(33,33,2),(34,34,1),(35,35,2),(36,36,2),(37,37,1),(38,38,6),(39,40,6),(40,39,6),(41,41,6),(42,42,6),(43,43,6),(44,44,6),(45,45,6),(46,46,6),(47,49,6),(48,48,6),(49,47,6),(50,50,6),(51,51,12),(52,54,6),(53,52,6),(54,56,14),(55,53,14),(56,55,6),(57,57,6),(58,58,16),(59,60,16),(60,59,17),(61,61,16),(62,63,18),(63,62,16),(64,66,17),(65,65,16),(66,64,16),(67,67,18),(68,68,3),(69,70,13),(70,69,3),(71,71,3),(72,72,3),(73,75,3),(74,73,3),(75,74,3),(76,76,3),(77,77,3),(78,78,3),(79,79,3),(80,80,3),(81,82,19),(82,81,3),(83,83,20),(84,84,4),(85,85,5),(86,87,20),(87,86,19),(88,88,4),(89,89,21),(90,91,5),(91,92,27),(92,90,4),(93,93,8),(94,94,27),(95,95,5),(96,96,5),(97,97,23),(98,98,27),(99,99,29),(100,104,29),(101,100,27),(102,103,27),(103,101,5),(104,102,29),(105,105,5),(106,106,5),(107,108,28),(108,107,28),(109,110,28),(110,111,28),(111,109,28),(112,112,28),(113,113,28),(114,115,28),(115,114,28),(116,116,28),(117,118,14),(118,117,28),(119,120,15),(120,121,13),(121,119,15),(122,122,21),(123,5,1),(124,10,1),(125,12,1),(126,14,3),(127,15,3),(128,17,4),(129,16,3),(130,19,1),(131,21,1),(132,20,1),(133,23,1),(134,22,1),(135,24,1),(136,28,1),(137,27,1),(138,36,1),(139,38,7),(140,39,7),(141,40,7),(142,42,7),(143,41,7),(144,45,7),(145,43,7),(146,44,7),(147,46,7),(148,48,7),(149,47,7),(150,54,7),(151,56,13),(152,52,7),(153,53,13),(154,57,7),(155,82,4),(156,85,4),(157,86,4),(158,91,2),(159,89,4),(160,92,9),(161,93,9),(162,97,16),(163,102,27),(164,108,13),(165,111,13),(166,107,13),(167,110,13),(168,112,13),(169,109,13),(170,115,13),(171,114,13),(172,116,13),(173,118,13),(174,117,13),(175,122,22),(176,24,5),(177,42,8),(178,39,8),(179,38,8),(180,40,8),(181,41,8),(182,43,8),(183,46,8),(184,44,8),(185,45,8),(186,48,8),(187,47,8),(188,56,15),(189,54,8),(190,52,8),(191,53,20),(192,57,8),(193,85,20),(194,91,1),(195,97,18),(196,89,20),(197,118,15),(198,122,23),(199,42,9),(200,38,9),(201,39,9),(202,40,9),(203,41,9),(204,43,9),(205,46,9),(206,45,9),(207,44,9),(208,48,9),(209,47,9),(210,52,9),(211,54,9),(212,97,17),(213,57,9),(214,85,3),(215,89,19),(216,38,10),(217,42,10),(218,39,10),(219,122,25),(220,40,10),(221,43,10),(222,46,10),(223,41,10),(224,45,10),(225,44,10),(226,48,10),(227,52,10),(228,47,10),(229,54,10),(230,97,28),(231,57,10),(232,38,11),(233,89,22),(234,42,11),(235,39,11),(236,46,11),(237,43,11),(238,40,11),(239,41,11),(240,45,11),(241,44,11),(242,52,11),(243,48,11),(244,47,11),(245,54,11),(246,97,5),(247,57,11),(248,89,23),(249,89,25),(250,97,29),(251,89,24),(252,97,30),(253,97,13),(254,97,15),(255,97,32),(256,97,31),(257,97,3);
/*!40000 ALTER TABLE `ejercicios_musculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupos_musculares`
--

DROP TABLE IF EXISTS `grupos_musculares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grupos_musculares` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupos_musculares`
--

LOCK TABLES `grupos_musculares` WRITE;
/*!40000 ALTER TABLE `grupos_musculares` DISABLE KEYS */;
INSERT INTO `grupos_musculares` VALUES (1,'Pectorales'),(2,'Triceps'),(3,'Abdomen'),(4,'Hombros'),(5,'Espalda'),(6,'Piernas'),(7,'Biceps');
/*!40000 ALTER TABLE `grupos_musculares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredientes`
--

DROP TABLE IF EXISTS `ingredientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_alimento` int(11) NOT NULL,
  `id_receta` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_alimento` (`id_alimento`),
  KEY `id_receta` (`id_receta`),
  CONSTRAINT `ingredientes_ibfk_1` FOREIGN KEY (`id_alimento`) REFERENCES `alimentos` (`id`),
  CONSTRAINT `ingredientes_ibfk_2` FOREIGN KEY (`id_receta`) REFERENCES `recetas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredientes`
--

LOCK TABLES `ingredientes` WRITE;
/*!40000 ALTER TABLE `ingredientes` DISABLE KEYS */;
INSERT INTO `ingredientes` VALUES (10,59,2,120),(11,52,2,250),(19,2,1,300),(20,86,1,300),(28,5,10,100),(29,6,11,100),(30,5,12,100);
/*!40000 ALTER TABLE `ingredientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_dias`
--

DROP TABLE IF EXISTS `menu_dias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_dias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) NOT NULL,
  `dia_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_id` (`menu_id`),
  KEY `dia_id` (`dia_id`),
  CONSTRAINT `menu_dias_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu_semanal` (`id`),
  CONSTRAINT `menu_dias_ibfk_2` FOREIGN KEY (`dia_id`) REFERENCES `dias` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_dias`
--

LOCK TABLES `menu_dias` WRITE;
/*!40000 ALTER TABLE `menu_dias` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu_dias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_semanal`
--

DROP TABLE IF EXISTS `menu_semanal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_semanal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_semanal`
--

LOCK TABLES `menu_semanal` WRITE;
/*!40000 ALTER TABLE `menu_semanal` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu_semanal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `musculos`
--

DROP TABLE IF EXISTS `musculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `musculos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `id_grupo_muscular` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_grupo_muscular` (`id_grupo_muscular`),
  CONSTRAINT `musculos_ibfk_1` FOREIGN KEY (`id_grupo_muscular`) REFERENCES `grupos_musculares` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musculos`
--

LOCK TABLES `musculos` WRITE;
/*!40000 ALTER TABLE `musculos` DISABLE KEYS */;
INSERT INTO `musculos` VALUES (1,'Pectoral mayor esternal',1),(2,'Pectoral mayor clavicular',1),(3,'Tríceps braquial',2),(4,'Recto abdominal',3),(5,'Deltoides anterior',4),(6,'Dorsal ancho',5),(7,'Infraespinoso',5),(8,'Redondo mayor',5),(9,'Redondo menor',5),(10,'Trapecio fibras inferiores',5),(11,'Trapecio fibras medias',5),(12,'Trapecio fibras superiores',5),(13,'Glúteo mayor',6),(14,'Erector de la columna',5),(15,'Isquiotibiales',6),(16,'Bíceps braquial',7),(17,'Braquiorradial',7),(18,'Braquial',7),(19,'Iliopsoas',6),(20,'Oblicuos',3),(21,'Abductor corto',6),(22,'Abductor largo',6),(23,'Abductor mayor',6),(24,'Glúteo medio',6),(25,'Pectíneo',6),(26,'Deltoides anterior',4),(27,'Deltoides posterior',4),(28,'Cuádriceps',6),(29,'Deltoides lateral',4),(30,'Gastrocnemio',6),(31,'Sóleo',6),(32,'Serrato anterior',4),(33,'Erector de la columna',5);
/*!40000 ALTER TABLE `musculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recetas`
--

DROP TABLE IF EXISTS `recetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recetas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `foto` text DEFAULT NULL,
  `prot` decimal(10,2) DEFAULT NULL,
  `carbs` decimal(10,2) DEFAULT NULL,
  `fat` decimal(10,2) DEFAULT NULL,
  `kcal` decimal(10,2) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `isVegan` tinyint(1) DEFAULT NULL,
  `GlutenFree` tinyint(1) DEFAULT NULL,
  `missing_fields` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recetas`
--

LOCK TABLES `recetas` WRITE;
/*!40000 ALTER TABLE `recetas` DISABLE KEYS */;
INSERT INTO `recetas` VALUES (1,'Ensalada','','https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_1280.jpg',15.60,14.70,75.90,795.00,12.90,1,1,0),(2,'Arroz y pollo','','',64.40,105.12,5.97,704.40,6.98,0,1,1),(10,'','','',0.50,8.90,0.10,36.00,1.50,1,1,0),(11,'','','',1.00,5.60,0.60,30.00,2.40,1,1,0),(12,'','','',0.50,8.90,0.10,36.00,1.50,1,1,0);
/*!40000 ALTER TABLE `recetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutinas`
--

DROP TABLE IF EXISTS `rutinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutinas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `missing_fields` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutinas`
--

LOCK TABLES `rutinas` WRITE;
/*!40000 ALTER TABLE `rutinas` DISABLE KEYS */;
INSERT INTO `rutinas` VALUES (17,'aaaaaaaayyyyyyyyyyyyyyyy','aaaaaaaayyyyyyyaaaaaaaaaaa',0),(18,'ggggggggggggggggggggggggggggggggggggg','ggggggggggggggggggg',0);
/*!40000 ALTER TABLE `rutinas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutinas_ejercicios`
--

DROP TABLE IF EXISTS `rutinas_ejercicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutinas_ejercicios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_rutina` int(11) NOT NULL,
  `id_ejercicio` int(11) NOT NULL,
  `series` int(11) NOT NULL,
  `repeticiones` int(11) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_rutina` (`id_rutina`),
  KEY `id_ejercicio` (`id_ejercicio`),
  CONSTRAINT `rutinas_ejercicios_ibfk_1` FOREIGN KEY (`id_rutina`) REFERENCES `rutinas` (`id`),
  CONSTRAINT `rutinas_ejercicios_ibfk_2` FOREIGN KEY (`id_ejercicio`) REFERENCES `ejercicios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutinas_ejercicios`
--

LOCK TABLES `rutinas_ejercicios` WRITE;
/*!40000 ALTER TABLE `rutinas_ejercicios` DISABLE KEYS */;
INSERT INTO `rutinas_ejercicios` VALUES (73,18,3,5,5,'dfd'),(74,18,5,5,5,'fd'),(75,18,6,5,5444,'df'),(76,17,4,666666,777777,'eeeeeeeeeee'),(77,17,5,666666666,777777777,'eeeeeeeeeeee');
/*!40000 ALTER TABLE `rutinas_ejercicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutinas_semana`
--

DROP TABLE IF EXISTS `rutinas_semana`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutinas_semana` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutinas_semana`
--

LOCK TABLES `rutinas_semana` WRITE;
/*!40000 ALTER TABLE `rutinas_semana` DISABLE KEYS */;
/*!40000 ALTER TABLE `rutinas_semana` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutinassemana_rutinas`
--

DROP TABLE IF EXISTS `rutinassemana_rutinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutinassemana_rutinas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_rutina` int(11) NOT NULL,
  `id_rutina_semana` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_rutina` (`id_rutina`),
  KEY `id_rutina_semana` (`id_rutina_semana`),
  CONSTRAINT `rutinassemana_rutinas_ibfk_1` FOREIGN KEY (`id_rutina`) REFERENCES `rutinas` (`id`),
  CONSTRAINT `rutinassemana_rutinas_ibfk_2` FOREIGN KEY (`id_rutina_semana`) REFERENCES `rutinas_semana` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutinassemana_rutinas`
--

LOCK TABLES `rutinassemana_rutinas` WRITE;
/*!40000 ALTER TABLE `rutinassemana_rutinas` DISABLE KEYS */;
/*!40000 ALTER TABLE `rutinassemana_rutinas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-30 17:27:19
>>>>>>> 2261a31bc0a2637c53b544aaa6d2a5bf335823da
