---
title: "모의고사 05회"
tags: [clf-c02, 문제은행, quiz]
exam: 5
문항수: 50
lang: en
---

# 모의고사 05회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/5)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?
> a) Least Privilege.
> b) Pilot Light.
> c) Fault Tolerance.
> d) Multi-threading.
>> [!success]- Answer
>> c) Fault Tolerance.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?
> a) All up-front reservation.
> b) All reserved instance payment options provide the same discount level.
> c) Partial up-front reservation.
> d) No up-front reservation.
>> [!success]- Answer
>> a) All up-front reservation.

<sub>모듈 [[11-billing-support]], [[02-cloud-computing]]</sub>

> [!question] What features does AWS offer to help protect your data in the Cloud? (Choose TWO)
> a) Access control.
> b) Physical MFA devices.
> c) Data encryption.
> d) Unlimited storage.
> e) Load balancing.
>> [!success]- Answer
>> a) Access control.
>> c) Data encryption.

<sub>모듈 [[09-security]]</sub>

> [!question] An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?
> a) 3 hours for the Linux instance and 5 hours for the CentOS instance.
> b) 2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.
> c) 2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.
> d) 3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.
>> [!success]- Answer
>> c) 2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.

<sub>모듈 [[02-cloud-computing]], [[11-billing-support]]</sub>

> [!question] What is the AWS Support feature that allows customers to manage support cases programmatically?
> a) AWS Trusted Advisor.
> b) AWS Operations Support.
> c) AWS Support API.
> d) AWS Personal Health Dashboard.
>> [!success]- Answer
>> c) AWS Support API.

<sub>관련: [[aws-trusted-advisor]] · [[aws-health-dashboard]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)
> a) AWS CLI.
> b) AWS Security Groups.
> c) AWS SDKs.
> d) AWS Network Access Control Lists.
> e) AWS CodeCommit.
>> [!success]- Answer
>> a) AWS CLI.
>> c) AWS SDKs.

<sub>관련: [[aws-iam]] · [[aws-codecommit]]  |  모듈 [[09-security]]</sub>

> [!question] Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)
> a) AWS Resource Groups.
> b) IAM Policies.
> c) IAM Roles.
> d) IAM Users.
> e) AWS Organizations.
>> [!success]- Answer
>> c) IAM Roles.
>> d) IAM Users.

<sub>관련: [[aws-iam]] · [[aws-organizations]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following Amazon RDS features facilitates offloading of database read activity?
> a) Database Snapshots.
> b) Multi-AZ Deployments.
> c) Automated Backups.
> d) Read Replicas.
>> [!success]- Answer
>> d) Read Replicas.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] How does AWS notify customers about security and privacy events pertaining to AWS services?
> a) Using the AWS ACM service.
> b) Using Security Bulletins.
> c) Using the AWS Management Console.
> d) Using Compliance Resources.
>> [!success]- Answer
>> b) Using Security Bulletins.

<sub>관련: [[aws-certificate-manager]]  |  모듈 [[09-security]]</sub>

> [!question] Which IAM entity can best be used to grant temporary access to your AWS resources?
> a) IAM Users.
> b) Key Pair.
> c) IAM Roles.
> d) IAM Groups.
>> [!success]- Answer
>> c) IAM Roles.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?
> a) AWS Global Accelerator.
> b) AWS Application Load Balancer (ALB).
> c) Amazon CloudFront.
> d) Transit VPC.
>> [!success]- Answer
>> b) AWS Application Load Balancer (ALB).

<sub>관련: [[elastic-load-balancing]] · [[amazon-ec2]] · [[amazon-cloudfront]] · [[aws-global-accelerator]]  |  모듈 [[02-cloud-computing]], [[05-networking]]</sub>

> [!question] Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?
> a) Use Software test automation tools.
> b) Use AWS CodeDeploy to build and automate your AWS environment.
> c) Use code to provision and operate your AWS infrastructure.
> d) Migrate all of your applications to a dedicated host.
>> [!success]- Answer
>> c) Use code to provision and operate your AWS infrastructure.

<sub>관련: [[aws-codedeploy]]  |  모듈 [[04-global-infrastructure]]</sub>

> [!question] A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?
> a) Restrict any API call made through SDKs or CLI.
> b) Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.
> c) Require Multi-Factor Authentication (MFA) for all IAM User access.
> d) Set up two login passwords.
>> [!success]- Answer
>> c) Require Multi-Factor Authentication (MFA) for all IAM User access.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Which AWS Service offers volume discounts based on usage?
> a) Amazon VPC.
> b) Amazon S3.
> c) Amazon Lightsail.
> d) AWS Cost Explorer.
>> [!success]- Answer
>> b) Amazon S3.

<sub>관련: [[amazon-lightsail]] · [[amazon-s3]] · [[amazon-vpc]] · [[aws-cost-explorer]]  |  모듈 [[03-compute-services]], [[05-networking]], [[06-storage]], [[11-billing-support]]</sub>

> [!question] Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)
> a) The AWS Region’s security level.
> b) Data sovereignty.
> c) Cost.
> d) The planned number of VPCs.
> e) Geographic proximity to the company's location.
>> [!success]- Answer
>> b) Data sovereignty.
>> c) Cost.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?
> a) Amazon EFS.
> b) Amazon Neptune.
> c) Amazon ElastiCache.
> d) DAX.
>> [!success]- Answer
>> c) Amazon ElastiCache.

<sub>관련: [[amazon-efs]] · [[amazon-elasticache]] · [[amazon-neptune]]  |  모듈 [[06-storage]], [[07-databases]]</sub>

> [!question] What are the advantages of using Auto Scaling Groups for EC2 instances?
> a) Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.
> b) Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.
> c) Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.
> d) Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance.
>> [!success]- Answer
>> b) Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.

<sub>관련: [[amazon-ec2-auto-scaling]] · [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?
> a) AWS helps customers invest more in capital expenditures.
> b) AWS automates all infrastructure operations, so customers save more on human resources costs.
> c) AWS continues to lower the cost of cloud computing for its customers.
> d) AWS secures AWS resources at no additional charge.
>> [!success]- Answer
>> c) AWS continues to lower the cost of cloud computing for its customers.

<sub>모듈 [[11-billing-support]], [[01-cloud-intro]]</sub>

> [!question] Which of the following are examples of the customer’s responsibility to implement “security IN the cloud”? (Choose TWO)
> a) Building a schema for an application.
> b) Replacing physical hardware.
> c) Creating a new hypervisor.
> d) Patch management of the underlying infrastructure.
> e) File system encryption.
>> [!success]- Answer
>> a) Building a schema for an application.
>> e) File system encryption.

<sub>모듈 [[01-cloud-intro]], [[09-security]]</sub>

> [!question] Which of the following is a type of MFA device that customers can use to protect their AWS resources?
> a) AWS CloudHSM.
> b) U2F Security Key.
> c) AWS Access Keys.
> d) AWS Key Pair.
>> [!success]- Answer
>> b) U2F Security Key.

<sub>관련: [[aws-cloudhsm]]  |  모듈 [[09-security]]</sub>

> [!question] A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?
> a) Amazon SNS.
> b) AWS Elastic Beanstalk.
> c) AWS Systems Manager.
> d) AWS Trusted Advisor.
>> [!success]- Answer
>> b) AWS Elastic Beanstalk.

<sub>관련: [[aws-elastic-beanstalk]] · [[amazon-sns]] · [[aws-trusted-advisor]] · [[aws-systems-manager]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)
> a) The amount of time the instances will be running.
> b) Number of security groups.
> c) Allocated Elastic IP Addresses.
> d) Number of Hosted Zones.
> e) Number of instances.
>> [!success]- Answer
>> b) Number of security groups.
>> d) Number of Hosted Zones.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?
> a) AWS Data Pipeline.
> b) AWS Storage Gateway.
> c) Amazon Aurora.
> d) Amazon EFS.
>> [!success]- Answer
>> b) AWS Storage Gateway.

<sub>관련: [[amazon-efs]] · [[aws-storage-gateway]] · [[amazon-aurora]]  |  모듈 [[06-storage]], [[07-databases]]</sub>

> [!question] A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?
> a) Amazon Simple Storage Service.
> b) Amazon Elastic Block Store.
> c) Amazon Elastic Container Service.
> d) AWS Storage Gateway.
>> [!success]- Answer
>> a) Amazon Simple Storage Service.

<sub>관련: [[amazon-ecs]] · [[amazon-s3]] · [[amazon-ebs]] · [[aws-storage-gateway]]  |  모듈 [[03-compute-services]], [[06-storage]]</sub>

> [!question] You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?
> a) EBS and S3 are accessible only to the root account owner.
> b) The systems administrator must contact AWS Support first to activate his new IAM account.
> c) There is not enough space in S3 to store the snapshots.
> d) There is a non-explicit deny to all new users.
>> [!success]- Answer
>> d) There is a non-explicit deny to all new users.

<sub>관련: [[amazon-s3]] · [[amazon-ebs]] · [[aws-iam]]  |  모듈 [[06-storage]], [[09-security]]</sub>

> [!question] An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?
> a) AWS CloudTrail.
> b) Amazon CloudFront.
> c) AWS CloudFormation.
> d) Amazon CloudWatch.
>> [!success]- Answer
>> a) AWS CloudTrail.

<sub>관련: [[amazon-cloudfront]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-cloudformation]]  |  모듈 [[04-global-infrastructure]], [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] Which of the below options is true of Amazon Cloud Directory?
> a) Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.
> b) Amazon Cloud Directory enables the analysis of video and data streams in real time.
> c) Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.
> d) Amazon Cloud Directory allows for registration and management of domain names.
>> [!success]- Answer
>> a) Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.

<sub>모듈 [[09-security]]</sub>

> [!question] A user has opened a "Production System Down" support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?
> a) 12 hours.
> b) 15 minutes.
> c) 24 hours.
> d) One hour.
>> [!success]- Answer
>> d) One hour.

<sub>모듈 [[11-billing-support]]</sub>

> [!question] Which of the below options is a best practice for making your application on AWS highly available?
> a) Deploy the application to at least two Availability Zones.
> b) Use Elastic Load Balancing (ELB) across multiple AWS Regions.
> c) Deploy the application code on at least two servers in the same Availability Zone.
> d) Rewrite the application code to handle all incoming requests.
>> [!success]- Answer
>> a) Deploy the application to at least two Availability Zones.

<sub>관련: [[elastic-load-balancing]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)
> a) Labor and IT costs.
> b) Cooling and power consumption.
> c) Amazon EBS computing power.
> d) Software architecture.
> e) Software compatibility.
>> [!success]- Answer
>> a) Labor and IT costs.
>> b) Cooling and power consumption.

<sub>관련: [[amazon-ebs]]  |  모듈 [[06-storage]]</sub>

> [!question] Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?
> a) AWS Basic Support.
> b) AWS Developer Support.
> c) AWS Business Support.
> d) AWS Enterprise Support.
>> [!success]- Answer
>> d) AWS Enterprise Support.

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which of the following AWS offerings are serverless services? (Choose TWO)
> a) Amazon EC2.
> b) AWS Lambda.
> c) Amazon DynamoDB.
> d) Amazon EMR.
> e) Amazon RDS.
>> [!success]- Answer
>> b) AWS Lambda.
>> c) Amazon DynamoDB.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-rds]] · [[amazon-dynamodb]] · [[amazon-emr]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?
> a) Amazon GuardDuty.
> b) AWS ACM.
> c) Amazon Detective.
> d) AWS WAF.
>> [!success]- Answer
>> b) AWS ACM.

<sub>관련: [[aws-waf]] · [[amazon-guardduty]]  |  모듈 [[09-security]]</sub>

> [!question] A company wants to decouple the components of a monolithic application so that a failure in one component does not stop the others. Which AWS service should the company use to pass messages between the components?
> a) Amazon SQS.
> b) Amazon CloudFront.
> c) AWS Direct Connect.
> d) Amazon EBS.
>> [!success]- Answer
>> a) Amazon SQS.

<sub>관련: [[amazon-sqs]] · [[amazon-cloudfront]] · [[aws-direct-connect]] · [[amazon-ebs]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/sqs/)</sub>

> [!question] A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?
> a) Amazon EBS.
> b) Amazon EFS.
> c) Amazon S3.
> d) Amazon Instance Store.
>> [!success]- Answer
>> c) Amazon S3.

<sub>관련: [[amazon-s3]] · [[amazon-ebs]] · [[amazon-efs]]  |  모듈 [[06-storage]]</sub>

> [!question] Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?
> a) AWS WAF.
> b) Amazon CloudWatch.
> c) AWS Cloud9.
> d) AWS CloudTrail.
>> [!success]- Answer
>> b) Amazon CloudWatch.

<sub>관련: [[amazon-cloudfront]] · [[aws-waf]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]]  |  모듈 [[05-networking]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?
> a) On-demand Instances.
> b) Dedicated Hosts.
> c) Spot Instances.
> d) Reserved Instances.
>> [!success]- Answer
>> d) Reserved Instances.

<sub>모듈 [[11-billing-support]], [[02-cloud-computing]]</sub>

> [!question] A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?
> a) Create an IAM role and attach a policy with Amazon DynamoDB access permissions.
> b) Create an IAM role and attach a policy with Administrator access permissions.
> c) Create an IAM user and attach a policy with Amazon DynamoDB access permissions.
> d) Create an IAM user and attach a policy with Administrator access permissions.
>> [!success]- Answer
>> c) Create an IAM user and attach a policy with Amazon DynamoDB access permissions.

<sub>관련: [[amazon-dynamodb]] · [[aws-iam]]  |  모듈 [[07-databases]], [[09-security]]</sub>

> [!question] When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?
> a) Generate new IAM access keys every time you delegate permissions.
> b) Store the required AWS credentials directly within the application code.
> c) Use temporary security credentials (IAM roles) instead of long-term access keys.
> d) Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources.
>> [!success]- Answer
>> c) Use temporary security credentials (IAM roles) instead of long-term access keys.

<sub>관련: [[amazon-ec2]] · [[aws-iam]]  |  모듈 [[02-cloud-computing]], [[09-security]]</sub>

> [!question] Which of the following will help AWS customers save on costs when migrating their workloads to AWS?
> a) Use servers instead of managed services.
> b) Use existing third-party software licenses on AWS.
> c) Migrate production workloads to AWS edge locations instead of AWS Regions.
> d) Use AWS Outposts to run all workloads in a cost-optimized environment.
>> [!success]- Answer
>> b) Use existing third-party software licenses on AWS.

<sub>관련: [[aws-outposts]]  |  모듈 [[03-compute-services]]</sub>

> [!question] An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?
> a) Amazon SQS.
> b) Virtual Private Gateway.
> c) AWS Artifact.
> d) Amazon CloudFront.
>> [!success]- Answer
>> a) Amazon SQS.

<sub>관련: [[amazon-cloudfront]] · [[amazon-sqs]] · [[aws-artifact]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)
> a) Amazon Connect.
> b) AWS CLI.
> c) AWS Identity and Access Management (IAM).
> d) Amazon SNS.
> e) Amazon Virtual Private Cloud.
>> [!success]- Answer
>> b) AWS CLI.
>> c) AWS Identity and Access Management (IAM).

<sub>관련: [[amazon-vpc]] · [[amazon-sns]] · [[amazon-connect]] · [[aws-iam]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[09-security]]</sub>

> [!question] According to best practices, which of the below options is best suited for processing a large number of binary files?
> a) Vertically scaling EC2 instances.
> b) Running RDS instances in parallel.
> c) Vertically scaling RDS instances.
> d) Running EC2 instances in parallel.
>> [!success]- Answer
>> d) Running EC2 instances in parallel.

<sub>관련: [[amazon-ec2]] · [[amazon-rds]]  |  모듈 [[02-cloud-computing]], [[07-databases]]</sub>

> [!question] A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?
> a) AWS Cost Explorer.
> b) AWS Pricing Calculator.
> c) AWS Budgets.
> d) AWS Cost & Usage Report.
>> [!success]- Answer
>> b) AWS Pricing Calculator.

<sub>관련: [[amazon-s3]] · [[amazon-cloudfront]] · [[aws-cost-explorer]] · [[aws-budgets]] · [[aws-pricing-calculator]]  |  모듈 [[05-networking]], [[06-storage]], [[11-billing-support]]</sub>

> [!question] What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)
> a) Stop all running services and open an investigation.
> b) Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.
> c) Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.
> d) Open an investigation and delete any potentially compromised IAM users.
> e) Change your AWS root account password and the passwords of any IAM users.
>> [!success]- Answer
>> d) Open an investigation and delete any potentially compromised IAM users.
>> e) Change your AWS root account password and the passwords of any IAM users.

<sub>관련: [[aws-iam]] · [[aws-cloudtrail]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?
> a) Elastic coupling.
> b) Loosely coupling.
> c) Scalable coupling.
> d) Tightly coupling.
>> [!success]- Answer
>> b) Loosely coupling.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?
> a) Amazon Elastic File System.
> b) Amazon Simple Storage Service.
> c) Amazon Elastic Block Store.
> d) AWS Storage Gateway.
>> [!success]- Answer
>> a) Amazon Elastic File System.

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[amazon-ebs]] · [[amazon-efs]] · [[aws-storage-gateway]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?
> a) Create private connection to your data center.
> b) Achieve global high availability.
> c) Automate the process of provisioning new compute resources.
> d) Make synchronous replication of your data possible.
>> [!success]- Answer
>> d) Make synchronous replication of your data possible.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)
> a) Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.
> b) Lambda natively supports a number of programming languages such as Node.js, Python, and Java.
> c) Lambda is AWS’ proprietary programming language for microservices.
> d) Lambda doesn’t support programming languages; it is a serverless compute service.
> e) Lambda can support any programming language using an API.
>> [!success]- Answer
>> b) Lambda natively supports a number of programming languages such as Node.js, Python, and Java.
>> e) Lambda can support any programming language using an API.

<sub>관련: [[aws-lambda]]  |  모듈 [[03-compute-services]]</sub>

> [!question] What are the capabilities of AWS X-Ray? (Choose TWO)
> a) Automatically decouples application components.
> b) Facilitates tracking of user requests to identify application issues.
> c) Helps improve application performance.
> d) Deploys applications to Amazon EC2 instances.
> e) Deploys applications to on-premises servers.
>> [!success]- Answer
>> b) Facilitates tracking of user requests to identify application issues.
>> c) Helps improve application performance.

<sub>관련: [[amazon-ec2]] · [[aws-x-ray]]  |  모듈 [[02-cloud-computing]], [[13-well-architected]]</sub>
