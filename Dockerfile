FROM node:10 as base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --registry https://registry.npm.taobao.org
COPY . .
#EXPOSE 8080
#CMD [ "npm", "run", "serve" ]
RUN npm run build
FROM nginx as deploy
COPY --from=base /usr/src/app/build/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
