# Using the Docker Files

cd into directory with the dockerfile and run the following commands: 

Build the image 
```
$ docker build -t <username>/<mom-kitchen> .
```
This runs the image and binds port 3000 on container to 3000 on the localhost of your system. When you go to localhost:3000 on a browser on your system, you will be able to use the application.
```
$ docker run -p 3000:3000 -d <username>/<mom-kitchen> 
```
Check to see if the image is running. 
```
$ docker images
```
Check the container id of the container for your image and note down information about the port.
```
$ docker ps -a
```
Check the logs of the container to see if your application has been launched.
```
$ docker logs <container-id>
```
