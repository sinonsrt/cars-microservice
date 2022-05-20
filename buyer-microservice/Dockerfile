FROM node:latest

WORKDIR /usr/buyer

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3334

CMD ["npm", "start"]