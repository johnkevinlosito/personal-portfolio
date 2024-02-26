---
title: "Deploy static website to S3 using Github actions"
publishedAt: "2020-09-13"
description: "Deploy a simple static website to Amazon S3 automatically whenever you push your changes"
excerpt: "Let's deploy a simple static website to Amazon S3 automatically whenever you push your changes. Create your base project For this tutorial, I'll use this pre-built template at Startbootstrap. You can also use your own project if you have. Once downloaded..."
categories: ["AWS", "CICD"]
coverImage: "/assets/posts/gh-action-s3.jpg"
---

Let's deploy a simple static website to Amazon S3 automatically whenever you push your changes.

### Create your base project

For this tutorial, I'll use this pre-built template at [Startbootstrap](https://startbootstrap.com/theme/resume/). You can also use your own project if you have.

Once downloaded, extract the archive. Then, create a folder named `public` and move the project files to it.

Let's leave it for now, we'll touch this later on.

### Create S3 bucket and configure it for static hosting

Visit the official documentation on how to create and setup a bucket. [https://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html)

You can skip **Step 5: Configure an index document** onwards.

### Create your Github repository

We need to create our github repository and configure our AWS access key and secret keys. If you don't have your it, go to IAM and create your access key.

1.  Go to [https://github.com](https://github.com/) and create your repository.
2.  On your github repository, go to **Settings** then **Secrets**
3.  Click **New Secret**.
4.  Enter `AWS_ACCESS_KEY_ID` on **Name** field.
5.  Enter your AWS access key on the **Value** field.
6.  Click **Add secret**
7.  Repeat 4 - 6 for the `AWS_SECRET_ACCESS_KEY`

### Create github actions workflow

Go to your project root directory and we'll create folder named `.github` and inside it, a folder named `workflows`. Yes, there's `.`(dot) on the `.github` folder name.

```bash
mkdir -p .github/workflows
```

Create a file named `main.yml` inside `.github/workflows` folder.

```bash
touch .github/workflows/main.yml
```

Open `main.yml` and enter the following code block.

```yaml
name: Upload Website

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-southeast-1

      - name: Deploy static site to S3 bucket
        run: aws s3 sync ./public/ s3://BUCKET_NAME --delete
```

Change `BUCKET_NAME` with the name of your bucket created earlier. Same with the `aws-region`.

The above workflow triggers an action whenever you push on the `master`branch. The action first checkouts the branch, then configures AWS credentials so that it can use the AWS CLI. `${{ secrets.AWS_ACCESS_KEY_ID }}` and `${{ secrets.AWS_SECRET_ACCESS_KEY }}` fetches its values from the secrets we've created earlier. It then syncs your `public` folder to your S3 bucket.

### Commit and push your changes.

```bash
git add .

git commit -m "Commit message"

git push -u origin master
```

Go to your github repository and click on the `Actions` tab. From there, you can see all your triggered workflows and its status.

### Test your website

1.  Sign in to the AWS Management Console and open the Amazon S3 console
2.  In Buckets list, choose the name of the bucket that you want to use to host a static website.
3.  Choose Properties.
4.  Choose Static website hosting.
5.  Next to Endpoint, choose your website endpoint.

There you have it! You have successfully automated the deployment of your static website to Amazon S3!
