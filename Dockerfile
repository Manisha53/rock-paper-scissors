# Use the official nginx image as the base image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove the default nginx static files
RUN rm -rf ./*

# Copy your static files (index.html, CSS, JS, etc.) into the container
COPY . .

# Expose port 80 for the nginx server
EXPOSE 80

# Define the CMD to start nginx, ensuring it serves index.html
CMD ["nginx", "-g", "daemon off;"]
