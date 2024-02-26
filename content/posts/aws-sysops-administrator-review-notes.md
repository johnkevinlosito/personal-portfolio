---
title: "AWS SysOps Administrator Review Notes"
publishedAt: "2020-06-28"
description: "Sharing with you my review notes for the AWS SysOps Administrator - Associate Exam"
excerpt: "AWS Lambda deployment configuration types Canary - Traffic is shifted in two increments. You can choose from predefined canary options that specify the percentage of traffic shifted to your updated Lambda function version in the first increment and the in..."
categories: ["AWS", "AWS Certification", "SysOps Administrator"]
---

<!--StartFragment-->

**AWS Lambda deployment configuration types**

- **Canary** - Traffic is shifted in two increments. You can choose from predefined canary options that specify the percentage of traffic shifted to your updated Lambda function version in the first increment and the interval, in minutes, before the remaining traffic is shifted in the second increment.
- **Linear** - Traffic is shifted in equal increments with an equal number of minutes between each increment. You can choose from predefined linear options that specify the percentage of traffic shifted in each increment and the number of minutes between each increment.
- **All-at-once** - All traffic is shifted from the original Lambda function to the updated Lambda function version at once.

**AWS Budgets**

- Gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.
- You can also use AWS Budgets to set reservation utilization or coverage targets and receive alerts when your utilization drops below the threshold you define. Reservation alerts are supported for Amazon EC2, Amazon RDS, Amazon Redshift, Amazon ElastiCache, and Amazon Elasticsearch reservations.
- Can be created at the monthly, quarterly, or yearly level, and you can customize the start and end dates.
- You can further refine your budget to track costs associated with multiple dimensions, such as AWS service, linked account, tag, and others. Budget alerts can be sent via email and/or Amazon Simple Notification Service (SNS) topic.

**AWS Budgets Dashboard**

- Your hub for creating, tracking, and inspecting your budgets.
- You can create, edit, and manage your budgets, as well as view the status of each of your budgets.
- View additional details about your budgets, such as a high-level variance analysis and a budget criteria summary.

**AWS CloudWatch Billing Alarm**

- Use to monitor your estimated AWS charges.
- Does not allow you to set coverage targets and receive alerts when your utilization drops below the threshold you define.

**AWS Cost Explorer**

- Lets you visualize, understand, and manage your AWS costs and usage over time.
- You cannot define any threshold using this service, unlike AWS Budgets.
- You can explore your usage and costs using the main graph, the Cost Explorer cost and usage reports, or the Cost Explorer RI reports.
- You can view data for up to the last 13 months, forecast how much you're likely to spend for the next three months, and get recommendations for what Reserved Instances to purchase.
- You can use Cost Explorer to identify areas that need further inquiry and see trends that you can use to understand your costs.

**AWS Trusted Advisor**

- An online tool that provides you real-time guidance to help you provision your resources following AWS best practices.
- An online resource to help you reduce cost, increase performance, and improve security by optimizing your AWS environment.

**Cache hit ratio**

- You can improve performance by increasing the proportion of your viewer requests that are served from CloudFront edge caches instead of going to your origin servers for content; that is, by improving the cache hit ratio for your distribution.
- - Increase the TTL of your objects
  - Configure the distribution to forward only the required query string parameters, cookies or request headers for which your origin will return unique objects.
  - Remove Accept-Encoding header when compression is not needed
  - Serving Media Content by using HTTP

**Signed URLs**

- Primarily used to secure your content and not for improving the CloudFront cache hit ratio.

**Amazon Kinesis Data Streams (KDS)**

- A massively scalable and durable real-time data streaming service.
- KDS can continuously capture gigabytes of data per second from hundreds of thousands of sources such as website clickstreams, database event streams, financial transactions, social media feeds, IT logs, and location-tracking events.
- The data collected is available in milliseconds to enable real-time analytics use cases such as real-time dashboards, real-time anomaly detection, dynamic pricing, and more.

**Amazon SQS**

- A messaging service.

**Amazon SNS**

- Mainly used as a notification service.

**Amazon Redshift**

- A petabyte storage service for OLAP applications.

**IAM User**

- Is an entity that you create in AWS to represent the person or service that uses it to interact with AWS. A user in AWS consists of a name and credentials. You can grant access to AWS in different ways depending on the user credentials:
- - **Console Password:** A password that the user can type to sign in to interactive sessions such as the AWS Management Console.
  - **Access keys:** A combination of an access key ID and a secret access key. You can assign two to a user at a time. These can be used to make programmatic calls to AWS. For example, you might use access keys when using the API for code or at a command prompt when using the AWS CLI or the AWS PowerShell tools.

An error message is saying that "**EC2 instance <instance ID> is in VPC. Updating load balancer configuration failed**”

- This error is produced when the ELB and the Auto Scaling group are not created in the same network. Make sure that both are in VPC or in EC2-Classic.

**AWS Inspector**

- Enables you to analyze the behavior of your AWS resources and helps you to identify potential security issues.
- Using Amazon Inspector, you can define a collection of AWS resources that you want to include in an assessment target. You can then create an assessment template and launch a security assessment run of this target.
- Used to check for vulnerabilities in resources such as EC2 Instances.
- An automated security assessment service that helps you test the security state of your applications running on Amazon EC2.

**AWS WAF**

- Is a firewall service to safeguard your VPC against DDoS, SQL Injection, and many other threats.
- A web application firewall that helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources. AWS WAF gives you control over which traffic to allow or block to your web applications by defining customizable web security rules. You can use AWS WAF to create custom rules that block common attack patterns, such as SQL injection or cross-site scripting, and rules that are designed for your specific application.

**AWS Snowball**

- Used to transfer data from your on-premises network to AWS.

**Amazon CloudFront**

- Used as a content distribution service.

**Web identity federation**

- You can let users sign in using a well-known third party identity provider such as Login with Amazon, Facebook, Google, or any OpenID Connect (OIDC) 2.0 compatible provider. You can exchange the credentials from that provider for temporary permissions to use resources in your AWS account. This is known as the web identity federation approach to temporary access.
- When you use web identity federation for your mobile or web application, you don't need to create custom sign-in code or manage your own user identities. Using web identity federation helps you keep your AWS account secure, because you don't have to distribute long-term security credentials, such as IAM user access keys, with your application.

**IOPS**

- The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1 (50 iops / gb

**Internet gateway**

- Is used in AWS to connect your VPC to the outside world, the Internet. Only one Internet gateway can be assigned per VPC.

**Virtual private gateway**

- Is used to connect via VPN connection to your on-premises area. This provides connectivity between an external network to your AWS VPC including those inside the Private subnet.

**AWS Enhanced Networking**

- Is used to provide high-performance networking capabilities such as higher bandwidth, higher packet per second (PPS) performance, and consistently lower inter-instance latencies.

**Auto scaling CLI**

- **terminate-instance-in-auto-scaling-group** : terminates the specified instance and optionally adjusts the desired group size. This call simply makes a termination request so the instance is not terminated immediately.
- This command has a required parameter which indicates whether terminating the instance also decrements the size of the Auto Scaling group:\
  **\--should-decrement-desired-capacity** | **\--no-should-decrement-desired-capacity** (boolean)
- The example below terminates the specified instance from the specified Auto Scaling group without updating the size of the group:\
  **aws autoscaling terminate-instance-in-auto-scaling-group --instance-id i-93633f9b --no-should-decrement-desired-capacity**

**CloudFormation CreationPolicy**

- Invoked only when AWS CloudFormation creates the associated resource. Currently, the only AWS CloudFormation resources that support creation policies are **AWS::AutoScaling::AutoScalingGroup**, **AWS::EC2::Instance**, and **AWS::CloudFormation::WaitCondition**.
- Use the **CreationPolicy** attribute when you want to wait on resource configuration actions before stack creation proceeds.

**AWS Systems Manager Patch Manager**

- Automates the process of patching managed instances with security-related updates.

**Glacier Vault Lock**

- Allows you to easily deploy and enforce compliance controls for individual Glacier vaults with a vault lock policy. You can specify controls such as “write once read many” (WORM) in a vault lock policy and lock the policy from future edits. Once locked, the policy can no longer be changed.

**Amazon EFS**

- Provides file storage in the AWS Cloud. With Amazon EFS, you can create a file system, mount the file system on an Amazon EC2 instance, and then read and write data to and from your file system. You can mount an Amazon EFS file system in your VPC, through the Network File System versions 4.0 and 4.1 (NFSv4) protocol.

**Amazon S3 inventory**

- Is one of the tools Amazon S3 provides to help manage your storage. You can use it to audit and report on the replication and encryption status of your objects for business, compliance, and regulatory needs. You can also simplify and speed up business workflows and big data jobs using Amazon S3 inventory, which provides a scheduled alternative to the Amazon S3 synchronous List API operation.

**S3 Analytics**

- Is primarily used to analyze storage access patterns to help you decide when to transition the right data to the right storage class.

**Placement groups**

- **Cluster** – packs instances close together inside an Availability Zone. This strategy enables workloads to achieve the low-latency network performance necessary for tightly-coupled node-to-node communication that is typical of HPC applications.
- **Partition** – spreads your instances across logical partitions such that groups of instances in one partition do not share the underlying hardware with groups of instances in different partitions. This strategy is typically used by large distributed and replicated workloads, such as Hadoop, Cassandra, and Kafka.
- **Spread** – strictly places a small group of instances across distinct underlying hardware to reduce correlated failures.

**Amazon Route 53 health checks**

- Health checks that monitor an endpoint.
- - You can configure a health check that monitors an endpoint that you specify either by IP address or by domain name.
  - At regular intervals that you specify, Route 53 submits automated requests over the internet to your application, server, or other resource to verify that it's reachable, available, and functional.
  - Optionally, you can configure the health check to make requests similar to those that your users make, such as requesting a web page from a specific URL.
- Health checks that monitor other health checks (calculated health checks).
- - You can create a health check that monitors whether Route 53 considers other health checks healthy or unhealthy.
  - One situation where this might be useful is when you have multiple resources that perform the same function, such as multiple web servers, and your chief concern is whether some minimum number of your resources are healthy.
  - You can create a health check for each resource without configuring notification for those health checks. Then you can create a health check that monitors the status of the other health checks and that notifies you only when the number of available web resources drops below a specified threshold.
- Health checks that monitor CloudWatch alarms.
- - You can create CloudWatch alarms that monitor the status of CloudWatch metrics, such as the number of throttled read events for an Amazon DynamoDB database or the number of Elastic Load Balancing hosts that are considered healthy. After you create an alarm, you can create a health check that monitors the same data stream that CloudWatch monitors for the alarm.

**Nested stacks**

- Are stacks created as part of other stacks. You can create a nested stack within another stack by using the AWS::CloudFormation::Stack resource.

**VPC Flow log format**

- `<version> <account-id> <interface-id> <srcaddr> <dstaddr> <srcport> <dstport> <protocol> <packets> <bytes> <start> <end> <action> <log-status>`

**FIFO queues**

- have all the capabilities of the standard queue and improves upon and complements the standard queue.
- The most important features of this queue type are FIFO (First-In-First-Out) delivery and exactly-once processing:
- - The order in which messages are sent and received is strictly preserved and a message is delivered once and remains available until a consumer processes and deletes it.
  - Duplicates aren't introduced into the queue.
- In addition, FIFO queues support message groups that allow multiple ordered message groups within a single queue.

**Enable VPC & subnets to use IPv6**

1. Associate an IPv6 CIDR Block with Your VPC and Subnets
2. Update Your Route Tables
3. Update Your Security Group Rules
4. Change Your Instance Type (if does not support IPv6 such as m3.large)
5. Assign IPv6 Addresses to Your Instances
6. Configure IPv6 on Your Instances (optional)

**AWS Storage Gateway**

- Connects an on-premises software appliance with cloud-based storage to provide seamless integration with data security features between your on-premises IT environment and the AWS storage infrastructure.
- You can use the service to store data in the AWS Cloud for scalable and cost-effective storage that helps maintain data security.
- AWS Storage Gateway offers file-based, volume-based, and tape-based storage solutions.

**Cold HDD volumes**

- Provide low-cost magnetic storage that defines performance in terms of throughput rather than IOPS.
- Designed for less frequently accessed workloads.

**Provisioned IOPS SDD**

- It provides the highest performance SSD volume for mission-critical low-latency or high-throughput workloads.

**Throughput Optimized HDD**

- It is primarily designed and used for frequently accessed, throughput-intensive workloads.

**EBS General Purpose SSD**

- It is mainly used for a wide variety of workloads. It is recommended to be used as system boot volumes, virtual desktops, low-latency interactive apps, and many more.

**Amazon Redshift Enhanced VPC Routing**

- Amazon Redshift forces all COPY and UNLOAD traffic between your cluster and your data repositories through your Amazon VPC. By using Enhanced VPC Routing, you can use standard VPC features, such as VPC security groups, network access control lists (ACLs), VPC endpoints, VPC endpoint policies, internet gateways, and Domain Name System (DNS) servers.

**Amazon Athena**

- Is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.

**AWS Direct Connect**

- Is a cloud service solution that makes it easy to establish a dedicated network connection from your premises to AWS.
- Using AWS Direct Connect, you can establish private connectivity between AWS and your datacenter, office, or colocation environment, which in many cases can reduce your network costs, increase bandwidth throughput, and provide a more consistent network experience than Internet-based connections.

**Amazon DynamoDB global tables**

- Provide a fully managed solution for deploying a multi-region, multi-master database, without having to build and maintain your own replication solution.
- When you create a global table, you specify the AWS regions where you want the table to be available. DynamoDB performs all of the necessary tasks to create identical tables in these regions, and propagate ongoing data changes to all of them.

**Network address translation (NAT) gateway**

- Used to enable instances in a private subnet to connect to the Internet or other AWS services, but prevent the Internet from initiating a connection with those instances.

**RAID 0**

- can stripe multiple volumes together;
- For greater I/O performance

**RAID 1**

- For on-instance redundancy and fault tolerance,
- Can mirror two volumes together which can also offer fault tolerance.

**VPC Flow Logs**

- Is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. Flow log data can be published to Amazon CloudWatch Logs and Amazon S3. After you've created a flow log, you can retrieve and view its data in the chosen destination.
- Flow logs can help you with a number of tasks; for example, to troubleshoot why specific traffic is not reaching an instance, which in turn helps you diagnose overly restrictive security group rules. You can also use flow logs as a security tool to monitor the traffic that is reaching your instance.

**AWS Auto Scaling**

- Amazon EC2: Launch or terminate Amazon EC2 instances in an Amazon EC2 Auto Scaling group.
- Amazon EC2 Spot Fleets: Launch or terminate instances from an Amazon EC2 Spot Fleet, or automatically replace instances that get interrupted for price or capacity reasons.
- Amazon ECS: Adjust ECS service desired count up or down to respond to load variations.
- Amazon DynamoDB: Enable a DynamoDB table or a global secondary index to increase its provisioned read and write capacity to handle sudden increases in traffic without request throttling.
- Amazon Aurora: Dynamically adjust the number of Aurora Read Replicas provisioned for an Aurora DB cluster to handle sudden increases in active connections or workload.

**Amazon Glacier**

- You cannot assign a key name to the archives that you upload.
- does not support any additional metadata for the archives.

**Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)**

- Each object is encrypted with a unique key employing strong multi-factor encryption. As an additional safeguard, it encrypts the key itself with a master key that it regularly rotates. Amazon S3 server-side encryption uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data.

**Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)**

- Similar to SSE-S3, but with some additional benefits along with some additional charges for using this service. There are separate permissions for the use of an envelope key (that is, a key that protects your data's encryption key) that provides added protection against unauthorized access of your objects in S3. SSE-KMS also provides you with an audit trail of when your key was used and by whom.

**Server-Side Encryption with Customer-Provided Keys (SSE-C)**

- You manage the encryption keys and Amazon S3 manages the encryption, as it writes to disks, and decryption, when you access your objects.

**AWS CloudTrail**

- Is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account.
- With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.
- CloudTrail provides an event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services.

**AWS Config**

- Is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. This is used mainly for ensuring your AWS resources have the correct configuration according to your specified internal guidelines.
- Sends notifications for the following events:
- - Configuration item change for a resource.
  - Configuration history for a resource was delivered for your account.
  - Configuration snapshot for recorded resources was started and delivered for your account.
  - Compliance state of your resources and whether they are compliant with your rules.
  - Evaluation started for a rule against your resources.
  - AWS Config failed to deliver the notification to your account.

**<http://169.254.169.254/latest/meta-data>**

- the URL that you can use to retrieve the Instance Metadata of your EC2 instance, including the public-hostname, public-ipv4, public-keys, et cetera.
- This can be helpful when you're writing scripts to run from your instance as it enables you to access the local IP address of your instance from the instance metadata to manage a connection to an external application. Remember that you are not billed for HTTP requests used to retrieve instance metadata and user data.

**Billing alarms**

- are a great way to notify you if your services will shoot over your set budget.

**Network Load Balancer**

- can scale to millions of requests per second. From the AWS Documentation, using a Network Load Balancer has the following benefits:
- - Ability to handle volatile workloads and scale to millions of requests per second.
  - Support for static IP addresses for the load balancer. You can also assign Elastic IP address per subnet enabled for the load balancer.
  - Support for registering targets by IP address, including targets outside the VPC for the load balancer.

**Application Load Balancer**

- Best suited for load balancing of HTTP and HTTPS traffic and provides advanced request routing targeted at the delivery of modern application architectures, including microservices and containers.

**ELB Access Logs**

- Capture detailed information about requests sent to your load balancer.
- Each log contains information such as the time the request was received, the client's IP address, latencies, request paths, and server responses. You can use these access logs to analyze traffic patterns and troubleshoot issues.
- Access logging is an optional feature of Elastic Load Balancing that is disabled by default. After you enable access logging for your load balancer, Elastic Load Balancing captures the logs and stores them in the Amazon S3 bucket that you specify as compressed files. You can disable access logging at any time.

**Cross-zone load balancing**

- Reduces the need to maintain equivalent numbers of instances in each enabled Availability Zone, and improves your application's ability to handle the loss of one or more instances.
- When you create a Classic Load Balancer, the default for cross-zone load balancing depends on how you create the load balancer. With the API or CLI, cross-zone load balancing is disabled by default. With the AWS Management Console, the option to enable cross-zone load balancing is selected by default. After you create a Classic Load Balancer, you can enable or disable cross-zone load balancing at any time.

**AWS Cost and Usage reports**

- You can choose to have AWS publish billing reports to an Amazon Simple Storage Service (Amazon S3) bucket that you own.
- You can receive reports that break down your costs by the hour or month, by product or product resource, or by tags that you define yourself.
- AWS updates the report in your bucket once a day in a comma-separated value (CSV) format. You can view the reports using spreadsheet software such as Microsoft Excel or Apache OpenOffice Calc, or access them from an application using the Amazon S3 API.
- You can configure your Cost & Usage Reports to integrate with Amazon Athena. Once Amazon Athena integration has been enabled for your Cost & Usage Report, your data will be delivered in compressed Apache Parquet files to an Amazon S3 bucket of your choice. Your AWS Cost & Usage Report can also be ingested directly into Amazon Redshift or uploaded to Amazon QuickSight.
- If you use the consolidated billing feature in AWS Organizations, the Amazon S3 bucket that you designate to receive the billing reports must be owned by the master account in your organization. You can't receive billing reports in a bucket that is owned by a member account. If you use consolidated billing, you can also have your costs broken down by member account.

**VPC peering connection**

- A networking connection between two VPCs that enables you to route traffic between them using private IPv4 addresses or IPv6 addresses. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your own VPCs, or with a VPC in another AWS account. The VPCs can be in different regions (also known as an inter-region VPC peering connection).

**Amazon RDS Read Replicas**

- Provide enhanced performance and durability for database (DB) instances. This feature makes it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput. Read replicas can also be promoted when needed to become standalone DB instances. Read replicas are available in Amazon RDS for MySQL, MariaDB, Oracle and PostgreSQL as well as Amazon Aurora.

**Amazon ElastiCache**

- Offers fully managed Redis and Memcached. Seamlessly deploy, run, and scale popular open source compatible in-memory data stores. Build data-intensive apps or improve the performance of your existing apps by retrieving data from high throughput and low latency in-memory data stores.

**AWS Systems Manager**

- Helps you select and deploy operating system and software patches automatically across large groups of Amazon EC2 or on-premises instances. Through patch baselines, you can set rules to auto-approve select categories of patches to be installed, such as operating system or high severity patches, and you can specify a list of patches that override these rules and are automatically approved or rejected. You can also schedule maintenance windows for your patches so that they are only applied during preset times. Systems Manager helps ensure that your software is up-to-date and meets your compliance policies.

**IAM PassRole**

- If you want to grant a user the ability to pass any of an approved set of roles to the Amazon EC2 service upon launching an instance, you need to have these three elements:
- - An IAM permissions policy attached to the role that determines what the role can do.
  - A trust policy for the role that allows the service to assume the role.
  - An IAM permissions policy attached to the IAM user that allows the user to pass only those roles that are approved.

**AWS Service Catalog**

- Provides a TagOption library
- Allow administrators to easily manage tags on provisioned products.
- A TagOption is a key-value pair managed in AWS Service Catalog. It is not an AWS tag, but serves as a template for creating an AWS tag based on the TagOption.
- The TagOption library makes it easier to enforce the following:
- - A consistent taxonomy
  - Proper tagging of AWS Service Catalog resources
  - Defined, user-selectable options for allowed tags

**EC2 instance goes from the pending state to the terminated**

- You've reached your EBS volume limit.
- An EBS snapshot is corrupt.
- The root EBS volume is encrypted and you do not have permissions to access the KMS key for decryption.
- The instance store-backed AMI that you used to launch the instance is missing a required part (an image.part.xx file).

**Credential report**

- Lists all users in your account and the status of their various credentials, including passwords, access keys, and MFA devices.
- You can get this credential report from the AWS Management Console, the AWS SDKs and Command Line Tools, or the IAM API.

**x-amz-server-side-encryption**

- used for Amazon S3-Managed Encryption Keys (SSE-S3)

**x-amz-server-side​-encryption​-customer-algorithm**

- Use this header to specify the encryption algorithm. The header value must be "AES256".

**x-amz-server-side​-encryption​-customer-key**

- Use this header to provide the 256-bit, base64-encoded encryption key for Amazon S3 to use to encrypt or decrypt your data.

**x-amz-server-side​-encryption​-customer-key-MD5**

- Use this header to provide the base64-encoded 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure the encryption key was transmitted without error.

**AWS Certificate Manager**

- Is a service that lets you easily provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS services and your internal connected resources. SSL/TLS certificates are used to secure network communications and establish the identity of websites over the Internet as well as resources on private networks.

**Communicate EC2 instance to internet over IPv6**

- Associate a /56 IPv6 CIDR block with the VPC. The size of the IPv6 CIDR block is fixed (/56) and the range of IPv6 addresses is automatically allocated from Amazon's pool of IPv6 addresses (you cannot select the range yourself).
- Create a subnet with a /64 IPv6 CIDR block in your VPC. The size of the IPv6 CIDR block is fixed (/64).
- Create a custom route table, and associate it with your subnet, so that traffic can flow between the subnet and the Internet gateway.

**OpsWorks**

- Is a configuration management service that provides managed instances of Chef and Puppet. Chef and Puppet are automation platforms that allow you to use code to automate the configurations of your servers. OpsWorks lets you use Chef and Puppet to automate how servers are configured, deployed, and managed across your Amazon EC2 instances or on-premises compute environments.

**CodeDeploy**

- Is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances, or serverless Lambda functions.
- It allows you to rapidly release new features, update Lambda function versions, avoid downtime during application deployment, and handle the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.

**CloudFormation**

- Is a service that gives you an easy way to create a collection of related AWS resources and provision them in an orderly and predictable fashion.

**Elastic Beanstalk**

- Is a service for deploying and scaling web applications and services.
- supports the deployment of web applications from Docker containers. With Docker containers, you can define your own runtime environment. You can choose your own platform, programming language, and any application dependencies (such as package managers or tools), that aren't supported by other platforms. Docker containers are self-contained and include all the configuration information and software your web application requires to run. All environment variables defined in the Elastic Beanstalk console are passed to the containers.

**Bucket ACL permission**

- WRITE ACL permission allows grantee to create, overwrite, and delete any object in the bucket
- WRITE_ACP allows grantee to write the ACL for the applicable bucket.
- READ is incorrect because it will only provide read access to the objects of the bucket.

**ELB health checks**

- used to determine whether the EC2 instances behind the ELB are healthy or not.

**Server Order Preference**

- option for negotiating connections between a client and a load balancer. During the SSL connection negotiation process, the client and the load balancer present a list of ciphers and protocols that they each support, in order of preference.
- By default, the first cipher on the client's list that matches any one of the load balancer's ciphers is selected for the SSL connection. If the load balancer is configured to support Server Order Preference, then the load balancer selects the first cipher in its list that is in the client's list of ciphers. This ensures that the load balancer determines which cipher is used for SSL connection. If you do not enable Server Order Preference, the order of ciphers presented by the client is used to negotiate connections between the client and the load balancer.

**CloudWatch metric math**

- Used to aggregate and transform metrics from multiple accounts and Regions. Metric math enables you to query multiple CloudWatch metrics and use math expressions to create new time series based on these metrics. You can visualize the resulting time series on the CloudWatch console and add them to dashboards.

**Enabling billing alerts in Account Preferences of the AWS Console**

- Before you can create an alarm for your estimated charges, you must enable billing alerts on your Accounts Preferences page first, so that you can monitor your estimated AWS charges and create an alarm using billing metric data. After you enable billing alerts, you cannot disable data collection, but you can delete any billing alarms that you created.

**AWS Step Functions**

- Provides serverless orchestration for modern applications. Orchestration centrally manages a workflow by breaking it into multiple steps, adding flow logic, and tracking the inputs and outputs between the steps. As your applications execute, Step Functions maintains application state, tracking exactly which workflow step your application is in, and stores an event log of data that is passed between application components. That means that if networks fail or components hang, your application can pick up right where it left off.
- Application development is faster and more intuitive with Step Functions, because you can define and manage the workflow of your application independently from its business logic. Making changes to one does not affect the other. You can easily update and modify workflows in one place, without having to struggle with managing, monitoring and maintaining multiple point-to-point integrations. Step Functions frees your functions and containers from excess code, so your applications are faster to write, more resilient, and easier to maintain.

**AWS X-Ray**

- Used to trace and analyze user requests as they travel through your Amazon API Gateway APIs to the underlying services. API Gateway supports AWS X-Ray tracing for all API Gateway endpoint types: regional, edge-optimized, and private. You can use AWS X-Ray with Amazon API Gateway in all regions where X-Ray is available.
- X-Ray gives you an end-to-end view of an entire request, so you can analyze latencies in your APIs and their backend services. You can use an X-Ray service map to view the latency of an entire request and that of the downstream services that are integrated with X-Ray. And you can configure sampling rules to tell X-Ray which requests to record, at what sampling rates, according to criteria that you specify. If you call an API Gateway API from a service that's already being traced, API Gateway passes the trace through, even if X-Ray tracing is not enabled on the API.

**CloudFront Reports**

- Popular Objects Report to determine what objects are frequently being accessed, and get statistics on those objects.
- Usage Reports to know the number of HTTP and HTTPS requests that CloudFront responds to from edge locations in selected regions.
- Viewers Reports to determine the locations of the viewers that access your content most frequently.

**Amazon QuickSight**

- A fully managed service that lets you easily create and publish interactive dashboards.

**Amazon CloudWatch Events**

- Can be used to detect and react to changes in the status of AWS Personal Health Dashboard (AWS Health) events.

**AWS Personal Health Dashboard**

- Provides alerts and remediation guidance when AWS is experiencing events that may impact you. While the Service Health Dashboard displays the general status of AWS services, Personal Health Dashboard gives you a personalized view into the performance and availability of the AWS services underlying your AWS resources.

**AWS Artifact**

- Is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS’ security and compliance reports and select online agreements. Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls.

**SurgeQueueLength**

- Provides the total number of requests (HTTP listener) or connections (TCP listener) that are pending routing to a healthy instance. The maximum size of the queue is 1,024. Additional requests or connections are rejected when the queue is full.

**SpilloverCount**

- Is the total number of requests that were rejected because the surge queue is full.

**CloudFormation Sections**

- Format Version (optional)
- - The AWS CloudFormation template version that the template conforms to. The template format version is not the same as the API or WSDL version. The template format version can change independently of the API and WSDL versions.
- Description (optional)
- - A text string that describes the template. This section must always follow the template format version section.
- Metadata (optional)
- - Objects that provide additional information about the template.
- Parameters (optional)
- - Values to pass to your template at runtime (when you create or update a stack). You can refer to parameters from the Resources and Outputs sections of the template.
- Mappings (optional)
- - A mapping of keys and associated values that you can use to specify conditional parameter values, similar to a lookup table. You can match a key to a corresponding value by using the Fn::FindInMap intrinsic function in the Resources and Outputs section.
- Conditions (optional)
- - Conditions that control whether certain resources are created or whether certain resource properties are assigned a value during stack creation or update. For example, you could conditionally create a resource that depends on whether the stack is for a production or test environment.
- Transform (optional)
- - For serverless applications (also referred to as Lambda-based applications), specifies the version of the AWS Serverless Application Model (AWS SAM) to use. When you specify a transform, you can use AWS SAM syntax to declare resources in your template. The model defines the syntax that you can use and how it is processed. You can also use AWS::Include transforms to work with template snippets that are stored separately from the main AWS CloudFormation template. You can store your snippet files in an Amazon S3 bucket and then reuse the functions across multiple templates.
- Resources (required)
- - Specifies the stack resources and their properties, such as an Amazon Elastic Compute Cloud instance or an Amazon Simple Storage Service bucket. You can refer to resources in the Resources and Outputs sections of the template.
- Outputs (optional)
- - Describes the values that are returned whenever you view your stack's properties. For example, you can declare an output for an S3 bucket name and then call the aws cloudformation describe-stacks AWS CLI command to view the name.

**DiskReadOps**

- is the metric that counts the completed read operations from all instance store volumes available to the instance in a specified period of time.
- If there are no instance store volumes, either the value is 0 or the metric is not reported.

**Amazon Cognito identity pools**

- Assign your authenticated users a set of temporary, limited privilege credentials to access your AWS resources. The permissions for each user are controlled through IAM roles that you create. You can define rules to choose the role for each user based on claims in the user's ID token. You can define a default role for authenticated users. You can also define a separate IAM role with limited permissions for guest users who are not authenticated.

**Storage optimized instances**

- Are designed for workloads that require high, sequential read and write access to very large data sets on local storage. They are optimized to deliver tens of thousands of low-latency, random I/O operations per second (IOPS) to applications compared with EBS-backed EC2 instances.

**AWS SSO**

- Manages access to all your AWS Organizations accounts, AWS SSO-integrated applications, and other business applications that support the Security Assertion Markup Language (SAML) 2.0 standard.

**InsufficientInstanceCapacity**

- AWS does not currently have enough available On-Demand capacity to service your request.

**Amazon DynamoDB Accelerator (DAX)**

- Is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement – from milliseconds to microseconds – even at millions of requests per second. DAX does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables, without requiring developers to manage cache invalidation, data population, or cluster management.

**Aurora Replicas**

- Are independent endpoints in an Aurora DB cluster, best used for scaling read operations and increasing availability. Up to 15 Aurora Replicas can be distributed across the Availability Zones that a DB cluster spans within an AWS Region. The DB cluster volume is made up of multiple copies of the data for the DB cluster. However, the data in the cluster volume is represented as a single, logical volume to the primary instance and to Aurora Replicas in the DB cluster.

**ElasticBeanstalk deployment policies**

- All at once: Deploy the new version to all instances simultaneously. All instances in your environment are out of service for a short time while the deployment occurs.
- Rolling: Deploy the new version in batches. Each batch is taken out of service during the deployment phase, reducing your environment's capacity by the number of instances in a batch.
- Rolling with additional batch: Deploy the new version in batches, but first launch a new batch of instances to ensure full capacity during the deployment process.
- Immutable: Deploy the new version to a fresh group of instances by performing an immutable update.

**AWS CloudHSM**

- Is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud. With CloudHSM, you can manage your own encryption keys using FIPS 140-2 Level 3 validated HSMs. CloudHSM offers you the flexibility to integrate with your applications using industry-standard APIs, such as PKCS#11, Java Cryptography Extensions (JCE), and Microsoft CryptoNG (CNG) libraries.

**EC2Rescue**

- Can help you diagnose and troubleshoot problems on Amazon EC2 Linux and Windows Server instances. You can run the tool manually, as described in Using EC2Rescue for Linux Server and Using EC2Rescue for Windows Server. Or, you can run the tool automatically by using Systems Manager Automation and the AWSSupport-ExecuteEC2Rescue document. The AWSSupport-ExecuteEC2Rescue document is designed to perform a combination of Systems Manager actions, AWS CloudFormation actions, and Lambda functions that automate the steps normally required to use EC2Rescue.

**Amazon Data Lifecycle Manager (Amazon DLM)**

- Used to automate the creation, retention, and deletion of snapshots taken to back up your Amazon EBS volumes.
- Automating snapshot management helps you to:
- - Protect valuable data by enforcing a regular backup schedule.
  - Retain backups as required by auditors or internal compliance.
  - Reduce storage costs by deleting outdated backups.

**Enabling log file integrity validation for the log files**

- to determine whether a log file was modified, deleted, or unchanged after CloudTrail delivered it, you can use CloudTrail log file integrity validation. This feature is built using industry standard algorithms: SHA-256 for hashing and SHA-256 with RSA for digital signing. This makes it computationally infeasible to modify, delete or forge CloudTrail log files without detection. You can use the AWS CLI to validate the files in the location where CloudTrail delivered them.

**unified CloudWatch agent**

- Collect more system-level metrics from Amazon EC2 instances, including in-guest metrics, in addition to the metrics for EC2 instances. The additional metrics are listed in Metrics Collected by the CloudWatch Agent.
- Collect system-level metrics from on-premises servers. These can include servers in a hybrid environment as well as servers not managed by AWS.
- Collect logs from Amazon EC2 instances and on-premises servers, running either Linux or Windows Server.
- Retrieve custom metrics from your applications or services using the StatsD and collectd protocols. StatsD is supported on both Linux servers and servers running Windows Server. collectd is supported only on Linux servers.

**VPC Deletion**

- You can delete your VPC at any time.
- However, you must terminate all instances in the VPC first.
- When you delete a VPC using the VPC console, AWS deletes all its components, such as subnets, security groups, network ACLs, route tables, Internet gateways, VPC peering connections, and DHCP options.
- When you delete a VPC using the command line, you must first terminate all instances, delete all subnets, custom security groups, and custom route tables, and detach any Internet gateway in the VPC.

**CloudFormation DeletionPolicy options**

- Delete: The AWS CloudFormation service deletes the resource and all its content if applicable during stack deletion. You can add this deletion policy to any resource type.
- Retain: The AWS CloudFormation service keeps the resource without deleting the resource or its contents when its stack is deleted.
- Snapshot: The AWS CloudFormation service creates a snapshot for the resource before deleting it.

**Cached Volume Gateway**

- You can use Amazon S3 as your primary data storage while retaining frequently accessed data locally in your storage gateway. Cached volumes minimize the need to scale your on-premises storage infrastructure, while still providing your applications with low-latency access to their frequently accessed data.
- Cache on-premise

**Stored Volume Gateway**

- Suitable if you need low-latency access to your entire dataset and not just the frequently accessed data.
- Cache S3

**Key policies**

- Are the primary way to control access to customer master keys (CMKs) in AWS KMS. Although they are not the only way to control access, you cannot control access without them.

**InstanceLimitExceeded**

- You have reached the limit on the number of instances that you can launch in a region (20). When you create your AWS account, AWS sets default limits on the number of instances you can run on a per-region basis.

**Amazon Redshift logs**

- Connection log: logs authentication attempts, and connections and disconnections.
- User log: logs information about changes to database user definitions.
- User activity log: logs each query before it is run on the database.

**enableDnsHostnames**

- Indicates whether the instances launched in the VPC get public DNS hostnames. If this attribute is true, instances in the VPC get public DNS hostnames, but only if the enableDnsSupport attribute is also set to true.

**enableDnsSupport**

- Indicates whether the DNS resolution is supported for the VPC. If this attribute is false, the Amazon-provided DNS server in the VPC that resolves public DNS hostnames to IP addresses is not enabled. If this attribute is true, queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP address at the base of the VPC IPv4 network range plus two will succeed.

**AWS Shield**

- Provides protection against DDoS attacks. AWS Shield Standard is automatically included at no extra cost beyond what you already pay for AWS WAF and your other AWS services. For added protection against DDoS attacks, AWS offers AWS Shield Advanced, which provides expanded DDoS attack protection for your EC2 instances, ELB load balancers, CloudFront distributions, and Route 53 hosted zones.

**AWS Guard Duty**

- It is for threat detection, not mitigation.

**AWS S3-transfer acceleration**

- It is an S3 bucket feature that enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket. It does not provide you the tools you need to build a hybrid environment with AWS.

**AWS Data Pipeline**

- A web service that makes it easy to schedule regular data movement and data processing activities in the AWS cloud. To use AWS Data Pipeline, you instead create a pipeline definition that specifies the business logic for your data processing. A typical pipeline definition consists of activities that define the work to perform, data nodes that define the location and type of input and output data, and a schedule that determines when the activities are performed. So again, this does not use a dedicated network line.

**AWS managed VPN connection**

- Refers to the connection between your VPC and your own network. AWS supports Internet Protocol security (IPsec) VPN connections. A VPN connection is cheaper than a Direct Connect connection.

**Amazon ElastiCache for Memcached cluster auto-scaling**

- Scaling HORIZONTALLY:
- - Scaling OUT (Adding Nodes to a Cluster)
  - Scaling IN (Removing Nodes from a Cluster)
- Scaling VERTICALLY
- - Upgrading the node type (by creating a new cluster and using a higher EC2 type)
  - Downgrading the node type (by creating a new cluster and using a lower EC2 type)

**CreateCacheCluster API**

- Creates a new cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis. You can set its CacheNodeType parameter to choose the underlying EC2 instance type of the cluster.

**Proxy Protocol**

- An Internet protocol used to carry connection information from the source requesting the connection to the destination for which the connection was requested. Elastic Load Balancing uses Proxy Protocol version 1, which uses a human-readable header format.
- By default, when you use Transmission Control Protocol (TCP) for both front-end and back-end connections, your Classic Load Balancer forwards requests to the instances without modifying the request headers.
- If you enable Proxy Protocol, a human-readable header is added to the request header with connection information such as the source IP address, destination IP address, and port numbers. The header is then sent to the instance as part of the request.

**Inline policies**

- Are useful if you want to maintain a strict one-to-one relationship between a policy and the principal entity that it's applied to. For example, you want to be sure that the permissions in a policy are not inadvertently assigned to a principal entity other than the one they're intended for. When you use an inline policy, the permissions in the policy cannot be inadvertently attached to the wrong principal entity. In addition, when you use the AWS Management Console to delete that principal entity, the policies embedded in the principal entity are deleted as well. That's because they are part of the principal entity.

**Amazon RDS encrypted DB instance Limitations**

- You can only enable encryption for an Amazon RDS DB instance when you create it, not after the DB instance is created. However, because you can encrypt a copy of an unencrypted DB snapshot, you can effectively add encryption to an unencrypted DB instance. That is, you can create a snapshot of your DB instance, and then create an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot, and thus you have an encrypted copy of your original DB instance.
- DB instances that are encrypted can't be modified to disable encryption.
- You can't have an encrypted Read Replica of an unencrypted DB instance or an unencrypted Read Replica of an encrypted DB instance.
- Encrypted Read Replicas must be encrypted with the same key as the source DB instance.
- You can't restore an unencrypted backup or snapshot to an encrypted DB instance.
- To copy an encrypted snapshot from one region to another, you must specify the KMS key identifier of the destination region. This is because KMS encryption keys are specific to the region that they are created in. - The source snapshot remains encrypted throughout the copy process. AWS Key Management Service uses envelope encryption to protect data during the copy process.

**AWSELB**

- Elastic Load Balancing creates a cookie, named AWSELB, that is used to map the session to the instance.

**VPC endpoint**

- Enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.

**AWS Limit Monitor**

- A reference implementation that automatically provisions the services necessary to proactively track resource usage and send notifications as you approach limits. The solution is easy-to-deploy and leverages AWS Trusted Advisor Service Limits checks that display your usage and limits for specific AWS services.
- You can receive email notifications or notifications can be sent to your existing Slack channel, enabling you to request limit increases or shut down resources before the limit is reached.

**dead-letter queues**

- other queues (source queues) can target for messages that can't be processed (consumed) successfully. Dead-letter queues are useful for debugging your application or messaging system because they let you isolate problematic messages to determine why their processing doesn't succeed.

**Amazon Elastic File System (Amazon EFS)**

- Provides simple, scalable, elastic file storage for use with AWS Cloud services and on-premises resources. It is easy to use and offers a simple interface that allows you to create and configure file systems quickly and easily. Amazon EFS is built to elastically scale on demand without disrupting applications, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it.

**Amazon Elastic Container Service (Amazon ECS)**

- Is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS. Amazon ECS eliminates the need for you to install and operate your own container orchestration software, manage and scale a cluster of virtual machines, or schedule containers on those virtual machines.

**Amazon EMR**

- Is a web service that enables businesses, researchers, data analysts, and developers to easily and cost-effectively process vast amounts of data. It utilizes a hosted Hadoop framework running on the web-scale infrastructure of Amazon Elastic Compute Cloud (Amazon EC2) and Amazon Simple Storage Service (Amazon S3). With Amazon EMR, you can provision one, hundreds, or thousands of compute instances to process data at any scale.
- You can easily increase or decrease the number of instances manually or with Auto Scaling, and you only pay for what you use. This means that Amazon EMR can launch a number of EC2 instances that are accessible and manageable by the customer, including full administrative privileges.

AWS KMS does not rotate the backing keys of CMKs that are pending deletion and A CMK that is pending deletion cannot be used in any cryptographic operation

**AWS Systems Manager Automate**

- An AWS-hosted service that simplifies common instance and system maintenance and deployment tasks. Automation offers one-click automations for simplifying complex tasks such as creating golden Amazon Machines Images (AMIs), and recovering unreachable EC2 instances.

<!--EndFragment-->

Special thanks to Jon Bonso and [Tutorials Dojo](https://tutorialsdojo.com/) for their [practice exams](https://www.udemy.com/course/aws-certified-sysops-administrator-associate-practice-exams-soa-c01/). Please take their course to prepare and get a detailed and much more information in AWS exams.
