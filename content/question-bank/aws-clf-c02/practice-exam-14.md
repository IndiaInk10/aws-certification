---
title: "모의고사 14회"
tags: [clf-c02, 문제은행, quiz]
exam: 14
문항수: 50
lang: en
---

# 모의고사 14회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/14)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] Which storage service can be used as a low-cost option for hosting static websites?
> a) Amazon Glacier
> b) Amazon DynamoDB
> c) Amazon Elastic File System (Amazon EFS)
> d) Amazon Simple Storage Service (Amazon S3)
>> [!success]- Answer
>> d) Amazon Simple Storage Service (Amazon S3)

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]] · [[amazon-efs]] · [[amazon-dynamodb]]  |  모듈 [[06-storage]], [[07-databases]]  |  [참고](https://aws.amazon.com/getting-started/projects/host-static-website/)</sub>

> [!question] Which Amazon EC2 instance pricing model can provide discounts of up to 90%?
> a) Reserved Instances
> b) On-Demand
> c) Dedicated Hosts
> d) Spot Instances
>> [!success]- Answer
>> d) Spot Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/ec2/spot/)</sub>

> [!question] What is the AWS customer responsible for according to the AWS shared responsibility model?
> a) Physical access controls
> b) Data encryption
> c) Secure disposal of storage devices
> d) Environmental risk management
>> [!success]- Answer
>> b) Data encryption

<sub>모듈 [[01-cloud-intro]], [[09-security]]</sub>

> [!question] Which of the following AWS Cloud services can be used to run a customer-managed relational database?
> a) Amazon EC2
> b) Amazon Route 53
> c) Amazon ElastiCache
> d) Amazon DynamoDB
>> [!success]- Answer
>> a) Amazon EC2

<sub>관련: [[amazon-ec2]] · [[amazon-dynamodb]] · [[amazon-elasticache]] · [[amazon-route-53]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[07-databases]]</sub>

> [!question] A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company's needs?
> a) Amazon Simple Storage Service (Amazon S3)
> b) Amazon DynamoDB
> c) Amazon Kinesis
> d) Amazon Redshift
>> [!success]- Answer
>> d) Amazon Redshift

<sub>관련: [[amazon-s3]] · [[amazon-dynamodb]] · [[amazon-redshift]] · [[amazon-kinesis]]  |  모듈 [[06-storage]], [[07-databases]], [[08-ai-ml-analytics]]  |  [참고](https://aws.amazon.com/redshift/)</sub>

> [!question] Which statement best describes Elastic Load Balancing?
> a) It translates a domain name into an IP address using DNS.
> b) It distributes incoming application traffic across one or more Amazon EC2 instances.
> c) It collects metrics on connected Amazon EC2 instances.
> d) It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.
>> [!success]- Answer
>> b) It distributes incoming application traffic across one or more Amazon EC2 instances.

<sub>관련: [[elastic-load-balancing]] · [[amazon-ec2]] · [[amazon-translate]]  |  모듈 [[02-cloud-computing]], [[08-ai-ml-analytics]]  |  [참고](https://aws.amazon.com/elasticloadbalancing/)</sub>

> [!question] Which of the following are valid ways for a customer to interact with AWS services? (Select TWO.)
> a) Command line interface
> b) On-premises
> c) Software Development Kits
> d) Software-as-a-service
> e) Hybrid
>> [!success]- Answer
>> a) Command line interface
>> c) Software Development Kits

<sub>모듈 [[02-cloud-computing]]</sub>

> [!question] The AWS Cloud's multiple Regions are an example of:
> a) agility.
> b) global infrastructure.
> c) elasticity.
> d) pay-as-you-go pricing.
>> [!success]- Answer
>> b) global infrastructure.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO.)
> a) AWS Storage Gateway
> b) Amazon S3
> c) Amazon Elastic File System (EFS)
> d) Amazon Glacier
> e) Amazon CloudFront
>> [!success]- Answer
>> b) Amazon S3
>> e) Amazon CloudFront

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]] · [[amazon-efs]] · [[aws-storage-gateway]] · [[amazon-cloudfront]]  |  모듈 [[05-networking]], [[06-storage]]</sub>

> [!question] Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?
> a) Cloud-native
> b) Partner network
> c) Hybrid architecture
> d) Infrastructure as a service
>> [!success]- Answer
>> c) Hybrid architecture

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/enterprise/hybrid/)</sub>

> [!question] What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?
> a) They require the customer to monitor and replace failing instances.
> b) They have better performance than customer-managed services.
> c) They simplify patching and updating underlying OSs.
> d) They do not require the customer to optimize instance type or size selections.
>> [!success]- Answer
>> c) They simplify patching and updating underlying OSs.

<sub>관련: [[amazon-rds]] · [[amazon-elasticache]]  |  모듈 [[07-databases]]</sub>

> [!question] Which service provides a virtually unlimited amount of online highly durable object storage?
> a) Amazon Redshift
> b) Amazon Elastic File System (Amazon EFS)
> c) Amazon Elastic Container Service (Amazon ECS)
> d) Amazon S3
>> [!success]- Answer
>> d) Amazon S3

<sub>관련: [[amazon-ecs]] · [[amazon-s3]] · [[amazon-efs]] · [[amazon-redshift]]  |  모듈 [[03-compute-services]], [[06-storage]], [[08-ai-ml-analytics]]  |  [참고](https://aws.amazon.com/what-is-cloud-object-storage/)</sub>

> [!question] Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?
> a) IAM group
> b) IAM user
> c) IAM role
> d) IAM policy
>> [!success]- Answer
>> b) IAM user

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Which of the following security-related services does AWS offer? (Select TWO.)
> a) Multi-factor authentication physical tokens
> b) AWS Trusted Advisor security checks
> c) Data encryption
> d) Automated penetration testing
> e) Amazon S3 copyrighted content detection
>> [!success]- Answer
>> b) AWS Trusted Advisor security checks
>> c) Data encryption

<sub>관련: [[amazon-s3]] · [[aws-trusted-advisor]]  |  모듈 [[06-storage]], [[10-monitoring-governance]]</sub>

> [!question] Which AWS managed service is used to host databases?
> a) AWS Batch
> b) AWS Artifact
> c) AWS Data Pipeline
> d) Amazon RDS
>> [!success]- Answer
>> d) Amazon RDS

<sub>관련: [[aws-batch]] · [[amazon-rds]] · [[aws-artifact]]  |  모듈 [[03-compute-services]], [[07-databases]], [[10-monitoring-governance]]</sub>

> [!question] Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?
> a) Amazon S3
> b) Amazon Glacier
> c) Amazon EBS
> d) Amazon EFS
>> [!success]- Answer
>> d) Amazon EFS

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]] · [[amazon-ebs]] · [[amazon-efs]]  |  모듈 [[06-storage]]</sub>

> [!question] When architecting cloud applications, which of the following are a key design principle?
> a) Use the largest instance possible
> b) Provision capacity for peak load
> c) Use the Scrum development process
> d) Implement elasticity
>> [!success]- Answer
>> d) Implement elasticity

<sub>모듈 [[13-well-architected]]</sub>

> [!question] Which AWS service should be used for long-term, low-cost storage of data backups?
> a) Amazon RDS
> b) Amazon Glacier
> c) AWS Snowball
> d) AWS EBS
>> [!success]- Answer
>> b) Amazon Glacier

<sub>관련: [[amazon-s3-glacier]] · [[amazon-ebs]] · [[aws-snow-family]] · [[amazon-rds]]  |  모듈 [[06-storage]], [[07-databases]], [[12-migration]]</sub>

> [!question] Which task is AWS responsible for in the shared responsibility model for security and compliance?
> a) Granting access to individuals and services
> b) Encrypting data in transit
> c) Updating Amazon EC2 host firmware
> d) Updating operating systems
>> [!success]- Answer
>> b) Encrypting data in transit

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?
> a) AWS Marketplace
> b) Amazon Lumberyard
> c) AWS Artifact
> d) Amazon CloudSearch
>> [!success]- Answer
>> a) AWS Marketplace

<sub>관련: [[aws-artifact]] · [[aws-marketplace]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which of the following is a benefit of using the AWS Cloud?
> a) Permissive security removes the administrative burden.
> b) Ability to focus on revenue-generating activities.
> c) Control over cloud network hardware.
> d) Choice of specific cloud hardware vendors.
>> [!success]- Answer
>> b) Ability to focus on revenue-generating activities.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?
> a) Dedicated Hosts
> b) Reserved Instances
> c) On-Demand Instances
> d) No Upfront Reserved Instances
>> [!success]- Answer
>> a) Dedicated Hosts

<sub>모듈 [[11-billing-support]], [[02-cloud-computing]]</sub>

> [!question] Which AWS service provides the ability to manage infrastructure as code?
> a) AWS CodePipeline
> b) AWS CodeDeploy
> c) AWS Direct Connect
> d) AWS CloudFormation
>> [!success]- Answer
>> d) AWS CloudFormation

<sub>관련: [[aws-direct-connect]] · [[aws-cloudformation]] · [[aws-codedeploy]] · [[aws-codepipeline]]  |  모듈 [[04-global-infrastructure]], [[05-networking]], [[13-well-architected]]</sub>

> [!question] If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?
> a) AWS Config
> b) AWS Trusted Advisor
> c) Amazon CloudWatch
> d) Amazon Inspector
>> [!success]- Answer
>> a) AWS Config

<sub>관련: [[amazon-inspector]] · [[amazon-cloudwatch]] · [[aws-config]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] What is Amazon CloudWatch?
> a) A code repository with customizable build and team commit features.
> b) A metrics repository with customizable notification thresholds and channels.
> c) A security configuration repository with threat analytics.
> d) A rule repository of a web application firewall with automated vulnerability prevention features.
>> [!success]- Answer
>> b) A metrics repository with customizable notification thresholds and channels.

<sub>관련: [[aws-waf]] · [[amazon-cloudwatch]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?
> a) AWS Server Migration Service
> b) AWS Organizations
> c) AWS Budgets
> d) AWS Trusted Advisor
>> [!success]- Answer
>> b) AWS Organizations

<sub>관련: [[aws-organizations]] · [[aws-trusted-advisor]] · [[aws-budgets]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO.)
> a) AWS Elastic Beanstalk
> b) AWS OpsWorks
> c) AWS CodeDeploy
> d) AWS Batch
> e) AWS X-Ray
>> [!success]- Answer
>> b) AWS OpsWorks
>> c) AWS CodeDeploy

<sub>관련: [[aws-elastic-beanstalk]] · [[aws-batch]] · [[aws-codedeploy]] · [[aws-x-ray]] · [[aws-opsworks]]  |  모듈 [[03-compute-services]], [[13-well-architected]]</sub>

> [!question] Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?
> a) On-Demand Instances
> b) Reserved Instances
> c) Spot Instances
> d) Convertible Reserved Instances
>> [!success]- Answer
>> c) Spot Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO.)
> a) Use manual monitoring.
> b) Use fixed servers.
> c) Implement loose coupling.
> d) Rely on individual components.
> e) Design for scalability.
>> [!success]- Answer
>> c) Implement loose coupling.
>> e) Design for scalability.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?
> a) Enterprise
> b) Business
> c) Developer
> d) Basic
>> [!success]- Answer
>> b) Business

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/plans/)</sub>

> [!question] Where can AWS compliance and certification reports be downloaded?
> a) AWS Artifact
> b) AWS Concierge
> c) AWS Certificate Manager
> d) AWS Trusted Advisor
>> [!success]- Answer
>> a) AWS Artifact

<sub>관련: [[aws-certificate-manager]] · [[aws-artifact]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?
> a) AWS Service Health Dashboard
> b) AWS X-Ray
> c) AWS Personal Health Dashboard
> d) Amazon CloudWatch
>> [!success]- Answer
>> c) AWS Personal Health Dashboard

<sub>관련: [[amazon-cloudwatch]] · [[aws-health-dashboard]] · [[aws-x-ray]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]], [[13-well-architected]]</sub>

> [!question] Which of the following is an advantage of consolidated billing on AWS?
> a) Volume pricing qualification
> b) Shared access permissions
> c) Multiple bills per account
> d) Eliminates the need for tagging
>> [!success]- Answer
>> a) Volume pricing qualification

<sub>모듈 [[11-billing-support]]</sub>

> [!question] Which of the following steps should be taken by a customer when conducting penetration testing on AWS?
> a) Conduct penetration testing using Amazon Inspector, and then notify AWS support.
> b) Request and wait for approval from the customer's internal security team, and then conduct testing.
> c) Notify AWS support, and then conduct testing immediately.
> d) Request and wait for approval from AWS support, and then conduct testing.
>> [!success]- Answer
>> d) Request and wait for approval from AWS support, and then conduct testing.

<sub>관련: [[amazon-inspector]]  |  모듈 [[09-security]]</sub>

> [!question] Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?
> a) Amazon Elastic Block Store (Amazon EBS)
> b) Amazon Machine Image
> c) Amazon EC2 Systems Manager
> d) Amazon AppStream 2.0
>> [!success]- Answer
>> b) Amazon Machine Image

<sub>관련: [[amazon-ec2]] · [[amazon-ebs]] · [[aws-systems-manager]] · [[amazon-appstream-2-0]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[09-security]], [[13-well-architected]]</sub>

> [!question] How would an AWS customer easily apply common access controls to a large set of users?
> a) Apply an IAM policy to an IAM group.
> b) Apply an IAM policy to an IAM role.
> c) Apply the same IAM policy to all IAM users with access to the same workload.
> d) Apply an IAM policy to an Amazon Cognito user pool.
>> [!success]- Answer
>> a) Apply an IAM policy to an IAM group.

<sub>관련: [[aws-iam]] · [[amazon-cognito]]  |  모듈 [[09-security]]</sub>

> [!question] Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?
> a) AWS Cost Explorer
> b) AWS Budgets
> c) AWS Cost and Usage report
> d) AWS Billing dashboard
>> [!success]- Answer
>> c) AWS Cost and Usage report

<sub>관련: [[aws-cost-explorer]] · [[aws-budgets]] · [[aws-cost-and-usage-report]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO.)
> a) AWS Concierge
> b) AWS CloudFormation
> c) Amazon Simple Storage Service (Amazon S3)
> d) Amazon EC2 Auto Scaling
> e) AWS Management Console
>> [!success]- Answer
>> b) AWS CloudFormation
>> e) AWS Management Console

<sub>관련: [[amazon-ec2-auto-scaling]] · [[amazon-ec2]] · [[amazon-s3]] · [[amazon-rds]] · [[aws-cloudformation]]  |  모듈 [[02-cloud-computing]], [[04-global-infrastructure]], [[06-storage]], [[07-databases]]</sub>

> [!question] Which of the following is an AWS Cloud architecture design principle?
> a) Implement single points of failure.
> b) Implement loose coupling.
> c) Implement monolithic design.
> d) Implement vertical scaling.
>> [!success]- Answer
>> b) Implement loose coupling.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] Which of the following security measures protect access to an AWS account? (Select TWO.)
> a) Enable AWS CloudTrail.
> b) Grant least privilege access to IAM users.
> c) Create one IAM user and share with many developers and users.
> d) Enable Amazon CloudFront.
> e) Activate multi-factor authentication (MFA) for privileged users.
>> [!success]- Answer
>> b) Grant least privilege access to IAM users.
>> e) Activate multi-factor authentication (MFA) for privileged users.

<sub>관련: [[amazon-cloudfront]] · [[aws-iam]] · [[aws-cloudtrail]]  |  모듈 [[05-networking]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?
> a) Amazon Glacier
> b) AWS Snowball
> c) AWS Storage Gateway
> d) Amazon Elastic Block Storage (Amazon EBS)
>> [!success]- Answer
>> c) AWS Storage Gateway

<sub>관련: [[amazon-s3-glacier]] · [[amazon-ebs]] · [[aws-storage-gateway]] · [[aws-snow-family]]  |  모듈 [[06-storage]], [[12-migration]]</sub>

> [!question] Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?
> a) Amazon RDS
> b) Amazon EC2
> c) Amazon ElastiCache
> d) AWS Fargate
>> [!success]- Answer
>> b) Amazon EC2

<sub>관련: [[amazon-ec2]] · [[aws-fargate]] · [[amazon-rds]] · [[amazon-elasticache]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[07-databases]]</sub>

> [!question] Which of the following is an important architectural design principle when designing cloud applications?
> a) Use multiple Availability Zones.
> b) Use tightly coupled components.
> c) Use open source software.
> d) Provision extra capacity.
>> [!success]- Answer
>> a) Use multiple Availability Zones.

<sub>모듈 [[13-well-architected]], [[04-global-infrastructure]]</sub>

> [!question] Which AWS support plan includes a dedicated Technical Account Manager?
> a) Developer
> b) Enterprise
> c) Business
> d) Basic
>> [!success]- Answer
>> b) Enterprise

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?
> a) AWS manages the data stored in Amazon RDS tables.
> b) AWS manages the maintenance of the operating system.
> c) AWS automatically scales up instance types on demand.
> d) AWS manages the database type.
>> [!success]- Answer
>> b) AWS manages the maintenance of the operating system.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] Which service is best for storing common database query results, which helps to alleviate database access load?
> a) Amazon Machine Learning
> b) Amazon SQS
> c) Amazon ElastiCache
> d) Amazon EC2 Instance Store
>> [!success]- Answer
>> c) Amazon ElastiCache

<sub>관련: [[amazon-ec2]] · [[amazon-elasticache]] · [[amazon-sqs]]  |  모듈 [[02-cloud-computing]], [[07-databases]]</sub>

> [!question] Which of the following is a component of the shared responsibility model managed entirely by AWS?
> a) Patching operating system software
> b) Encrypting data
> c) Enforcing multi-factor authentication
> d) Auditing physical data center assets
>> [!success]- Answer
>> d) Auditing physical data center assets

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO.)
> a) AWS Trusted Advisor
> b) AWS Online Tech Talks
> c) AWS Blog
> d) AWS Forums
> e) AWS Classroom Training
>> [!success]- Answer
>> b) AWS Online Tech Talks
>> e) AWS Classroom Training

<sub>관련: [[aws-trusted-advisor]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO.)
> a) Amazon CloudFront distributions
> b) Amazon Route 53
> c) Security Groups
> d) Subnets
> e) Elastic Load Balancing
>> [!success]- Answer
>> c) Security Groups
>> d) Subnets

<sub>관련: [[elastic-load-balancing]] · [[amazon-vpc]] · [[amazon-route-53]] · [[amazon-cloudfront]]  |  모듈 [[02-cloud-computing]], [[05-networking]]</sub>

> [!question] If each department within a company has its own AWS account, what is one way to enable consolidated billing?
> a) Use AWS Budgets on each account to pay only to budget.
> b) Contact AWS Support for a monthly bill.
> c) Create an AWS Organization from the payer account and invite the other accounts to join.
> d) Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.
>> [!success]- Answer
>> c) Create an AWS Organization from the payer account and invite the other accounts to join.

<sub>관련: [[amazon-s3]] · [[amazon-redshift]] · [[aws-budgets]]  |  모듈 [[06-storage]], [[08-ai-ml-analytics]], [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)</sub>
