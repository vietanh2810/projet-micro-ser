# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm cache clean --force && npm install -g npm@latest

# Copy the rest of the application code
COPY . .

# Expose the port on which the Auth microservice will run (change it if needed)
EXPOSE 4000

# Start the Auth microservice
CMD ["npm", "run", "start:dev"]
