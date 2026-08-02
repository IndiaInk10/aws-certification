---
title: "모의고사 10회"
tags: [clf-c02, 문제은행, quiz]
exam: 10
문항수: 50
lang: en
---

# 모의고사 10회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/10)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)
> a) AWS Concierge.
> b) AWS CloudFormation.
> c) Amazon Simple Storage Service (Amazon S3).
> d) Amazon EC2 Auto Scaling.
> e) AWS Management Console.
>> [!success]- Answer
>> b) AWS CloudFormation.
>> e) AWS Management Console.

<sub>관련: [[amazon-ec2-auto-scaling]] · [[amazon-ec2]] · [[amazon-s3]] · [[amazon-rds]] · [[aws-cloudformation]]  |  모듈 [[02-cloud-computing]], [[04-global-infrastructure]], [[06-storage]], [[07-databases]]</sub>

> [!question] Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?
> a) One-year, No Upfront, Standard RI pricing.
> b) One-year, All Upfront, Convertible RI pricing.
> c) Three-year, All Upfront, Standard RI pricing.
> d) Three-year, No Upfront, Convertible RI pricing.
>> [!success]- Answer
>> c) Three-year, All Upfront, Standard RI pricing.

> [!question] Which of the following are features of Amazon CloudWatch Logs? (Select TWO)
> a) Summaries by Amazon Simple Notification Service (Amazon SNS).
> b) Free Amazon Elasticsearch Service analytics.
> c) Provided at no charge.
> d) Real-time monitoring.
> e) Adjustable retention.
>> [!success]- Answer
>> d) Real-time monitoring.
>> e) Adjustable retention.

<sub>관련: [[amazon-sns]] · [[amazon-cloudwatch]]  |  모듈 [[02-cloud-computing]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following is an AWS-managed compute service?
> a) Amazon SWF.
> b) Amazon EC2.
> c) AWS Lambda.
> d) Amazon Aurora.
>> [!success]- Answer
>> c) AWS Lambda.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-aurora]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[07-databases]]</sub>

> [!question] A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?
> a) Amazon Elastic Compute Cloud (Amazon EC2).
> b) AWS Lambda.
> c) Amazon DynamoDB.
> d) AWS CodeCommit.
>> [!success]- Answer
>> b) AWS Lambda.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-dynamodb]] · [[aws-codecommit]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[07-databases]]</sub>

> [!question] Which of the following is the customer’s responsibility under the AWS shared responsibility model?
> a) Patching underlying infrastructure
> b) Physical security
> c) Patching Amazon EC2 instances
> d) Patching network infrastructure
>> [!success]- Answer
>> c) Patching Amazon EC2 instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] According to the AWS shared responsibility model who is responsible for configuration management?
> a) It is solely the responsibility of the customer.
> b) It is solely the responsibility of AWS.
> c) It is shared between AWS and the customer.
> d) It is not part of the AWS shared responsibility model.
>> [!success]- Answer
>> c) It is shared between AWS and the customer.

> [!question] Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?
> a) Amazon GuardDuty.
> b) Amazon Macie.
> c) Amazon Inspector.
> d) AWS Shield.
>> [!success]- Answer
>> b) Amazon Macie.

<sub>관련: [[aws-shield]] · [[amazon-guardduty]] · [[amazon-inspector]] · [[amazon-macie]]  |  모듈 [[09-security]]</sub>

> [!question] Which of the following BEST describe the AWS pricing model? (Select TWO)
> a) Fixed-term.
> b) Pay-as-you-go.
> c) Colocation.
> d) Planned.
> e) Variable cost.
>> [!success]- Answer
>> b) Pay-as-you-go.
>> e) Variable cost.

> [!question] Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)
> a) Ensuring that application data is encrypted at rest.
> b) Ensuring that AWS NTP servers are set to the correct time.
> c) Ensuring that users have received security training in the use of AWS services.
> d) Ensuring that access to data centers is restricted.
> e) Ensuring that hardware is disposed of properly.
>> [!success]- Answer
>> a) Ensuring that application data is encrypted at rest.
>> c) Ensuring that users have received security training in the use of AWS services.

> [!question] A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?
> a) Create one global AWS account and move all AWS resources to that account.
> b) Sign up for three years of Reserved Instance pricing up front.
> c) Use the consolidated billing feature from AWS Organizations.
> d) Sign up for the AWS Enterprise support plan to get volume discounts.
>> [!success]- Answer
>> c) Use the consolidated billing feature from AWS Organizations.

<sub>관련: [[aws-organizations]] · [[aws-support-plans]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?
> a) A Partial Upfront Reserved Instances for a 1-year term.
> b) All Upfront Reserved instances for a 1 year form.
> c) All Upfront Reserved Instances for a 3 year term.
> d) No Upfront Reserved Instances for a 3 year term.
>> [!success]- Answer
>> c) All Upfront Reserved Instances for a 3 year term.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS services should be used for read/write of constantly changing data? (Select TWO)
> a) Amazon Glacier.
> b) Amazon RDS.
> c) AWS Snowball.
> d) Amazon Redshift.
> e) Amazon EFS.
>> [!success]- Answer
>> b) Amazon RDS.
>> e) Amazon EFS.

<sub>관련: [[amazon-s3-glacier]] · [[amazon-efs]] · [[aws-snow-family]] · [[amazon-rds]] · [[amazon-redshift]]  |  모듈 [[06-storage]], [[07-databases]], [[08-ai-ml-analytics]], [[12-migration]]</sub>

> [!question] Which AWS service allows users to identify the changes made to a resource over time?
> a) Amazon Inspector.
> b) AWS Config.
> c) AWS Service Catalog.
> d) AWS IAM.
>> [!success]- Answer
>> b) AWS Config.

<sub>관련: [[aws-iam]] · [[amazon-inspector]] · [[aws-config]] · [[aws-service-catalog]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] According to best practices, how should an application be designed to run in the AWS Cloud?
> a) Use tightly coupled components.
> b) Use loosely coupled components.
> c) Use infrequently coupled components.
> d) Use frequently coupled components.
>> [!success]- Answer
>> b) Use loosely coupled components.

> [!question] Which benefits are included with the AWS Business Support plan? (Select TWO)
> a) 24/7 assistance by way of live chat or a telephone call.
> b) Support from a dedicated AWS Technical Account Manager.
> c) An unlimited number of cases and contacts.
> d) 15-minute response time for production system interruption cases.
> e) Annual operational reviews with AWS Solutions Architects.
>> [!success]- Answer
>> a) 24/7 assistance by way of live chat or a telephone call.
>> c) An unlimited number of cases and contacts.

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which of the following is an AWS managed Domain Name System (DNS) web service?
> a) Amazon Route 53.
> b) Amazon Neptune.
> c) Amazon SageMaker.
> d) Amazon Lightsail.
>> [!success]- Answer
>> a) Amazon Route 53.

<sub>관련: [[amazon-lightsail]] · [[amazon-neptune]] · [[amazon-route-53]] · [[amazon-sagemaker]]  |  모듈 [[03-compute-services]], [[05-networking]], [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?
> a) Dedicated Hosts.
> b) Dedicated Instances.
> c) Spot Instances.
> d) Reserved Instances.
>> [!success]- Answer
>> a) Dedicated Hosts.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?
> a) Dedicated RIs.
> b) Scheduled RIs.
> c) Convertible RIs.
> d) Standard RIs.
>> [!success]- Answer
>> c) Convertible RIs.

> [!question] Which service is best for storing common database query results, which helps to alleviate database access load?
> a) Amazon Machine Learning.
> b) Amazon SQS.
> c) Amazon ElastiCache.
> d) Amazon EC2 Instance Store.
>> [!success]- Answer
>> c) Amazon ElastiCache.

<sub>관련: [[amazon-ec2]] · [[amazon-elasticache]] · [[amazon-sqs]]  |  모듈 [[02-cloud-computing]], [[07-databases]]</sub>

> [!question] When should a company consider using Amazon EC2 Spot Instances? (Select TWO)
> a) For non-production applications.
> b) For stateful workloads.
> c) For applications that cannot have interruptions.
> d) For fault-tolerant flexible applications.
> e) For sensitive database applications.
>> [!success]- Answer
>> a) For non-production applications.
>> d) For fault-tolerant flexible applications.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS tools assist with estimating costs? (Select three)
> a) Detailed billing report.
> b) Cost allocation tags.
> c) AWS Simple Monthly Calculator.
> d) AWS Total Cost of Ownership (TCO) Calculator.
> e) Cost Estimator.
>> [!success]- Answer
>> b) Cost allocation tags.
>> c) AWS Simple Monthly Calculator.
>> d) AWS Total Cost of Ownership (TCO) Calculator.

<sub>관련: [[aws-pricing-calculator]]  |  모듈 [[11-billing-support]]</sub>

> [!question] A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?
> a) Elastic Load Balancer.
> b) Amazon EC2 Auto Scaling.
> c) Amazon Route 53.
> d) Amazon CloudFront.
>> [!success]- Answer
>> b) Amazon EC2 Auto Scaling.

<sub>관련: [[amazon-ec2-auto-scaling]] · [[elastic-load-balancing]] · [[amazon-ec2]] · [[amazon-route-53]] · [[amazon-cloudfront]]  |  모듈 [[02-cloud-computing]], [[05-networking]]</sub>

> [!question] Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?
> a) Enterprise.
> b) Business.
> c) Developer.
> d) Basic.
>> [!success]- Answer
>> a) Enterprise.

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Access keys in AWS Identity and Access Management (IM1) are used to:
> a) Log in to the AWS Management Console.
> b) Make programmatic calls to AWS from AWS APIs.
> c) Log in to Amazon EC2 instances.
> d) Authenticate to AWS CodeCommit repositories.
>> [!success]- Answer
>> b) Make programmatic calls to AWS from AWS APIs.

<sub>관련: [[amazon-ec2]] · [[aws-iam]] · [[aws-codecommit]]  |  모듈 [[02-cloud-computing]], [[09-security]]</sub>

> [!question] Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?
> a) AWS Glue.
> b) AWS Data Pipeline.
> c) Amazon CloudSearch.
> d) Amazon Athena.
>> [!success]- Answer
>> d) Amazon Athena.

<sub>관련: [[amazon-s3]] · [[amazon-athena]] · [[aws-glue]]  |  모듈 [[06-storage]], [[08-ai-ml-analytics]]</sub>

> [!question] How does AWS shorten the time to provision IT resources?
> a) It supplies an online IT ticketing platform for resource requests.
> b) It supports automatic code validation services.
> c) It provides the ability to programmatically provision existing resources.
> d) It automates the resource request process from a company’s IT vendor list.
>> [!success]- Answer
>> c) It provides the ability to programmatically provision existing resources.

> [!question] Which AWS services can be used to gather information about AWS account activity? (Select TWO)
> a) Amazon CloudFront.
> b) AWS Cloud9.
> c) AWS CloudTrail.
> d) AWS CloudHSM.
> e) Amazon CloudWatch.
>> [!success]- Answer
>> c) AWS CloudTrail.
>> e) Amazon CloudWatch.

<sub>관련: [[amazon-cloudfront]] · [[aws-cloudhsm]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]]  |  모듈 [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following are characteristics of Amazon S3? (Select TWO)
> a) A global file system.
> b) An object store.
> c) A local file store.
> d) A network file system.
> e) A durable storage system.
>> [!success]- Answer
>> b) An object store.
>> e) A durable storage system.

<sub>관련: [[amazon-s3]]  |  모듈 [[06-storage]]</sub>

> [!question] A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?
> a) AWS Budgets.
> b) Cost Explorer.
> c) AWS Total Cost of Ownership (TCO) Calculator.
> d) AWS Well-Architected Tool.
>> [!success]- Answer
>> c) AWS Total Cost of Ownership (TCO) Calculator.

<sub>관련: [[aws-well-architected-tool]] · [[aws-cost-explorer]] · [[aws-budgets]]  |  모듈 [[11-billing-support]], [[13-well-architected]]</sub>

> [!question] Which of the following services is in the category of AWS serverless platform?
> a) Amazon EMR.
> b) Elastic Load Balancing.
> c) AWS Lambda.
> d) AWS Mobile Hub.
>> [!success]- Answer
>> c) AWS Lambda.

<sub>관련: [[elastic-load-balancing]] · [[aws-lambda]] · [[amazon-emr]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[08-ai-ml-analytics]]</sub>

> [!question] The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?
> a) Cost allocation tags.
> b) Consolidated billing.
> c) AWS Budgets.
> d) AWS Marketplace.
>> [!success]- Answer
>> a) Cost allocation tags.

<sub>관련: [[aws-budgets]] · [[aws-marketplace]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?
> a) AWS Cost Explorer.
> b) AWS Trusted Advisor.
> c) Consolidated billing.
> d) Detailed billing.
>> [!success]- Answer
>> b) AWS Trusted Advisor.

<sub>관련: [[aws-trusted-advisor]] · [[aws-cost-explorer]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?
> a) Cloud-native.
> b) Partner network.
> c) Hybrid architecture.
> d) Infrastructure as a service.
>> [!success]- Answer
>> c) Hybrid architecture.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] What technology enables compute capacity to adjust as loads change?
> a) Load balancing.
> b) Automatic failover.
> c) Round robin.
> d) Auto Scaling.
>> [!success]- Answer
>> d) Auto Scaling.

> [!question] Which AWS service is a managed NoSQL database?
> a) Amazon Redshift.
> b) Amazon DynamoDB.
> c) Amazon Aurora.
> d) Amazon RDS for ManaDB.
>> [!success]- Answer
>> b) Amazon DynamoDB.

<sub>관련: [[amazon-rds]] · [[amazon-aurora]] · [[amazon-dynamodb]] · [[amazon-redshift]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] Which of the following is a correct relationship between regions, Availability Zones, and edge locations?
> a) Data centers contain regions.
> b) Regions contain Availability Zones.
> c) Availability Zones contain edge locations.
> d) Edge locations contain regions.
>> [!success]- Answer
>> b) Regions contain Availability Zones.

> [!question] What approach to transcoding a large number of individual video files adheres to AWS architecture principles?
> a) Using many instances in parallel.
> b) Using a single large instance during off-peak hours.
> c) Using dedicated hardware.
> d) Using a large GPU instance type.
>> [!success]- Answer
>> a) Using many instances in parallel.

> [!question] Which AWS services can host a Microsoft SQL Server database? (Select TWO)
> a) Amazon EC2.
> b) Amazon Relational Database Service (Amazon RDS).
> c) Amazon Aurora.
> d) Amazon Redshift.
> e) Amazon S3.
>> [!success]- Answer
>> a) Amazon EC2.
>> b) Amazon Relational Database Service (Amazon RDS).

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[amazon-rds]] · [[amazon-aurora]] · [[amazon-redshift]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] Which AWS IAM feature allows developers to access AWS services through the AWS CLI?
> a) API keys.
> b) Access keys.
> c) User names/Passwords.
> d) SSH keys.
>> [!success]- Answer
>> b) Access keys.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] The user is fully responsible for which action when running workloads on AWS?
> a) Patching the infrastructure components.
> b) Maintaining the underlying infrastructure components.
> c) Maintaining physical and environmental controls.
> d) Implementing controls to route application traffic.
>> [!success]- Answer
>> d) Implementing controls to route application traffic.

> [!question] Which AWS support plan includes a dedicated Technical Account Manager?
> a) Developer.
> b) Enterprise.
> c) Business.
> d) Basic.
>> [!success]- Answer
>> b) Enterprise.

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] What time-savings advantage is offered with the use of Amazon Rekognition?
> a) Amazon Rekognition provides automatic watermarking of images.
> b) Amazon Rekognition provides automatic detection of objects appearing in pictures.
> c) Amazon Recognition provides the ability to resize millions of images automatically.
> d) Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.
>> [!success]- Answer
>> b) Amazon Rekognition provides automatic detection of objects appearing in pictures.

<sub>관련: [[amazon-rekognition]]  |  모듈 [[08-ai-ml-analytics]]</sub>

> [!question] Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?
> a) Amazon AutoScaling.
> b) Amazon Redshift.
> c) AWS CloudTrail.
> d) AWS Lambda.
>> [!success]- Answer
>> a) Amazon AutoScaling.

<sub>관련: [[amazon-ec2-auto-scaling]] · [[aws-lambda]] · [[amazon-redshift]] · [[aws-cloudtrail]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[08-ai-ml-analytics]], [[10-monitoring-governance]]</sub>

> [!question] Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?
> a) AWS manages the data stored in Amazon RDS tables.
> b) AWS manages the maintenance of the operating system.
> c) AWS automatically scales up instance types on demand.
> d) AWS manages the database type.
>> [!success]- Answer
>> b) AWS manages the maintenance of the operating system.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?
> a) Implementing elasticity enabling the application to scale up or scale down as demand changes.
> b) Enabling several EC2 instances to run in parallel to achieve better performance.
> c) Focusing on decoupling components by isolating them and ensuring individual components can function when other components.
> d) Doubling EC2 computing resources to increase system fault tolerance.
>> [!success]- Answer
>> c) Focusing on decoupling components by isolating them and ensuring individual components can function when other components.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?
> a) AWS Partner Network Technology Partners.
> b) AWS Marketplace.
> c) AWS Partner Network Consulting Partners.
> d) AWS Service Catalog.
>> [!success]- Answer
>> c) AWS Partner Network Consulting Partners.

<sub>관련: [[aws-service-catalog]] · [[aws-marketplace]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?
> a) Amazon Glacier.
> b) AWS Storage Gateway.
> c) Amazon S3.
> d) Amazon EBS.
>> [!success]- Answer
>> c) Amazon S3.

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]] · [[amazon-ebs]] · [[aws-storage-gateway]]  |  모듈 [[06-storage]]</sub>

> [!question] Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?
> a) Implement automation.
> b) Design for agility.
> c) Design for failure.
> d) Implement elasticity.
>> [!success]- Answer
>> c) Design for failure.

> [!question] Which service should a customer use to consolidate and centrally manage multiple AWS accounts?
> a) AWS IAM.
> b) AWS Organizations.
> c) AWS Schema Conversion Tool.
> d) AWS Config.
>> [!success]- Answer
>> b) AWS Organizations.

<sub>관련: [[aws-iam]] · [[aws-organizations]] · [[aws-config]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>
