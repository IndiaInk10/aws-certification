---
title: "Official Practice Question Set"
lang: en
exam: 0
---

<!--
  practice-exam-00.md 의 영어판.
  문항은 **순서**로, 보기는 **글머리(a/b/c)** 로 원문과 짝지어진다.
  순서를 바꾸거나 문항을 빼면 원문과 어긋나므로 그대로 두세요.
  정답 블록은 파서가 문항을 인식하기 위해 필요하며, 실제 채점은 원문 기준입니다.
-->

> [!question] A company has customers in several countries around the world. What is a benefit of using the AWS Cloud for this company? (Choose two.)
> a) Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world to reduce latency.
> b) Amazon CloudFront has multiple edge locations around the world to reduce latency.
> c) Amazon Translate automatically translates third-party website interfaces into multiple languages.
> d) Amazon Comprehend allows you to build applications that can respond to user requests in multiple languages.
> e) The company can deploy the application in multiple AWS Regions to reduce latency.
>> [!success]- Answer
>> b) Amazon CloudFront has multiple edge locations around the world to reduce latency.
>> e) The company can deploy the application in multiple AWS Regions to reduce latency.

> [!question] Which AWS Support plan is the minimum plan that provides technical support over the phone?
> a) Developer
> b) Basic
> c) Business
> d) Enterprise
>> [!success]- Answer
>> c) Business

> [!question] Which AWS service or feature allows customers to purchase unused Amazon EC2 capacity, often at a discount?
> a) Spot Instances
> b) Reserved Instances
> c) On-Demand Instances
> d) Dedicated Instances
>> [!success]- Answer
>> a) Spot Instances

> [!question] Which tasks are the customer's responsibility according to the AWS shared responsibility model? (Choose two.)
> a) Control physical access to the data centers that contain the customer's VPC.
> b) Configure IAM users according to the principle of least privilege.
> c) Install patches on Amazon RDS DB instances.
> d) Configure security groups for Amazon EC2 instances.
> e) Patch the operating system used by AWS Lambda functions.
>> [!success]- Answer
>> b) Configure IAM users according to the principle of least privilege.
>> d) Configure security groups for Amazon EC2 instances.

> [!question] What are the benefits of deploying an application on Amazon EC2 instances in multiple Availability Zones? (Choose two.)
> a) The application can serve users across Regions with low latency.
> b) The load on the application increases.
> c) The deployment protects against a single point of failure.
> d) The cost of running the application decreases.
> e) The availability of the application increases.
>> [!success]- Answer
>> c) The deployment protects against a single point of failure.
>> e) The availability of the application increases.

> [!question] Which of the following are characteristic features of Amazon S3? (Choose two.)
> a) A network file system
> b) A global file system
> c) An object store
> d) A local file store
> e) A highly durable storage system
>> [!success]- Answer
>> c) An object store
>> e) A highly durable storage system

> [!question] A company is hosting a static website in a single Amazon S3 bucket. Which AWS service will reduce latency and increase transfer speeds?
> a) AWS Elastic Beanstalk
> b) Amazon DynamoDB Accelerator (DAX)
> c) Amazon Route 53
> d) Amazon CloudFront
>> [!success]- Answer
>> d) Amazon CloudFront

> [!question] Which credential components are required for programmatic access to an AWS account? (Choose two.)
> a) Secret access key
> b) User ID
> c) Access key ID
> d) Primary key
> e) Secondary key
>> [!success]- Answer
>> a) Secret access key
>> c) Access key ID

> [!question] A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. Which AWS service can meet these requirements?
> a) Amazon Inspector
> b) Amazon Macie
> c) Amazon GuardDuty
> d) AWS Secrets Manager
>> [!success]- Answer
>> b) Amazon Macie

> [!question] A user is deploying an Amazon RDS DB instance across multiple Availability Zones. Which principle of the AWS Well-Architected Framework does this strategy relate to?
> a) Reliability
> b) Security
> c) Performance efficiency
> d) Cost optimization
>> [!success]- Answer
>> a) Reliability

> [!question] A company needs an encrypted connection between its on-premises servers and AWS. The connection must use the company's existing internet connection. Which solution meets these requirements?
> a) Amazon Connect
> b) AWS Site-to-Site VPN
> c) Amazon CloudFront
> d) AWS Direct Connect
>> [!success]- Answer
>> b) AWS Site-to-Site VPN

> [!question] An application development team needs a solution that alerts the entire development team when the application fails quality assurance testing. Which AWS service should the team use to meet this requirement?
> a) Amazon EventBridge
> b) Amazon Simple Notification Service (Amazon SNS)
> c) Amazon Simple Queue Service (Amazon SQS)
> d) Amazon Connect
>> [!success]- Answer
>> b) Amazon Simple Notification Service (Amazon SNS)

> [!question] A company needs a relational database on AWS to record new customer orders placed on its website. Which AWS service or feature meets this requirement?
> a) Amazon DynamoDB
> b) Amazon Aurora
> c) Amazon Elastic Block Store (Amazon EBS)
> d) AWS Global Accelerator
>> [!success]- Answer
>> b) Amazon Aurora

> [!question] Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?
> a) AWS Identity and Access Management (IAM)
> b) AWS CloudTrail
> c) AWS Trusted Advisor
> d) Amazon CloudWatch
>> [!success]- Answer
>> c) AWS Trusted Advisor

> [!question] A company wants to establish a consistent private connection from its on-premises data center to the AWS Cloud. Which AWS service meets this requirement?
> a) Amazon Connect
> b) AWS Direct Connect
> c) AWS Site-to-Site VPN
> d) AWS Client VPN
>> [!success]- Answer
>> b) AWS Direct Connect

> [!question] How does AWS charge for AWS Lambda usage beyond the free tier? (Choose two.)
> a) Based on the number of versions of a given Lambda function
> b) Based on the programming language used for the Lambda function
> c) Based on the total number of Lambda functions in the AWS account
> d) Based on the number of requests for a given Lambda function
> e) Based on the time it takes for the Lambda function to run
>> [!success]- Answer
>> d) Based on the number of requests for a given Lambda function
>> e) Based on the time it takes for the Lambda function to run

> [!question] A company has an on-premises Linux-based server that runs an Oracle database. The company wants to migrate the database server to run on an Amazon EC2 instance on AWS. Which service should the company use to complete the migration?
> a) AWS Outposts
> b) AWS Schema Conversion Tool (AWS SCT)
> c) AWS Database Migration Service (AWS DMS)
> d) AWS Application Migration Service (AWS MGN)
>> [!success]- Answer
>> d) AWS Application Migration Service (AWS MGN)

> [!question] Each department within a company has its own independent AWS account and its own payment method. The company wants to centralize governance across departments and consolidate billing. How can the company achieve these goals with an AWS service or feature?
> a) Use AWS Systems Manager OpsCenter.
> b) Use the AWS Cost and Usage Report page in the AWS Billing and Cost Management console.
> c) Create an organization in AWS Organizations with all features enabled from one account. Invite all the other accounts to join the organization.
> d) Configure AWS IAM Identity Center in each account.
>> [!success]- Answer
>> c) Create an organization in AWS Organizations with all features enabled from one account. Invite all the other accounts to join the organization.

> [!question] A company wants to build a learning application for students. The application must give students the option to select a button that reads text aloud. Which AWS machine learning service meets this requirement?
> a) Amazon Transcribe
> b) Amazon Polly
> c) Amazon Translate
> d) Amazon Textract
>> [!success]- Answer
>> b) Amazon Polly

> [!question] Which AWS service should be used to implement encryption in transit?
> a) AWS Certificate Manager (ACM)
> b) AWS Security Hub
> c) AWS Shield
> d) AWS Resource Access Manager (AWS RAM)
>> [!success]- Answer
>> a) AWS Certificate Manager (ACM)
