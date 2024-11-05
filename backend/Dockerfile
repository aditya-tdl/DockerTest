# # Base image
# FROM node:18

# # Set NODE_ENV environment variable to optimize image size and runtime behavior
# # Change to "development" in local development if needed
# ARG NODE_ENV=production
# ENV NODE_ENV=$NODE_ENV

# # Create and set working directory
# WORKDIR /app

# # Copy package files first for efficient layer caching
# COPY package.json package-lock.json ./

# # Install only production dependencies if NODE_ENV is set to production
# RUN if [ "$NODE_ENV" = "production" ]; then \
#     npm start --only=production; \
#     else \
#     npm start; \
#     fi

# # Copy the rest of the application files
# COPY . .

# # Expose the application port
# EXPOSE 5000

# # Specify environment variables to be passed during runtime (do not hardcode sensitive data)
# # These can also be passed via Docker CLI or Docker Compose to keep them secure
# ENV PORT=5000
# ENV JWT_SECRET=${JWT_SECRET}
# ENV JWT_EXPIRES_IN=${JWT_EXPIRES_IN}
# ENV JWT_COOKIE_EXPIRES_IN=${JWT_COOKIE_EXPIRES_IN}
# ENV DATABASE_URL=${DATABASE_URL}

# # Start the server using npm start if script is available or specify node server.js
# CMD ["npm", "start"]
# Use the Node.js image
FROM node:18
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the source code into the container
COPY . .
# Expose the backend port 5001
EXPOSE 5000
# Run the Node.js server
CMD ["npm","run", "start"]