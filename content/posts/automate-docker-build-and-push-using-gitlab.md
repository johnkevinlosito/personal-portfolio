---
title: "Automate Docker build and push using GitLab CI"
publishedAt: "2021-02-09"
description: "So you’ve got your dockerized project ready to push to Docker Hub? Let’s automate this process using GitLab CI."
excerpt: "So you’ve got your dockerized project ready to push to Docker Hub? Let’s automate this process using GitLab CI. First, sign up or sign in at https://hub.docker.com/ then create an Access Token by going to Settings then Security > New Access Token. ..."
categories: ["CICD", "Docker", "Devops"]
coverImage: "/assets/posts/docker-gitlab-ci.png"
---

So you’ve got your dockerized project ready to push to Docker Hub? Let’s automate this process using GitLab CI.

First, sign up or sign in at [https://hub.docker.com/](https://hub.docker.com/) then create an Access Token by going to Settings then Security > New Access Token. Take note of the created token as we’ll need it in the next steps. Visit [https://docs.docker.com/docker-hub/access-tokens/](https://docs.docker.com/docker-hub/access-tokens/) for reference.

Next, you need to create a GitLab project. Then go to `Settings` \> `CI/CD`, click on `Expand` in the `Variables` section and add the following variables with corresponding values:

- `CI_REGISTRY` =\> `docker.io`
- `CI_REGISTRY_IMAGE` =\> `index.docker.io/DOCKER_USERNAME/image_name`
- `CI_REGISTRY_USER` =\> Docker Hub username
- `CI_REGISTRY_TOKEN` =\> Docker Hub token created on the first step

**Make sure to protect and mask your variables**.

Then set your local project to use this newly created repository.

```bash
git remote add origin GITLAB_PROJECT_REPOSITORY
```

On your project directory, create a file named `.gitlab-ci.yml` and enter the code below:

```yaml
image: docker:19.03.12

stages:
  - build
  - push

services:
  - docker:19.03.12-dind

before_script:
  - echo -n $CI\_REGISTRY\_TOKEN | docker login -u "$CI_REGISTRY_USER" --password-stdin $CI_REGISTRY

Build:
  stage: build
  script:
    - docker pull $CI_REGISTRY_IMAGE:latest || true
    - docker build --cache-from $CI\_REGISTRY\_IMAGE:latest --tag $CI\_REGISTRY\_IMAGE:$CI_COMMIT_SHA .
    - docker push $CI\_REGISTRY\_IMAGE:$CI_COMMIT_SHA

  # Tag the "master" branch as "latest"
  Push latest:
    stage: push
    only:
      - master
    script:
      - docker pull $CI\_REGISTRY\_IMAGE:$CI_COMMIT_SHA
      - docker tag $CI\_REGISTRY\_IMAGE:$CI_COMMIT_SHA $CI_REGISTRY_IMAGE:latest
      - docker push $CI_REGISTRY_IMAGE:latest

  # Docker tag any Git tag
  Push tag:
    stage: push
    only:
      - tags
    script:
      - docker pull $CI\_REGISTRY\_IMAGE:$CI_COMMIT_SHA
      - docker tag $CI\_REGISTRY\_IMAGE:$CI_COMMIT_SHA $CI\_REGISTRY\_IMAGE:$CI_COMMIT_REF_NAME
      - docker push $CI\_REGISTRY\_IMAGE:$CI_COMMIT_REF_NAME
```

Now, `commit` and `push` the changes to `master` branch, as that is what is currently defined on our pipeline. Once finished, your pipeline will run. You can see check it by navigating to your GitLab project then CI/CD > Pipelines.

After the jobs are done, your image will be available at Docker Hub.

Just a side note, don’t use latest or stable docker image in your CI pipeline because you will want reproducibility. Latest images will break things. Always target a version. Hence `image: docker:19.03.12` is used here.

Happy coding!
