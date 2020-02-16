FROM node:latest

RUN npm install webpack webpack-cli -g

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install
RUN webpack

EXPOSE 3000

CMD npm start