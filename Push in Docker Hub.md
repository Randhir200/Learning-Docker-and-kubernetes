### To push your Docker image to Docker Hub, follow these steps:

Step 1: Create a Docker Hub Account

- Go to Docker Hub and create an account if you don’t already have one.

Step 2: Log in to Docker Hub from the CLI

In your terminal, log in to Docker Hub using your Docker Hub credentials:

```bash
docker login
```
- This will prompt you to enter your Docker Hub username and password.

Step 3: Tag the Image with Your Docker Hub Username
Docker Hub images are organized by repository, using the format username/image_name. To push an image, you must tag it with your Docker Hub username.
Assuming your Docker Hub username is yourusername and your local image is my-node-app, you can tag it like this:

```bash
docker tag my-node-app yourusername/my-node-app:latest
```
- yourusername/my-node-app: Sets the new image name with your Docker Hub username.
- :latest: Specifies the tag. You can replace latest with any version or tag name you want.

Step 4: Push the Image to Docker Hub

Use the docker push command to upload the tagged image to Docker Hub:
```
bash
docker push yourusername/my-node-app:latest
```
- This will start uploading the image layers to Docker Hub. Once the process completes, your image will be available on Docker Hub under https://hub.docker.com/r/yourusername/my-node-app.

Step 5: Verify the Image on Docker Hub

- Go to Docker Hub.
- Navigate to your profile and check that your repository (my-node-app) and the image are listed.
- Now, you (or others) can pull your image from Docker Hub using:

``` bash
docker pull yourusername/my-node-app:latest
```
