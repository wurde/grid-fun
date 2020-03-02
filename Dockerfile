FROM node:12.16

COPY . /app

RUN npm install

CMD ["npm", "start"]
