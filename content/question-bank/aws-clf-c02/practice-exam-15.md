---
title: "모의고사 15회"
tags: [clf-c02, 문제은행, quiz]
exam: 15
문항수: 50
lang: en
---

# 모의고사 15회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/15)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] How do customers benefit from Amazon's massive economies of scale?
> a) Periodic price reductions as the result of Amazon's operational efficiencies
> b) New Amazon EC2 instance types providing the latest hardware
> c) The ability to scale up and down when needed
> d) Increased reliability in the underlying hardware of Amazon EC2 instances
>> [!success]- Answer
>> a) Periodic price reductions as the result of Amazon's operational efficiencies

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS services can be used to gather information about AWS account activity? (Select TWO.)
> a) Amazon CloudFront
> b) AWS Cloud9
> c) AWS CloudTrail
> d) AWS CloudHSM
> e) Amazon CloudWatch
>> [!success]- Answer
>> c) AWS CloudTrail
>> e) Amazon CloudWatch

<sub>관련: [[amazon-cloudfront]] · [[aws-cloudhsm]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]]  |  모듈 [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO.)
> a) Patching databases software
> b) Testing application releases
> c) Backing up databases
> d) Creating database schema
> e) Running penetration tests
>> [!success]- Answer
>> a) Patching databases software
>> c) Backing up databases

> [!question] In which scenario should Amazon EC2 Spot Instances be used?
> a) A company wants to move its main website to AWS from an on-premises web server.
> b) A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.
> c) A company's heavily used legacy database is currently running on-premises.
> d) A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.
>> [!success]- Answer
>> d) A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-leveraging-ec2-spot-instances/spot-instance-interruptions.html)</sub>

> [!question] Which AWS feature should a customer leverage to achieve high availability of an application?
> a) AWS Direct Connect
> b) Availability Zones
> c) Data centers
> d) Amazon Virtual Private Cloud (Amazon VPC)
>> [!success]- Answer
>> b) Availability Zones

<sub>관련: [[amazon-vpc]] · [[aws-direct-connect]]  |  모듈 [[05-networking]]</sub>

> [!question] Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?
> a) Enterprise
> b) Business
> c) Developer
> d) Basic
>> [!success]- Answer
>> a) Enterprise

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/plans/)</sub>

> [!question] Which AWS service can serve a static website?
> a) Amazon S3
> b) Amazon Route 53
> c) Amazon QuickSight
> d) AWS X-Ray
>> [!success]- Answer
>> a) Amazon S3

<sub>관련: [[amazon-s3]] · [[amazon-route-53]] · [[amazon-quicksight]] · [[aws-x-ray]]  |  모듈 [[05-networking]], [[06-storage]], [[08-ai-ml-analytics]], [[13-well-architected]]</sub>

> [!question] How does AWS shorten the time to provision IT resources?
> a) It supplies an online IT ticketing platform for resource requests.
> b) It supports automatic code validation services.
> c) It provides the ability to programmatically provision existing resources.
> d) It automates the resource request process from a company's IT vendor list.
>> [!success]- Answer
>> c) It provides the ability to programmatically provision existing resources.

> [!question] What can AWS edge locations be used for? (Select TWO.)
> a) Hosting applications
> b) Delivering content closer to users
> c) Running NoSQL database caching services
> d) Reducing traffic on the server by caching responses
> e) Sending notification messages to end users
>> [!success]- Answer
>> b) Delivering content closer to users
>> d) Reducing traffic on the server by caching responses

> [!question] Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?
> a) A public and private key-pair
> b) Amazon Inspector
> c) AWS Identity and Access Management (IAM) policies
> d) Security Groups
>> [!success]- Answer
>> c) AWS Identity and Access Management (IAM) policies

<sub>관련: [[amazon-s3]] · [[aws-iam]] · [[amazon-inspector]]  |  모듈 [[06-storage]], [[09-security]]</sub>

> [!question] A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?
> a) Think parallel
> b) Implement elasticity
> c) Decouple your components
> d) Design for failure
>> [!success]- Answer
>> b) Implement elasticity

<sub>관련: [참고](https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf)  |  [참고](https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf)</sub>

> [!question] Which of the following tasks is the responsibility of AWS?
> a) Encrypting client-side data
> b) Configuring AWS Identity and Access Management (IAM) roles
> c) Securing the Amazon EC2 hypervisor
> d) Setting user password policies
>> [!success]- Answer
>> c) Securing the Amazon EC2 hypervisor

<sub>관련: [[amazon-ec2]] · [[aws-iam]]  |  모듈 [[02-cloud-computing]], [[09-security]]</sub>

> [!question] One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:
> a) the ability to bid for a lower hourly cost.
> b) paying a daily rate regardless of time used.
> c) paying only for time used.
> d) pre-paying for instances and paying a lower hourly rate.
>> [!success]- Answer
>> c) paying only for time used.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?
> a) AWS Well-Architected Framework documentation
> b) Amazon CloudFront
> c) AWS CodeCommit
> d) AWS Quick Start reference deployments
>> [!success]- Answer
>> d) AWS Quick Start reference deployments

<sub>관련: [[amazon-cloudfront]] · [[aws-well-architected-tool]] · [[aws-codecommit]]  |  모듈 [[05-networking]], [[13-well-architected]]</sub>

> [!question] Which of the following services is in the category of AWS serverless platform?
> a) Amazon EMR
> b) Elastic Load Balancing
> c) AWS Lambda
> d) AWS Mobile Hub
>> [!success]- Answer
>> c) AWS Lambda

<sub>관련: [[elastic-load-balancing]] · [[aws-lambda]] · [[amazon-emr]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[08-ai-ml-analytics]]</sub>

> [!question] Which services are parts of the AWS serverless platform?
> a) Amazon EC2, Amazon S3, Amazon Athena
> b) Amazon Kinesis, Amazon SQS, Amazon EMR
> c) AWS Step Functions, Amazon DynamoDB, Amazon SNS
> d) Amazon Athena, Amazon Cognito, Amazon EC2
>> [!success]- Answer
>> c) AWS Step Functions, Amazon DynamoDB, Amazon SNS

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[amazon-dynamodb]] · [[amazon-sqs]] · [[amazon-sns]] · [[aws-step-functions]] · [[amazon-athena]] · [[amazon-emr]] · [[amazon-kinesis]] · [[amazon-cognito]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] Under the shared responsibility model, which of the following is a shared control between a customer and AWS?
> a) Physical controls
> b) Patch management
> c) Zone security
> d) Data center auditing
>> [!success]- Answer
>> b) Patch management

> [!question] What can AWS edge locations be used for? (Select TWO.)
> a) Hosting applications
> b) Delivering content closer to users
> c) Running NoSQL database caching services
> d) Reducing traffic on the server by caching responses
> e) Sending notification messages to end users
>> [!success]- Answer
>> b) Delivering content closer to users
>> d) Reducing traffic on the server by caching responses

> [!question] What technology enables compute capacity to adjust as loads change?
> a) Load balancing
> b) Automatic failover
> c) Round robin
> d) Auto Scaling
>> [!success]- Answer
>> d) Auto Scaling

> [!question] Which AWS services are defined as global instead of regional? (Select TWO.)
> a) Amazon Route 53
> b) Amazon EC2
> c) Amazon S3
> d) Amazon CloudFront
> e) Amazon DynamoDB
>> [!success]- Answer
>> a) Amazon Route 53
>> d) Amazon CloudFront

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[amazon-dynamodb]] · [[amazon-route-53]] · [[amazon-cloudfront]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[06-storage]], [[07-databases]]  |  [참고](http://jayendrapatil.com/aws-global-vs-regional-vs-az-resources/)</sub>

> [!question] Which AWS service would you use to obtain compliance reports and certificates?
> a) AWS Artifact
> b) AWS Lambda
> c) Amazon Inspector
> d) AWS Certificate Manager
>> [!success]- Answer
>> a) AWS Artifact

<sub>관련: [[aws-lambda]] · [[aws-certificate-manager]] · [[amazon-inspector]] · [[aws-artifact]]  |  모듈 [[03-compute-services]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO.)
> a) Ensuring that application data is encrypted at rest
> b) Ensuring that AWS NTP servers are set to the correct time
> c) Ensuring that users have received security training in the use of AWS services
> d) Ensuring that access to data centers is restricted
> e) Ensuring that hardware is disposed of properly
>> [!success]- Answer
>> a) Ensuring that application data is encrypted at rest
>> c) Ensuring that users have received security training in the use of AWS services

<sub>관련: [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)  |  [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)</sub>

> [!question] Which AWS service can be used to manually launch instances based on resource requirements?
> a) Amazon EBS
> b) Amazon S3
> c) Amazon EC2
> d) Amazon ECS
>> [!success]- Answer
>> c) Amazon EC2

<sub>관련: [[amazon-ec2]] · [[amazon-ecs]] · [[amazon-s3]] · [[amazon-ebs]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[06-storage]]</sub>

> [!question] A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?
> a) Amazon EC2 Spot Instances
> b) Amazon EC2 Dedicated Instances
> c) Amazon EC2 On-Demand Instances
> d) Amazon EC2 Reserved Instances
>> [!success]- Answer
>> d) Amazon EC2 Reserved Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] The financial benefits of using AWS are: (Select TWO.)
> a) reduced Total Cost of Ownership (TCO).
> b) increased capital expenditure (capex).
> c) reduced operational expenditure (opex).
> d) deferred payment plans for startups.
> e) business credit lines for stratups.
>> [!success]- Answer
>> a) reduced Total Cost of Ownership (TCO).
>> c) reduced operational expenditure (opex).

> [!question] Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?
> a) Patching of the guest operating system
> b) Security awareness and training
> c) Physical and environmental controls
> d) Development of an IAM password policy
>> [!success]- Answer
>> c) Physical and environmental controls

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)
> a) AWS VPN
> b) Amazon Redshift
> c) API Gateway
> d) Amazon Direct Connect
>> [!success]- Answer
>> a) AWS VPN
>> d) Amazon Direct Connect

<sub>관련: [[amazon-redshift]] · [[amazon-vpc]] · [[aws-direct-connect]] · [[amazon-api-gateway]]  |  모듈 [[05-networking]], [[08-ai-ml-analytics]], [[13-well-architected]]</sub>

> [!question] A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?
> a) Amazon Elastic Compute Cloud (Amazon EC2)
> b) AWS Lambda
> c) Amazon DynamoDB
> d) AWS CodeCommit
>> [!success]- Answer
>> b) AWS Lambda

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-dynamodb]] · [[aws-codecommit]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[07-databases]]</sub>

> [!question] Which AWS service provides alerts when an AWS event may impact a company's AWS resources?
> a) AWS Personal Health Dashboard
> b) AWS Service Health Dashboard
> c) AWS Trusted Advisor
> d) AWS Infrastructure Event Management
>> [!success]- Answer
>> a) AWS Personal Health Dashboard

<sub>관련: [[aws-trusted-advisor]] · [[aws-health-dashboard]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which of the following are categories of AWS Trusted Advisor? (Select TWO.)
> a) Fault Tolerance
> b) Instance Usage
> c) Infrastructure
> d) Performance
> e) Storage Capacity
>> [!success]- Answer
>> a) Fault Tolerance
>> d) Performance

<sub>관련: [[aws-trusted-advisor]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking? - A. Amazon RDS
> b) Amazon EC2
> c) Amazon ElastiCache
> d) AWS Fargate
>> [!success]- Answer
>> b) Amazon EC2

<sub>관련: [[amazon-ec2]] · [[aws-fargate]] · [[amazon-rds]] · [[amazon-elasticache]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[07-databases]]</sub>

> [!question] A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?
> a) Moving from variable operational expense (opex) to upfront capital expense (capex).
> b) Moving from upfront capital expense (capex) to variable capital expense (capex).
> c) Moving from upfront capital expense (capex) to variable operational expense (opex).
> d) Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex)
>> [!success]- Answer
>> c) Moving from upfront capital expense (capex) to variable operational expense (opex).

> [!question] How should a customer forecast the future costs for running a new web application?
> a) Amazon Aurora Backtrack
> b) Amazon CloudWatch Billing Alarms
> c) AWS Simple Monthly Calculator
> d) AWS Cost and Usage report
>> [!success]- Answer
>> c) AWS Simple Monthly Calculator

<sub>관련: [[amazon-aurora]] · [[amazon-cloudwatch]] · [[aws-cost-and-usage-report]] · [[aws-pricing-calculator]]  |  모듈 [[07-databases]], [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which is the MINIMUM AWS Support plan that provides technical support through phone calls?
> a) Enterprise
> b) Business
> c) Developer
> d) Basic
>> [!success]- Answer
>> b) Business

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] According to the AWS shared responsibility model, what is the sole responsibility of AWS?
> a) Application security
> b) Edge location management
> c) Patch management
> d) Client-side data
>> [!success]- Answer
>> b) Edge location management

> [!question] Which AWS IAM feature is used to associate a set of permissions with multiple users?
> a) Multi-factor authentication
> b) Groups
> c) Password policies
> d) Access keys
>> [!success]- Answer
>> b) Groups

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Which of the following are benefits of the AWS Cloud? (Choose two.)
> a) Unlimited uptime
> b) Elasticity
> c) Agility
> d) Colocation
> e) Capital expenses
>> [!success]- Answer
>> b) Elasticity
>> c) Agility

> [!question] Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?
> a) Amazon Connect
> b) AWS Directory Service
> c) Amazon Pinpoint
> d) Amazon Rekognition
>> [!success]- Answer
>> b) AWS Directory Service

<sub>관련: [[amazon-rekognition]] · [[amazon-connect]] · [[aws-directory-service]]  |  모듈 [[05-networking]], [[08-ai-ml-analytics]]</sub>

> [!question] What are the multiple, isolated locations within an AWS Region that are connected by low-latency networks called?
> a) AWS Direct Connects
> b) Amazon VPCs
> c) Edge locations
> d) Availability Zones
>> [!success]- Answer
>> d) Availability Zones

<sub>관련: [[amazon-vpc]] · [[aws-direct-connect]]  |  모듈 [[05-networking]]</sub>

> [!question] Which of the following benefits does the AWS Compliance program provide to AWS customers? (Choose two.)
> a) It verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks.
> b) AWS is responsible for the maintenance of common compliance framework documentation.
> c) It assures customers that AWS is maintaining physical security and data protection.
> d) It ensures the use of compliance frameworks that are being used by other cloud providers.
> e) It will adopt new compliance frameworks as they become relevant to customer workloads.
>> [!success]- Answer
>> a) It verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks.
>> b) AWS is responsible for the maintenance of common compliance framework documentation.

<sub>관련: [참고](https://d0.awsstatic.com/whitepapers/compliance/AWS_Risk_and_Compliance_Whitepaper.pdf)  |  [참고](https://d0.awsstatic.com/whitepapers/compliance/AWS_Risk_and_Compliance_Whitepaper.pdf)</sub>

> [!question] Which of the following services provides on-demand access to AWS compliance reports?
> a) AWS IAM
> b) AWS Artifact
> c) Amazon GuardDuty
> d) AWS KMS
>> [!success]- Answer
>> b) AWS Artifact

<sub>관련: [[aws-iam]] · [[aws-kms]] · [[amazon-guardduty]] · [[aws-artifact]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?
> a) Security management of data center
> b) Patch management
> c) Configuration management
> d) User and access management
>> [!success]- Answer
>> d) User and access management

<sub>관련: [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)  |  [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)</sub>

> [!question] When comparing AWS Cloud with on-premises Total Cost of Ownership, which expenses must be considered? (Choose two.)
> a) Software development
> b) Project management
> c) Storage hardware
> d) Physical servers
> e) Antivirus software license
>> [!success]- Answer
>> c) Storage hardware
>> d) Physical servers

<sub>관련: [참고](https://aws.amazon.com/blogs/aws/the-new-aws-tco-calculator/)  |  [참고](https://aws.amazon.com/blogs/aws/the-new-aws-tco-calculator/)</sub>

> [!question] Under the shared responsibility model, which of the following tasks are the responsibility of the customer? (Choose two.)
> a) Maintaining the underlying Amazon EC2 hardware.
> b) Managing the VPC network access control lists.
> c) Encrypting data in transit and at rest.
> d) Replacing failed hard disk drives.
> e) Deploying hardware in different Availability Zones.
>> [!success]- Answer
>> b) Managing the VPC network access control lists.
>> c) Encrypting data in transit and at rest.

<sub>관련: [[amazon-ec2]] · [[amazon-vpc]]  |  모듈 [[02-cloud-computing]], [[05-networking]]</sub>

> [!question] Which scenarios represent the concept of elasticity on AWS? (Choose two.)
> a) Scaling the number of Amazon EC2 instances based on traffic.
> b) Resizing Amazon RDS instances as business needs change.
> c) Automatically directing traffic to less-utilized Amazon EC2 instances.
> d) Using AWS compliance documents to accelerate the compliance process.
> e) Having the ability to create and govern environments using code.
>> [!success]- Answer
>> a) Scaling the number of Amazon EC2 instances based on traffic.
>> b) Resizing Amazon RDS instances as business needs change.

<sub>관련: [[amazon-ec2]] · [[amazon-rds]]  |  모듈 [[02-cloud-computing]], [[07-databases]]  |  [참고](https://wa.aws.amazon.com/wat.concept.elasticity.en.html)</sub>

> [!question] When is it beneficial for a company to use a Spot Instance?
> a) When there is flexibility in when an application needs to run.
> b) When there are mission-critical workloads.
> c) When dedicated capacity is needed.
> d) When an instance should not be stopped.
>> [!success]- Answer
>> a) When there is flexibility in when an application needs to run.

> [!question] A company is considering moving its on-premises data center to AWS. What factors should be included in doing a Total Cost of Ownership (TCO) analysis? (Choose two.)
> a) Amazon EC2 instance availability
> b) Power consumption of the data center
> c) Labor costs to replace old servers
> d) Application developer time
> e) Database engine capacity
>> [!success]- Answer
>> b) Power consumption of the data center
>> c) Labor costs to replace old servers

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] How does AWS charge for AWS Lambda?
> a) Users bid on the maximum price they are willing to pay per hour.
> b) Users choose a 1-, 3- or 5-year upfront payment term.
> c) Users pay for the required permanent storage on a file system or in a database.
> d) Users pay based on the number of requests and consumed compute resources.
>> [!success]- Answer
>> d) Users pay based on the number of requests and consumed compute resources.

<sub>관련: [[aws-lambda]]  |  모듈 [[03-compute-services]]</sub>

> [!question] What function do security groups serve related Amazon Elastic Compute Cloud (Amazon EC2) instance security?
> a) Act as a virtual firewall for the Amazon EC2 instance.
> b) Secure AWS user accounts with AWS identity and Access Management (IAM) policies.
> c) Provide DDoS protection with AWS Shield.
> d) Use Amazon CloudFront to protect the Amazon EC2 instance.
>> [!success]- Answer
>> a) Act as a virtual firewall for the Amazon EC2 instance.

<sub>관련: [[amazon-ec2]] · [[amazon-cloudfront]] · [[aws-iam]] · [[aws-shield]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[09-security]]</sub>

> [!question] Which disaster recovery scenario offers the lowest probability of down time?
> a) Backup and restore
> b) Pilot light
> c) Warm standby
> d) Multi-site active-active
>> [!success]- Answer
>> d) Multi-site active-active
