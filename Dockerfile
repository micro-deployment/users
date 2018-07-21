FROM node:alpine

WORKDIR /app
COPY . /app

# Install dependencies
RUN npm install

# Build app
RUN npm run build

# Remove dev dependencies
RUN rm -r node_modules && npm i --production

CMD npm start