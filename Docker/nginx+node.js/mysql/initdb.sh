#!/bin/sh

# create database nodedb if not exist
mysql -uroot -p${MYSQL_ROOT_PASSWORD} \
      -e "CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE};"

# create table people if not exist in nodedb
mysql -uroot -p${MYSQL_ROOT_PASSWORD} \
      -e "CREATE TABLE IF NOT EXISTS ${MYSQL_DATABASE}.people (id int NOT NULL AUTO_INCREMENT, name varchar(255), PRIMARY KEY (id));"

# insert "André Germano Regert" entry into table people if not exist
mysql -uroot -p${MYSQL_ROOT_PASSWORD} \
      -e "INSERT INTO ${MYSQL_DATABASE}.people (name) SELECT 'André Germano Regert' FROM DUAL WHERE NOT EXISTS (SELECT * FROM ${MYSQL_DATABASE}.people WHERE name = 'André Germano Regert') LIMIT 1;"
