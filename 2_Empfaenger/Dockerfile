FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app
COPY .env.docker /app/.env 

CMD [ "node", "src/main.js" ]