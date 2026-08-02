---
title: "모의고사 01회"
tags: [clf-c02, 문제은행, quiz]
exam: 1
문항수: 50
---

# 모의고사 01회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/1)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] AWS allows users to manage their resources using a web based user interface. What is the name of this interface?
> a) AWS CLI.
> b) AWS API.
> c) AWS SDK.
> d) AWS Management Console.
>> [!success]- Answer
>> d) AWS Management Console.

> [!question] Which of the following is an example of horizontal scaling in the AWS Cloud?
> a) Replacing an existing EC2 instance with a larger, more powerful one.
> b) Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.
> c) Adding more RAM capacity to an EC2 instance.
> d) Adding more EC2 instances of the same size to handle an increase in traffic.
>> [!success]- Answer
>> d) Adding more EC2 instances of the same size to handle an increase in traffic.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?
> a) Amazon Inspector.
> b) AWS CloudTrail.
> c) AWS Trusted Advisor.
> d) EC2 Instance Usage Report.
>> [!success]- Answer
>> b) AWS CloudTrail.

<sub>관련: [[amazon-ec2]] · [[amazon-inspector]] · [[aws-cloudtrail]] · [[aws-trusted-advisor]]  |  모듈 [[02-cloud-computing]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the below options are related to the reliability of AWS? (Choose TWO)
> a) Applying the principle of least privilege to all AWS resources.
> b) Automatically provisioning new resources to meet demand.
> c) All AWS services are considered Global Services, and this design helps customers serve their international users.
> d) Providing compensation to customers if issues occur.
> e) Ability to recover quickly from failures.
>> [!success]- Answer
>> b) Automatically provisioning new resources to meet demand.
>> e) Ability to recover quickly from failures.

> [!question] Which statement is true regarding the AWS Shared Responsibility Model?
> a) Responsibilities vary depending on the services used.
> b) Security of the IaaS services is the responsibility of AWS.
> c) Patching the guest OS is always the responsibility of AWS.
> d) Security of the managed services is the responsibility of the customer.
>> [!success]- Answer
>> a) Responsibilities vary depending on the services used.

> [!question] You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?
> a) The Reserved Instance discounts can only be shared with the master account.
> b) All accounts can receive the hourly cost benefit of the Reserved Instances.
> c) The purchased instances will have better performance than On-demand instances.
> d) There are no cost benefits from using consolidated billing; It is for informational purposes only.
>> [!success]- Answer
>> b) All accounts can receive the hourly cost benefit of the Reserved Instances.

> [!question] A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?
> a) Deploy the application across multiple Availability Zones and Edge locations.
> b) Deploy the application across multiple Availability Zones and subnets.
> c) Deploy the application across multiple Regions and Availability Zones.
> d) Deploy the application across multiple VPC’s and subnets.
>> [!success]- Answer
>> c) Deploy the application across multiple Regions and Availability Zones.

> [!question] What does AWS Snowball provide? (Choose TWO)
> a) Built-in computing capabilities that allow customers to process data locally.
> b) A catalog of third-party software solutions that customers need to build solutions and run their businesses.
> c) A hybrid cloud storage between on-premises environments and the AWS Cloud.
> d) An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.
> e) Secure transfer of large amounts of data into and out of the AWS.
>> [!success]- Answer
>> a) Built-in computing capabilities that allow customers to process data locally.
>> e) Secure transfer of large amounts of data into and out of the AWS.

<sub>관련: [[aws-snow-family]]  |  모듈 [[12-migration]]</sub>

> [!question] A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?
> a) AWS Health Dashboard.
> b) AWS Support Concierge.
> c) AWS Customer Service.
> d) AWS Operations Support.
>> [!success]- Answer
>> b) AWS Support Concierge.

<sub>관련: [[aws-health-dashboard]] · [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?
> a) Applying the Amazon Connect latency-based routing policy.
> b) Registering a new US domain name to serve the users in the US.
> c) Building a new data center in the US and implementing a hybrid model.
> d) Deploying new Amazon EC2 instances in a Region located in the US.
>> [!success]- Answer
>> d) Deploying new Amazon EC2 instances in a Region located in the US.

<sub>관련: [[amazon-ec2]] · [[amazon-connect]]  |  모듈 [[02-cloud-computing]], [[05-networking]]</sub>

> [!question] An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?
> a) IAM roles.
> b) IAM users.
> c) IAM user groups.
> d) AWS Organizations.
>> [!success]- Answer
>> c) IAM user groups.

<sub>관련: [[aws-iam]] · [[aws-organizations]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?
> a) AWS OpsWorks.
> b) AWS Database Migration Service.
> c) AWS Server Migration Service.
> d) AWS Application Discovery Service.
>> [!success]- Answer
>> b) AWS Database Migration Service.

<sub>관련: [[aws-dms]] · [[aws-opsworks]]  |  모듈 [[12-migration]]</sub>

> [!question] Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?
> a) Build security in every layer.
> b) Parallelize tasks.
> c) Implement elasticity.
> d) Adopt monolithic architecture.
>> [!success]- Answer
>> c) Implement elasticity.

> [!question] What are the benefits of having infrastructure hosted in AWS? (Choose TWO)
> a) Increasing speed and agility.
> b) There is no need to worry about security.
> c) Gaining complete control over the physical infrastructure.
> d) Operating applications on behalf of customers.
> e) All of the physical security and most of the data/network security are taken care of for you.
>> [!success]- Answer
>> a) Increasing speed and agility.
>> e) All of the physical security and most of the data/network security are taken care of for you.

> [!question] What is the advantage of the AWS-recommended practice of "decoupling" applications?
> a) Allows treating an application as a single, cohesive unit.
> b) Reduces inter-dependencies so that failures do not impact other components of the application.
> c) Allows updates of any monolithic application quickly and easily.
> d) Allows tracking of any API call made to any AWS service.
>> [!success]- Answer
>> b) Reduces inter-dependencies so that failures do not impact other components of the application.

> [!question] Which of the following helps a customer view the Amazon EC2 billing activity for the past month?
> a) AWS Budgets.
> b) AWS Pricing Calculator.
> c) AWS Systems Manager.
> d) AWS Cost & Usage Reports.
>> [!success]- Answer
>> d) AWS Cost & Usage Reports.

<sub>관련: [[amazon-ec2]] · [[aws-systems-manager]] · [[aws-budgets]] · [[aws-pricing-calculator]]  |  모듈 [[02-cloud-computing]], [[09-security]], [[11-billing-support]]</sub>

> [!question] What do you gain from setting up consolidated billing for five different AWS accounts under another master account?
> a) AWS services’ costs will be reduced to half the original price.
> b) The consolidated billing feature is just for organizational purpose.
> c) Each AWS account gets volume discounts.
> d) Each AWS account gets five times the free-tier services capacity.
>> [!success]- Answer
>> c) Each AWS account gets volume discounts.

> [!question] What should you do in order to keep the data on EBS volumes safe? (Choose TWO)
> a) Regularly update firmware on EBS devices.
> b) Create EBS snapshots.
> c) Ensure that EBS data is encrypted at rest.
> d) Store a backup daily in an external drive.
> e) Prevent any unauthorized access to AWS data centers.
>> [!success]- Answer
>> b) Create EBS snapshots.
>> c) Ensure that EBS data is encrypted at rest.

<sub>관련: [[amazon-ebs]]  |  모듈 [[06-storage]]</sub>

> [!question] One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?
> a) By automatically scaling your on-premises resources based on changes in demand.
> b) By automatically scaling your AWS resources using an Elastic Load Balancer.
> c) By reducing interdependencies between application components wherever possible.
> d) By automatically provisioning the required AWS resources based on changes in demand.
>> [!success]- Answer
>> d) By automatically provisioning the required AWS resources based on changes in demand.

<sub>관련: [[elastic-load-balancing]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)
> a) Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.
> b) Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.
> c) Configure the AWS Budgets Service to alert the company when the threshold is exceeded.
> d) Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.
> e) Configure the Amazon Connect Service to alert the company when the threshold is exceeded.
>> [!success]- Answer
>> a) Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.
>> c) Configure the AWS Budgets Service to alert the company when the threshold is exceeded.

<sub>관련: [[amazon-sns]] · [[amazon-connect]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-budgets]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] What does Amazon CloudFront use to distribute content to global users with low latency?
> a) AWS Global Accelerator.
> b) AWS Regions.
> c) AWS Edge Locations.
> d) AWS Availability Zones.
>> [!success]- Answer
>> c) AWS Edge Locations.

<sub>관련: [[amazon-cloudfront]] · [[aws-global-accelerator]]  |  모듈 [[05-networking]]</sub>

> [!question] What does the "Principle of Least Privilege" refer to?
> a) You should grant your users only the permissions they need when they need them and nothing more.
> b) All IAM users should have at least the necessary permissions to access the core AWS services.
> c) All trusted IAM users should have access to any AWS service in the respective AWS account.
> d) IAM users should not be granted any permissions; to keep your account safe.
>> [!success]- Answer
>> a) You should grant your users only the permissions they need when they need them and nothing more.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Which of the following does NOT belong to the AWS Cloud Computing models?
> a) Platform as a Service (PaaS).
> b) Infrastructure as a Service (IaaS).
> c) Software as a Service (SaaS).
> d) Networking as a Service (NaaS).
>> [!success]- Answer
>> d) Networking as a Service (NaaS).

> [!question] The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?
> a) S3 Intelligent-Tiering.
> b) AWS Marketplace.
> c) Amazon S3 Glacier Deep Archive.
> d) Amazon EBS.
>> [!success]- Answer
>> c) Amazon S3 Glacier Deep Archive.

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]] · [[amazon-ebs]] · [[aws-marketplace]]  |  모듈 [[06-storage]], [[11-billing-support]]</sub>

> [!question] Which service provides DNS in the AWS cloud?
> a) Route 53.
> b) AWS Config.
> c) Amazon CloudFront.
> d) Amazon EMR.
>> [!success]- Answer
>> a) Route 53.

<sub>관련: [[amazon-route-53]] · [[amazon-cloudfront]] · [[amazon-emr]] · [[aws-config]]  |  모듈 [[05-networking]], [[08-ai-ml-analytics]], [[10-monitoring-governance]]</sub>

> [!question] Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)
> a) AWS Shield.
> b) AWS Config.
> c) Amazon Cognito.
> d) AWS WAF.
> e) AWS KMS.
>> [!success]- Answer
>> a) AWS Shield.
>> d) AWS WAF.

<sub>관련: [[amazon-cognito]] · [[aws-kms]] · [[aws-shield]] · [[aws-waf]] · [[aws-config]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?
> a) AWS OpsWorks.
> b) AWS Storage Gateway.
> c) Amazon EBS volume.
> d) Amazon ElastiCache.
>> [!success]- Answer
>> d) Amazon ElastiCache.

<sub>관련: [[amazon-ebs]] · [[aws-storage-gateway]] · [[amazon-elasticache]] · [[aws-opsworks]]  |  모듈 [[06-storage]], [[07-databases]]</sub>

> [!question] You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?
> a) Reserved instances.
> b) Spot instances.
> c) Dedicated instances.
> d) On-demand instances.
>> [!success]- Answer
>> d) On-demand instances.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?
> a) Reserved Instances.
> b) On-demand Instances.
> c) Dedicated Instances.
> d) Spot Instances.
>> [!success]- Answer
>> d) Spot Instances.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following can be described as a global content delivery network (CDN) service?
> a) AWS VPN.
> b) AWS Direct Connect.
> c) AWS Regions.
> d) Amazon CloudFront.
>> [!success]- Answer
>> d) Amazon CloudFront.

<sub>관련: [[amazon-cloudfront]] · [[aws-direct-connect]]  |  모듈 [[05-networking]]</sub>

> [!question] Which of the following services allows customers to manage their agreements with AWS?
> a) AWS Artifact.
> b) AWS Certificate Manager.
> c) AWS Systems Manager.
> d) AWS Organizations.
>> [!success]- Answer
>> a) AWS Artifact.

<sub>관련: [[aws-organizations]] · [[aws-certificate-manager]] · [[aws-artifact]] · [[aws-systems-manager]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)
> a) Amazon VPC.
> b) Amazon DynamoDB.
> c) Amazon Elastic MapReduce.
> d) AWS IAM.
> e) Amazon Elastic Compute Cloud.
>> [!success]- Answer
>> b) Amazon DynamoDB.
>> c) Amazon Elastic MapReduce.

<sub>관련: [[amazon-dynamodb]] · [[amazon-vpc]] · [[aws-iam]]  |  모듈 [[05-networking]], [[07-databases]], [[09-security]]</sub>

> [!question] Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?
> a) Amazon Aurora.
> b) Amazon DynamoDB.
> c) Amazon Elastic Block Store.
> d) Amazon Redshift.
>> [!success]- Answer
>> b) Amazon DynamoDB.

<sub>관련: [[amazon-ebs]] · [[amazon-aurora]] · [[amazon-dynamodb]] · [[amazon-redshift]]  |  모듈 [[06-storage]], [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?
> a) AWS Identity and Access Management (IAM) user.
> b) Infrastructure Event Management (IEM) engineer.
> c) AWS Consulting Partners.
> d) Technical Account Manager (TAM).
>> [!success]- Answer
>> d) Technical Account Manager (TAM).

<sub>관련: [[aws-iam]] · [[aws-support-plans]]  |  모듈 [[09-security]], [[11-billing-support]]</sub>

> [!question] How can you view the distribution of AWS spending in one of your AWS accounts?
> a) By using Amazon VPC console.
> b) By contacting the AWS Support team.
> c) By using AWS Cost Explorer.
> d) By contacting the AWS Finance team.
>> [!success]- Answer
>> c) By using AWS Cost Explorer.

<sub>관련: [[amazon-vpc]] · [[aws-cost-explorer]]  |  모듈 [[05-networking]], [[11-billing-support]]</sub>

> [!question] Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?
> a) Access keys.
> b) Secret token.
> c) UserID.
> d) User name and password.
>> [!success]- Answer
>> a) Access keys.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?
> a) Contact the AWS Customer Service team.
> b) Contact the AWS Abuse team.
> c) Contact the AWS Concierge team.
> d) Contact the AWS Security team.
>> [!success]- Answer
>> b) Contact the AWS Abuse team.

> [!question] Select TWO examples of the AWS shared controls.
> a) Patch Management.
> b) IAM Management.
> c) VPC Management.
> d) Configuration Management.
> e) Data Center operations.
>> [!success]- Answer
>> a) Patch Management.
>> d) Configuration Management.

<sub>관련: [[amazon-vpc]] · [[aws-iam]]  |  모듈 [[05-networking]], [[09-security]]</sub>

> [!question] In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)
> a) ELB.
> b) Auto Scaling.
> c) Amazon Athen.
> d) ECR.
> e) Amazon EC2.
>> [!success]- Answer
>> a) ELB.
>> b) Auto Scaling.

<sub>관련: [[elastic-load-balancing]] · [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?
> a) Amazon SNS.
> b) Amazon Kinesis Video Streams.
> c) AWS CloudFormation.
> d) Amazon CloudFront.
>> [!success]- Answer
>> d) Amazon CloudFront.

<sub>관련: [[amazon-cloudfront]] · [[amazon-sns]] · [[amazon-kinesis]] · [[aws-cloudformation]]  |  모듈 [[02-cloud-computing]], [[04-global-infrastructure]], [[05-networking]], [[08-ai-ml-analytics]]</sub>

> [!question] A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?
> a) A MySQL database installed on an EC2 instance.
> b) Amazon Aurora.
> c) Amazon DynamoDB.
> d) Amazon Neptune.
>> [!success]- Answer
>> b) Amazon Aurora.

<sub>관련: [[amazon-ec2]] · [[amazon-aurora]] · [[amazon-dynamodb]] · [[amazon-neptune]]  |  모듈 [[02-cloud-computing]], [[07-databases]]</sub>

> [!question] What is the AWS service that enables AWS architects to manage infrastructure as code?
> a) AWS CloudFormation.
> b) AWS Config.
> c) Amazon SES.
> d) Amazon EMR.
>> [!success]- Answer
>> a) AWS CloudFormation.

<sub>관련: [[amazon-emr]] · [[aws-config]] · [[aws-cloudformation]]  |  모듈 [[04-global-infrastructure]], [[08-ai-ml-analytics]], [[10-monitoring-governance]]</sub>

> [!question] Under the shared responsibility model, which of the following is the responsibility of AWS?
> a) Client-side encryption.
> b) Configuring infrastructure devices.
> c) Server-side encryption.
> d) Filtering traffic with Security Groups.
>> [!success]- Answer
>> b) Configuring infrastructure devices.

> [!question] What does the AWS Health Dashboard provide? (Choose TWO)
> a) Detailed troubleshooting guidance to address AWS events impacting your resources.
> b) Health checks for Auto Scaling instances.
> c) Recommendations for Cost Optimization.
> d) A dashboard detailing vulnerabilities in your applications.
> e) Personalized view of AWS service health.
>> [!success]- Answer
>> a) Detailed troubleshooting guidance to address AWS events impacting your resources.
>> e) Personalized view of AWS service health.

<sub>관련: [[aws-health-dashboard]]  |  모듈 [[11-billing-support]]</sub>

> [!question] You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?
> a) AWS Lambda.
> b) AWS Config.
> c) Amazon CloudWatch.
> d) AWS CloudTrail.
>> [!success]- Answer
>> c) Amazon CloudWatch.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-config]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[10-monitoring-governance]]</sub>

> [!question] Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?
> a) AWS Shield.
> b) AWS Management Console.
> c) AWS Secrets Manager.
> d) AWS Trusted Advisor.
>> [!success]- Answer
>> d) AWS Trusted Advisor.

<sub>관련: [[aws-secrets-manager]] · [[aws-shield]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following is not a benefit of Amazon S3? (Choose TWO)
> a) Amazon S3 provides unlimited storage for any type of data.
> b) Amazon S3 can run any type of application or backend system.
> c) Amazon S3 stores any number of objects, but with object size limits.
> d) Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.
> e) Amazon S3 provides 99.999999999% (11 9’s) of data durability.
>> [!success]- Answer
>> b) Amazon S3 can run any type of application or backend system.
>> d) Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.

<sub>관련: [[amazon-s3]]  |  모듈 [[06-storage]]</sub>

> [!question] In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)
> a) Disk disposal.
> b) Controlling physical access to compute resources.
> c) Patching the Network infrastructure.
> d) Setting password complexity rules.
> e) Configuring network access rules.
>> [!success]- Answer
>> d) Setting password complexity rules.
>> e) Configuring network access rules.

> [!question] What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?
> a) Amazon Aurora.
> b) Amazon CloudWatch.
> c) AWS Quick Start reference deployments.
> d) AWS OpsWorks.
>> [!success]- Answer
>> c) AWS Quick Start reference deployments.

<sub>관련: [[amazon-aurora]] · [[amazon-cloudwatch]] · [[aws-opsworks]]  |  모듈 [[07-databases]], [[10-monitoring-governance]]</sub>

> [!question] An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?
> a) Elastic RI.
> b) Premium RI.
> c) Standard RI.
> d) Convertible RI.
>> [!success]- Answer
>> d) Convertible RI.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>
