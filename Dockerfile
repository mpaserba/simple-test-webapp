FROM node:14-alpine

RUN mkdir /opt/app

WORKDIR /opt/app

ADD . /opt/app

RUN npm install

CMD ["node", "app.js"]