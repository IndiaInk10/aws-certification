---
title: "모의고사 21회"
tags: [clf-c02, 문제은행, quiz]
exam: 21
문항수: 50
---

# 모의고사 21회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/21)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?
> a) Amazon RDS
> b) Amazon DynamoDB
> c) Amazon Aurora
> d) Amazon Redshift
>> [!success]- Answer
>> b) Amazon DynamoDB

<sub>관련: [[amazon-rds]] · [[amazon-aurora]] · [[amazon-dynamodb]] · [[amazon-redshift]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]]  |  [참고](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.html)</sub>

> [!question] A Cloud Practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas. Which of the following meets these requirements?
> a) AWS Accounts
> b) AWS Regions
> c) Availability Zones
> d) Edge locations
>> [!success]- Answer
>> b) AWS Regions

<sub>관련: [참고](https://www.botmetric.com/blog/having-a-disaster-recovery-plan-is-pivotal-the-dos-and-donts-on-aws-cloud/)  |  [참고](https://www.botmetric.com/blog/having-a-disaster-recovery-plan-is-pivotal-the-dos-and-donts-on-aws-cloud/)</sub>

> [!question] Which features and benefits does the AWS Organizations service provide? (Choose two.)
> a) Establishing real-time communications between members of an internal team
> b) Facilitating the use of NoSQL databases
> c) Providing automated security checks
> d) Implementing consolidated billing
> e) Enforcing the governance of AWS accounts
>> [!success]- Answer
>> d) Implementing consolidated billing
>> e) Enforcing the governance of AWS accounts

<sub>관련: [[aws-organizations]]  |  모듈 [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/organizations/)</sub>

> [!question] Which AWS service is used to automate configuration management using Chef and Puppet?
> a) AWS Config
> b) AWS OpsWorks
> c) AWS CloudFormation
> d) AWS Systems Manager
>> [!success]- Answer
>> b) AWS OpsWorks

<sub>관련: [[aws-config]] · [[aws-cloudformation]] · [[aws-systems-manager]] · [[aws-opsworks]]  |  모듈 [[04-global-infrastructure]], [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/opsworks/)</sub>

> [!question] Which tool is best suited for combining the billing of AWS accounts that were previously independent from one another?
> a) Detailed billing report
> b) Consolidated billing
> c) AWS Cost and Usage report
> d) Cost allocation report
>> [!success]- Answer
>> b) Consolidated billing

<sub>관련: [[aws-cost-and-usage-report]]  |  [참고](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)</sub>

> [!question] The AWS Total Cost of Ownership (TCO) Calculator is used to:
> a) receive reports that break down AWS Cloud compute costs by duration, resource, or tags
> b) estimate savings when comparing the AWS Cloud to an on-premises environment
> c) estimate a monthly bill for the AWS Cloud resources that will be used
> d) enable billing alerts to monitor actual AWS costs compared to estimated costs
>> [!success]- Answer
>> b) estimate savings when comparing the AWS Cloud to an on-premises environment

<sub>관련: [참고](https://aws.amazon.com/tco-calculator/)  |  [참고](https://aws.amazon.com/tco-calculator/)</sub>

> [!question] Which AWS services can be used to provide network connectivity between an on-premises network and a VPC? (Choose two.)
> a) Amazon Route 53
> b) AWS Direct Connect
> c) AWS Data Pipeline
> d) AWS VPN
> e) Amazon Connect
>> [!success]- Answer
>> b) AWS Direct Connect
>> d) AWS VPN

<sub>관련: [[amazon-route-53]] · [[aws-direct-connect]] · [[amazon-connect]]  |  모듈 [[05-networking]]  |  [참고](https://aws.amazon.com/directconnect/faqs/)</sub>

> [!question] Under the AWS shared responsibility model, which of the following are customer responsibilities? (Choose two.)
> a) Setting up server-side encryption on an Amazon S3 bucket
> b) Amazon RDS instance patching
> c) Network and firewall configurations
> d) Physical security of data center facilities
> e) Compute capacity availability
>> [!success]- Answer
>> a) Setting up server-side encryption on an Amazon S3 bucket
>> c) Network and firewall configurations

<sub>관련: [[amazon-s3]] · [[amazon-rds]]  |  모듈 [[06-storage]], [[07-databases]]  |  [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)</sub>

> [!question] What is the MINIMUM AWS Support plan level that will provide users with access to the AWS Support API?
> a) Developer
> b) Enterprise
> c) Business
> d) Basic
>> [!success]- Answer
>> c) Business

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/plans/)</sub>

> [!question] A company has deployed several relational databases on Amazon EC2 instances. Every month, the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?
> a) Connect to each database instance on a monthly basis, and download and apply the necessary security patches from the vendor.
> b) Enable automatic patching for the instances using the Amazon RDS console.
> c) In AWS Config, configure a rule for the instances and the required patch level.
> d) Use AWS Systems Manager to automate database patching according to a schedule.
>> [!success]- Answer
>> d) Use AWS Systems Manager to automate database patching according to a schedule.

<sub>관련: [[amazon-ec2]] · [[amazon-rds]] · [[aws-config]] · [[aws-systems-manager]]  |  모듈 [[02-cloud-computing]], [[07-databases]], [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/rds/faqs/)</sub>

> [!question] A company wants to use Amazon Elastic Compute Cloud (Amazon EC2) to deploy a global commercial application. The deployment solution should be built with the highest redundancy and fault tolerance. Based on this situation, the Amazon EC2 instances should be deployed:
> a) in a single Availability Zone in one AWS Region
> b) with multiple Elastic Network Interfaces belonging to different subnets
> c) across multiple Availability Zones in one AWS Region
> d) across multiple Availability Zones in two AWS Regions
>> [!success]- Answer
>> c) across multiple Availability Zones in one AWS Region

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://jayendrapatil.com/aws-high-availability-fault-tolerance-architecture-certification/)</sub>

> [!question] A company has an application with users in both Australia and Brazil. All the company infrastructure is currently provisioned in the Asia Pacific (Sydney) Region in Australia, and Brazilian users are experiencing high latency. What should the company do to reduce latency?
> a) Implement AWS Direct Connect for users in Brazil
> b) Provision resources in the South America (São Paulo) Region in Brazil.
> c) Use AWS Transit Gateway to quickly route users from Brazil to the application
> d) Launch additional Amazon EC2 instances in Sydney to handle the demand
>> [!success]- Answer
>> b) Provision resources in the South America (São Paulo) Region in Brazil.

<sub>관련: [[amazon-ec2]] · [[aws-direct-connect]] · [[aws-transit-gateway]]  |  모듈 [[02-cloud-computing]], [[05-networking]]  |  [참고](https://aws.amazon.com/transit-gateway/)</sub>

> [!question] An Amazon EC2 instance runs only when needed yet must remain active for the duration of the process. What is the most appropriate purchasing option?
> a) Dedicated Instances
> b) Spot Instances
> c) On-Demand Instances
> d) Reserved Instances
>> [!success]- Answer
>> c) On-Demand Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS dashboard displays relevant and timely information to help users manage events in progress, and provides proactive notifications to help plan for scheduled activities?
> a) AWS Service Health Dashboard
> b) AWS Personal Health Dashboard
> c) AWS Trusted Advisor dashboard
> d) Amazon CloudWatch dashboard
>> [!success]- Answer
>> b) AWS Personal Health Dashboard

<sub>관련: [[amazon-cloudwatch]] · [[aws-trusted-advisor]] · [[aws-health-dashboard]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/)</sub>

> [!question] Which AWS hybrid storage service enables a user's on-premises applications to seamlessly use AWS Cloud storage?
> a) AWS Backup
> b) Amazon Connect
> c) AWS Direct Connect
> d) AWS Storage Gateway
>> [!success]- Answer
>> d) AWS Storage Gateway

<sub>관련: [[aws-storage-gateway]] · [[aws-backup]] · [[aws-direct-connect]] · [[amazon-connect]]  |  모듈 [[05-networking]], [[06-storage]], [[07-databases]]  |  [참고](https://aws.amazon.com/storagegateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc)</sub>

> [!question] Which of the following acts as a virtual firewall at the Amazon EC2 instance level to control traffic for one or more instances?
> a) Access keys
> b) Virtual private gateways
> c) Security groups
> d) Access Control Lists (ACL)
>> [!success]- Answer
>> c) Security groups

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)</sub>

> [!question] What is the most efficient way to establish network connectivity from on-premises to multiple VPCs in different AWS Regions?
> a) Use AWS Direct Connect
> b) Use AWS VPN
> c) Use AWS Client VPN
> d) Use an AWS Transit Gateway
>> [!success]- Answer
>> d) Use an AWS Transit Gateway

<sub>관련: [[aws-direct-connect]] · [[aws-transit-gateway]]  |  모듈 [[05-networking]]  |  [참고](https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf)</sub>

> [!question] Which AWS Support plan provides access to architectural and operational reviews, as well as 24/7 access to Senior Cloud Support Engineers through email, online chat, and phone?
> a) Basic
> b) Business
> c) Developer
> d) Enterprise
>> [!success]- Answer
>> d) Enterprise

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/plans/enterprise/)</sub>

> [!question] Which AWS service or feature helps restrict the AWS services, resources, and individual API actions the users and roles in each member account can access?
> a) Amazon Cognito
> b) AWS Organizations
> c) AWS Shield
> d) AWS Firewall Manager
>> [!success]- Answer
>> b) AWS Organizations

<sub>관련: [[aws-organizations]] · [[amazon-cognito]] · [[aws-shield]] · [[aws-firewall-manager]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)</sub>

> [!question] What is the best resource for a user to find compliance-related information and reports about AWS?
> a) AWS Artifact
> b) AWS Marketplace
> c) Amazon Inspector
> d) AWS Support
>> [!success]- Answer
>> a) AWS Artifact

<sub>관련: [[amazon-inspector]] · [[aws-artifact]] · [[aws-marketplace]]  |  모듈 [[09-security]], [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/compliance/faq/)</sub>

> [!question] Which Amazon S3 storage class is optimized to provide access to data with lower resiliency requirements, but rapid access when needed such as duplicate backups?
> a) Amazon S3 Standard
> b) Amazon S3 Glacier Deep Archive
> c) Amazon S3 One Zone-Infrequent Access
> d) Amazon S3 Glacier
>> [!success]- Answer
>> c) Amazon S3 One Zone-Infrequent Access

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]]  |  모듈 [[06-storage]]  |  [참고](https://aws.amazon.com/s3/storage-classes/)</sub>

> [!question] What is an Availability Zone in AWS?
> a) One or more physical data centers
> b) A completely isolated geographic location
> c) One or more edge locations based around the world
> d) A data center location with a single source of power and networking
>> [!success]- Answer
>> a) One or more physical data centers

<sub>관련: [참고](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)  |  [참고](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)</sub>

> [!question] Which AWS services can be used as infrastructure automation tools? (Choose two.)
> a) AWS CloudFormation
> b) Amazon CloudFront
> c) AWS Batch
> d) AWS OpsWorks
> e) Amazon QuickSight
>> [!success]- Answer
>> a) AWS CloudFormation
>> d) AWS OpsWorks

<sub>관련: [[aws-batch]] · [[amazon-cloudfront]] · [[amazon-quicksight]] · [[aws-cloudformation]] · [[aws-opsworks]]  |  모듈 [[03-compute-services]], [[04-global-infrastructure]], [[05-networking]], [[08-ai-ml-analytics]]  |  [참고](https://blog.newrelic.com/engineering/best-cloud-infrastructure-automation-tools/)</sub>

> [!question] Which AWS service enables users to create copies of resources across AWS Regions?
> a) Amazon ElastiCache
> b) AWS CloudFormation
> c) AWS CloudTrail
> d) AWS Systems Manager
>> [!success]- Answer
>> b) AWS CloudFormation

<sub>관련: [[amazon-elasticache]] · [[aws-cloudtrail]] · [[aws-cloudformation]] · [[aws-systems-manager]]  |  모듈 [[04-global-infrastructure]], [[07-databases]], [[09-security]], [[10-monitoring-governance]]  |  [참고](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html)</sub>

> [!question] A user would like to encrypt data that is received, stored, and managed by AWS CloudTrail. Which AWS service will provide this capability?
> a) AWS Secrets Manager
> b) AWS Systems Manager
> c) AWS Key Management Service (AWS KMS)
> d) AWS Certificate Manager
>> [!success]- Answer
>> c) AWS Key Management Service (AWS KMS)

<sub>관련: [[aws-kms]] · [[aws-certificate-manager]] · [[aws-secrets-manager]] · [[aws-cloudtrail]] · [[aws-systems-manager]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/data-protection.html)</sub>

> [!question] Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?
> a) Easy and fast deployment of applications in multiple Regions around the world
> b) Security of the AWS Cloud
> c) Elasticity of the AWS Cloud
> d) Lower variable costs due to massive economies of scale
>> [!success]- Answer
>> c) Elasticity of the AWS Cloud

> [!question] What credential components are required to gain programmatic access to an AWS account? (Choose two.)
> a) An access key ID
> b) A primary key
> c) A secret access key
> d) A user ID
> e) A secondary key
>> [!success]- Answer
>> a) An access key ID
>> c) A secret access key

<sub>관련: [참고](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html)  |  [참고](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html)</sub>

> [!question] Which of the following are AWS compute services? (Select two.)
> a) Amazon Lightsail
> b) AWS Systems Manager
> c) AWS CloudFormation
> d) AWS Batch
> e) Amazon Inspector
>> [!success]- Answer
>> a) Amazon Lightsail
>> d) AWS Batch

<sub>관련: [[amazon-lightsail]] · [[aws-batch]] · [[amazon-inspector]] · [[aws-cloudformation]] · [[aws-systems-manager]]  |  모듈 [[03-compute-services]], [[04-global-infrastructure]], [[09-security]]  |  [참고](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html)</sub>

> [!question] How can a company separate costs for network traffic, Amazon EC2, Amazon S3, and other AWS services by department?
> a) Add department-specific tags to each resource
> b) Create a separate VPC for each department
> c) Create a separate AWS account for each department
> d) Use AWS Organizations
>> [!success]- Answer
>> c) Create a separate AWS account for each department

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[amazon-vpc]] · [[aws-organizations]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[06-storage]], [[10-monitoring-governance]]</sub>

> [!question] What is a benefit of consolidated billing for AWS accounts?
> a) Access to AWS Personal Health Dashboard
> b) Combined usage volume discounts
> c) Improved account security
> d) Centralized AWS IAM
>> [!success]- Answer
>> b) Combined usage volume discounts

<sub>관련: [[aws-iam]] · [[aws-health-dashboard]]  |  모듈 [[09-security]], [[11-billing-support]]  |  [참고](https://jayendrapatil.com/aws-consolidated-billing/)</sub>

> [!question] Which AWS service will allow a user to set custom cost and usage limits, and will alert when the thresholds are exceeded?
> a) AWS Organizations
> b) AWS Budgets
> c) Cost Explorer
> d) AWS Trusted Advisor
>> [!success]- Answer
>> b) AWS Budgets

<sub>관련: [[aws-organizations]] · [[aws-trusted-advisor]] · [[aws-cost-explorer]] · [[aws-budgets]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/)</sub>

> [!question] Which AWS service provides the ability to detect inadvertent data leaks of personally identifiable information (PII) and user credential data?
> a) Amazon GuardDuty
> b) Amazon Inspector
> c) Amazon Macie
> d) AWS Shield
>> [!success]- Answer
>> c) Amazon Macie

<sub>관련: [[aws-shield]] · [[amazon-guardduty]] · [[amazon-inspector]] · [[amazon-macie]]  |  모듈 [[09-security]]  |  [참고](https://aws.amazon.com/macie/)</sub>

> [!question] Which tool can be used to monitor AWS service limits?
> a) AWS Total Cost of Ownership (TCO) Calculator
> b) AWS Trusted Advisor
> c) AWS Personal Health Dashboard
> d) AWS Cost and Usage report
>> [!success]- Answer
>> b) AWS Trusted Advisor

<sub>관련: [[aws-trusted-advisor]] · [[aws-health-dashboard]] · [[aws-cost-and-usage-report]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/blogs/mt/monitoring-service-limits-with-trusted-advisor-and-amazon-cloudwatch/)</sub>

> [!question] A company has distributed its workload on both the AWS Cloud and some on-premises servers. What type of architecture is this?
> a) Virtual private network
> b) Virtual private cloud
> c) Hybrid cloud
> d) Private cloud
>> [!success]- Answer
>> c) Hybrid cloud

<sub>관련: [[amazon-vpc]]  |  모듈 [[05-networking]]  |  [참고](https://aws.amazon.com/hybrid/)</sub>

> [!question] Which of the following describes a security best practice that can be implemented using AWS IAM?
> a) Disable AWS Management Console access for all users
> b) Generate secret keys for every IAM user
> c) Grant permissions to users who are required to perform a given task only
> d) Store AWS credentials within Amazon EC2 instances
>> [!success]- Answer
>> c) Grant permissions to users who are required to perform a given task only

<sub>관련: [[amazon-ec2]] · [[aws-iam]]  |  모듈 [[02-cloud-computing]], [[09-security]]  |  [참고](https://cloudcheckr.com/cloud-security/top-5-iam-best-practices/)</sub>

> [!question] What can be used to automate and manage secure, well-architected, multi-account AWS environments?
> a) AWS shared responsibility model
> b) AWS Control Tower
> c) AWS Security Hub
> d) AWS Well-Architected Tool
>> [!success]- Answer
>> b) AWS Control Tower

<sub>관련: [[aws-security-hub]] · [[aws-control-tower]] · [[aws-well-architected-tool]]  |  모듈 [[09-security]], [[10-monitoring-governance]], [[13-well-architected]]</sub>

> [!question] Which AWS service or feature allows a user to easily scale connectivity among thousands of VPCs?
> a) VPC peering
> b) AWS Transit Gateway
> c) AWS Direct Connect
> d) AWS Global Accelerator
>> [!success]- Answer
>> b) AWS Transit Gateway

<sub>관련: [[amazon-vpc]] · [[aws-direct-connect]] · [[aws-transit-gateway]] · [[aws-global-accelerator]]  |  모듈 [[05-networking]]  |  [참고](https://aws.amazon.com/blogs/training-and-certification/explore-the-aws-transit-gateway-networking-and-scaling-digital-course/)</sub>

> [!question] A company needs protection from expanded distributed denial of service (DDoS) attacks on its website and assistance from AWS experts during such events. Which AWS managed service will meet these requirements?
> a) AWS Shield Advanced
> b) AWS Firewall Manager
> c) AWS WAF
> d) Amazon GuardDuty
>> [!success]- Answer
>> a) AWS Shield Advanced

<sub>관련: [[aws-shield]] · [[aws-waf]] · [[aws-firewall-manager]] · [[amazon-guardduty]]  |  모듈 [[09-security]]  |  [참고](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html)</sub>

> [!question] A company's application has flexible start and end times. Which Amazon EC2 pricing model will be the MOST cost-effective?
> a) On-Demand Instances
> b) Spot Instances
> c) Reserved Instances
> d) Dedicated Hosts
>> [!success]- Answer
>> b) Spot Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/ec2/pricing/)</sub>

> [!question] Under the AWS shared responsibility model, what are the customer's responsibilities? (Choose two.)
> a) Physical and environmental security
> b) Physical network devices including firewalls
> c) Storage device decommissioning
> d) Security of data in transit
> e) Data integrity authentication
>> [!success]- Answer
>> d) Security of data in transit
>> e) Data integrity authentication

> [!question] A cloud practitioner has a data analysis workload that is infrequently executed and can be interrupted without harm. To optimize for cost, which Amazon EC2 purchasing option should be used?
> a) On-Demand Instances
> b) Reserved Instances
> c) Spot Instances
> d) Dedicated Hosts
>> [!success]- Answer
>> c) Spot Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/ec2/pricing/)</sub>

> [!question] Which AWS container service will help a user install, operate, and scale the cluster management infrastructure?
> a) Amazon Elastic Container Registry (Amazon ECR)
> b) AWS Elastic Beanstalk
> c) Amazon Elastic Container Service (Amazon ECS)
> d) Amazon Elastic Block Store (Amazon EBS)
>> [!success]- Answer
>> c) Amazon Elastic Container Service (Amazon ECS)

<sub>관련: [[amazon-ecs]] · [[aws-elastic-beanstalk]] · [[amazon-ebs]]  |  모듈 [[03-compute-services]], [[06-storage]]</sub>

> [!question] Which of the following allows an application running on an Amazon EC2 instance to securely write data to an Amazon S3 bucket without using long term credentials?
> a) Amazon Cognito
> b) AWS Shield
> c) AWS IAM role
> d) AWS IAM user access key
>> [!success]- Answer
>> c) AWS IAM role

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[aws-iam]] · [[amazon-cognito]] · [[aws-shield]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[09-security]]</sub>

> [!question] A company with a Developer-level AWS Support plan provisioned an Amazon RDS database and cannot connect to it. Who should the developer contact for this level of support?
> a) AWS Support using a support case
> b) AWS Professional Services
> c) AWS technical account manager
> d) AWS consulting partners
>> [!success]- Answer
>> a) AWS Support using a support case

<sub>관련: [[amazon-rds]] · [[aws-support-plans]]  |  모듈 [[07-databases]], [[11-billing-support]]</sub>

> [!question] What is the purpose of having an internet gateway within a VPC?
> a) To create a VPN connection to the VPC
> b) To allow communication between the VPC and the Internet
> c) To impose bandwidth constraints on internet traffic
> d) To load balance traffic from the Internet across Amazon EC2 instances
>> [!success]- Answer
>> b) To allow communication between the VPC and the Internet

<sub>관련: [[amazon-ec2]] · [[amazon-vpc]]  |  모듈 [[02-cloud-computing]], [[05-networking]]</sub>

> [!question] A company must ensure that its endpoint for a database instance remains the same after a single Availability Zone service interruption. The application needs to resume database operations without the need for manual administrative intervention. How can these requirements be met?
> a) Use multiple Amazon Route 53 routes to the standby database instance endpoint hosted on AWS Storage Gateway.
> b) Configure Amazon RDS Multi-Availability Zone deployments with automatic failover to the standby.
> c) Add multiple Application Load Balancers and deploy the database instance with AWS Elastic Beanstalk.
> d) Deploy a single Network Load Balancer to distribute incoming traffic across multiple Amazon CloudFront origins.
>> [!success]- Answer
>> b) Configure Amazon RDS Multi-Availability Zone deployments with automatic failover to the standby.

<sub>관련: [[elastic-load-balancing]] · [[aws-elastic-beanstalk]] · [[aws-storage-gateway]] · [[amazon-rds]] · [[amazon-route-53]] · [[amazon-cloudfront]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[05-networking]], [[06-storage]], [[07-databases]]</sub>

> [!question] Which AWS managed service can be used to distribute traffic between one or more Amazon EC2 instances?
> a) NAT gateway
> b) Elastic Load Balancing
> c) Amazon Athena
> d) AWS PrivateLink
>> [!success]- Answer
>> b) Elastic Load Balancing

<sub>관련: [[elastic-load-balancing]] · [[amazon-ec2]] · [[amazon-athena]]  |  모듈 [[02-cloud-computing]], [[08-ai-ml-analytics]]</sub>

> [!question] AWS Trusted Advisor provides recommendations on which of the following? (Choose two.)
> a) Cost optimization
> b) Auditing
> c) Serverless architecture
> d) Performance
> e) Scalability
>> [!success]- Answer
>> a) Cost optimization
>> d) Performance

<sub>관련: [[aws-trusted-advisor]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] Which of the following tasks can only be performed after signing in with AWS account root user credentials? (Choose two.)
> a) Closing an AWS account
> b) Creating a new IAM policy
> c) Changing AWS Support plans
> d) Attaching a role to an Amazon EC2 instance
> e) Generating access keys for IAM users
>> [!success]- Answer
>> a) Closing an AWS account
>> c) Changing AWS Support plans

<sub>관련: [[amazon-ec2]] · [[aws-iam]] · [[aws-support-plans]]  |  모듈 [[02-cloud-computing]], [[09-security]], [[11-billing-support]]</sub>

> [!question] Fault tolerance refers to:
> a) the ability of an application to accommodate growth without changing design
> b) how well and how quickly an application's environment can have lost data restored
> c) how secure your application is
> d) the built-in redundancy of an application's components
>> [!success]- Answer
>> d) the built-in redundancy of an application's components
