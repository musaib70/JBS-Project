# Use Node.js 20 base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose application port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
