# Using the dockerfile

First cd into the directory with the Dockerfile.

1. Build the image using the command

```
$ docker build -t <username>/mom-kitchen-app .
```
2. Use the following command to run the image and bind the exposed port to your system's localhost:3000
```
$ docker run -p 3000:3000 -d <username>/mom-kitchen-app
```
3. Check if the image if running
```
$ docker images
```
4. Check the container that has your image and whether the port information is correct. Note the container id
```
$ docker ps
```
5. Check the logs of the container to make sure everything is okay
```
$ docker logs <container-id>
```
6. Open your browser and go to localhost:3000. Your app should be running
