FROM node:latest

WORKDIR /usr/seller

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "start"]