## Steps to set docker in node application

## Add a Dockerfile:

### Dockerfile
```
# Dockerfile
FROM node:20  # Use an official Node.js runtime as a base image
WORKDIR /app  # Set the working directory in the container
COPY package*.json ./  # Copy package.json and package-lock.json
RUN npm install  # Install dependencies
COPY . .  # Copy all project files into the container
EXPOSE 3000  # Expose port 3000
CMD ["node", "index.js"]  # Run the app
```
Create a .dockerignore file (optional):
```
node_modules
npm-debug.log
```
### Step 2: Docker Commands Explained with Examples
1. Building the Docker Image
``` bash
docker build -t my-node-app .
```
- docker build: Creates an image from the Dockerfile.
- -t my-node-app: Tags the image with the name my-node-app.
- .: Specifies the current directory as the build context.
2. Running a Container from the Image
``` bash
docker run -d -p 3000:3000 --name my-running-app my-node-app
```
- docker run: Runs a container from an image.
- -d: Runs the container in detached mode (in the background).
- -p 3000:3000: Maps port 3000 of the host to port 3000 in the container.
- --name my-running-app: Names the container my-running-app.
- my-node-app: Specifies the image to use.

3. Listing Running Containers
``` bash
docker ps
```
- docker ps: Shows currently running containers with details like container ID, image, status, and port mappings.

4. Viewing Container Logs
``` bash
docker logs my-running-app
```
- docker logs: Displays the logs of a container.
- my-running-app: Specifies the container name or ID.

5. Executing Commands in a Running Container
``` bash
docker exec -it my-running-app /bin/bash
```
- docker exec: Runs a command inside a running container.
- -it: Opens an interactive terminal.
- /bin/bash: Starts a bash shell, allowing you to explore the container’s file system.

6. Stopping a Container
``` bash
docker stop my-running-app
```
- docker stop: Stops a running container.
- my-running-app: Specifies the container name or ID.

7. Removing a Container
``` bash
docker rm my-running-app
```
- docker rm: Removes a stopped container.

8. Viewing Available Images
``` bash
docker images
```
- docker images: Lists all Docker images available on the system.

9. Pulling an Image from Docker Hub
``` bash
docker pull node:20
```
- docker pull: Downloads an image from Docker Hub.

- node:20: Specifies the Node.js 20 image from Docker Hub.
Now, you have a Dockerized Node.js project, and you’ve learned the basics of managing Docker images and containers. You can modify the index.js file or add dependencies to explore Docker further, then rebuild the image using docker build to see the updates.
