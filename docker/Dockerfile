# FROM is the base image for which we will run our application
FROM node:10

# Setting work directory
WORKDIR /app

# Copy files and directories from the application
COPY package*.json ./

# Install the node modules
RUN npm install

# Copy the rest of files
COPY . /app

CMD ["npm", "run", "start"]

EXPOSE 3000
