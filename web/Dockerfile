FROM node:latest

RUN npm install webpack webpack-cli -g

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

RUN npm start

ENV PORT=4000
# ENV PORT=3000

CMD [ "/usr/local/bin/node", "./index.js" ]

EXPOSE 4000
# EXPOSE 3000