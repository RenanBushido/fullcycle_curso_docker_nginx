FROM nginx:latest

RUN mkdir /var/www/html -p

COPY html /var/www/html

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD [ "nginx", "-g", "daemon off;" ]

EXPOSE 80:8080