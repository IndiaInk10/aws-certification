---
title: "모의고사 19회"
tags: [clf-c02, 문제은행, quiz]
exam: 19
문항수: 50
lang: en
---

# 모의고사 19회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/19)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?
> a) AWS Config
> b) AWS OpsWorks
> c) AWS SDK
> d) AWS Marketplace
>> [!success]- Answer
>> d) AWS Marketplace

<sub>관련: [[aws-config]] · [[aws-marketplace]] · [[aws-opsworks]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/mp/)</sub>

> [!question] Which AWS networking service enables a company to create a virtual network within AWS?
> a) AWS Config
> b) Amazon Route 53
> c) AWS Direct Connect
> d) Amazon Virtual Private Cloud (Amazon VPC.
>> [!success]- Answer
>> d) Amazon Virtual Private Cloud (Amazon VPC.

<sub>관련: [[amazon-vpc]] · [[amazon-route-53]] · [[aws-direct-connect]] · [[aws-config]]  |  모듈 [[05-networking]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/vpc/)</sub>

> [!question] Which of the following is AWS's responsibility under the AWS shared responsibility model?
> a) Configuring third-party applications
> b) Maintaining physical hardware
> c) Securing application access and data
> d) Managing custom Amazon Machine Images (AMIs)
>> [!success]- Answer
>> b) Maintaining physical hardware

<sub>관련: [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)  |  [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)</sub>

> [!question] Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?
> a) AWS Regions
> b) AWS edge locations
> c) AWS Availability Zones
> d) Amazon Virtual Private Cloud (Amazon VPC.
>> [!success]- Answer
>> b) AWS edge locations

<sub>관련: [[amazon-vpc]] · [[amazon-cloudfront]]  |  모듈 [[05-networking]]  |  [참고](https://aws.amazon.com/cloudfront/)</sub>

> [!question] How would a system administrator add an additional layer of login security to a user's AWS Management Console?
> a) Use AWS Cloud Directory
> b) Audit AWS Identity and Access Management (IAM) roles
> c) Enable Multi-Factor Authentication
> d) Enable AWS CloudTrail
>> [!success]- Answer
>> c) Enable Multi-Factor Authentication

<sub>관련: [[aws-iam]] · [[aws-cloudtrail]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/iam/details/mfa/)</sub>

> [!question] Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?
> a) Amazon CloudWatch
> b) AWS CloudTrail
> c) AWS X-Ray
> d) AWS Identity and Access Management (AWS IAM)
>> [!success]- Answer
>> b) AWS CloudTrail

<sub>관련: [[amazon-ec2]] · [[aws-iam]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-x-ray]]  |  모듈 [[02-cloud-computing]], [[09-security]], [[10-monitoring-governance]], [[13-well-architected]]  |  [참고](http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)</sub>

> [!question] Which service would you use to send alerts based on Amazon CloudWatch alarms?
> a) Amazon Simple Notification Service (Amazon SNS)
> b) AWS CloudTrail
> c) AWS Trusted Advisor
> d) Amazon Route 53
>> [!success]- Answer
>> a) Amazon Simple Notification Service (Amazon SNS)

<sub>관련: [[amazon-route-53]] · [[amazon-sns]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-trusted-advisor]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[10-monitoring-governance]]  |  [참고](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html)</sub>

> [!question] Where can a customer find information about prohibited actions on AWS infrastructure?
> a) AWS Trusted Advisor
> b) AWS Identity and Access Management (IAM)
> c) AWS Billing Console
> d) AWS Acceptable Use Policy
>> [!success]- Answer
>> d) AWS Acceptable Use Policy

<sub>관련: [[aws-iam]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/aup/)</sub>

> [!question] Which of the following is an example of how moving to the AWS Cloud reduces upfront cost?
> a) By replacing large variable costs with lower capital investments
> b) By replacing large capital investments with lower variable costs
> c) By allowing the provisioning of compute and storage at a fixed level to meet peak demand
> d) By replacing the repeated scaling of virtual servers with a simpler fixed-scale model
>> [!success]- Answer
>> b) By replacing large capital investments with lower variable costs

> [!question] When designing a typical three-tier web application, which AWS services and/or features improve availability and reduce the impact failures? (Choose two.)
> a) AWS Auto Scaling for Amazon EC2 instances
> b) Amazon VPC subnet ACLs to check the health of a service
> c) Distributed resources across multiple Availability Zones
> d) AWS Server Migration Service (AWS SMS) to move Amazon EC2 instances into a different Region
> e) Distributed resources across multiple AWS points of presence
>> [!success]- Answer
>> a) AWS Auto Scaling for Amazon EC2 instances
>> c) Distributed resources across multiple Availability Zones

<sub>관련: [[amazon-ec2]] · [[amazon-vpc]]  |  모듈 [[02-cloud-computing]], [[05-networking]]  |  [참고](https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf)</sub>

> [!question] Which cloud design principle aligns with AWS Cloud best practices?
> a) Create fixed dependencies among application components
> b) Aggregate services on a single instance
> c) Deploy applications in a single Availability Zone
> d) Distribute the compute load across multiple resources
>> [!success]- Answer
>> d) Distribute the compute load across multiple resources

> [!question] Which of the following are recommended practices for managing IAM users? (Choose two.)
> a) Require IAM users to change their passwords after a specified period of time
> b) Prevent IAM users from reusing previous passwords
> c) Recommend that the same password be used on AWS and other sites
> d) Require IAM users to store their passwords in raw text
> e) Disable multi-factor authentication (MFA) for IAM users
>> [!success]- Answer
>> a) Require IAM users to change their passwords after a specified period of time
>> b) Prevent IAM users from reusing previous passwords

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]  |  [참고](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)</sub>

> [!question] A company is migrating from on-premises data centers to the AWS Cloud and is looking for hands-on help with the project. How can the company get this support? (Choose two.)
> a) Ask for a quote from the AWS Marketplace team to perform a migration into the company's AWS account.
> b) Contact AWS Support and open a case for assistance
> c) Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company's AWS account
> d) Select a partner from the AWS Partner Network (APN) to assist with the migration
> e) Use Amazon Connect to create a new request for proposal (RFP) for expert assistance in migrating to the AWS Cloud.
>> [!success]- Answer
>> c) Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company's AWS account
>> d) Select a partner from the AWS Partner Network (APN) to assist with the migration

<sub>관련: [[amazon-connect]] · [[aws-marketplace]]  |  모듈 [[05-networking]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/solutions/aws-landing-zone/)</sub>

> [!question] How does the AWS Enterprise Support Concierge team help users?
> a) Supporting application development
> b) Providing architecture guidance
> c) Answering billing and account inquires
> d) Answering questions regarding technical support cases
>> [!success]- Answer
>> c) Answering billing and account inquires

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/plans/enterprise/)</sub>

> [!question] An application designed to span multiple Availability Zones is described as:
> a) being highly available
> b) having global reach
> c) using an economy of scale
> d) having elasticity
>> [!success]- Answer
>> a) being highly available

> [!question] A new service using AWS must be highly available. Yet, due to regulatory requirements, all of its Amazon EC2 instances must be located in a single geographic area. According to best practices, to meet these requirements, the EC2 instances must be placed in at least two:
> a) AWS Regions
> b) Availability Zones
> c) subnets
> d) placement groups
>> [!success]- Answer
>> b) Availability Zones

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS tool is used to compare the cost of running an application on-premises to running the application in the AWS Cloud?
> a) AWS Trusted Advisor
> b) AWS Simple Monthly Calculator
> c) AWS Pricing Calculator
> d) Cost Explorer
>> [!success]- Answer
>> c) AWS Pricing Calculator

<sub>관련: [[aws-trusted-advisor]] · [[aws-cost-explorer]] · [[aws-pricing-calculator]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/tco-calculator/)</sub>

> [!question] A company has multiple AWS accounts within AWS Organizations and wants to apply the Amazon EC2 Reserved Instances benefit to a single account only. Which action should be taken?
> a) Purchase the Reserved Instances from master payer account and turn off Reserved Instance sharing.
> b) Enable billing alerts in the AWS Billing and Cost Management console.
> c) Purchase the Reserved Instances in individual linked accounts and turn off Reserved Instance sharing from the payer level.
> d) Enable Reserved Instance sharing in the AWS Billing and Cost Management console.
>> [!success]- Answer
>> a) Purchase the Reserved Instances from master payer account and turn off Reserved Instance sharing.

<sub>관련: [[amazon-ec2]] · [[aws-organizations]]  |  모듈 [[02-cloud-computing]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/)</sub>

> [!question] Which situation should be reported to the AWS Abuse team?
> a) In Availability Zone has a service disruption
> b) An intrusion attempt is made from an AWS IP address
> c) A user has trouble accessing an Amazon S3 bucket from an AWS IP address
> d) A user needs to change payment methods due to a compromise
>> [!success]- Answer
>> b) An intrusion attempt is made from an AWS IP address

<sub>관련: [[amazon-s3]]  |  모듈 [[06-storage]]  |  [참고](https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/)</sub>

> [!question] A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base. Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose two.)
> a) Application Load Balancer
> b) AWS Global Accelerator
> c) AWS Direct Connect
> d) Amazon CloudFront
> e) AWS Lambda
>> [!success]- Answer
>> b) AWS Global Accelerator
>> d) Amazon CloudFront

<sub>관련: [[elastic-load-balancing]] · [[aws-lambda]] · [[amazon-cloudfront]] · [[aws-direct-connect]] · [[aws-global-accelerator]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[05-networking]]  |  [참고](https://aws.amazon.com/cloudfront/faqs/)</sub>

> [!question] Which AWS service or resource is serverless?
> a) AWS Lambda
> b) Amazon EC2 instances
> c) Amazon Lightsail
> d) Amazon ElastiCache
>> [!success]- Answer
>> a) AWS Lambda

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-lightsail]] · [[amazon-elasticache]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[07-databases]]  |  [참고](https://blogs.itemis.com/en/serverless-services-on-aws)</sub>

> [!question] Which of the following are components of Amazon VPC? (Choose two.)
> a) Objects
> b) Subnets
> c) Buckets
> d) Internet gateways
> e) Access key
>> [!success]- Answer
>> b) Subnets
>> d) Internet gateways

<sub>관련: [[amazon-vpc]]  |  모듈 [[05-networking]]  |  [참고](https://subscription.packtpub.com/book/virtualization_and_cloud/9781788293723/3/ch03lvl1sec26/vpc-components)</sub>

> [!question] AWS Budgets can be used to:
> a) prevent a given user from creating a resource
> b) send an alert when the utilization of Reserved Instances drops below a certain percentage
> c) set resource limits in AWS accounts to prevent overspending
> d) split an AWS bill across multiple forms of payment
>> [!success]- Answer
>> c) set resource limits in AWS accounts to prevent overspending

<sub>관련: [[aws-budgets]]  |  모듈 [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html)</sub>

> [!question] Which of the following will enhance the security of access to the AWS Management Console? (Choose two.)
> a) AWS Secrets Manager
> b) AWS Certificate Manager
> c) AWS Multi-Factor Authentication (AWS MFA)
> d) Security groups
> e) Password policies
>> [!success]- Answer
>> c) AWS Multi-Factor Authentication (AWS MFA)
>> e) Password policies

<sub>관련: [[aws-certificate-manager]] · [[aws-secrets-manager]]  |  모듈 [[09-security]]  |  [참고](https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/)</sub>

> [!question] The AWS Trusted Advisor checks include recommendations regarding which of the following? (Choose two.)
> a) Information on Amazon S3 bucket permissions
> b) AWS service outages
> c) Multi-factor authentication enabled on the AWS account root user
> d) Available software patches
> e) Number of users in the account
>> [!success]- Answer
>> a) Information on Amazon S3 bucket permissions
>> c) Multi-factor authentication enabled on the AWS account root user

<sub>관련: [[amazon-s3]] · [[aws-trusted-advisor]]  |  모듈 [[06-storage]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/)</sub>

> [!question] Which functions can users perform using AWS KMS?
> a) Create and manage AWS access keys for the AWS account root user
> b) Create and manage AWS access keys for an AWS account IAM user
> c) Create and manage keys for encryption and decryption of data
> d) Create and manage keys for multi-factor authentication
>> [!success]- Answer
>> c) Create and manage keys for encryption and decryption of data

<sub>관련: [[aws-iam]] · [[aws-kms]]  |  모듈 [[09-security]]  |  [참고](https://docs.aws.amazon.com/kms/latest/developerguide/control-access.html)</sub>

> [!question] How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Choose two.)
> a) It identifies software vulnerabilities in applications running on AWS
> b) It provides a list of cost optimization recommendations based on current AWS usage
> c) It detects potential security vulnerabilities caused by permissions settings on account resources
> d) It automatically corrects potential security issues caused by permissions settings on account resources
> e) It provides proactive alerting whenever an Amazon EC2 instance has been compromised
>> [!success]- Answer
>> b) It provides a list of cost optimization recommendations based on current AWS usage
>> c) It detects potential security vulnerabilities caused by permissions settings on account resources

<sub>관련: [[amazon-ec2]] · [[aws-trusted-advisor]]  |  모듈 [[02-cloud-computing]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following are advantages of the AWS Cloud? (Choose two.)
> a) AWS manages the maintenance of the cloud infrastructure
> b) AWS manages the security of applications built on AWS
> c) AWS manages capacity planning for physical servers
> d) AWS manages the development of applications on AWS
> e) AWS manages cost planning for virtual servers
>> [!success]- Answer
>> a) AWS manages the maintenance of the cloud infrastructure
>> c) AWS manages capacity planning for physical servers

<sub>관련: [참고](https://aws.amazon.com/compliance/data-center/controls/)  |  [참고](https://aws.amazon.com/compliance/data-center/controls/)</sub>

> [!question] A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?
> a) Performance efficiency
> b) Reliability
> c) Cost optimization
> d) Security
>> [!success]- Answer
>> b) Reliability

<sub>관련: [[amazon-rds]] · [[aws-well-architected-tool]]  |  모듈 [[07-databases]], [[13-well-architected]]</sub>

> [!question] Which AWS services provide a user with connectivity between the AWS Cloud and on-premises resources? (Choose two.)
> a) AWS VPN
> b) Amazon Connect
> c) Amazon Cognito
> d) AWS Direct Connect
> e) AWS Managed Services
>> [!success]- Answer
>> a) AWS VPN
>> d) AWS Direct Connect

<sub>관련: [[aws-direct-connect]] · [[amazon-connect]] · [[amazon-cognito]]  |  모듈 [[05-networking]]</sub>

> [!question] Which AWS service is used to pay AWS bills, and monitor usage and budget costs?
> a) AWS Billing and Cost Management
> b) Consolidated billing
> c) Amazon CloudWatch
> d) Amazon QuickSight
>> [!success]- Answer
>> a) AWS Billing and Cost Management

<sub>관련: [[amazon-quicksight]] · [[amazon-cloudwatch]] · [[aws-budgets]]  |  모듈 [[08-ai-ml-analytics]], [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html)</sub>

> [!question] Which element of the AWS global infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, which are housed in separate facilities?
> a) AWS Regions
> b) Availability Zones
> c) Edge locations
> d) Amazon CloudFront
>> [!success]- Answer
>> b) Availability Zones

<sub>관련: [[amazon-cloudfront]]  |  모듈 [[05-networking]]</sub>

> [!question] Which Amazon VPC feature enables users to capture information about the IP traffic that reaches Amazon EC2 instances?
> a) Security groups
> b) Elastic network interfaces
> c) Network ACLs
> d) VPC Flow Logs
>> [!success]- Answer
>> d) VPC Flow Logs

<sub>관련: [[amazon-ec2]] · [[amazon-vpc]]  |  모듈 [[02-cloud-computing]], [[05-networking]]</sub>

> [!question] Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?
> a) Amazon AutoScaling
> b) Amazon Redshift
> c) AWS CloudTrail
> d) AWS Lambda
>> [!success]- Answer
>> a) Amazon AutoScaling

<sub>관련: [[amazon-ec2-auto-scaling]] · [[aws-lambda]] · [[amazon-redshift]] · [[aws-cloudtrail]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[08-ai-ml-analytics]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/blogs/aws/category/auto-scaling/)</sub>

> [!question] AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?
> a) AWS Trusted Advisor
> b) AWS Support case
> c) Concierge team
> d) Amazon Connect
>> [!success]- Answer
>> c) Concierge team

<sub>관련: [[amazon-connect]] · [[aws-trusted-advisor]] · [[aws-support-plans]]  |  모듈 [[05-networking]], [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/plans/)</sub>

> [!question] A company wants to migrate a MySQL database to AWS but does not have the budget for Database Administrators to handle routine tasks including provisioning, patching, and performing backups. Which AWS service will support this use case?
> a) Amazon RDS
> b) Amazon DynamoDB
> c) Amazon DocumentDB
> d) Amazon ElastiCache
>> [!success]- Answer
>> a) Amazon RDS

<sub>관련: [[amazon-rds]] · [[amazon-dynamodb]] · [[amazon-elasticache]] · [[amazon-documentdb]] · [[aws-budgets]]  |  모듈 [[07-databases]], [[11-billing-support]]</sub>

> [!question] A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?
> a) Contact an AWS Account Manager to sign a new contract
> b) Move an Availability Zone to the new Region
> c) Begin deploying resources in the second Region
> d) Download the AWS Management Console for the new Region
>> [!success]- Answer
>> c) Begin deploying resources in the second Region

> [!question] A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. Which Amazon EC2 instance pricing option will meet these requirements?
> a) Dedicated Hosts
> b) Dedicated Instances
> c) Spot Instances
> d) Reserved Instances
>> [!success]- Answer
>> a) Dedicated Hosts

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/ec2/dedicated-hosts/)</sub>

> [!question] Which AWS service will provide a way to generate encryption keys that can be used to encrypt data? (Choose two.)
> a) Amazon Macie
> b) AWS Certificate Manager
> c) AWS Key Management Service (AWS KMS)
> d) AWS Secrets Manager
> e) AWS CloudHSM
>> [!success]- Answer
>> c) AWS Key Management Service (AWS KMS)
>> e) AWS CloudHSM

<sub>관련: [[aws-kms]] · [[aws-cloudhsm]] · [[aws-certificate-manager]] · [[aws-secrets-manager]] · [[amazon-macie]]  |  모듈 [[09-security]]</sub>

> [!question] A company is planning to migrate from on-premises to the AWS Cloud. Which AWS tool or service provides detailed reports on estimated cost savings after migration?
> a) AWS Total Cost of Ownership (TCO) Calculator
> b) Cost Explorer
> c) AWS Budgets
> d) AWS Migration Hub
>> [!success]- Answer
>> a) AWS Total Cost of Ownership (TCO) Calculator

<sub>관련: [[aws-cost-explorer]] · [[aws-budgets]] · [[aws-migration-hub]]  |  모듈 [[11-billing-support]], [[12-migration]]</sub>

> [!question] What can assist in evaluating an application for migration to the cloud? (Choose two.)
> a) AWS Trusted Advisor
> b) AWS Professional Services
> c) AWS Systems Manager
> d) AWS Partner Network (APN)
> e) AWS Secrets Manager
>> [!success]- Answer
>> b) AWS Professional Services
>> d) AWS Partner Network (APN)

<sub>관련: [[aws-secrets-manager]] · [[aws-trusted-advisor]] · [[aws-systems-manager]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which AWS service helps users meet contractual and regulatory compliance requirements for data security by using dedicated hardware appliances within the AWS Cloud?
> a) AWS Secrets Manager
> b) AWS CloudHSM
> c) AWS Key Management Service (AWS KMS)
> d) AWS Directory Service
>> [!success]- Answer
>> b) AWS CloudHSM

<sub>관련: [[aws-directory-service]] · [[aws-kms]] · [[aws-cloudhsm]] · [[aws-secrets-manager]]  |  모듈 [[09-security]]</sub>

> [!question] Under the AWS shared responsibility model, the customer manages which of the following? (Choose two.)
> a) Decommissioning of physical storage devices
> b) Security group and ACL configuration
> c) Patch management of an Amazon RDS instance operating system
> d) Controlling physical access to data centers
> e) Patch management of an Amazon EC2 instance operating system
>> [!success]- Answer
>> b) Security group and ACL configuration
>> e) Patch management of an Amazon EC2 instance operating system

<sub>관련: [[amazon-ec2]] · [[amazon-rds]]  |  모듈 [[02-cloud-computing]], [[07-databases]]  |  [참고](https://www.whizlabs.com/blog/aws-security-shared-responsibility/)</sub>

> [!question] Which AWS service is suitable for an event-driven workload?
> a) Amazon EC2
> b) AWS Elastic Beanstalk
> c) AWS Lambda
> d) Amazon Lumberyard
>> [!success]- Answer
>> c) AWS Lambda

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[aws-elastic-beanstalk]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]]</sub>

> [!question] What is a value proposition of the AWS Cloud?
> a) AWS is responsible for security in the AWS Cloud
> b) No long-term contract is required
> c) Provision new servers in days
> d) AWS manages user applications in the AWS Cloud
>> [!success]- Answer
>> b) No long-term contract is required

<sub>관련: [참고](https://d1.awsstatic.com/whitepapers/aws-whitepaper-business-value-of-aws.pdf)  |  [참고](https://d1.awsstatic.com/whitepapers/aws-whitepaper-business-value-of-aws.pdf)</sub>

> [!question] What is a characteristic of Amazon S3 cross-region replication?
> a) Both source and destination S3 buckets must have versioning disabled
> b) The source and destination S3 buckets cannot be in different AWS Regions
> c) S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts
> d) The source S3 bucket owner must have the source and destination AWS Regions disabled for their account
>> [!success]- Answer
>> c) S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts

<sub>관련: [[amazon-s3]]  |  모듈 [[06-storage]]  |  [참고](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html)</sub>

> [!question] What is a user responsible for when running an application in the AWS Cloud? - A. Managing physical hardware
> b) Updating the underlying hypervisor
> c) Providing a list of users approved for data center access
> d) Managing application software updates
>> [!success]- Answer
>> d) Managing application software updates

<sub>관련: [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)  |  [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)</sub>

> [!question] A company that does business online needs to quickly deliver new functionality in an iterative manner, minimizing the time to market. Which AWS Cloud feature can provide this?
> a) Elasticity
> b) High availability
> c) Agility
> d) Reliability
>> [!success]- Answer
>> c) Agility

<sub>관련: [참고](https://aws.amazon.com/devops/partner-solutions/)  |  [참고](https://aws.amazon.com/devops/partner-solutions/)</sub>

> [!question] Which features or services can be used to monitor costs and expenses for an AWS account? (Choose two.)
> a) AWS Cost and Usage report
> b) AWS product pages
> c) AWS Simple Monthly Calculator
> d) Billing alerts and Amazon CloudWatch alarms
> e) AWS Price List API
>> [!success]- Answer
>> a) AWS Cost and Usage report
>> d) Billing alerts and Amazon CloudWatch alarms

<sub>관련: [[amazon-cloudwatch]] · [[aws-cost-and-usage-report]] · [[aws-pricing-calculator]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html)</sub>

> [!question] Amazon Route 53 enables users to:
> a) encrypt data in transit
> b) register DNS domain names
> c) generate and manage SSL certificates
> d) establish a dedicated network connection to AWS
>> [!success]- Answer
>> b) register DNS domain names

<sub>관련: [[amazon-route-53]]  |  모듈 [[05-networking]]  |  [참고](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)</sub>
