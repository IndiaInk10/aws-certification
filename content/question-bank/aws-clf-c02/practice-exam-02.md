---
title: "모의고사 02회"
tags: [clf-c02, 문제은행, quiz]
exam: 2
문항수: 50
lang: en
---

# 모의고사 02회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/2)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?
> a) AWS Organizations.
> b) AWS Trusted Advisor.
> c) IAM User Groups.
> d) AWS Config.
>> [!success]- Answer
>> a) AWS Organizations.

<sub>관련: [[aws-iam]] · [[aws-organizations]] · [[aws-config]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which service provides object-level storage in AWS?
> a) Amazon EBS.
> b) Amazon Instance Store.
> c) Amazon EFS.
> d) Amazon S3.
>> [!success]- Answer
>> d) Amazon S3.

<sub>관련: [[amazon-s3]] · [[amazon-ebs]] · [[amazon-efs]]  |  모듈 [[06-storage]]</sub>

> [!question] A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?
> a) AWS Elastic Load Balancer.
> b) AWS Budgets.
> c) AWS Auto Scaling.
> d) AWS Cost Explorer.
>> [!success]- Answer
>> c) AWS Auto Scaling.

<sub>관련: [[elastic-load-balancing]] · [[amazon-ec2]] · [[aws-cost-explorer]] · [[aws-budgets]]  |  모듈 [[02-cloud-computing]], [[11-billing-support]]</sub>

> [!question] Which S3 storage class is best for data with unpredictable access patterns?
> a) Amazon S3 Intelligent-Tiering.
> b) Amazon S3 Glacier Flexible Retrieval.
> c) Amazon S3 Standard.
> d) Amazon S3 Standard-Infrequent Access.
>> [!success]- Answer
>> a) Amazon S3 Intelligent-Tiering.

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]]  |  모듈 [[06-storage]]</sub>

> [!question] What is the AWS database service that allows you to upload data structured in key-value format?
> a) Amazon DynamoDB.
> b) Amazon Aurora.
> c) Amazon Redshift.
> d) Amazon RDS.
>> [!success]- Answer
>> a) Amazon DynamoDB.

<sub>관련: [[amazon-rds]] · [[amazon-aurora]] · [[amazon-dynamodb]] · [[amazon-redshift]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] Which of the following is NOT correct regarding Amazon EC2 On-demand instances?
> a) You have to pay a start-up fee when launching a new instance for the first time.
> b) The on-demand instances follow the AWS pay-as-you-go pricing model.
> c) With on-demand instances, no longer-term commitments or upfront payments are needed.
> d) When using on-demand Linux instances, you are charged per second based on an hourly rate.
>> [!success]- Answer
>> a) You have to pay a start-up fee when launching a new instance for the first time.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)
> a) AWS Trusted Advisor.
> b) Amazon Inspector.
> c) Amazon SNS.
> d) Amazon CloudWatch.
> e) Concierge Support Team.
>> [!success]- Answer
>> a) AWS Trusted Advisor.
>> b) Amazon Inspector.

<sub>관련: [[amazon-sns]] · [[amazon-inspector]] · [[amazon-cloudwatch]] · [[aws-trusted-advisor]]  |  모듈 [[02-cloud-computing]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?
> a) Encrypted keys.
> b) Email verification.
> c) AWS KMS.
> d) AWS MFA.
>> [!success]- Answer
>> d) AWS MFA.

<sub>관련: [[aws-kms]]  |  모듈 [[09-security]]</sub>

> [!question] A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?
> a) AWS Knowledge Center.
> b) AWS Health Dashboard.
> c) Infrastructure Event Management.
> d) AWS Support Concierge Service.
>> [!success]- Answer
>> c) Infrastructure Event Management.

<sub>관련: [[aws-health-dashboard]] · [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?
> a) Amazon RDS.
> b) Amazon Redshift.
> c) Amazon DynamoDB.
> d) Amazon CloudWatch.
>> [!success]- Answer
>> a) Amazon RDS.

<sub>관련: [[amazon-rds]] · [[amazon-dynamodb]] · [[amazon-redshift]] · [[amazon-cloudwatch]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]], [[10-monitoring-governance]]</sub>

> [!question] Which of the below is a best-practice when designing solutions on AWS?
> a) Invest heavily in architecting your environment, as it is not easy to change your design later.
> b) Use AWS reservations to reduce costs when testing your production environment.
> c) Automate wherever possible to make architectural experimentation easier.
> d) Provision a large compute capacity to handle any spikes in load
>> [!success]- Answer
>> c) Automate wherever possible to make architectural experimentation easier.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?
> a) Penetration testing is not allowed in AWS.
> b) Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.
> c) Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.
> d) The AWS customers are only allowed to perform penetration testing on services managed by AWS.
>> [!success]- Answer
>> c) Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which service is used to ensure that messages between software components are not lost if one or more components fail?
> a) Amazon SQS.
> b) Amazon SES.
> c) AWS Direct Connect.
> d) Amazon Connect.
>> [!success]- Answer
>> a) Amazon SQS.

<sub>관련: [[aws-direct-connect]] · [[amazon-sqs]] · [[amazon-connect]]  |  모듈 [[02-cloud-computing]], [[05-networking]]</sub>

> [!question] The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)
> a) Multi-factor authentication.
> b) Availability Zones.
> c) Elastic Load Balancing.
> d) Penetration testing.
> e) Vertical Scaling.
>> [!success]- Answer
>> b) Availability Zones.
>> c) Elastic Load Balancing.

<sub>관련: [[elastic-load-balancing]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] What is the AWS service that provides a virtual network dedicated to your AWS account?
> a) AWS VPN.
> b) AWS Subnets.
> c) AWS Dedicated Hosts.
> d) Amazon VPC.
>> [!success]- Answer
>> d) Amazon VPC.

<sub>관련: [[amazon-vpc]]  |  모듈 [[05-networking]]</sub>

> [!question] According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)
> a) Managing environmental events of AWS data centers.
> b) Protecting the confidentiality of data in transit in Amazon S3.
> c) Controlling physical access to AWS Regions.
> d) Ensuring that the underlying EC2 host is configured properly.
> e) Patching applications installed on Amazon EC2.
>> [!success]- Answer
>> b) Protecting the confidentiality of data in transit in Amazon S3.
>> e) Patching applications installed on Amazon EC2.

<sub>관련: [[amazon-ec2]] · [[amazon-s3]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] Which of the following AWS services can be used as a compute resource? (Choose TWO)
> a) Amazon VPC.
> b) Amazon CloudWatch.
> c) Amazon S3.
> d) Amazon EC2.
> e) AWS Lambda.
>> [!success]- Answer
>> d) Amazon EC2.
>> e) AWS Lambda.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-s3]] · [[amazon-vpc]] · [[amazon-cloudwatch]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[05-networking]], [[06-storage]], [[10-monitoring-governance]]</sub>

> [!question] Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?
> a) Amazon EBS.
> b) Amazon SQS.
> c) Amazon S3.
> d) Amazon Instance store.
>> [!success]- Answer
>> c) Amazon S3.

<sub>관련: [[amazon-s3]] · [[amazon-ebs]] · [[amazon-sqs]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?
> a) Instance Password.
> b) Key pairs.
> c) Access Keys.
> d) MFA.
>> [!success]- Answer
>> c) Access Keys.

<sub>모듈 [[09-security]]</sub>

> [!question] What does Amazon ElastiCache provide?
> a) In-memory caching for read-heavy applications.
> b) An Ehcache compatible in-memory data store.
> c) An online software store that allows Customers to launch pre-configured software with just few clicks.
> d) A domain name system in the cloud.
>> [!success]- Answer
>> a) In-memory caching for read-heavy applications.

<sub>관련: [[amazon-elasticache]]  |  모듈 [[07-databases]]</sub>

> [!question] What is the AWS service that enables you to manage all of your AWS accounts from a single master account?
> a) AWS WAF.
> b) AWS Trusted Advisor.
> c) AWS Organizations.
> d) Amazon Config.
>> [!success]- Answer
>> c) AWS Organizations.

<sub>관련: [[aws-organizations]] · [[aws-waf]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?
> a) Dedicated Instances.
> b) Dedicated Hosts.
> c) On-demand Instances.
> d) Reserved Instances.
>> [!success]- Answer
>> b) Dedicated Hosts.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?
> a) Free support for all enterprise customers.
> b) Automatic data protection.
> c) Reduced Capital Expenditure (CapEx).
> d) AWS holds responsibility for managing customer applications.
>> [!success]- Answer
>> c) Reduced Capital Expenditure (CapEx).

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)
> a) Always use Global Services in your architecture rather than Regional Services.
> b) Always choose to pay as you go.
> c) Treat servers as fixed resources.
> d) Automate wherever possible.
> e) Remove single points of failure.
>> [!success]- Answer
>> d) Automate wherever possible.
>> e) Remove single points of failure.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?
> a) AWS Direct Connect.
> b) Amazon CloudFront.
> c) AWS Snowball.
> d) Amazon Route 53.
>> [!success]- Answer
>> a) AWS Direct Connect.

<sub>관련: [[aws-snow-family]] · [[amazon-route-53]] · [[amazon-cloudfront]] · [[aws-direct-connect]]  |  모듈 [[05-networking]], [[12-migration]]</sub>

> [!question] You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?
> a) Internet gateways.
> b) Virtual Private Cloud.
> c) Security Groups.
> d) Amazon CloudFront.
>> [!success]- Answer
>> b) Virtual Private Cloud.

<sub>관련: [[amazon-vpc]] · [[amazon-cloudfront]]  |  모듈 [[05-networking]]</sub>

> [!question] Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?
> a) Amazon Cognito.
> b) AWS IAM.
> c) Amazon Aurora.
> d) AWS WAF.
>> [!success]- Answer
>> d) AWS WAF.

<sub>관련: [[amazon-aurora]] · [[aws-iam]] · [[amazon-cognito]] · [[aws-waf]]  |  모듈 [[07-databases]], [[09-security]]</sub>

> [!question] An organization needs to analyze and process a large number of data sets. Which AWS service should they use?
> a) Amazon EMR.
> b) Amazon MQ.
> c) Amazon SNS.
> d) Amazon SQS.
>> [!success]- Answer
>> a) Amazon EMR.

<sub>관련: [[amazon-sqs]] · [[amazon-sns]] · [[amazon-emr]]  |  모듈 [[02-cloud-computing]], [[08-ai-ml-analytics]]</sub>

> [!question] Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)
> a) Monitoring network performance.
> b) Installing software on EC2 instances.
> c) Creating hypervisors.
> d) Configuring Access Control Lists (ACLs).
> e) Hardware maintenance.
>> [!success]- Answer
>> c) Creating hypervisors.
>> e) Hardware maintenance.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?
> a) Amazon Redshift.
> b) Amazon DynamoDB.
> c) Amazon EC2.
> d) Amazon RDS.
>> [!success]- Answer
>> c) Amazon EC2.

<sub>관련: [[amazon-ec2]] · [[amazon-rds]] · [[amazon-dynamodb]] · [[amazon-redshift]]  |  모듈 [[02-cloud-computing]], [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] What are the default security credentials that are required to access the AWS management console for an IAM user account?
> a) MFA.
> b) Security tokens.
> c) A user name and password.
> d) Access keys.
>> [!success]- Answer
>> c) A user name and password.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?
> a) IAM.
> b) An internet gateway.
> c) EBS Snapshot.
> d) AMI.
>> [!success]- Answer
>> d) AMI.

<sub>관련: [[amazon-ebs]]  |  모듈 [[06-storage]]</sub>

> [!question] What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)
> a) Reserved Compute capacity.
> b) Eliminating Single Points of Failure (SPOFs).
> c) Distributed infrastructure.
> d) Virtualized compute resources.
> e) Dedicated hosting.
>> [!success]- Answer
>> b) Eliminating Single Points of Failure (SPOFs).
>> c) Distributed infrastructure.

<sub>모듈 [[01-cloud-intro]], [[13-well-architected]]</sub>

> [!question] Which of the following aspects of security are managed by AWS? (Choose TWO)
> a) Encryption of EBS volumes.
> b) VPC security.
> c) Access permissions.
> d) Hardware patching.
> e) Securing global physical infrastructure.
>> [!success]- Answer
>> d) Hardware patching.
>> e) Securing global physical infrastructure.

<sub>관련: [[amazon-ebs]] · [[amazon-vpc]]  |  모듈 [[05-networking]], [[06-storage]]</sub>

> [!question] Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?
> a) The ability of a system to recover gracefully from failure.
> b) The efficient use of computing resources to meet requirements.
> c) The ability to monitor systems and improve supporting processes and procedures.
> d) The ability to manage datacenter operations more efficiently.
>> [!success]- Answer
>> c) The ability to monitor systems and improve supporting processes and procedures.

<sub>관련: [[aws-well-architected-tool]]  |  모듈 [[13-well-architected]]</sub>

> [!question] AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?
> a) Edge locations are used by CloudFront to cache the most recent responses.
> b) Edge locations are used by CloudFront to improve your end users’ experience when uploading files.
> c) Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.
> d) Edge locations are used by CloudFront to distribute content to global users with low latency.
>> [!success]- Answer
>> c) Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.

<sub>관련: [[amazon-cloudfront]]  |  모듈 [[05-networking]]</sub>

> [!question] What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)
> a) AWS CloudTrail.
> b) Amazon Comprehend.
> c) AWS Transit Gateway.
> d) AWS X-Ray.
> e) AWS Config.
>> [!success]- Answer
>> a) AWS CloudTrail.
>> e) AWS Config.

<sub>관련: [[aws-transit-gateway]] · [[amazon-comprehend]] · [[aws-cloudtrail]] · [[aws-config]] · [[aws-x-ray]]  |  모듈 [[05-networking]], [[08-ai-ml-analytics]], [[10-monitoring-governance]], [[13-well-architected]]</sub>

> [!question] Which of the following services allows you to run containerized applications on a cluster of EC2 instances?
> a) Amazon ECS.
> b) AWS Data Pipeline.
> c) AWS Cloud9.
> d) AWS Personal Health Dashboard.
>> [!success]- Answer
>> a) Amazon ECS.

<sub>관련: [[amazon-ec2]] · [[amazon-ecs]] · [[aws-health-dashboard]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[11-billing-support]]</sub>

> [!question] Which of the following services will help businesses ensure compliance in AWS?
> a) CloudFront.
> b) CloudEndure Migration.
> c) CloudWatch.
> d) CloudTrail.
>> [!success]- Answer
>> d) CloudTrail.

<sub>관련: [[amazon-cloudfront]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]]  |  모듈 [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following procedures will help reduce your Amazon S3 costs?
> a) Use the Import/Export feature to move old files automatically to Amazon Glacier.
> b) Use the right combination of storage classes based on different use cases.
> c) Pick the right Availability Zone for your S3 bucket.
> d) Move all the data stored in S3 standard to EBS.
>> [!success]- Answer
>> b) Use the right combination of storage classes based on different use cases.

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]]  |  모듈 [[06-storage]]</sub>

> [!question] What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)
> a) AWS Direct Connect.
> b) Amazon EC2 Auto Scaling.
> c) Elastic Load Balancer.
> d) CloudFormation.
> e) Network ACLs.
>> [!success]- Answer
>> b) Amazon EC2 Auto Scaling.
>> c) Elastic Load Balancer.

<sub>관련: [[amazon-ec2-auto-scaling]] · [[elastic-load-balancing]] · [[amazon-ec2]] · [[aws-direct-connect]] · [[aws-cloudformation]]  |  모듈 [[02-cloud-computing]], [[04-global-infrastructure]], [[05-networking]]</sub>

> [!question] Which of the following activities may help reduce your AWS monthly costs?
> a) Enabling Amazon EC2 Auto Scaling for all of your workloads.
> b) Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.
> c) Removing all of your Cost Allocation Tags.
> d) Deploying your AWS resources across multiple Availability Zones.
>> [!success]- Answer
>> a) Enabling Amazon EC2 Auto Scaling for all of your workloads.

<sub>관련: [[amazon-ec2-auto-scaling]] · [[elastic-load-balancing]] · [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?
> a) S3 Transfer Acceleration.
> b) AWS WAF.
> c) AWS Snowmobile.
> d) AWS Snowball.
>> [!success]- Answer
>> a) S3 Transfer Acceleration.

<sub>관련: [[amazon-s3]] · [[aws-snow-family]] · [[amazon-cloudfront]] · [[aws-waf]]  |  모듈 [[05-networking]], [[06-storage]], [[09-security]], [[12-migration]]</sub>

> [!question] Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?
> a) AWS X-Ray.
> b) Network ACL.
> c) Security Groups.
> d) VPC Flow logs.
>> [!success]- Answer
>> c) Security Groups.

<sub>관련: [[amazon-ec2]] · [[amazon-vpc]] · [[aws-x-ray]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[13-well-architected]]</sub>

> [!question] Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)
> a) AWS KMS.
> b) AWS Global accelerator.
> c) AWS Direct Connect.
> d) AWS Glue.
> e) Amazon CloudFront.
>> [!success]- Answer
>> b) AWS Global accelerator.
>> e) Amazon CloudFront.

<sub>관련: [[amazon-cloudfront]] · [[aws-direct-connect]] · [[aws-global-accelerator]] · [[aws-glue]] · [[aws-kms]]  |  모듈 [[05-networking]], [[08-ai-ml-analytics]], [[09-security]]</sub>

> [!question] Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)
> a) Building the relational database schema.
> b) Performing backups.
> c) Managing the database settings.
> d) Patching the database software.
> e) Installing the database software.
>> [!success]- Answer
>> a) Building the relational database schema.
>> c) Managing the database settings.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?
> a) Amazon DynamoDB.
> b) Amazon SNS.
> c) Amazon RDS.
> d) Amazon ElastiCache.
>> [!success]- Answer
>> c) Amazon RDS.

<sub>관련: [[amazon-rds]] · [[amazon-dynamodb]] · [[amazon-elasticache]] · [[amazon-sns]]  |  모듈 [[02-cloud-computing]], [[07-databases]]</sub>

> [!question] A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?
> a) APN Consulting Partners.
> b) AWS TAM.
> c) APN Technology Partners.
> d) AWS Professional Services.
>> [!success]- Answer
>> a) APN Consulting Partners.

<sub>모듈 [[11-billing-support]]</sub>

> [!question] What is the AWS serverless service that allows you to run your applications without any administrative burden?
> a) Amazon LightSail.
> b) AWS Lambda.
> c) Amazon RDS instances.
> d) Amazon EC2 instances.
>> [!success]- Answer
>> b) AWS Lambda.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-lightsail]] · [[amazon-rds]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[07-databases]]</sub>

> [!question] Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?
> a) She has properly built an elastic system.
> b) She has properly built a fault tolerant system.
> c) She has properly built an encrypted system.
> d) She has properly built a scalable system.
>> [!success]- Answer
>> b) She has properly built a fault tolerant system.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>
