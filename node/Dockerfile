FROM node:20.14.0

WORKDIR /usr/src/app

RUN chmod 777 -R /usr/src/app/

COPY . .

RUN npm install

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*
    
VOLUME [ "./node/", "/usr/src/app" ]

EXPOSE 3000

CMD [ "node" , "./src/shared/index.js" ]