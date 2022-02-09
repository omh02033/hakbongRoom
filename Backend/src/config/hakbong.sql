-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.4.22-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 데이터 hakbongroom.room:~21 rows (대략적) 내보내기
DELETE FROM `room`;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` (`id`, `room`, `limit`, `personnel`, `floor`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`) VALUES
	(1, '407', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(3, '409', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(4, '410', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(5, '411', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(6, '412', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(7, '413', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(8, '414', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(9, '415', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(10, '416', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(11, '417', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(12, '418', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(13, '419', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(14, '420', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(15, '421', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(16, '422', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(17, '423', 6, 0, 4, NULL, NULL, NULL, NULL, NULL, NULL),
	(18, '501', 6, 0, 5, NULL, NULL, NULL, NULL, NULL, NULL),
	(19, '502', 6, 0, 5, NULL, NULL, NULL, NULL, NULL, NULL),
	(20, '503', 6, 0, 5, NULL, NULL, NULL, NULL, NULL, NULL),
	(22, '505', 6, 0, 5, NULL, NULL, NULL, NULL, NULL, NULL),
	(23, '506', 6, 0, 5, NULL, NULL, NULL, NULL, NULL, NULL),
	(24, '507', 6, 0, 5, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;

-- 테이블 데이터 hakbongroom.roomapplicant:~0 rows (대략적) 내보내기
DELETE FROM `roomapplicant`;
/*!40000 ALTER TABLE `roomapplicant` DISABLE KEYS */;
/*!40000 ALTER TABLE `roomapplicant` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
