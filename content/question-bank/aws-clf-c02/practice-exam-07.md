---
title: "모의고사 07회"
tags: [clf-c02, 문제은행, quiz]
exam: 7
문항수: 50
lang: en
---

# 모의고사 07회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/7)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)
> a) Delete the encryption keys once your data is encrypted.
> b) With AWS you do not need to worry about encryption.
> c) Enable S3 Encryption.
> d) Encrypt the data prior to uploading it.
> e) Delete all IAM users that have access to S3.
>> [!success]- Answer
>> c) Enable S3 Encryption.
>> d) Encrypt the data prior to uploading it.

<sub>관련: [[amazon-s3]] · [[aws-iam]]  |  모듈 [[06-storage]], [[09-security]]</sub>

> [!question] Which AWS service helps developers compile and test their code?
> a) AWS CodeDeploy.
> b) AWS CodeCommit.
> c) CloudEndure.
> d) AWS CodeBuild.
>> [!success]- Answer
>> d) AWS CodeBuild.

<sub>관련: [[aws-codecommit]] · [[aws-codebuild]] · [[aws-codedeploy]]  |  모듈 [[13-well-architected]]</sub>

> [!question] Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)
> a) Using default encryption for any number of S3 buckets.
> b) The number of EBS volumes attached to your instances.
> c) The storage class used for the objects stored.
> d) Creating and deleting S3 buckets.
> e) The total size in gigabytes of all objects stored.
>> [!success]- Answer
>> c) The storage class used for the objects stored.
>> e) The total size in gigabytes of all objects stored.

<sub>관련: [[amazon-s3]] · [[amazon-ebs]]  |  모듈 [[06-storage]]</sub>

> [!question] What does the Amazon CloudFront service provide? (Choose TWO)
> a) Tracks user activity and APl usage.
> b) Increases application availability by caching at the edge.
> c) Enables faster disaster recovery.
> d) Stores archived data at very low costs.
> e) Delivers content to end users with low latency.
>> [!success]- Answer
>> b) Increases application availability by caching at the edge.
>> e) Delivers content to end users with low latency.

<sub>관련: [[amazon-cloudfront]]  |  모듈 [[05-networking]]</sub>

> [!question] You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?
> a) Amazon Lightsail.
> b) Amazon Connect.
> c) AWS Direct Connect.
> d) AWS Elastic Beanstalk.
>> [!success]- Answer
>> b) Amazon Connect.

<sub>관련: [[aws-elastic-beanstalk]] · [[amazon-lightsail]] · [[aws-direct-connect]] · [[amazon-connect]]  |  모듈 [[03-compute-services]], [[05-networking]]</sub>

> [!question] You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?
> a) Using the AWS Cost & Usage Report.
> b) Using the AWS Total Cost of Ownership (TCO) dashboard.
> c) Using the AWS CloudWatch logs dashboard.
> d) Using the Amazon VPC dashboard.
>> [!success]- Answer
>> a) Using the AWS Cost & Usage Report.

<sub>관련: [[amazon-vpc]] · [[amazon-cloudwatch]]  |  모듈 [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)
> a) Convertible.
> b) Expedited.
> c) Bulk.
> d) Spot.
> e) Standard.
>> [!success]- Answer
>> a) Convertible.
>> e) Standard.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following services gives you access to all AWS auditor-issued reports and certifications?
> a) AWS Artifact.
> b) AWS Config.
> c) Amazon CloudWatch.
> d) AWS CloudTrail.
>> [!success]- Answer
>> a) AWS Artifact.

<sub>관련: [[aws-artifact]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-config]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?
> a) AWS Resource Groups.
> b) AWS Placement Groups.
> c) AWS Management Console.
> d) AWS Tag Editor.
>> [!success]- Answer
>> a) AWS Resource Groups.

<sub>관련: [[aws-management-console]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] Which AWS service collects metrics from running EC2 instances?
> a) Amazon Inspector.
> b) Amazon CloudWatch.
> c) AWS CloudFormation.
> d) AWS CloudTrail.
>> [!success]- Answer
>> b) Amazon CloudWatch.

<sub>관련: [[amazon-ec2]] · [[amazon-inspector]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-cloudformation]]  |  모듈 [[02-cloud-computing]], [[04-global-infrastructure]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?
> a) Amazon Detective.
> b) AWS X-Ray.
> c) AWS Security Hub.
> d) AWS Shield.
>> [!success]- Answer
>> b) AWS X-Ray.

<sub>관련: [[aws-shield]] · [[aws-security-hub]] · [[aws-x-ray]]  |  모듈 [[09-security]], [[13-well-architected]]</sub>

> [!question] Which of the following compute resources are serverless? (Choose TWO)
> a) Amazon EC2.
> b) AWS Fargate.
> c) AWS Lambda.
> d) Amazon ECS.
> e) Amazon EMR.
>> [!success]- Answer
>> b) AWS Fargate.
>> c) AWS Lambda.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-ecs]] · [[aws-fargate]] · [[amazon-emr]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[08-ai-ml-analytics]]</sub>

> [!question] For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?
> a) Use EC2 Dedicated Hosts.
> b) Use EC2 Reserved Instances.
> c) Use EC2 Spot Instances.
> d) Use EC2 On-demand Instances.
>> [!success]- Answer
>> a) Use EC2 Dedicated Hosts.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?
> a) Tagging Enforcement.
> b) Architecture Optimization.
> c) Budgeting Processes.
> d) Resource Controls.
>> [!success]- Answer
>> b) Architecture Optimization.

<sub>관련: [[aws-budgets]]  |  모듈 [[11-billing-support]]</sub>

> [!question] An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?
> a) RedShift.
> b) RDS.
> c) CloudHSM.
> d) DMS.
>> [!success]- Answer
>> b) RDS.

<sub>관련: [[amazon-redshift]] · [[aws-cloudhsm]]  |  모듈 [[08-ai-ml-analytics]]</sub>

> [!question] What can you use to assign permissions directly to an IAM user?
> a) IAM Identity.
> b) IAM Group.
> c) IAM Role.
> d) IAM Policy.
>> [!success]- Answer
>> d) IAM Policy.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?
> a) AWS allows customers to launch powerful EC2 instances to handle spikes in load.
> b) AWS allows customers to pay upfront to get bigger discounts.
> c) AWS allows customers to launch and terminate EC2 instances based on demand.
> d) AWS allows customers to choose cheaper types of EC2 instances that best fit their needs.
>> [!success]- Answer
>> c) AWS allows customers to launch and terminate EC2 instances based on demand.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?
> a) PostgreSQL.
> b) Oracle.
> c) Microsoft SQL Server.
> d) Teradata.
>> [!success]- Answer
>> d) Teradata.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] Which of the following AWS services would help you migrate on-premise databases to AWS?
> a) AWS DMS.
> b) Amazon S3 Transfer Acceleration.
> c) AWS Directory Service.
> d) AWS Transit Gateway.
>> [!success]- Answer
>> a) AWS DMS.

<sub>관련: [[amazon-s3]] · [[aws-transit-gateway]] · [[aws-directory-service]]  |  모듈 [[05-networking]], [[06-storage]]</sub>

> [!question] For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?
> a) Run WordPress on an Amazon Lightsail instance.
> b) Install WordPress on an Amazon EC2 instance.
> c) Use the Amazon S3 Web hosting feature.
> d) Host the website directly on AWS Cloud Development Kit (AWS CDK).
>> [!success]- Answer
>> a) Run WordPress on an Amazon Lightsail instance.

<sub>관련: [[amazon-ec2]] · [[amazon-lightsail]] · [[amazon-s3]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[06-storage]]</sub>

> [!question] Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)
> a) AWS KMS.
> b) AWS Certificate Manager.
> c) AWS CodeDeploy.
> d) AWS CodeCommit.
> e) CloudHSM.
>> [!success]- Answer
>> a) AWS KMS.
>> e) CloudHSM.

<sub>관련: [[aws-kms]] · [[aws-cloudhsm]] · [[aws-certificate-manager]] · [[aws-codecommit]] · [[aws-codedeploy]]  |  모듈 [[09-security]]</sub>

> [!question] Which of the following services allows you to install and run custom relational database software?
> a) Amazon EC2.
> b) Amazon Cognito.
> c) Amazon RDS.
> d) Amazon Inspector.
>> [!success]- Answer
>> a) Amazon EC2.

<sub>관련: [[amazon-ec2]] · [[amazon-rds]] · [[amazon-cognito]] · [[amazon-inspector]]  |  모듈 [[02-cloud-computing]], [[07-databases]], [[09-security]]</sub>

> [!question] Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?
> a) Auto Scaling.
> b) ELB.
> c) Amazon Route53.
> d) Amazon Elastic Container Service.
>> [!success]- Answer
>> a) Auto Scaling.

<sub>관련: [[elastic-load-balancing]] · [[amazon-ecs]] · [[amazon-route-53]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[05-networking]]</sub>

> [!question] A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?
> a) AWS IAM.
> b) AWS Outposts.
> c) AWS Federation.
> d) Amazon Redshift.
>> [!success]- Answer
>> a) AWS IAM.

<sub>관련: [[aws-outposts]] · [[amazon-redshift]] · [[aws-iam]]  |  모듈 [[03-compute-services]], [[08-ai-ml-analytics]], [[09-security]]</sub>

> [!question] What are some key design principles for designing public cloud systems? (Choose TWO)
> a) Reserved capacity instead of on demand.
> b) Loose coupling over tight coupling.
> c) Servers instead of managed services.
> d) Disposable resources instead of fixed servers.
> e) Multi-AZ deployments instead of multi-region deployments.
>> [!success]- Answer
>> b) Loose coupling over tight coupling.
>> d) Disposable resources instead of fixed servers.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?
> a) AWS CloudTrail Trails.
> b) IAM Credential Report.
> c) AWS Artifact reports.
> d) AWS Cost and Usage Report.
>> [!success]- Answer
>> b) IAM Credential Report.

<sub>관련: [[aws-iam]] · [[aws-artifact]] · [[aws-cloudtrail]] · [[aws-cost-and-usage-report]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?
> a) AWS Shield.
> b) AWS Certificate Manager.
> c) AWS CloudHSM.
> d) AWS WAF.
>> [!success]- Answer
>> c) AWS CloudHSM.

<sub>관련: [[aws-cloudhsm]] · [[aws-certificate-manager]] · [[aws-shield]] · [[aws-waf]]  |  모듈 [[09-security]]</sub>

> [!question] You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?
> a) There is no need to architect for these capabilities in AWS, as AWS is redundant by default.
> b) Deploy the application in a single Availability Zone.
> c) Deploy the application in multiple Availability Zones in a single AWS region.
> d) Deploy the application in multiple Availability Zones in multiple AWS regions.
>> [!success]- Answer
>> d) Deploy the application in multiple Availability Zones in multiple AWS regions.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.
> a) Instance Store.
> b) S3.
> c) DynamoDB.
> d) Amazon Route 53.
> e) AWS VPN.
>> [!success]- Answer
>> b) S3.
>> c) DynamoDB.

<sub>관련: [[amazon-dynamodb]] · [[amazon-route-53]]  |  모듈 [[05-networking]], [[07-databases]]</sub>

> [!question] Which of the following factors affect Amazon CloudFront cost? (Choose TWO)
> a) Number of Requests.
> b) Traffic Distribution.
> c) Number of Volumes.
> d) Instance type.
> e) Storage Class.
>> [!success]- Answer
>> a) Number of Requests.
>> b) Traffic Distribution.

<sub>관련: [[amazon-cloudfront]]  |  모듈 [[05-networking]]</sub>

> [!question] Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?
> a) AWS Service Control Policies (SCPs).
> b) AWS Artifact.
> c) AWS Budgets.
> d) AWS Acceptable Use Policy.
>> [!success]- Answer
>> d) AWS Acceptable Use Policy.

<sub>관련: [[aws-organizations]] · [[aws-artifact]] · [[aws-budgets]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which of the following security resources are available to any user for free? (Choose TWO)
> a) AWS Bulletins.
> b) AWS TAM.
> c) AWS Support APl.
> d) AWS Security Blog.
> e) AWS Classroom Training.
>> [!success]- Answer
>> a) AWS Bulletins.
>> d) AWS Security Blog.

<sub>모듈 [[09-security]]</sub>

> [!question] How can you protect data stored on Amazon S3 from accidental deletion?
> a) By enabling S3 Versioning.
> b) By configuring S3 Bucket Policies.
> c) By configuring S3 Lifecycle Policies.
> d) By disabling S3 Cross-Region Replication (CRR).
>> [!success]- Answer
>> a) By enabling S3 Versioning.

<sub>관련: [[amazon-s3]]  |  모듈 [[06-storage]]</sub>

> [!question] Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?
> a) Securing regions and edge locations.
> b) Performing auditing tasks.
> c) Monitoring AWS resources usage.
> d) Securing access to AWS resources.
>> [!success]- Answer
>> a) Securing regions and edge locations.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?
> a) Business & Enterprise Support.
> b) Basic & Developer Support.
> c) Developer & Enterprise Support.
> d) Developer & Business Support.
>> [!success]- Answer
>> b) Basic & Developer Support.

<sub>관련: [[aws-trusted-advisor]] · [[aws-support-plans]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which of the following is NOT a benefit of using AWS Lambda?
> a) AWS Lambda runs code without provisioning or managing servers.
> b) AWS Lambda provides resizable compute capacity in the cloud.
> c) There is no charge when your AWS Lambda code is not running.
> d) AWS Lambda can be called directly from any mobile app.
>> [!success]- Answer
>> d) AWS Lambda can be called directly from any mobile app.

<sub>관련: [[aws-lambda]]  |  모듈 [[03-compute-services]]</sub>

> [!question] How does AWS help customers achieve compliance in the cloud?
> a) It's not possible to meet regulatory compliance requirements in the Cloud.
> b) AWS applies the most common Cloud security standards, and is responsible for complying with customers’ applicable laws and regulations.
> c) AWS has many common assurance certifications such as ISO 9001 and HIPAA.
> d) Many AWS services are assessed regularly to comply with local laws and regulations.
>> [!success]- Answer
>> c) AWS has many common assurance certifications such as ISO 9001 and HIPAA.

<sub>모듈 [[10-monitoring-governance]]</sub>

> [!question] Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?
> a) Your security team.
> b) Your development team.
> c) AWS.
> d) Your internal DevOps team.
>> [!success]- Answer
>> c) AWS.

<sub>관련: [[amazon-dynamodb]]  |  모듈 [[07-databases]]</sub>

> [!question] You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?
> a) Amazon Elastic Transcoder.
> b) Amazon Pinpoint.
> c) AmazonS3.
> d) Amazon Rekognition.
>> [!success]- Answer
>> a) Amazon Elastic Transcoder.

<sub>관련: [[amazon-rekognition]]  |  모듈 [[08-ai-ml-analytics]]</sub>

> [!question] What are the benefits of the AWS Organizations service? (Choose TWO)
> a) Control access to AWS services.
> b) Help organizations design and maintain an accelerated path to successful cloud adoption.
> c) Manage your organization’s payment methods.
> d) Help organization achieve their desired business outcomes with AWS.
> e) Consolidate billing across multiple AWS accounts.
>> [!success]- Answer
>> a) Control access to AWS services.
>> e) Consolidate billing across multiple AWS accounts.

<sub>관련: [[aws-organizations]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] Which AWS service allows you to build a data warehouse in the cloud?
> a) AWS Shield.
> b) Amazon Redshift.
> c) Amazon RDS.
> d) Amazon Comprehend.
>> [!success]- Answer
>> b) Amazon Redshift.

<sub>관련: [[amazon-rds]] · [[amazon-redshift]] · [[amazon-comprehend]] · [[aws-shield]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]], [[09-security]]</sub>

> [!question] What AWS service allows you to buy third-party software solutions and services that run on AWS resources?
> a) AWS Application Discovery service.
> b) Amazon DevPay.
> c) AWS Marketplace.
> d) Resource Groups.
>> [!success]- Answer
>> c) AWS Marketplace.

<sub>관련: [[aws-marketplace]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?
> a) AWS CodePipeline.
> b) AWS CodeCommit.
> c) AWS X-Ray.
> d) Amazon Inspector.
>> [!success]- Answer
>> b) AWS CodeCommit.

<sub>관련: [[amazon-inspector]] · [[aws-codecommit]] · [[aws-codepipeline]] · [[aws-x-ray]]  |  모듈 [[09-security]], [[13-well-architected]]</sub>

> [!question] Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?
> a) Amazon Cognito.
> b) AWS Systems Manager.
> c) AWS Cloud9.
> d) Amazon Route 53.
>> [!success]- Answer
>> d) Amazon Route 53.

<sub>관련: [[amazon-route-53]] · [[amazon-cognito]] · [[aws-systems-manager]]  |  모듈 [[05-networking]], [[09-security]]</sub>

> [!question] Which feature enables users to sign into their AWS accounts with their existing corporate credentials?
> a) Federation.
> b) Access keys.
> c) IAM Permissions.
> d) WAF rules.
>> [!success]- Answer
>> a) Federation.

<sub>관련: [[aws-iam]] · [[aws-waf]]  |  모듈 [[09-security]]</sub>

> [!question] According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)
> a) Awareness and Training.
> b) Communications controls.
> c) Data center security controls.
> d) Environmental controls.
> e) Resource Configuration Management.
>> [!success]- Answer
>> c) Data center security controls.
>> d) Environmental controls.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] What can you access by visiting the URL: ?
> a) AWS Billing Dashboard.
> b) AWS Cost Dashboard.
> c) AWS Service Health Dashboard.
> d) AWS Security Dashboard.
>> [!success]- Answer
>> c) AWS Service Health Dashboard.

<sub>관련: [[aws-health-dashboard]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)
> a) Store media assets in the region closest to your end users.
> b) Store media assets on an additional EBS volume and increase the capacity of your server.
> c) Replicate media assets to at least two availability zones.
> d) Reduce the size of media assets using the Amazon Elastic Transcoder.
> e) Store media assets in S3 and use CloudFront to distribute these assets.
>> [!success]- Answer
>> a) Store media assets in the region closest to your end users.
>> e) Store media assets in S3 and use CloudFront to distribute these assets.

<sub>관련: [[amazon-s3]] · [[amazon-ebs]] · [[amazon-cloudfront]]  |  모듈 [[05-networking]], [[06-storage]]</sub>

> [!question] Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)
> a) Use manual monitoring techniques to protect your AWS resources.
> b) Use IAM roles to grant temporary access instead of long-term credentials.
> c) Scale horizontally to protect from failures.
> d) Enable real-time traceability.
> e) Never store sensitive data in the cloud.
>> [!success]- Answer
>> b) Use IAM roles to grant temporary access instead of long-term credentials.
>> d) Enable real-time traceability.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?
> a) Use the AWS Pricing Calculator service to monitor the costs incurred by each department.
> b) Use Amazon Aurora to forecast AWS spending based on usage.
> c) Apply cost allocation tags to segment AWS costs by different e projects and departments.
> d) Configure AWS Price List API to receive billing updates for each department automatically.
>> [!success]- Answer
>> c) Apply cost allocation tags to segment AWS costs by different e projects and departments.

<sub>관련: [[amazon-aurora]] · [[aws-pricing-calculator]]  |  모듈 [[07-databases]], [[11-billing-support]]</sub>
