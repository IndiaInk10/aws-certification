---
title: "모의고사 09회"
tags: [clf-c02, 문제은행, quiz]
exam: 9
문항수: 50
lang: en
---

# 모의고사 09회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/9)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?
> a) AWS Well-Architected Framework documentation.
> b) Amazon CloudFront.
> c) AWS CodeCommit.
> d) AWS Quick Start reference deployments.
>> [!success]- Answer
>> d) AWS Quick Start reference deployments.

<sub>관련: [[amazon-cloudfront]] · [[aws-well-architected-tool]] · [[aws-codecommit]]  |  모듈 [[05-networking]], [[13-well-architected]]</sub>

> [!question] What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?
> a) It simplifies relational database administration tasks.
> b) It provides 99.99999999999% reliability and durability.
> c) It automatically scales databases for loads.
> d) It enables users to dynamically adjust CPU and RAM resources.
>> [!success]- Answer
>> a) It simplifies relational database administration tasks.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] Which of the following AWS Cloud services can be used to run a customer-managed relational database?
> a) Amazon EC2.
> b) Amazon Route 53.
> c) Amazon ElastiCache.
> d) Amazon DynamoDB.
>> [!success]- Answer
>> a) Amazon EC2.

<sub>관련: [[amazon-ec2]] · [[amazon-dynamodb]] · [[amazon-elasticache]] · [[amazon-route-53]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[07-databases]]</sub>

> [!question] A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?
> a) Launch the instances across multiple Availability Zones in a single AWS Region.
> b) Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.
> c) Launch the instances in multiple AWS Regions but in the same Availability Zone.
> d) Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones.
>> [!success]- Answer
>> a) Launch the instances across multiple Availability Zones in a single AWS Region.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?
> a) A public and private key-pair.
> b) Amazon Inspector.
> c) AWS Identity and Access Management (IAM) policies.
> d) Security Groups.
>> [!success]- Answer
>> c) AWS Identity and Access Management (IAM) policies.

<sub>관련: [[amazon-s3]] · [[aws-iam]] · [[amazon-inspector]]  |  모듈 [[06-storage]], [[09-security]]</sub>

> [!question] Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)
> a) AWS VPN.
> b) Amazon Redshift.
> c) API Gateway.
> d) Amazon Direct Connect.
>> [!success]- Answer
>> a) AWS VPN.
>> d) Amazon Direct Connect.

<sub>관련: [[amazon-redshift]] · [[amazon-vpc]] · [[aws-direct-connect]] · [[amazon-api-gateway]]  |  모듈 [[05-networking]], [[08-ai-ml-analytics]], [[13-well-architected]]</sub>

> [!question] Which AWS service or feature can be used to monitor CPU usage?
> a) AWS CloudTrail.
> b) VPC Flow Logs.
> c) Amazon CloudWatch.
> d) AWS Config.
>> [!success]- Answer
>> c) Amazon CloudWatch.

<sub>관련: [[amazon-vpc]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-config]]  |  모듈 [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] Which task is AWS responsible for in the shared responsibility model for security and compliance?
> a) Granting access to individuals and services.
> b) Encrypting data in transit.
> c) Updating Amazon EC2 host firmware.
> d) Updating operating systems.
>> [!success]- Answer
>> c) Updating Amazon EC2 host firmware.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following security-related actions are available at no cost?
> a) Calling AWS Support.
> b) Contacting AWS Professional Services to request a workshop.
> c) Accessing forums, blogs, and whitepapers.
> d) Attending AWS classes at a local university.
>> [!success]- Answer
>> c) Accessing forums, blogs, and whitepapers.

<sub>모듈 [[09-security]], [[11-billing-support]]</sub>

> [!question] Which storage service can be used as a low-cost option for hosting static websites?
> a) Amazon Glacier.
> b) Amazon DynamoDB.
> c) Amazon Elastic File System (Amazon EFS).
> d) Amazon Simple Storage Service (Amazon S3).
>> [!success]- Answer
>> d) Amazon Simple Storage Service (Amazon S3).

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]] · [[amazon-efs]] · [[amazon-dynamodb]]  |  모듈 [[06-storage]], [[07-databases]]</sub>

> [!question] According to the AWS shared responsibility model what is the sole responsibility of AWS?
> a) Application security.
> b) Edge location management.
> c) Patch management.
> d) Client-side data.
>> [!success]- Answer
>> b) Edge location management.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)
> a) Multiple Availability Zones.
> b) Performance efficiency.
> c) Security.
> d) Encryption usage.
> e) High availability.
>> [!success]- Answer
>> b) Performance efficiency.
>> c) Security.

<sub>관련: [[aws-well-architected-tool]]  |  모듈 [[13-well-architected]]</sub>

> [!question] Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?
> a) AWS Trusted Advisor.
> b) Amazon Inspector.
> c) Amazon CloudWatch.
> d) AWS CloudTrail.
>> [!success]- Answer
>> a) AWS Trusted Advisor.

<sub>관련: [[amazon-inspector]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)
> a) Use manual monitoring.
> b) Use fixed servers.
> c) Implement loose coupling.
> d) Rely on individual components.
> e) Design for scalability.
>> [!success]- Answer
>> c) Implement loose coupling.
>> e) Design for scalability.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] When architecting cloud applications, which of the following are a key design principle?
> a) Use the largest instance possible.
> b) Provision capacity for peak load.
> c) Use the Scrum development process.
> d) Implement elasticity.
>> [!success]- Answer
>> d) Implement elasticity.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?
> a) Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.
> b) Enable automate patching for the instances using the Amazon RDS console.
> c) In AWS Config. configure a rule for the instances and the required patch level.
> d) Use AWS Systems Manager to automate database patching according to a schedule.
>> [!success]- Answer
>> d) Use AWS Systems Manager to automate database patching according to a schedule.

<sub>관련: [[amazon-ec2]] · [[amazon-rds]] · [[aws-config]] · [[aws-systems-manager]]  |  모듈 [[02-cloud-computing]], [[07-databases]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which mechanism allows developers to access AWS services from application code?
> a) AWS Software Development Kit.
> b) AWS Management Console.
> c) AWS CodePipeline.
> d) AWS Config.
>> [!success]- Answer
>> a) AWS Software Development Kit.

<sub>관련: [[aws-config]] · [[aws-codepipeline]]  |  모듈 [[10-monitoring-governance]], [[13-well-architected]]</sub>

> [!question] Which AWS feature will reduce the customer’s total cost of ownership (TCO)?
> a) Shared responsibility security model.
> b) Single tenancy.
> c) Elastic computing.
> d) Encryption.
>> [!success]- Answer
>> c) Elastic computing.

<sub>모듈 [[11-billing-support]], [[01-cloud-intro]]</sub>

> [!question] Which of the following is a benefit of using the AWS Cloud?
> a) Permissive security removes the administrative burden.
> b) Ability to focus on revenue-generating activities.
> c) Control over cloud network hardware.
> d) Choice of specific cloud hardware vendors.
>> [!success]- Answer
>> b) Ability to focus on revenue-generating activities.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which of the following are categories of AWS Trusted Advisor? (Select TWO)
> a) Fault Tolerance.
> b) Instance Usage.
> c) Infrastructure.
> d) Performance.
> e) Storage Capacity.
>> [!success]- Answer
>> a) Fault Tolerance.
>> d) Performance.

<sub>관련: [[aws-trusted-advisor]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] What is Amazon CloudWatch?
> a) A code repository with customizable build and team commit features.
> b) A metrics repository with customizable notification thresholds and channels.
> c) A security configuration repository with threat analytics.
> d) A rule repository of a web application firewall with automated vulnerability prevention features.
>> [!success]- Answer
>> b) A metrics repository with customizable notification thresholds and channels.

<sub>관련: [[aws-waf]] · [[amazon-cloudwatch]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO)
> a) Patching operating system components for Amazon Relational Database Server (Amazon RDS).
> b) Encrypting data on the client-side.
> c) Training the data center staff.
> d) Configuring Network Access Control Lists (ACL).
> e) Maintaining environmental controls within a data center.
>> [!success]- Answer
>> b) Encrypting data on the client-side.
>> d) Configuring Network Access Control Lists (ACL).

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] Under the shared responsibility model, which of the following is a shared control between a customer and AWS?
> a) Physical controls.
> b) Patch management.
> c) Zone security.
> d) Data center auditing.
>> [!success]- Answer
>> b) Patch management.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which AWS service is used to pay AWS bills, and monitor usage and budget costs?
> a) AWS Billing and Cost Management.
> b) Consolidated billing.
> c) Amazon CloudWatch.
> d) Amazon QuickSight.
>> [!success]- Answer
>> a) AWS Billing and Cost Management.

<sub>관련: [[amazon-quicksight]] · [[amazon-cloudwatch]] · [[aws-budgets]]  |  모듈 [[08-ai-ml-analytics]], [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] How do customers benefit from Amazon’s massive economies of scale?
> a) Periodic price reductions as the result of Amazon’s operational efficiencies.
> b) New Amazon EC2 instance types providing the latest hardware.
> c) The ability to scale up and down when needed.
> d) Increased reliability in the underlying hardware of Amazon EC2 instances.
>> [!success]- Answer
>> a) Periodic price reductions as the result of Amazon’s operational efficiencies.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?
> a) Service control policies (SCPs).
> b) Consolidated billing.
> c) All Upfront Reserved Instances.
> d) AWS Cost Explorer.
>> [!success]- Answer
>> b) Consolidated billing.

<sub>관련: [[aws-organizations]] · [[aws-cost-explorer]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which AWS services provide a way to extend an on-premises architecture to the aws cloud? (Select TWO)
> a) Amazon EBS.
> b) Amazon Connect.
> c) AWS Storage Gateway.
> d) Amazon CloudFront.
> e) AWS Direct Connect.
>> [!success]- Answer
>> c) AWS Storage Gateway.
>> e) AWS Direct Connect.

<sub>관련: [[amazon-ebs]] · [[aws-storage-gateway]] · [[amazon-cloudfront]] · [[aws-direct-connect]] · [[amazon-connect]]  |  모듈 [[05-networking]], [[06-storage]]</sub>

> [!question] Which of the following services will automatically scale with an expected increase in web traffic?
> a) AWS CodePipeline.
> b) Elastic Load Balancing.
> c) Amazon EBS.
> d) AWS Direct Connect.
>> [!success]- Answer
>> b) Elastic Load Balancing.

<sub>관련: [[elastic-load-balancing]] · [[amazon-ebs]] · [[aws-direct-connect]] · [[aws-codepipeline]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[06-storage]], [[13-well-architected]]</sub>

> [!question] Which service provides a virtually unlimited amount of online highly durable object storage?
> a) Amazon Redshift.
> b) Amazon Elastic File System (Amazon EFS).
> c) Amazon Elastic Container Service (Amazon ECS).
> d) Amazon S3.
>> [!success]- Answer
>> d) Amazon S3.

<sub>관련: [[amazon-ecs]] · [[amazon-s3]] · [[amazon-efs]] · [[amazon-redshift]]  |  모듈 [[03-compute-services]], [[06-storage]], [[08-ai-ml-analytics]]</sub>

> [!question] Which AWS feature should a customer leverage to achieve high availability of an application?
> a) AWS Direct Connect.
> b) Availability Zones.
> c) Data centers.
> d) Amazon Virtual Private Cloud (Amazon VPC).
>> [!success]- Answer
>> b) Availability Zones.

<sub>관련: [[amazon-vpc]] · [[aws-direct-connect]]  |  모듈 [[05-networking]]</sub>

> [!question] Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)
> a) AWS WAF.
> b) AWS Trusted Advisor.
> c) AWS Direct Connect.
> d) AWS Organizations.
> e) Network ACLs.
>> [!success]- Answer
>> a) AWS WAF.
>> e) Network ACLs.

<sub>관련: [[aws-direct-connect]] · [[aws-organizations]] · [[aws-waf]] · [[aws-trusted-advisor]]  |  모듈 [[05-networking]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following is a cloud architectural design principle?
> a) Scale up not out.
> b) Loosely couple components.
> c) Build monolithic systems.
> d) Use commercial database software.
>> [!success]- Answer
>> b) Loosely couple components.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?
> a) Amazon CloudWatch.
> b) AWS CloudTrail.
> c) AWS Config.
> d) AWS Health.
>> [!success]- Answer
>> b) AWS CloudTrail.

<sub>관련: [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-config]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] Where can AWS compliance and certification reports be downloaded?
> a) AWS Artifact.
> b) AWS Concierge.
> c) AWS Certificate Manager.
> d) AWS Trusted Advisor.
>> [!success]- Answer
>> a) AWS Artifact.

<sub>관련: [[aws-certificate-manager]] · [[aws-artifact]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] The financial benefits of using AWS are: (Select TWO)
> a) Reduced Total Cost of Ownership (TCO).
> b) Increased capital expenditure (capex).
> c) Reduced operational expenditure ( opex ).
> d) Deferred payment plans for startups.
> e) Business credit lines for startups.
>> [!success]- Answer
>> a) Reduced Total Cost of Ownership (TCO).
>> c) Reduced operational expenditure ( opex ).

<sub>모듈 [[01-cloud-intro]], [[11-billing-support]]</sub>

> [!question] Which AWS service can serve a static website?
> a) Amazon S3.
> b) Amazon Route 53.
> c) Amazon QuickSight.
> d) AWS X-Ray.
>> [!success]- Answer
>> a) Amazon S3.

<sub>관련: [[amazon-s3]] · [[amazon-route-53]] · [[amazon-quicksight]] · [[aws-x-ray]]  |  모듈 [[05-networking]], [[06-storage]], [[08-ai-ml-analytics]], [[13-well-architected]]</sub>

> [!question] What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)
> a) Companies can deploy applications in multiple AWS Regions to reduce latency.
> b) Amazon Translate automatically translates third-party website interfaces into multiple languages.
> c) Amazon CloudFront has multiple edge locations around the world to reduce latency.
> d) Amazon Comprehend allows users to build applications that can respond to user requests in many languages.
> e) Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency.
>> [!success]- Answer
>> a) Companies can deploy applications in multiple AWS Regions to reduce latency.
>> c) Amazon CloudFront has multiple edge locations around the world to reduce latency.

<sub>관련: [[elastic-load-balancing]] · [[amazon-cloudfront]] · [[amazon-comprehend]] · [[amazon-translate]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[08-ai-ml-analytics]]</sub>

> [!question] Which of the following are main components of the AWS global infrastructure? (Select TWO)
> a) Resource groups.
> b) Availability Zones.
> c) Security groups.
> d) Regions.
> e) Amazon Machine Images (AMIS).
>> [!success]- Answer
>> b) Availability Zones.
>> d) Regions.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] What is the AWS customer responsible for according to the AWS shared responsibility model?
> a) Physical access controls.
> b) Data encryption.
> c) Secure disposal of storage devices.
> d) Environmental risk management.
>> [!success]- Answer
>> b) Data encryption.

<sub>모듈 [[01-cloud-intro]], [[09-security]]</sub>

> [!question] If each department within a company has its own AWS account, what is one way to enable consolidated billing?
> a) Use AWS Budgets on each account to pay only to budget.
> b) Contact AWS Support for a monthly bill.
> c) Create an AWS Organization from the payer account and invite the other accounts to join.
> d) Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.
>> [!success]- Answer
>> c) Create an AWS Organization from the payer account and invite the other accounts to join.

<sub>관련: [[amazon-s3]] · [[amazon-redshift]] · [[aws-budgets]]  |  모듈 [[06-storage]], [[08-ai-ml-analytics]], [[11-billing-support]]</sub>

> [!question] What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?
> a) Project management.
> b) Antivirus software licensing.
> c) Data center security.
> d) Software development.
>> [!success]- Answer
>> c) Data center security.

<sub>모듈 [[11-billing-support]]</sub>

> [!question] What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?
> a) They require the customer to monitor and replace failing instances.
> b) They have better performance than customer-managed services.
> c) They simplify patching and updating underlying OSs.
> d) They do not require the customer to optimize instance type or size selections.
>> [!success]- Answer
>> c) They simplify patching and updating underlying OSs.

<sub>관련: [[amazon-rds]] · [[amazon-elasticache]]  |  모듈 [[07-databases]]</sub>

> [!question] Which services can be used across hybrid AWS Cloud architectures? (Select TWO)
> a) Amazon Route 53.
> b) Virtual Private Gateway.
> c) Classic Load Balancer.
> d) Auto Scaling.
> e) Amazon CloudWatch default metrics.
>> [!success]- Answer
>> a) Amazon Route 53.
>> b) Virtual Private Gateway.

<sub>관련: [[elastic-load-balancing]] · [[amazon-route-53]] · [[amazon-cloudwatch]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] Which statement best describes Elastic Load Balancing?
> a) It translates a domain name into an IP address using DNC.
> b) It distributes incoming application traffic across one or more Amazon EC2 instances.
> c) It collects metrics on connected Amazon EC2 instances.
> d) It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.
>> [!success]- Answer
>> b) It distributes incoming application traffic across one or more Amazon EC2 instances.

<sub>관련: [[elastic-load-balancing]] · [[amazon-ec2]] · [[amazon-translate]]  |  모듈 [[02-cloud-computing]], [[08-ai-ml-analytics]]</sub>

> [!question] Which of the following is a fast and reliable NoSQL database service?
> a) Amazon Redshift.
> b) Amazon RDS.
> c) Amazon DynamoDB.
> d) Amazon S3.
>> [!success]- Answer
>> c) Amazon DynamoDB.

<sub>관련: [[amazon-s3]] · [[amazon-rds]] · [[amazon-dynamodb]] · [[amazon-redshift]]  |  모듈 [[06-storage]], [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] Which AWS service would you use to obtain compliance reports and certificates?
> a) AWS Artifact.
> b) AWS Lambda.
> c) Amazon Inspector.
> d) AWS Certificate Manager.
>> [!success]- Answer
>> a) AWS Artifact.

<sub>관련: [[aws-lambda]] · [[aws-certificate-manager]] · [[amazon-inspector]] · [[aws-artifact]]  |  모듈 [[03-compute-services]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which AWS services are defined as global instead of regional? (Select TWO)
> a) Amazon Route 53.
> b) Amazon EC2.
> c) Amazon S3.
> d) Amazon CloudFront.
> e) Amazon DynamoDB.
>> [!success]- Answer
>> a) Amazon Route 53.
>> d) Amazon CloudFront.

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[amazon-dynamodb]] · [[amazon-route-53]] · [[amazon-cloudfront]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[06-storage]], [[07-databases]]</sub>

> [!question] How would an AWS customer easily apply common access controls to a large set of users?
> a) Apply an IAM policy to an IAM group.
> b) Apply an IAM policy to an IAM role.
> c) Apply the same IAM policy to all IAM users with access to the same workload.
> d) Apply an IAM policy to an Amazon Cognito user pool.
>> [!success]- Answer
>> a) Apply an IAM policy to an IAM group.

<sub>관련: [[aws-iam]] · [[amazon-cognito]]  |  모듈 [[09-security]]</sub>

> [!question] Which of the following is an important architectural design principle when designing cloud applications?
> a) Use multiple Availability Zones.
> b) Use tightly coupled components.
> c) Use open source software.
> d) Provision extra capacity.
>> [!success]- Answer
>> a) Use multiple Availability Zones.

<sub>모듈 [[13-well-architected]], [[04-global-infrastructure]]</sub>

> [!question] Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?
> a) AWS Server Migration Service.
> b) AWS Organizations.
> c) AWS Budgets.
> d) AWS Trusted Advisor.
>> [!success]- Answer
>> b) AWS Organizations.

<sub>관련: [[aws-organizations]] · [[aws-trusted-advisor]] · [[aws-budgets]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>
