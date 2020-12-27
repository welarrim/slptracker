FROM node:15.5.0-alpine

RUN apk add --update --no-cache python2 make g++ && ln -sf python2 /usr/bin/python

WORKDIR /app
RUN chown -R node:node /app

USER node

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --prod

COPY --chown=node:node . .

CMD [ "yarn", "start" ]