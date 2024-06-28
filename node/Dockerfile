FROM node:20.14.0

WORKDIR /usr/src/app

RUN chmod 777 -R /usr/src/app/

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node" , "./src/shared/index.js" ]