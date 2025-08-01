FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3001

CMD ["node","index.js"]

# commands to compile and run your app on a docker container
# docker build -t mernfullapp .
# docker run -p 5713:3001 mernfullapp
# docker ps (this will give you the container id that is running the server)
# docker stop [ID] (this will stop the server)
# docker rm [ID] (this will remove the container from docker)