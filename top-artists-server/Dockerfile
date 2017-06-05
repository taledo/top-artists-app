FROM smebberson/alpine-nodejs:6.7.0

ENV NODE_ENV production
WORKDIR /app

COPY root /
COPY bin/www /app/bin/www
COPY config/default.js /app/config/
COPY controllers /app/controllers/
COPY routes /app/routes/
COPY services /app/services/

COPY package.json /app/
COPY app.js /app/

RUN apk --update add make g++ && \
  npm install && \
  apk del make g++ && rm -rf /var/cache/apk/*

EXPOSE 3000