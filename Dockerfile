FROM node:23-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5713

ENTRYPOINT ["npm", "run", "dev", "--", "--port=5713", "--host=0.0.0.0"]
# docker run -p 80:5713 <tag that you gave the image>