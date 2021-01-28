FROM node:14-alpine

RUN mkdir /opt/app

WORKDIR /opt/app

ADD . /opt/app

RUN npm install

EXPOSE 3000 3200

CMD ["node", "app.js"]
