FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=docker

ENV MYSQL_DATABASE=fullcycleDB

ENV MYSQL_USER=docker

ENV MYSQL_PASSWORD=docker

COPY ./dump/createTablePeople.sql /docker-entrypoint-initdb.d

VOLUME [ "./mysql/data", "/var/lib/mysql" ]

EXPOSE 3306