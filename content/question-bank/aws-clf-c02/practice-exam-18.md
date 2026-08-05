---
title: "모의고사 18회"
tags: [clf-c02, 문제은행, quiz]
exam: 18
문항수: 50
lang: en
---

# 모의고사 18회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/18)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?
> a) Managing edge locations
> b) Physical security
> c) Firewall configuration
> d) Global infrastructure
>> [!success]- Answer
>> c) Firewall configuration

<sub>관련: [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)  |  [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)  |  모듈 [[01-cloud-intro]], [[09-security]]</sub>

> [!question] How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?
> a) AWS Senior Support Engineers
> b) AWS Technical Account Managers
> c) AWS Trusted Advisor
> d) AWS Discussion Forums
>> [!success]- Answer
>> d) AWS Discussion Forums

<sub>관련: [[aws-trusted-advisor]] · [[aws-support-plans]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/faqs/)</sub>

> [!question] Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)
> a) Multiple Availability Zones
> b) Performance efficiency
> c) Security
> d) Encryption usage
> e) High availability
>> [!success]- Answer
>> b) Performance efficiency
>> c) Security

<sub>관련: [[aws-well-architected-tool]]  |  모듈 [[13-well-architected]]  |  [참고](https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf)</sub>

> [!question] After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?
> a) No upfront payment
> b) Hourly on-demand payment
> c) Partial upfront payment
> d) All upfront payment
>> [!success]- Answer
>> d) All upfront payment

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/)</sub>

> [!question] What is an advantage of deploying an application across multiple Availability Zones?
> a) There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.
> b) The application will have higher availability because it can withstand a service disruption in one Availability Zone.
> c) There will be better coverage as Availability Zones are geographically distant and can serve a wider area.
> d) There will be decreased application latency that will improve the user experience.
>> [!success]- Answer
>> b) The application will have higher availability because it can withstand a service disruption in one Availability Zone.

<sub>관련: [참고](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)  |  [참고](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)  |  모듈 [[04-global-infrastructure]]</sub>

> [!question] A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS. What is the MOST appropriate response?
> a) Inform the user that AWS pricing allows for on-demand pricing.
> b) Direct the user to the AWS Simple Monthly Calculator for an estimate.
> c) Use Amazon QuickSight to analyze current spending on-premises.
> d) Use Amazon AppStream 2.0 for real-time pricing analytics.
>> [!success]- Answer
>> b) Direct the user to the AWS Simple Monthly Calculator for an estimate.

<sub>관련: [[amazon-quicksight]] · [[aws-pricing-calculator]] · [[amazon-appstream-2-0]]  |  모듈 [[08-ai-ml-analytics]], [[11-billing-support]], [[13-well-architected]]  |  [참고](https://aws.amazon.com/premiumsupport/knowledge-center/estimating-aws-resource-costs/)</sub>

> [!question] A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goal? (Choose two.)
> a) Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated.
> b) Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC.
> c) Use Amazon Athena to query data from the on-premises database servers.
> d) Connect the company's on-premises data center to AWS using AWS Direct Connect.
> e) Leverage Amazon CloudFront to restrict access to static web content provided through the company's on-premises web servers.
>> [!success]- Answer
>> b) Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC.
>> d) Connect the company's on-premises data center to AWS using AWS Direct Connect.

<sub>관련: [[amazon-vpc]] · [[amazon-cloudfront]] · [[aws-direct-connect]] · [[amazon-athena]] · [[aws-service-catalog]]  |  모듈 [[05-networking]], [[08-ai-ml-analytics]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/blogs/apn/amazon-vpc-for-on-premises-network-engineers-part-one/)</sub>

> [!question] A web application running on AWS has been spammed with malicious requests from a recurring set of IP addresses. Which AWS service can help secure the application and block the malicious traffic?
> a) AWS IAM
> b) Amazon GuardDuty
> c) Amazon Simple Notification Service (Amazon SNS)
> d) AWS WAF
>> [!success]- Answer
>> d) AWS WAF

<sub>관련: [[amazon-sns]] · [[aws-iam]] · [[aws-waf]] · [[amazon-guardduty]]  |  모듈 [[02-cloud-computing]], [[09-security]]</sub>

> [!question] Treating infrastructure as code in the AWS Cloud allows users to:
> a) automate migration of on-premises hardware to AWS data centers.
> b) let a third party automate an audit of the AWS infrastructure.
> c) turn over application code to AWS so it can run on the AWS infrastructure.
> d) automate the infrastructure provisioning process.
>> [!success]- Answer
>> d) automate the infrastructure provisioning process.

<sub>관련: [참고](https://asperbrothers.com/blog/infrastructure-as-code-aws/)  |  [참고](https://asperbrothers.com/blog/infrastructure-as-code-aws/)  |  모듈 [[04-global-infrastructure]]</sub>

> [!question] A company requires a dedicated network connection between its on-premises servers and the AWS Cloud. Which AWS service should be used?
> a) AWS VPN
> b) AWS Direct Connect
> c) Amazon API Gateway
> d) Amazon Connect
>> [!success]- Answer
>> b) AWS Direct Connect

<sub>관련: [[aws-direct-connect]] · [[amazon-api-gateway]] · [[amazon-connect]]  |  모듈 [[05-networking]], [[13-well-architected]]</sub>

> [!question] Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?
> a) AWS Glue
> b) AWS Data Pipeline
> c) Amazon CloudSearch
> d) Amazon Athena
>> [!success]- Answer
>> d) Amazon Athena

<sub>관련: [[amazon-s3]] · [[amazon-athena]] · [[aws-glue]]  |  모듈 [[06-storage]], [[08-ai-ml-analytics]]</sub>

> [!question] AWS CloudFormation is designed to help the user:
> a) model and provision resources.
> b) update application code.
> c) set up data lakes.
> d) create reports for billing.
>> [!success]- Answer
>> a) model and provision resources.

<sub>관련: [[aws-cloudformation]]  |  모듈 [[04-global-infrastructure]]</sub>

> [!question] Which of the following is an AWS database service?
> a) Amazon Redshift
> b) Amazon Elastic Block Store (Amazon EBS)
> c) Amazon S3 Glacier
> d) AWS Snowball
>> [!success]- Answer
>> a) Amazon Redshift

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]] · [[amazon-ebs]] · [[aws-snow-family]] · [[amazon-redshift]]  |  모듈 [[06-storage]], [[08-ai-ml-analytics]], [[12-migration]]  |  [참고](https://www.sisense.com/glossary/redshift-database/)</sub>

> [!question] A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?
> a) Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.
> b) Run AWS Trusted Advisor and review the findings.
> c) Open the AWS IAM console and check the inbound rule filters for open access.
> d) In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access.
>> [!success]- Answer
>> b) Run AWS Trusted Advisor and review the findings.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[aws-iam]] · [[aws-config]] · [[aws-trusted-advisor]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[09-security]], [[10-monitoring-governance]]  |  [참고](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-security-groups.html)</sub>

> [!question] What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Choose two.)
> a) AWS automatically distributes the data globally for higher durability.
> b) AWS will take care of operating the application.
> c) AWS makes it easy to architect for high availability.
> d) AWS can easily accommodate application demand changes.
> e) AWS takes care application security patching.
>> [!success]- Answer
>> c) AWS makes it easy to architect for high availability.
>> d) AWS can easily accommodate application demand changes.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] A user needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances and vulnerabilities on those instances. Which AWS service will provide this assessment report?
> a) EC2 security groups
> b) AWS Config
> c) Amazon Macie
> d) Amazon Inspector
>> [!success]- Answer
>> d) Amazon Inspector

<sub>관련: [[amazon-ec2]] · [[amazon-inspector]] · [[amazon-macie]] · [[aws-config]]  |  모듈 [[02-cloud-computing]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] How can a company isolate the costs of production and non-production workloads on AWS?
> a) Create Identity and Access Management (IAM) roles for production and non-production workloads.
> b) Use different accounts for production and non-production expenses.
> c) Use Amazon EC2 for non-production workloads and other services for production workloads.
> d) Use Amazon CloudWatch to monitor the use of services.
>> [!success]- Answer
>> b) Use different accounts for production and non-production expenses.

<sub>관련: [[amazon-ec2]] · [[aws-iam]] · [[amazon-cloudwatch]]  |  모듈 [[02-cloud-computing]], [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/)</sub>

> [!question] Where can users find a catalog of AWS-recognized providers of third-party security solutions?
> a) AWS Service Catalog
> b) AWS Marketplace
> c) AWS Quick Start
> d) AWS CodeDeploy
>> [!success]- Answer
>> b) AWS Marketplace

<sub>관련: [[aws-service-catalog]] · [[aws-marketplace]] · [[aws-codedeploy]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] A Cloud Practitioner needs to store data for 7 years to meet regulatory requirements. Which AWS service will meet this requirement at the LOWEST cost?
> a) Amazon S3
> b) AWS Snowball
> c) Amazon Redshift
> d) Amazon S3 Glacier
>> [!success]- Answer
>> d) Amazon S3 Glacier

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]] · [[aws-snow-family]] · [[amazon-redshift]]  |  모듈 [[06-storage]], [[08-ai-ml-analytics]], [[12-migration]]</sub>

> [!question] What are the immediate benefits of using the AWS Cloud? (Choose two.)
> a) Increased IT staff.
> b) Capital expenses are replaced with variable expenses.
> c) User control of infrastructure.
> d) Increased agility.
> e) AWS holds responsibility for security in the cloud.
>> [!success]- Answer
>> c) User control of infrastructure.
>> d) Increased agility.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?
> a) Amazon GuardDuty
> b) Amazon Macie
> c) Amazon Inspector
> d) AWS Shield
>> [!success]- Answer
>> b) Amazon Macie

<sub>관련: [[aws-shield]] · [[amazon-guardduty]] · [[amazon-inspector]] · [[amazon-macie]]  |  모듈 [[09-security]]</sub>

> [!question] What is the purpose of AWS Storage Gateway?
> a) It ensures on-premises data storage is 99.999999999% durable.
> b) It transports petabytes of data to and from AWS.
> c) It connects to multiple Amazon EC2 instances.
> d) It connects on-premises data storage to the AWS Cloud.
>> [!success]- Answer
>> d) It connects on-premises data storage to the AWS Cloud.

<sub>관련: [[amazon-ec2]] · [[aws-storage-gateway]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] What should users do if they want to install an application in geographically isolated locations?
> a) Install the application using multiple internet gateways.
> b) Deploy the application to an Amazon VPC.
> c) Deploy the application to multiple AWS Regions.
> d) Configure the application using multiple NAT gateways.
>> [!success]- Answer
>> c) Deploy the application to multiple AWS Regions.

<sub>관련: [[amazon-vpc]]  |  모듈 [[05-networking]]  |  [참고](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)</sub>

> [!question] A system in the AWS Cloud is designed to withstand the failure of one or more components. What is this an example of?
> a) Elasticity
> b) High Availability
> c) Scalability
> d) Agility
>> [!success]- Answer
>> b) High Availability

<sub>관련: [참고](https://wa.aws.amazon.com/wat.question.REL_7.en.html)  |  [참고](https://wa.aws.amazon.com/wat.question.REL_7.en.html)  |  모듈 [[04-global-infrastructure]], [[13-well-architected]]</sub>

> [!question] A Cloud Practitioner needs a consistent and dedicated connection between AWS resources and an on-premises system. Which AWS service can fulfill this requirement?
> a) AWS Direct Connect
> b) AWS VPN
> c) Amazon Connect
> d) AWS Data Pipeline
>> [!success]- Answer
>> a) AWS Direct Connect

<sub>관련: [[aws-direct-connect]] · [[amazon-connect]]  |  모듈 [[05-networking]]</sub>

> [!question] Within the AWS shared responsibility model, who is responsible for security and compliance?
> a) The customer is responsible.
> b) AWS is responsible.
> c) AWS and the customer share responsibility.
> d) AWS shares responsibility with the relevant governing body.
>> [!success]- Answer
>> c) AWS and the customer share responsibility.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] To use the AWS CLI, users are required to generate:
> a) a password policy.
> b) an access/secret key.
> c) a managed policy.
> d) an API key.
>> [!success]- Answer
>> b) an access/secret key.

<sub>모듈 [[09-security]], [[02-cloud-computing]]</sub>

> [!question] Which AWS service is used to provide encryption for Amazon EBS?
> a) AWS Certificate Manager
> b) AWS Systems Manager
> c) AWS KMS
> d) AWS Config
>> [!success]- Answer
>> c) AWS KMS

<sub>관련: [[amazon-ebs]] · [[aws-kms]] · [[aws-certificate-manager]] · [[aws-config]] · [[aws-systems-manager]]  |  모듈 [[06-storage]], [[09-security]], [[10-monitoring-governance]]  |  [참고](https://docs.aws.amazon.com/kms/latest/developerguide/services-ebs.html)</sub>

> [!question] How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Choose two.)
> a) By the time it takes for the Lambda function to execute.
> b) By the number of versions of a specific Lambda function.
> c) By the number of requests made for a given Lambda function.
> d) By the programming language that is used for the Lambda function.
> e) By the total number of Lambda functions in an AWS account.
>> [!success]- Answer
>> a) By the time it takes for the Lambda function to execute.
>> c) By the number of requests made for a given Lambda function.

<sub>관련: [[aws-lambda]]  |  모듈 [[03-compute-services]]  |  [참고](https://aws.amazon.com/lambda/pricing/)</sub>

> [!question] Which of the following describes the relationships among AWS Regions, Availability Zones, and edge locations? (Choose two.)
> a) There are more AWS Regions than Availability Zones.
> b) There are more edge locations than AWS Regions.
> c) An edge location is an Availability Zone.
> d) There are more AWS Regions than edge locations.
> e) There are more Availability Zones than AWS Regions.
>> [!success]- Answer
>> b) There are more edge locations than AWS Regions.
>> e) There are more Availability Zones than AWS Regions.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] What does AWS Shield Standard provide?
> a) WAF rules
> b) DDoS protection
> c) Identity and Access Management (IAM) permissions and access to resources
> d) Data encryption
>> [!success]- Answer
>> b) DDoS protection

<sub>관련: [[aws-iam]] · [[aws-shield]] · [[aws-waf]]  |  모듈 [[09-security]]</sub>

> [!question] A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources. What expense can be reduced using the AWS Cloud?
> a) The cost of writing custom-built Java or Node .js code
> b) Penetration testing for security
> c) hardware required to support new applications
> d) Writing specific test cases for third-party applications.
>> [!success]- Answer
>> c) hardware required to support new applications

<sub>관련: [참고](https://aws.amazon.com/pricing/cost-optimization/)  |  [참고](https://aws.amazon.com/pricing/cost-optimization/)  |  모듈 [[01-cloud-intro]]</sub>

> [!question] What does AWS Marketplace allow users to do? (Choose two.)
> a) Sell unused Amazon EC2 Spot Instances.
> b) Sell solutions to other AWS users.
> c) Buy third-party software that runs on AWS.
> d) Purchase AWS security and compliance documents.
> e) Order AWS Snowball.
>> [!success]- Answer
>> b) Sell solutions to other AWS users.
>> c) Buy third-party software that runs on AWS.

<sub>관련: [[amazon-ec2]] · [[aws-snow-family]] · [[aws-marketplace]]  |  모듈 [[02-cloud-computing]], [[11-billing-support]], [[12-migration]]  |  [참고](https://aws.amazon.com/marketplace)</sub>

> [!question] What does it mean if a user deploys a hybrid cloud architecture on AWS?
> a) All resources run using on-premises infrastructure.
> b) Some resources run on-premises and some run in a colocation center.
> c) All resources run in the AWS Cloud.
> d) Some resources run on-premises and some run in the AWS Cloud.
>> [!success]- Answer
>> d) Some resources run on-premises and some run in the AWS Cloud.

<sub>관련: [참고](https://aws.amazon.com/hybrid/)  |  [참고](https://aws.amazon.com/hybrid/)  |  모듈 [[01-cloud-intro]]</sub>

> [!question] Which AWS service allows users to identify the changes made to a resource over time?
> a) Amazon Inspector
> b) AWS Config
> c) AWS Service Catalog
> d) AWS IAM
>> [!success]- Answer
>> b) AWS Config

<sub>관련: [[aws-iam]] · [[amazon-inspector]] · [[aws-config]] · [[aws-service-catalog]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://docs.aws.amazon.com/config/latest/developerguide/view-manage-resource.html)</sub>

> [!question] How can a company reduce its Total Cost of Ownership (TCO) using AWS?
> a) By minimizing large capital expenditures
> b) By having no responsibility for third-party license costs
> c) By having no operational expenditures
> d) By having AWS manage applications
>> [!success]- Answer
>> a) By minimizing large capital expenditures

<sub>모듈 [[11-billing-support]], [[01-cloud-intro]]</sub>

> [!question] Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?
> a) Ensuring network connectivity from AWS to the internet
> b) Patching and fixing flaws within the AWS Cloud infrastructure
> c) Ensuring the physical security of cloud data centers
> d) Ensuring Amazon EBS volumes are backed up
>> [!success]- Answer
>> d) Ensuring Amazon EBS volumes are backed up

<sub>관련: [[amazon-ebs]]  |  모듈 [[06-storage]]  |  [참고](https://aws.amazon.com/blogs/security/the-aws-shared-responsibility-model-and-gdpr/)</sub>

> [!question] What are the advantages of the AWS Cloud? (Choose two.)
> a) Fixed rate monthly cost
> b) No need to guess capacity requirements
> c) Increased speed to market
> d) Increased upfront capital expenditure
> e) Physical access to cloud data centers
>> [!success]- Answer
>> b) No need to guess capacity requirements
>> c) Increased speed to market

<sub>관련: [참고](https://data-flair.training/blogs/aws-advantages/)  |  [참고](https://data-flair.training/blogs/aws-advantages/)  |  모듈 [[01-cloud-intro]]</sub>

> [!question] When comparing the total cost of ownership (TCO) of an on-premises infrastructure to a cloud architecture, what costs should be considered? (Choose two.)
> a) The credit card processing fees for application transactions in the cloud.
> b) The cost of purchasing and installing server hardware in the on-premises data.
> c) The cost of administering the infrastructure, including operating system and software installations, patches, backups, and recovering from failures.
> d) The costs of third-party penetration testing.
> e) The advertising costs associated with an ongoing enterprise-wide campaign.
>> [!success]- Answer
>> b) The cost of purchasing and installing server hardware in the on-premises data.
>> c) The cost of administering the infrastructure, including operating system and software installations, patches, backups, and recovering from failures.

<sub>관련: [참고](https://aws.amazon.com/tco-calculator/)  |  [참고](https://aws.amazon.com/tco-calculator/)  |  모듈 [[11-billing-support]]</sub>

> [!question] Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?
> a) Service control policies (SCPs)
> b) Consolidated billing
> c) All Upfront Reserved Instances
> d) AWS Cost Explorer
>> [!success]- Answer
>> b) Consolidated billing

<sub>관련: [[aws-organizations]] · [[aws-cost-explorer]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/tco-calculator/)</sub>

> [!question] What is one of the customer's responsibilities according to the AWS shared responsibility model?
> a) Virtualization infrastructure
> b) Network infrastructure
> c) Application security
> d) Physical security of hardware
>> [!success]- Answer
>> c) Application security

<sub>관련: [참고](https://cloudacademy.com/blog/aws-shared-responsibility-model-security/)  |  [참고](https://cloudacademy.com/blog/aws-shared-responsibility-model-security/)  |  모듈 [[01-cloud-intro]], [[09-security]]</sub>

> [!question] What helps a company provide a lower latency experience to its users globally?
> a) Using an AWS Region that is central to all users
> b) Using a second Availability Zone in the AWS Region that is using used
> c) Enabling caching in the AWS Region that is being used
> d) Using edge locations to put content closer to all users
>> [!success]- Answer
>> d) Using edge locations to put content closer to all users

<sub>관련: [참고](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html)  |  [참고](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html)  |  모듈 [[04-global-infrastructure]]</sub>

> [!question] How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?
> a) Users do not have to wait for infrastructure provisioning.
> b) The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.
> c) AWS takes over application configuration management on behalf of users.
> d) Users do not need to address security and compliance issues.
>> [!success]- Answer
>> a) Users do not have to wait for infrastructure provisioning.

<sub>관련: [참고](https://d1.awsstatic.com/whitepapers/Migration/aws-migration-whitepaper.pdf)  |  [참고](https://d1.awsstatic.com/whitepapers/Migration/aws-migration-whitepaper.pdf)  |  모듈 [[01-cloud-intro]]</sub>

> [!question] Which AWS service provides a quick and automated way to create and manage AWS accounts?
> a) AWS QuickSight
> b) Amazon Lightsail
> c) AWS Organizations
> d) Amazon Connect
>> [!success]- Answer
>> c) AWS Organizations

<sub>관련: [[amazon-lightsail]] · [[amazon-quicksight]] · [[amazon-connect]] · [[aws-organizations]]  |  모듈 [[03-compute-services]], [[05-networking]], [[08-ai-ml-analytics]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/blogs/mt/automate-account-creation-and-resource-provisioning-using-aws-service-catalog-aws-organizations-and-aws-lambda/)</sub>

> [!question] Which Amazon RDS feature can be used to achieve high availability?
> a) Multiple Availability Zones
> b) Amazon Reserved Instances
> c) Provisioned IOPS storage
> d) Enhanced monitoring
>> [!success]- Answer
>> a) Multiple Availability Zones

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] Where should users report that AWS resources are being used for malicious purposes?
> a) AWS Abuse team
> b) AWS Shield
> c) AWS Support
> d) AWS Developer Forums
>> [!success]- Answer
>> a) AWS Abuse team

<sub>관련: [[aws-shield]]  |  모듈 [[09-security]]  |  [참고](https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/)</sub>

> [!question] Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?
> a) AWS CloudTrail
> b) Amazon Simple Notification Service (Amazon SNS)
> c) VPC Flow Logs
> d) AWS CloudHSM
>> [!success]- Answer
>> a) AWS CloudTrail

<sub>관련: [[amazon-vpc]] · [[amazon-sns]] · [[aws-cloudhsm]] · [[aws-cloudtrail]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] What is an AWS Cloud design best practice?
> a) Tight coupling of components
> b) Single point of failure
> c) High availability
> d) Overprovisioning of resources
>> [!success]- Answer
>> c) High availability

<sub>관련: [참고](https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf)  |  [참고](https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf)  |  모듈 [[13-well-architected]]</sub>

> [!question] Why is AWS more economical than traditional data centers for applications with varying compute workloads?
> a) Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.
> b) Customers retain full administrative access to their Amazon EC2 instances.
> c) Amazon EC2 instances can be launched on-demand when needed.
> d) Customers can permanently run enough instances to handle peak workloads.
>> [!success]- Answer
>> c) Amazon EC2 instances can be launched on-demand when needed.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS service would simplify migration of a database to AWS?
> a) AWS Storage Gateway
> b) AWS Database Migration Service (AWS DMS)
> c) Amazon Elastic Compute Cloud (Amazon EC2)
> d) Amazon AppStream 2.0
>> [!success]- Answer
>> b) AWS Database Migration Service (AWS DMS)

<sub>관련: [[amazon-ec2]] · [[aws-storage-gateway]] · [[aws-dms]] · [[amazon-appstream-2-0]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[12-migration]], [[13-well-architected]]  |  [참고](https://aws.amazon.com/dms/)</sub>
