FROM node:8

# app directory
WORKDIR /opt/batmantvshowsapp

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# set env
ENV NODE_ENV production

EXPOSE 8080

CMD ["npm", "start"]