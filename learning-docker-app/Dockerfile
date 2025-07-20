FROM node:24-alpine AS build

WORKDIR /learning-docker-app

COPY package.json ./

RUN npm install

COPY ./ ./ 

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
