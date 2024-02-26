---
title: "#CloudResumeChallenge - challenging indeed"
publishedAt: "2020-07-28"
description: "My blog post regarding my experience while working on the cloud resume challenge project"
excerpt: "I came across at these cloud platforms such as Google Cloud Platform and Amazon Web Services at my work, and it pique my interest. I told myself, this looks fun and exciting, so I started studying AWS, my chosen cloud provider, and took certification exams..."
categories: ["AWS", "Serverless"]
coverImage: "/assets/posts/cloudresume.png"
---

I came across at these cloud platforms such as Google Cloud Platform and Amazon Web Services at my work, and it pique my interest. I told myself, this looks fun and exciting, so I started studying AWS, my chosen cloud provider, and took certification exams. Luckily enough, I passed not one, but two AWS certifications.

Being certified is an advantage in the market, but it is not enough, specially if you don't have work experience with the field you are aiming for. So I started looking for projects that I can work on and add to my portfolio. Then I stumble on a post by [Forrest Brazeal](https://forrestbrazeal.com/) about this [\#CloudResumeChallenge](https://twitter.com/hashtag/CloudResumeChallenge). I decided to get it started. Complete post and instructions can be found [here](https://cloudresumechallenge.dev/).

The first step is to have your AWS certification on your resume. Done already as I'm already certified 😁.

Next, your resume should be in HTML with CSS for styling. I could create my own from scratch, but I decided to look for free/open source templates on the internet. After updating the template with my information, I uploaded it to Amazon S3 and set up the bucket as a static website. This is probably the easiest step.

Your website should use HTTP for security. This can be done with the help of CloudFront, and I used a custom SSL certificate using AWS Certificate Manager.

I already have my own domain name which I purchased at [namecheap.com](https://www.namecheap.com/). I just update my DNS records then point the record (CNAME) to the CloudFront distribution.

The website should have a visitor counter. This counter will be saved to DynamoDB, Lambda function to update and retrieve the counter, then use API Gateway to trigger the function. I used Python as my language for the Lambda function. I do have a little background in python, just the basics, so I still need to do some research to complete my lambda function. There's a lot of tutorials on the internet as well as in the AWS documentations. Such documentation also provides some sample codes like connecting Lambda function to DynamoDB, etc.

What I have done with the last step is provision the resources(Lambda, DynamoDB,API Gateway) using the AWS console. These resources should be defined in an AWS Serverless Application Model (SAM) template and deploy them using the AWS SAM CLI. There's quite a lot of research that I've done just to successfully create the YAML template and deploy it.

The Lambda function should have some tests. Luckily, the SAM template, created using `sam init`, has included sample python test. I just modify it to match it with my function.

Now that the resources are deployed and properly working, I updated my front-end website to include the visitor counter. I've used Javascript, which calls the API endpoint, waits for the response, then update an HTML element with the returned value.

For the last parts, create a source code for the front-end and the backend(SAM template) with Github, and set-up a CI/CD using Github Actions. It didn't quite go well at first. It's my first time using CI/CD and Github Actions. I have to make changes to the workflow, and re-run. I stumbled with different errors, until finally, I see all the green checkboxes 🎉🎉🙌.

![github actions - deploy website to S3](/assets/posts/gh-actions-output-frontend.png "Github Actions - deploy website to S3")

![github actions - deploy Serverless Application Model](/assets/posts/gh-actions-output.png "Github Actions - deploy Serverless Application Model")

This was indeed challenging, yet great, fulfilling and worth it project for us who are new to cloud.
