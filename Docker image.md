## A Docker image is a lightweight, standalone, and executable package that contains everything needed to run a piece of software, including:

- Application code
- System tools
- Libraries
- Environment variables and configurations
Docker images are essentially blueprints for containers. They don’t run on their own but serve as templates for creating Docker containers, which are running instances of images.

### Key Features of Docker Images
1. Layered Structure:

- Docker images use a layered filesystem where each instruction in the Dockerfile (like COPY, RUN, CMD) creates a new layer.
- Layers make images more efficient because Docker can reuse layers across images if they haven't changed.

2. Immutable:

- Docker images are read-only, which means you can’t modify them directly. Instead, you modify images by creating new layers or building new images from a Dockerfile.

3. Portability:

- Since Docker images package everything the application needs, they can run consistently across different environments (e.g., development, testing, and production) without needing modifications.

### Example of a Docker Image

Consider this basic Dockerfile that creates an image for a Node.js application:

``` Dockerfile
# Use the Node.js base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy application files
COPY package*.json ./
RUN npm install
COPY . .

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]
```
- Each instruction (e.g., FROM, COPY, RUN, CMD) adds a layer to the image.
- Once you build this Dockerfile with docker build -t my-node-app ., Docker creates an image named my-node-app.
- You can then create a container from this image using docker run my-node-app.
