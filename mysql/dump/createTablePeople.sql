-- CREATE USER 'docker'@'localhost' IDENTIFIED BY 'docker';
-- GRANT ALL PRIVILEGES ON *.* TO 'docker'@'localhost' WITH GRANT OPTION;

CREATE TABLE tb_people (
    nome varchar(50) not null
)