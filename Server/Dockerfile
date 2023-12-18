FROM node:20.3-buster

WORKDIR /lecture-management

COPY package*.json ./

RUN npm install

COPY . .

CMD nodemon index.js
