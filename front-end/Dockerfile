FROM node:17-alpine3.14 as dev
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
CMD ["npm","run","start"]

FROM node:17-alpine3.14 as builder
ENV REACT_APP_BASE_API_URL=http://143.198.168.93:3001
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