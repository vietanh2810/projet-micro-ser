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

# Expose the port on which the Product Entity microservice will run (change it if needed)
EXPOSE 5050

# Start the Product Entity microservice
CMD ["npm", "run", "start:dev"]
