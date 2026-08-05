---
title: "모의고사 04회"
tags: [clf-c02, 문제은행, quiz]
exam: 4
문항수: 50
lang: en
---

# 모의고사 04회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/4)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)
> a) Amazon Route 53.
> b) AWS ACM.
> c) AWS Directory Service.
> d) AWS Identity & Access Management.
> e) AWS Data Pipeline.
>> [!success]- Answer
>> a) Amazon Route 53.
>> b) AWS ACM.

<sub>관련: [[amazon-route-53]] · [[aws-directory-service]]  |  모듈 [[05-networking]]</sub>

> [!question] Which of the following AWS services scale automatically without your intervention? (Choose TWO)
> a) Amazon EC2.
> b) Amazon S3.
> c) AWS Lambda.
> d) Amazon EMR.
> e) Amazon EBS.
>> [!success]- Answer
>> b) Amazon S3.
>> c) AWS Lambda.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-s3]] · [[amazon-ebs]] · [[amazon-emr]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[06-storage]], [[08-ai-ml-analytics]]</sub>

> [!question] A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)
> a) Application management.
> b) Capacity management.
> c) Access control.
> d) Operating system maintenance.
> e) Data management.
>> [!success]- Answer
>> b) Capacity management.
>> d) Operating system maintenance.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]]</sub>

> [!question] How do ELBs improve the reliability of your application?
> a) By distributing traffic across multiple S3 buckets.
> b) By replicating data to multiple availability zones.
> c) By creating database Read Replicas.
> d) By ensuring that only healthy targets receive traffic.
>> [!success]- Answer
>> d) By ensuring that only healthy targets receive traffic.

<sub>관련: [[elastic-load-balancing]] · [[amazon-s3]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?
> a) On-demand instances.
> b) Spot instances.
> c) Dedicated instances.
> d) Reserved instances.
>> [!success]- Answer
>> c) Dedicated instances.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?
> a) Snowball.
> b) S3 Transfer Acceleration.
> c) Snowmobile.
> d) Amazon VPC.
>> [!success]- Answer
>> c) Snowmobile.

<sub>관련: [[amazon-s3]] · [[aws-snow-family]] · [[amazon-vpc]]  |  모듈 [[05-networking]], [[06-storage]], [[12-migration]]</sub>

> [!question] A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?
> a) Amazon S3 Glacier.
> b) Amazon EFS.
> c) Amazon S3 Standard.
> d) Amazon EBS.
>> [!success]- Answer
>> a) Amazon S3 Glacier.

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]] · [[amazon-ebs]] · [[amazon-efs]]  |  모듈 [[06-storage]]</sub>

> [!question] Which AWS Service is used to manage user permissions?
> a) Security Groups.
> b) Amazon ECS.
> c) AWS IAM.
> d) AWS Support.
>> [!success]- Answer
>> c) AWS IAM.

<sub>관련: [[amazon-ecs]] · [[aws-iam]]  |  모듈 [[03-compute-services]], [[09-security]]</sub>

> [!question] Which support plan includes AWS Support Concierge Service?
> a) Premium Support.
> b) Business Support.
> c) Enterprise Support.
> d) Standard Support.
>> [!success]- Answer
>> c) Enterprise Support.

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?
> a) AWS Config.
> b) Amazon CloudWatch.
> c) AWS CloudTrail.
> d) AWS CloudFormation.
>> [!success]- Answer
>> c) AWS CloudTrail.

<sub>관련: [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-config]] · [[aws-cloudformation]]  |  모듈 [[04-global-infrastructure]], [[10-monitoring-governance]]</sub>

> [!question] What are the benefits of using an AWS-managed service? (Choose TWO)
> a) Provides complete control over the virtual infrastructure.
> b) Allows customers to deliver new solutions faster.
> c) Lowers operational complexity.
> d) Eliminates the need to encrypt data.
> e) Allows developers to control all patching related activities.
>> [!success]- Answer
>> b) Allows customers to deliver new solutions faster.
>> c) Lowers operational complexity.

<sub>모듈 [[03-compute-services]]</sub>

> [!question] Which of the following are use cases for Amazon S3? (Choose TWO)
> a) Hosting static websites.
> b) Hosting websites that require sustained high CPU utilization.
> c) Cost-effective database and log storage.
> d) A media store for the CloudFront service.
> e) Processing data streams at any scale.
>> [!success]- Answer
>> a) Hosting static websites.
>> d) A media store for the CloudFront service.

<sub>관련: [[amazon-s3]] · [[amazon-cloudfront]]  |  모듈 [[05-networking]], [[06-storage]]</sub>

> [!question] What is the AWS’ recommendation regarding access keys?
> a) Delete all access keys and use passwords instead.
> b) Only share them with trusted people.
> c) Rotate them regularly.
> d) Save them within your application code.
>> [!success]- Answer
>> c) Rotate them regularly.

<sub>모듈 [[09-security]]</sub>

> [!question] What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?
> a) Key Pair.
> b) Access Keys.
> c) SDK.
> d) MFA.
>> [!success]- Answer
>> d) MFA.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] What is the benefit of using an API to access AWS Services?
> a) It improves the performance of AWS resources.
> b) It reduces the time needed to provision AWS resources.
> c) It reduces the number of developers necessary.
> d) It allows for programmatic management of AWS resources.
>> [!success]- Answer
>> d) It allows for programmatic management of AWS resources.

<sub>모듈 [[02-cloud-computing]]</sub>

> [!question] A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?
> a) AWS Storage Gateway.
> b) Amazon S3.
> c) Amazon EBS.
> d) Amazon Glacier.
>> [!success]- Answer
>> c) Amazon EBS.

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]] · [[amazon-ebs]] · [[aws-storage-gateway]]  |  모듈 [[06-storage]]</sub>

> [!question] How can AWS customers track and avoid over-spending on underutilized reserved instances?
> a) Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.
> b) Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.
> c) Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.
> d) Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill.
>> [!success]- Answer
>> c) Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.

<sub>관련: [[amazon-ec2]] · [[amazon-neptune]] · [[aws-cloudtrail]] · [[aws-budgets]] · [[aws-marketplace]]  |  모듈 [[02-cloud-computing]], [[07-databases]], [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] What is the AWS service that provides five times the performance of a standard MySQL database?
> a) Amazon Aurora.
> b) Amazon Redshift.
> c) Amazon DynamoDB.
> d) Amazon Neptune.
>> [!success]- Answer
>> a) Amazon Aurora.

<sub>관련: [[amazon-aurora]] · [[amazon-dynamodb]] · [[amazon-redshift]] · [[amazon-neptune]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] What does AWS Service Catalog provide?
> a) It enables customers to quickly find descriptions and use cases for AWS services.
> b) It enables customers to explore the different catalogs of AWS services.
> c) It simplifies organizing and governing commonly deployed IT services.
> d) It allows developers to deploy infrastructure on AWS using familiar programming languages.
>> [!success]- Answer
>> c) It simplifies organizing and governing commonly deployed IT services.

<sub>관련: [[aws-service-catalog]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)
> a) Protecting credentials.
> b) Logging access activity.
> c) Patching the database software.
> d) Operating system maintenance.
> e) Creating access policies.
>> [!success]- Answer
>> c) Patching the database software.
>> d) Operating system maintenance.

<sub>관련: [[amazon-dynamodb]]  |  모듈 [[07-databases]]</sub>

> [!question] Which of the following AWS Services helps with planning application migration to the AWS Cloud?
> a) AWS Snowball Migration Service.
> b) AWS Application Discovery Service.
> c) AWS DMS.
> d) AWS Migration Hub.
>> [!success]- Answer
>> b) AWS Application Discovery Service.

<sub>관련: [[aws-snow-family]] · [[aws-migration-hub]]  |  모듈 [[12-migration]]</sub>

> [!question] A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?
> a) Amazon Machine Image.
> b) AWS Cost Explorer.
> c) AWS Cost & Usage Report.
> d) Amazon CloudWatch.
>> [!success]- Answer
>> c) AWS Cost & Usage Report.

<sub>관련: [[amazon-cloudwatch]] · [[aws-cost-explorer]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which statement best describes the concept of an AWS region?
> a) An AWS Region is a geographical location with a collection of Edge locations.
> b) An AWS Region is a virtual network dedicated only to a single AWS customer.
> c) An AWS Region is a geographical location with a collection of Availability Zones.
> d) An AWS Region represents the country where the AWS infrastructure exist.
>> [!success]- Answer
>> c) An AWS Region is a geographical location with a collection of Availability Zones.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?
> a) SNS logs.
> b) SQS logs.
> c) CloudWatch Logs.
> d) CloudTrail logs.
>> [!success]- Answer
>> d) CloudTrail logs.

<sub>관련: [[amazon-s3]] · [[amazon-sqs]] · [[amazon-sns]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)
> a) Availability Zones.
> b) Data sovereignty.
> c) The number of reads and writes per second.
> d) The nature of the queries.
> e) Software bugs.
>> [!success]- Answer
>> c) The number of reads and writes per second.
>> d) The nature of the queries.

<sub>모듈 [[07-databases]]</sub>

> [!question] What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)
> a) Quickly identify resources that belong to a specific project.
> b) Quickly identify software solutions on AWS.
> c) Track API calls in your AWS account.
> d) Quickly identify deleted resources and their metadata.
> e) Track AWS spending across multiple resources.
>> [!success]- Answer
>> a) Quickly identify resources that belong to a specific project.
>> e) Track AWS spending across multiple resources.

<sub>모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] What are AWS shared controls?
> a) Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.
> b) Controls that a customer inherits from AWS.
> c) Controls that apply to both the infrastructure layer and customer layers.
> d) Controls that the customer and AWS collaborate together upon to secure the infrastructure.
>> [!success]- Answer
>> d) Controls that the customer and AWS collaborate together upon to secure the infrastructure.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which design principles relate to performance efficiency in AWS? (Choose TWO)
> a) Build multi-region architectures to better serve global customers.
> b) Apply security at all layers.
> c) Implement strong Identity and Access controls.
> d) Use serverless architectures.
> e) Enable audit logging.
>> [!success]- Answer
>> a) Build multi-region architectures to better serve global customers.
>> d) Use serverless architectures.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)
> a) Protecting sensitive data.
> b) Patching of the underlying infrastructure.
> c) Setup and operation of managed databases.
> d) Maintaining consistent hardware components.
> e) Installing and configuring third-party software.
>> [!success]- Answer
>> a) Protecting sensitive data.
>> e) Installing and configuring third-party software.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)
> a) Free commercial software licenses.
> b) Free technical support.
> c) Elastic resources.
> d) On-site visits for auditing.
> e) Cost Savings.
>> [!success]- Answer
>> c) Elastic resources.
>> e) Cost Savings.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)
> a) Amazon Inspector.
> b) AWS Virtual Private Gateway.
> c) AWS Batch.
> d) Amazon ECS.
> e) AWS Config.
>> [!success]- Answer
>> a) Amazon Inspector.
>> e) AWS Config.

<sub>관련: [[amazon-ecs]] · [[aws-batch]] · [[amazon-inspector]] · [[aws-config]]  |  모듈 [[03-compute-services]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?
> a) Amazon EC2 is considered a Serverless Web Service.
> b) Amazon EC2 eliminates the need to invest in hardware upfront.
> c) Amazon EC2 can launch as many or as few virtual servers as needed.
> d) Amazon EC2 offers scalable computing.
>> [!success]- Answer
>> a) Amazon EC2 is considered a Serverless Web Service.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] What is the AWS Compute service that executes code only when triggered by events?
> a) AWS Lambda.
> b) Amazon CloudWatch.
> c) AWS Transit Gateway.
> d) Amazon EC2.
>> [!success]- Answer
>> a) AWS Lambda.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[aws-transit-gateway]] · [[amazon-cloudwatch]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?
> a) Amazon EBS Snapshots.
> b) Amazon VPC.
> c) AWS Managed Servers.
> d) Amazon EC2 Instances.
>> [!success]- Answer
>> d) Amazon EC2 Instances.

<sub>관련: [[amazon-ec2]] · [[amazon-ebs]] · [[amazon-vpc]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[06-storage]]</sub>

> [!question] What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?
> a) AWS Secrets Manager.
> b) AWS WAF.
> c) AWS CAF.
> d) Amazon EFS.
>> [!success]- Answer
>> c) AWS CAF.

<sub>관련: [[amazon-efs]] · [[aws-organizations]] · [[aws-secrets-manager]] · [[aws-waf]]  |  모듈 [[06-storage]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?
> a) AWS Cost Explorer.
> b) AWS TCO Calculator.
> c) AWS Budgets.
> d) AWS Pricing Calculator.
>> [!success]- Answer
>> b) AWS TCO Calculator.

<sub>관련: [[aws-cost-explorer]] · [[aws-budgets]] · [[aws-pricing-calculator]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?
> a) Using AWS Trusted Advisor to find underutilized resources.
> b) Using AWS CloudTrail to record user activities.
> c) Using AWS CloudFormation to manage infrastructure as code.
> d) Deploying an application in multiple Availability Zones.
>> [!success]- Answer
>> c) Using AWS CloudFormation to manage infrastructure as code.

<sub>관련: [[aws-cloudtrail]] · [[aws-trusted-advisor]] · [[aws-cloudformation]] · [[aws-well-architected-tool]]  |  모듈 [[04-global-infrastructure]], [[10-monitoring-governance]], [[13-well-architected]]</sub>

> [!question] Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)
> a) AWS allows them to pay later when their business succeed.
> b) AWS can build complete data centers faster than any other Cloud provider.
> c) Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.
> d) AWS removes the need to invest in operational expenditure.
> e) Using AWS allows companies to replace large capital expenditure with low variable costs.
>> [!success]- Answer
>> c) Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.
>> e) Using AWS allows companies to replace large capital expenditure with low variable costs.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] What are the benefits of using DynamoDB? (Choose TWO)
> a) Automatically scales to meet required throughput capacity.
> b) Provides resizable instances to match the current demand.
> c) Supports both relational and non-relational data models.
> d) Offers extremely low (single-digit millisecond) latency.
> e) Supports the most popular NoSQL database engines such as CouchDB and MongoDB.
>> [!success]- Answer
>> a) Automatically scales to meet required throughput capacity.
>> d) Offers extremely low (single-digit millisecond) latency.

<sub>관련: [[amazon-dynamodb]]  |  모듈 [[07-databases]]</sub>

> [!question] Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)
> a) Versioning.
> b) Deduplication.
> c) Permissions.
> d) Decryption.
> e) Conversion.
>> [!success]- Answer
>> a) Versioning.
>> c) Permissions.

<sub>관련: [[amazon-s3]]  |  모듈 [[06-storage]]</sub>

> [!question] As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)
> a) AWS Partners.
> b) AWS Artifact.
> c) AWS Professional Services.
> d) Amazon Athena.
> e) Amazon PinPoint.
>> [!success]- Answer
>> a) AWS Partners.
>> c) AWS Professional Services.

<sub>관련: [[amazon-athena]] · [[aws-artifact]]  |  모듈 [[08-ai-ml-analytics]], [[10-monitoring-governance]]</sub>

> [!question] AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?
> a) Deleting unused EBS volumes after terminating an EC2instance.
> b) Deleting unused AutoScaling launch configuration.
> c) Deleting unused Elastic Load Balancers.
> d) Releasing unused Elastic IPs after terminating an EC2instance.
>> [!success]- Answer
>> b) Deleting unused AutoScaling launch configuration.

<sub>관련: [[amazon-ec2-auto-scaling]] · [[elastic-load-balancing]] · [[amazon-ebs]] · [[aws-organizations]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[10-monitoring-governance]]</sub>

> [!question] What is the AWS tool that can help a company visualize their AWS spending in the last few months?
> a) AWS Cost Explorer.
> b) AWS Pricing Calculator.
> c) AWS Budgets.
> d) AWS Consolidated Billing.
>> [!success]- Answer
>> a) AWS Cost Explorer.

<sub>관련: [[aws-cost-explorer]] · [[aws-budgets]] · [[aws-pricing-calculator]]  |  모듈 [[11-billing-support]]</sub>

> [!question] When running a workload in AWS, the customer is NOT responsible for: (Select TWO)
> a) Running penetration tests.
> b) Reserving capacity.
> c) Data center operations.
> d) Auditing and regulatory compliance.
> e) Infrastructure security.
>> [!success]- Answer
>> c) Data center operations.
>> e) Infrastructure security.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?
> a) Amazon Simple Email Service (Amazon SES).
> b) Amazon Simple Storage Service (Amazon S3).
> c) Amazon Simple Notification Service (Amazon SNS).
> d) Amazon Simple Queue Service (Amazon SQS).
>> [!success]- Answer
>> c) Amazon Simple Notification Service (Amazon SNS).

<sub>관련: [[amazon-s3]] · [[amazon-sqs]] · [[amazon-sns]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] Which of the following allows you to create new RDS instances? (Choose TWO)
> a) AWS CodeDeploy.
> b) AWS Quick Starts.
> c) AWS CloudFormation.
> d) AWS DMS.
> e) AWS Management Console.
>> [!success]- Answer
>> c) AWS CloudFormation.
>> e) AWS Management Console.

<sub>관련: [[amazon-rds]] · [[aws-cloudformation]] · [[aws-codedeploy]]  |  모듈 [[04-global-infrastructure]], [[07-databases]]</sub>

> [!question] One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?
> a) Low monthly instance maintenance costs.
> b) Low-cost instance tagging.
> c) Per-second instance billing.
> d) Low instance start-up fees.
>> [!success]- Answer
>> c) Per-second instance billing.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS Group assists customers in achieving their desired business outcomes?
> a) AWS Security Team.
> b) AWS Professional Services.
> c) AWS Trusted Advisor.
> d) AWS Concierge Support Team.
>> [!success]- Answer
>> b) AWS Professional Services.

<sub>관련: [[aws-trusted-advisor]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] Which AWS service or feature is used to manage the keys used to encrypt customer data?
> a) AWS KMS.
> b) AWS Service Control Policies (SCPs).
> c) Multi-Factor Authentication (MFA).
> d) Amazon Macie.
>> [!success]- Answer
>> a) AWS KMS.

<sub>관련: [[aws-organizations]] · [[aws-kms]] · [[amazon-macie]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which AWS Service allows customers to download AWS SOC & PCI reports?
> a) AWS Well-Architected Tool.
> b) AWS Artifact.
> c) AWS Glue.
> d) Amazon Chime.
>> [!success]- Answer
>> b) AWS Artifact.

<sub>관련: [[aws-glue]] · [[aws-artifact]] · [[aws-well-architected-tool]]  |  모듈 [[08-ai-ml-analytics]], [[10-monitoring-governance]], [[13-well-architected]]</sub>
