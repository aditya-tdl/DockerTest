# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy only package files for dependency installation
COPY package.json package-lock.json ./

# Install dependencies with verbose logging
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Remove default nginx configuration and copy custom config if needed (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf  # Uncomment if you have a custom nginx.conf

# Copy build files from the previous stage to the Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx in foreground mode
CMD ["nginx", "-g", "daemon off;"]
