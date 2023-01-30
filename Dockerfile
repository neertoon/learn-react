FROM node:18.13-alpine

# Set the working directory
WORKDIR /usr/src/service

ADD package.json /usr/src/service/package.json

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true

EXPOSE 3000