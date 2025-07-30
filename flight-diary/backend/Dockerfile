FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

RUN npm run tsc

RUN npm prune --omit=dev

USER node

CMD ["node", "build/src/index.js"]