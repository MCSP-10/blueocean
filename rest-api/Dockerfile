FROM node:17-alpine3.14 as dev
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
CMD ["npm","run","dev"]

FROM node:17-alpine3.14 as builder
ENV DATABASE_URL=postgres://postgres:MCSP-10pass@gatherer-db.corsn0kpztgo.us-east-1.rds.amazonaws.com:5432/gathererdb
ENV SECRET=1234
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
CMD ["npm","run","dev"]
