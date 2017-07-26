FROM node:6.9.1

RUN export DEBIAN_FRONTEND=noninteractive && \
    apt-get update

RUN npm install --registry=https://registry.npm.taobao.org -g pm2
RUN apt-get -y install vim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json

RUN npm install --registry=https://registry.npm.taobao.org --production

VOLUME ["/var/log/inshelper"]

EXPOSE 3000

WORKDIR /usr/src/app
COPY . /usr/src/app

COPY ./docker-entrypoint.sh /
RUN chmod o+x /docker-entrypoint.sh

WORKDIR /usr/src/app

ENTRYPOINT ["/docker-entrypoint.sh"]

