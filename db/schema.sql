create database burgers;

use burgers;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    primary key (id)
);