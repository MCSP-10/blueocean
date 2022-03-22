FROM node:17-alpine3.14 as dev
ARG api_base_url=http://localhost:3001
ENV REACT_APP_BASE_API_URL=$api_base_url
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
CMD ["npm","run","start"]

FROM node:17-alpine3.14 as builder
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json 
RUN npm i
COPY . . 
RUN ["npm", "run", "build"]

FROM nginx:1.21.6-alpine as production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]