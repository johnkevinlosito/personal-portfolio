---
title: "Key Docker Commands"
publishedAt: "2021-02-09"
description: "Compilation of most used Docker commands"
excerpt: "Compilation of most used Docker commands. docker build . : Build a Dockerfile and create your own Image based on the file -t NAME:TAG : Assign a NAME and a TAG to an image docker build -t myapp:1.0 . docker run IMAGE_NAME : Create and start a new conta..."
categories: ["Docker"]
---

Compilation of most used Docker commands.

- `docker build .` : Build a Dockerfile and create your own Image based on the file
  - `-t NAME:TAG` : Assign a `NAME` and a `TAG` to an image
    - `docker build -t myapp:1.0 .`
- `docker run IMAGE_NAME` : Create and start a new container based on image `IMAGE_NAME`
  - `--name NAME` : Assign a `NAME` to the container. The name can be used for stopping and removing etc.
  - `-d` : Run the container in detached mode – i.e. output printed by the container is not visible, the command prompt/terminal does NOT wait for the container to stop
  - `-it` : Run the container in “interactive” mode – the container/application is then prepared to receive input via the command prompt/terminal. You can stop the container with `CTRL + C`when using the `-it` flag.
  - `--rm` : Automatically remove the container when it’s stopped
- `docker ps` : List all running containers.
  - `-a` : List all containers including stopped ones.
- `docker images` : List all stored images
- `docker rm CONTAINER` : Remove a container with the name `CONTAINER`
- `docker rmi IMAGE` : Remove an `IMAGE`
- `docker container prune` : Remove all stopped containers
- `docker image prune` : Remove all untagged images
  - `-a` : Remove all locally stored images
- `docker push IMAGE` : Push an image to DockerHub (or another registry) – the image name/tag must include the repository name/ URL
  - `docker push johnkevinlosito/myapp`
- `docker pull IMAGE` : Pull (download) an image from DockerHub (or another registry) – this is done automatically if you just docker run `IMAGE`and the image wasn’t pulled before
- `docker run -v /path/in/container IMAGE` : Create an anonymous volume inside the container
- `docker run -v some-name:/path/in/container IMAGE` : Create a named volume (`some-name`) inside a Container
- `docker run -v /path/on/your/host/machine:path/in/container IMAGE` : Create a BindMount and connect a local path on your host machine to some path in the Container
- `docker volume ls` : List all currently active/stored volumes (by all Containers)
- `docker volume rm VOL_NAME` : Remove a volume by its name
- `docker volume prune` : Remove all unused volumes (i.e. not connected to a currently running or stopped container)
- `docker network create NETWORK_NAME` : Create a container network
- `docker run -network NETWORK_NAME --name my-container my-image` : Run a container on the network (network must be created first)
- `docker-compose up`: Start all containers/services mentioned in the Docker Compose file
  - `-d`: Start in detached mode
  - `--build` : Force Docker Compose to rebuild all images
- `docker-compose down` : Stop and remove all containers/services

  - `-v` : Remove all Volumes used for the Containers – otherwise, they stay around, even if the Containers are removed

- `docker build .` : Build a Dockerfile and create your own Image based on the file
  - `-t NAME:TAG` : Assign a `NAME` and a `TAG` to an image
    - `docker build -t myapp:1.0 .`
- `docker run IMAGE_NAME` : Create and start a new container based on image `IMAGE_NAME`
  - `--name NAME` : Assign a `NAME` to the container. The name can be used for stopping and removing etc.
  - `-d` : Run the container in detached mode – i.e. output printed by the container is not visible, the command prompt/terminal does NOT wait for the container to stop
  - `-it` : Run the container in “interactive” mode – the container/application is then prepared to receive input via the command prompt/terminal. You can stop the container with `CTRL + C`when using the `-it` flag.
  - `--rm` : Automatically remove the container when it’s stopped
- `docker ps` : List all running containers.
  - `-a` : List all containers including stopped ones.
- `docker images` : List all stored images
- `docker rm CONTAINER` : Remove a container with the name `CONTAINER`
- `docker rmi IMAGE` : Remove an `IMAGE`
- `docker container prune` : Remove all stopped containers
- `docker image prune` : Remove all untagged images
  - `-a` : Remove all locally stored images
- `docker push IMAGE` : Push an image to DockerHub (or another registry) – the image name/tag must include the repository name/ URL
  - `docker push johnkevinlosito/myapp`
- `docker pull IMAGE` : Pull (download) an image from DockerHub (or another registry) – this is done automatically if you just docker run `IMAGE`and the image wasn’t pulled before
- `docker run -v /path/in/container IMAGE` : Create an anonymous volume inside the container
- `docker run -v some-name:/path/in/container IMAGE` : Create a named volume (`some-name`) inside a Container
- `docker run -v /path/on/your/host/machine:path/in/container IMAGE` : Create a BindMount and connect a local path on your host machine to some path in the Container
- `docker volume ls` : List all currently active/stored volumes (by all Containers)
- `docker volume rm VOL_NAME` : Remove a volume by its name
- `docker volume prune` : Remove all unused volumes (i.e. not connected to a currently running or stopped container)
- `docker network create NETWORK_NAME` : Create a container network
- `docker run -network NETWORK_NAME --name my-container my-image` : Run a container on the network (network must be created first)
- `docker-compose up`: Start all containers/services mentioned in the Docker Compose file
  - `-d`: Start in detached mode
  - `--build` : Force Docker Compose to rebuild all images
- `docker-compose down` : Stop and remove all containers/services

  - `-v` : Remove all Volumes used for the Containers – otherwise, they stay around, even if the Containers are removed

- `docker build .` : Build a Dockerfile and create your own Image based on the file
  - `-t NAME:TAG` : Assign a `NAME` and a `TAG` to an image
    - `docker build -t myapp:1.0 .`
- `docker run IMAGE_NAME` : Create and start a new container based on image `IMAGE_NAME`
  - `--name NAME` : Assign a `NAME` to the container. The name can be used for stopping and removing etc.
  - `-d` : Run the container in detached mode – i.e. output printed by the container is not visible, the command prompt/terminal does NOT wait for the container to stop
  - `-it` : Run the container in “interactive” mode – the container/application is then prepared to receive input via the command prompt/terminal. You can stop the container with `CTRL + C`when using the `-it` flag.
  - `--rm` : Automatically remove the container when it’s stopped
- `docker ps` : List all running containers.
  - `-a` : List all containers including stopped ones.
- `docker images` : List all stored images
- `docker rm CONTAINER` : Remove a container with the name `CONTAINER`
- `docker rmi IMAGE` : Remove an `IMAGE`
- `docker container prune` : Remove all stopped containers
- `docker image prune` : Remove all untagged images
  - `-a` : Remove all locally stored images
- `docker push IMAGE` : Push an image to DockerHub (or another registry) – the image name/tag must include the repository name/ URL
  - `docker push johnkevinlosito/myapp`
- `docker pull IMAGE` : Pull (download) an image from DockerHub (or another registry) – this is done automatically if you just docker run `IMAGE`and the image wasn’t pulled before
- `docker run -v /path/in/container IMAGE` : Create an anonymous volume inside the container
- `docker run -v some-name:/path/in/container IMAGE` : Create a named volume (`some-name`) inside a Container
- `docker run -v /path/on/your/host/machine:path/in/container IMAGE` : Create a BindMount and connect a local path on your host machine to some path in the Container
- `docker volume ls` : List all currently active/stored volumes (by all Containers)
- `docker volume rm VOL_NAME` : Remove a volume by its name
- `docker volume prune` : Remove all unused volumes (i.e. not connected to a currently running or stopped container)
- `docker network create NETWORK_NAME` : Create a container network
- `docker run -network NETWORK_NAME --name my-container my-image` : Run a container on the network (network must be created first)
- `docker-compose up`: Start all containers/services mentioned in the Docker Compose file
  - `-d`: Start in detached mode
  - `--build` : Force Docker Compose to rebuild all images
- `docker-compose down` : Stop and remove all containers/services
  - `-v` : Remove all Volumes used for the Containers – otherwise, they stay around, even if the Containers are removed
