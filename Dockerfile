FROM node:lts-slim

# App work directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Build app
RUN npm install

# Bundle app source into container
COPY ./public ./public/

# Port exposed
EXPOSE 8080

# Run Node app
CMD [ "npm", "start" ]
