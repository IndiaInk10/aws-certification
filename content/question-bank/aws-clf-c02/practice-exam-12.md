---
title: "모의고사 12회"
tags: [clf-c02, 문제은행, quiz]
exam: 12
문항수: 42
lang: en
---

# 모의고사 12회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/12)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?
> a) Availability Zone
> b) Edge location
> c) Region
> d) Private networking
>> [!success]- Answer
>> a) Availability Zone

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:
> a) The ability to bid for a lower hourly cost.
> b) Paying a daily rate regardless of time used.
> c) Paying only for time used.
> d) Pre-paying for instances and paying a lower hourly rate.
>> [!success]- Answer
>> c) Paying only for time used.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] What can assist in evaluating an application for migration to the cloud? (Select TWO)
> a) AWS Trusted Advisor.
> b) AWS Professional Services.
> c) AWS Systems Manager.
> d) AWS Partner Network (APN).
> e) AWS Secrets Manager.
>> [!success]- Answer
>> b) AWS Professional Services.
>> d) AWS Partner Network (APN).

<sub>관련: [[aws-secrets-manager]] · [[aws-trusted-advisor]] · [[aws-systems-manager]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] A characteristic of edge locations is that they:
> a) Host Amazon EC2 instances closer to users.
> b) Help lower latency and improve performance for users.
> c) Cache frequently changing data without reaching the origin server.
> d) Refresh data changes daily.
>> [!success]- Answer
>> b) Help lower latency and improve performance for users.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)
> a) Command line interface.
> b) On-premises.
> c) Software Development Kits.
> d) Software-as-a-service.
> e) Hybrid.
>> [!success]- Answer
>> a) Command line interface.
>> c) Software Development Kits.

<sub>모듈 [[02-cloud-computing]]</sub>

> [!question] What is a value proposition of the AWS Cloud?
> a) AWS is responsible for security in the AWS Cloud.
> b) No long-term contract is required.
> c) Provision new servers in days.
> d) AWS manages user applications in the AWS Cloud.
>> [!success]- Answer
>> b) No long-term contract is required.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?
> a) Amazon EC2 Spot Instances.
> b) Amazon EC2 Dedicated Instances.
> c) Amazon EC2 On-Demand Instances.
> d) Amazon EC2 Reserved Instances.
>> [!success]- Answer
>> d) Amazon EC2 Reserved Instances.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS service is used to track record, and audit configuration changes made to AWS resources?
> a) AWS Shield.
> b) AWS Config.
> c) AWS IAM.
> d) Amazon Inspector.
>> [!success]- Answer
>> b) AWS Config.

<sub>관련: [[aws-iam]] · [[aws-shield]] · [[amazon-inspector]] · [[aws-config]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?
> a) Fault tolerance.
> b) Global reach.
> c) Pay-as-you-go pricing.
> d) High availability.
>> [!success]- Answer
>> b) Global reach.

<sub>모듈 [[01-cloud-intro]], [[04-global-infrastructure]]</sub>

> [!question] How can one AWS account use Reserved Instances from another AWS account?
> a) By using Amazon EC2 Dedicated Instances.
> b) By using AWS Organizations consolidated billing.
> c) By using the AWS Cost Explorer tool.
> d) By using AWS Budgets.
>> [!success]- Answer
>> b) By using AWS Organizations consolidated billing.

<sub>관련: [[amazon-ec2]] · [[aws-organizations]] · [[aws-cost-explorer]] · [[aws-budgets]]  |  모듈 [[02-cloud-computing]], [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)
> a) AWS automatically distributes the data globally for higher durability.
> b) AWS will take care of operating the application.
> c) AWS makes it easy to architect for high availability.
> d) AWS can easily accommodate application demand changes.
> e) AWS takes care of application security patching.
>> [!success]- Answer
>> c) AWS makes it easy to architect for high availability.
>> d) AWS can easily accommodate application demand changes.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?
> a) Amazon RDS.
> b) Amazon EC2.
> c) Amazon ElastiCache.
> d) AWS Fargate.
>> [!success]- Answer
>> b) Amazon EC2.

<sub>관련: [[amazon-ec2]] · [[aws-fargate]] · [[amazon-rds]] · [[amazon-elasticache]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[07-databases]]</sub>

> [!question] AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)
> a) Implementing Amazon Rekognition.
> b) Using AWS Shield-protected resources.
> c) Blocking access with Security Groups.
> d) Using Multi-Factor Authentication (MFA).
> e) Enforcing password strength and expiration.
>> [!success]- Answer
>> d) Using Multi-Factor Authentication (MFA).
>> e) Enforcing password strength and expiration.

<sub>관련: [[amazon-rekognition]] · [[aws-iam]] · [[aws-shield]]  |  모듈 [[08-ai-ml-analytics]], [[09-security]]</sub>

> [!question] Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?
> a) Amazon Glacier
> b) AWS Snowball
> c) AWS Storage Gateway
> d) Amazon Elastic Block Storage (Amazon EBS)
>> [!success]- Answer
>> c) AWS Storage Gateway

<sub>관련: [[amazon-s3-glacier]] · [[amazon-ebs]] · [[aws-storage-gateway]] · [[aws-snow-family]]  |  모듈 [[06-storage]], [[12-migration]]</sub>

> [!question] Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?
> a) AWS Marketplace.
> b) Amazon Lumberyard.
> c) AWS Artifact.
> d) Amazon CloudSearch.
>> [!success]- Answer
>> a) AWS Marketplace.

<sub>관련: [[aws-artifact]] · [[aws-marketplace]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which of the following is a component of the AWS Global Infrastructure?
> a) Amazon Alexa.
> b) AWS Regions.
> c) Amazon Lightsail.
> d) AWS Organizations.
>> [!success]- Answer
>> b) AWS Regions.

<sub>관련: [[amazon-lightsail]] · [[aws-organizations]]  |  모듈 [[03-compute-services]], [[10-monitoring-governance]]</sub>

> [!question] Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?
> a) On-Demand Instances.
> b) Reserved Instances.
> c) Spot Instances.
> d) Convertible Reserved Instances.
>> [!success]- Answer
>> c) Spot Instances.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] A company wants to migrate its applications to a VPC on AWS These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)
> a) Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated
> b) Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC
> c) Use Amazon Athena to query data from the on-premises database servers
> d) Connect the company’s on-premises data center to AWS using AWS Direct Connect
> e) Leverage Amazon CloudFront to restrict access to static web content provided through the company’s on-premises web servers
>> [!success]- Answer
>> b) Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC
>> d) Connect the company’s on-premises data center to AWS using AWS Direct Connect

<sub>관련: [[amazon-vpc]] · [[amazon-cloudfront]] · [[aws-direct-connect]] · [[amazon-athena]] · [[aws-service-catalog]]  |  모듈 [[05-networking]], [[08-ai-ml-analytics]], [[10-monitoring-governance]]</sub>

> [!question] A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?
> a) Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.
> b) Run AWS Trusted Advisor and review the findings.
> c) Open the AWS IAM console and check the inbound rule filters for open access.
> d) In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access.
>> [!success]- Answer
>> b) Run AWS Trusted Advisor and review the findings.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[aws-iam]] · [[aws-config]] · [[aws-trusted-advisor]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following security-related services does AWS offer? (Select TWO)
> a) Multi-factor authentication physical tokens.
> b) AWS Trusted Advisor security checks.
> c) Data encryption.
> d) Automated penetration testing.
> e) Amazon S3 copyrighted content detection.
>> [!success]- Answer
>> b) AWS Trusted Advisor security checks.
>> c) Data encryption.

<sub>관련: [[amazon-s3]] · [[aws-trusted-advisor]]  |  모듈 [[06-storage]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)
> a) AWS WAF.
> b) Amazon DynamoDB.
> c) Amazon EC2.
> d) Amazon CloudFront.
> e) Amazon Inspector.
>> [!success]- Answer
>> a) AWS WAF.
>> d) Amazon CloudFront.

<sub>관련: [[amazon-ec2]] · [[amazon-dynamodb]] · [[amazon-cloudfront]] · [[aws-waf]] · [[amazon-inspector]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[07-databases]], [[09-security]]</sub>

> [!question] Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?
> a) Amazon Elastic Block Store (Amazon EBS).
> b) Amazon Machine Image.
> c) Amazon EC2 Systems Manager.
> d) Amazon AppStream 2.0.
>> [!success]- Answer
>> b) Amazon Machine Image.

<sub>관련: [[amazon-ec2]] · [[amazon-ebs]] · [[aws-systems-manager]] · [[amazon-appstream-2-0]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[09-security]], [[13-well-architected]]</sub>

> [!question] A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?
> a) Think parallel.
> b) Implement elasticity.
> c) Decouple your components.
> d) Design for failure.
>> [!success]- Answer
>> b) Implement elasticity.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?
> a) Easy and fast deployment of applications in multiple Regions around the world.
> b) Security of the AWS Cloud.
> c) Elasticity of the AWS Cloud.
> d) Lower variable costs due to massive economies of scale.
>> [!success]- Answer
>> c) Elasticity of the AWS Cloud.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] What can users access from AWS Artifact?
> a) AWS security and compliance documents.
> b) A download of configuration management details for all AWS resources.
> c) Training materials for AWS services.
> d) A security assessment of the applications deployed in the AWS Cloud.
>> [!success]- Answer
>> a) AWS security and compliance documents.

<sub>관련: [[aws-artifact]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] Compared with costs in traditional and virtualized data centers, AWS has:
> a) Greater variable costs and greater upfront costs.
> b) Fixed usage costs and lower upfront costs.
> c) Lower variable costs and greater upfront costs.
> d) Lower variable costs and lower upfront costs.
>> [!success]- Answer
>> d) Lower variable costs and lower upfront costs.

<sub>모듈 [[01-cloud-intro]], [[11-billing-support]]</sub>

> [!question] Which AWS service would a customer use with a static website to achieve tower latency and high transfer speeds?
> a) AWS Lambda.
> b) Amazon DynamoDB Accelerator.
> c) Amazon Route 53.
> d) Amazon CloudFront.
>> [!success]- Answer
>> d) Amazon CloudFront.

<sub>관련: [[aws-lambda]] · [[amazon-dynamodb]] · [[amazon-route-53]] · [[amazon-cloudfront]]  |  모듈 [[03-compute-services]], [[05-networking]], [[07-databases]]</sub>

> [!question] How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?
> a) They automatically add more instances across multiple AWS Regions based on global demand of the application.
> b) They automatically add or replace instances across multiple Availability Zones when the application needs it.
> c) They enable the application’s static content to reside closer to end users.
> d) They are able to distribute incoming requests across a tier of web server instances.
>> [!success]- Answer
>> b) They automatically add or replace instances across multiple Availability Zones when the application needs it.

<sub>관련: [[amazon-ec2-auto-scaling]] · [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?
> a) A public and private key-pair.
> b) Amazon Inspector.
> c) AWS Identity and Access Management (IAM) policies.
> d) Security Groups.
>> [!success]- Answer
>> c) AWS Identity and Access Management (IAM) policies.

<sub>관련: [[amazon-s3]] · [[aws-iam]] · [[amazon-inspector]]  |  모듈 [[06-storage]], [[09-security]]</sub>

> [!question] How should a customer forecast the future costs for running a new web application?
> a) Amazon Aurora Backtrack.
> b) Amazon CloudWatch Billing Alarms.
> c) AWS Simple Monthly Calculator.
> d) AWS Cost and Usage report.
>> [!success]- Answer
>> c) AWS Simple Monthly Calculator.

<sub>관련: [[amazon-aurora]] · [[amazon-cloudwatch]] · [[aws-cost-and-usage-report]] · [[aws-pricing-calculator]]  |  모듈 [[07-databases]], [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Where are AWS compliance documents, such as an SOC 1 report, located?
> a) Amazon Inspector.
> b) AWS CloudTrail.
> c) AWS Artifact.
> d) AWS Certificate Manager.
>> [!success]- Answer
>> c) AWS Artifact.

<sub>관련: [[aws-certificate-manager]] · [[amazon-inspector]] · [[aws-artifact]] · [[aws-cloudtrail]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following tasks is the responsibility of AWS?
> a) Encrypting client-side data.
> b) Configuring AWS Identity and Access Management (IAM) roles.
> c) Securing the Amazon EC2 hypervisor.
> d) Setting user password policies.
>> [!success]- Answer
>> c) Securing the Amazon EC2 hypervisor.

<sub>관련: [[amazon-ec2]] · [[aws-iam]]  |  모듈 [[02-cloud-computing]], [[09-security]]</sub>

> [!question] Under the shared responsibility model which of the following areas are the customer’s responsibility? (Select TWO)
> a) Firmware upgrades of network infrastructure.
> b) Patching of operating systems.
> c) Patching of the underlying hypervisor.
> d) Physical security of data centers.
> e) Configuration of the security group.
>> [!success]- Answer
>> b) Patching of operating systems.
>> e) Configuration of the security group.

<sub>모듈 [[01-cloud-intro]], [[09-security]]</sub>

> [!question] A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?
> a) Amazon Simple Storage Service (Amazon S3).
> b) Amazon DynamoDB.
> c) Amazon Kinesis.
> d) Amazon Redshift.
>> [!success]- Answer
>> d) Amazon Redshift.

<sub>관련: [[amazon-s3]] · [[amazon-dynamodb]] · [[amazon-redshift]] · [[amazon-kinesis]]  |  모듈 [[06-storage]], [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)
> a) Amazon EBS.
> b) AWS Direct Connect.
> c) Amazon CloudFront.
> d) AWS Storage Gateway.
> e) Amazon Connect.
>> [!success]- Answer
>> b) AWS Direct Connect.
>> d) AWS Storage Gateway.

<sub>관련: [[amazon-ebs]] · [[aws-storage-gateway]] · [[amazon-cloudfront]] · [[aws-direct-connect]] · [[amazon-connect]]  |  모듈 [[05-networking]], [[06-storage]]</sub>

> [!question] What are the advantages of the AWS Cloud (Select TWO)
> a) Fixed rate monthly cost.
> b) No need to guess capacity requirements.
> c) Increased speed to market.
> d) Increased upfront capital expenditure.
> e) Physical access to cloud data centers.
>> [!success]- Answer
>> b) No need to guess capacity requirements.
>> c) Increased speed to market.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?
> a) Users do not have to wait for infrastructure provisioning.
> b) The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.
> c) AWS takes over application configuration management on behalf of users.
> d) Users do not need to address security and compliance issues.
>> [!success]- Answer
>> a) Users do not have to wait for infrastructure provisioning.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)
> a) AWS Elastic Beanstalk.
> b) AWS OpsWorks.
> c) AWS CodeDeploy.
> d) AWS Batch.
> e) AWS X-Ray.
>> [!success]- Answer
>> b) AWS OpsWorks.
>> c) AWS CodeDeploy.

<sub>관련: [[aws-elastic-beanstalk]] · [[aws-batch]] · [[aws-codedeploy]] · [[aws-x-ray]] · [[aws-opsworks]]  |  모듈 [[03-compute-services]], [[13-well-architected]]</sub>

> [!question] What is an example of agility in the AWS Cloud?
> a) Access to multiple instance types.
> b) Access to managed services.
> c) Using Consolidated Billing to produce one bill.
> d) Decreased acquisition time for new compute resources.
>> [!success]- Answer
>> d) Decreased acquisition time for new compute resources.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?
> a) Amazon Inspector.
> b) AWS Web Application Firewall (AWS WAF).
> c) Elastic Load Balancing (ELB).
> d) AWS Shield.
>> [!success]- Answer
>> d) AWS Shield.

<sub>관련: [[elastic-load-balancing]] · [[aws-shield]] · [[aws-waf]] · [[amazon-inspector]]  |  모듈 [[02-cloud-computing]], [[09-security]]</sub>

> [!question] Which of the following are advantages of AWS consolidated billing? (Choose two)
> a) The ability to receive one bill for multiple accounts.
> b) Service limits increasing by default in all accounts.
> c) A fixed discount on the monthly bill.
> d) Potential volume discounts, as usage in all accounts is combined.
> e) The automatic extension of the master account’s AWS support plan to all accounts.
>> [!success]- Answer
>> a) The ability to receive one bill for multiple accounts.
>> d) Potential volume discounts, as usage in all accounts is combined.

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?
> a) Amazon Redshift.
> b) Amazon DynamoDB.
> c) Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.
> d) Amazon EC2 with Amazon Elastic Block Store (Amazon EBS).
>> [!success]- Answer
>> d) Amazon EC2 with Amazon Elastic Block Store (Amazon EBS).

<sub>관련: [[amazon-ec2]] · [[amazon-ebs]] · [[amazon-dynamodb]] · [[amazon-redshift]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[07-databases]], [[08-ai-ml-analytics]]</sub>
