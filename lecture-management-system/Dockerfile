FROM node:20.3-buster

WORKDIR /lecture-management-system/

COPY package*.json ./

RUN npm config set legacy-peer-deps true

RUN npm install

COPY . .

CMD ["npm", "start"]
