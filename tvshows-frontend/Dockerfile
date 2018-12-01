FROM mhart/alpine-node:8
RUN apk update
WORKDIR /app
RUN yarn install
RUN yarn build --production
EXPOSE 80
CMD ["yarn", "start"]