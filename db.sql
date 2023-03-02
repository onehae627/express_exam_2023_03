DROP DATABASE IF EXISTS wise_saying;
CREATE DATABASE wise_saying;
USE wise_saying;


CREATE TABLE wise_saying (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    regDate DATETIME NOT NULL,
    content VARCHAR(200) NOT NULL,
    author VARCHAR(50) NOT NULL     
);

INSERT INTO wise_saying
SET regDate = NOW(),
content = '작별 인사',
author = '김영하';

INSERT INTO wise_saying
SET regDate = NOW(),
content = '어서 오세요 휴남동 서점입니다.',
author = '황보름';

INSERT INTO wise_saying
SET regDate = NOW(),
content = '아몬드',
author = '손원평';

SELECT * FROM wise_saying;

SELECT * FROM wise_saying ORDER BY id DESC;