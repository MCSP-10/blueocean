FROM node:17-alpine3.14 as dev
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
CMD ["npm","run","dev"]