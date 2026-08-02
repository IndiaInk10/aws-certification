---
title: "모의고사 16회"
tags: [clf-c02, 문제은행, quiz]
exam: 16
문항수: 50
lang: en
---

# 모의고사 16회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/16)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?
> a) Cost Explorer
> b) AWS Total Cost of Ownership (TCO) Calculator
> c) AWS Simple Monthly Calculator
> d) AWS Trusted Advisor
>> [!success]- Answer
>> b) AWS Total Cost of Ownership (TCO) Calculator

<sub>관련: [[aws-trusted-advisor]] · [[aws-cost-explorer]] · [[aws-pricing-calculator]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?
> a) AWS Cost Explorer between AWS accounts
> b) Linked accounts and consolidated billing
> c) Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report
> d) Amazon EC2 Instance Usage Report between AWS accounts
>> [!success]- Answer
>> b) Linked accounts and consolidated billing

<sub>관련: [[amazon-ec2]] · [[aws-cost-explorer]]  |  모듈 [[02-cloud-computing]], [[11-billing-support]]</sub>

> [!question] A company has multiple AWS accounts and wants to simplify and consolidate its billing process. Which AWS service will achieve this?
> a) AWS Cost and Usage Reports
> b) AWS Organizations
> c) AWS Cost Explorer
> d) AWS Budgets
>> [!success]- Answer
>> b) AWS Organizations

<sub>관련: [[aws-organizations]] · [[aws-cost-explorer]] · [[aws-budgets]] · [[aws-cost-and-usage-report]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data. Which of the following services will help fulfill this requirement?
> a) Amazon CloudFront
> b) AWS Direct Connect
> c) Amazon Route 53 global DNS
> d) Amazon Simple Storage Service (Amazon S3) transfer acceleration
>> [!success]- Answer
>> a) Amazon CloudFront

<sub>관련: [[amazon-s3]] · [[amazon-route-53]] · [[amazon-cloudfront]] · [[aws-direct-connect]]  |  모듈 [[05-networking]], [[06-storage]]</sub>

> [!question] Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?
> a) On-premises
> b) Hybrid
> c) Cloud
> d) Platform as a service
>> [!success]- Answer
>> c) Cloud

> [!question] How is asset management on AWS easier than asset management in a physical data center?
> a) AWS provides a Configuration Management Database that users can maintain.
> b) AWS performs infrastructure discovery scans on the customer's behalf.
> c) Amazon EC2 automatically generates an asset report and places it in the customer's specified Amazon S3 bucket.
> d) Users can gather asset metadata reliably with a few API calls.
>> [!success]- Answer
>> b) AWS performs infrastructure discovery scans on the customer's behalf.

<sub>관련: [[amazon-ec2]] · [[amazon-s3]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] What feature of Amazon RDS helps to create globally redundant databases?
> a) Snapshots
> b) Automatic patching and updating
> c) Cross-Region read replicas
> d) Provisioned IOPS
>> [!success]- Answer
>> c) Cross-Region read replicas

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]  |  [참고](https://docs.amazonaws.cn/en_us/AmazonRDS/latest/UserGuide/rds-ug.pdf)</sub>

> [!question] Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:
> a) restricted access.
> b) as-needed access.
> c) least privilege access.
> d) token access.
>> [!success]- Answer
>> c) least privilege access.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Which methods can be used to identify AWS costs by departments? (Choose two.)
> a) Enable multi-factor authentication for the AWS account root user.
> b) Create separate accounts for each department.
> c) Use Reserved Instances whenever possible.
> d) Use tags to associate each instance with a particular department.
> e) Pay bills using purchase orders.
>> [!success]- Answer
>> b) Create separate accounts for each department.
>> d) Use tags to associate each instance with a particular department.

> [!question] Under the AWS shared responsibility model, customer responsibilities include which one of the following?
> a) Securing the hardware, software, facilities, and networks that run all products and services.
> b) Providing certificates, reports, and other documentation directly to AWS customers under NDA.
> c) Configuring the operating system, network, and firewall.
> d) Obtaining industry certifications and independent third-party attestations.
>> [!success]- Answer
>> c) Configuring the operating system, network, and firewall.

<sub>관련: [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)  |  [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)</sub>

> [!question] Which managed AWS service provides real-time guidance on AWS security best practices?
> a) AWS X-Ray
> b) AWS Trusted Advisor
> c) Amazon CloudWatch
> d) AWS Systems Manager
>> [!success]- Answer
>> b) AWS Trusted Advisor

<sub>관련: [[amazon-cloudwatch]] · [[aws-trusted-advisor]] · [[aws-systems-manager]] · [[aws-x-ray]]  |  모듈 [[09-security]], [[10-monitoring-governance]], [[13-well-architected]]</sub>

> [!question] Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?
> a) Resource groups
> b) Lifecycle policies
> c) Application Load Balancer
> d) Amazon EC2 Auto Scaling
>> [!success]- Answer
>> d) Amazon EC2 Auto Scaling

<sub>관련: [[amazon-ec2-auto-scaling]] · [[elastic-load-balancing]] · [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose two.)
> a) Visualization management
> b) Hardware management
> c) Encryption management
> d) Facilities management
> e) Firewall management
>> [!success]- Answer
>> c) Encryption management
>> e) Firewall management

> [!question] Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?
> a) AWS Direct Connect
> b) AWS Snowball
> c) AWS Storage Gateway
> d) AWS Snowball Edge
>> [!success]- Answer
>> c) AWS Storage Gateway

<sub>관련: [[aws-storage-gateway]] · [[aws-snow-family]] · [[aws-direct-connect]]  |  모듈 [[05-networking]], [[06-storage]], [[12-migration]]</sub>

> [!question] What is a responsibility of AWS in the shared responsibility model?
> a) Updating the network ACLs to block traffic to vulnerable ports.
> b) Patching operating systems running on Amazon EC2 instances.
> c) Updating the firmware on the underlying EC2 hosts.
> d) Updating the security group rules to block traffic to the vulnerable ports.
>> [!success]- Answer
>> c) Updating the firmware on the underlying EC2 hosts.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://cloudacademy.com/blog/aws-shared-responsibility-model-security/)</sub>

> [!question] Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?
> a) Implement loose coupling.
> b) Design for failure.
> c) Automate everything that can be automated.
> d) Use services, not servers.
>> [!success]- Answer
>> b) Design for failure.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] What does it mean to grant least privilege to AWS IAM users?
> a) It is granting permissions to a single user only.
> b) It is granting permissions using AWS IAM policies only.
> c) It is granting AdministratorAccess policy permissions to trustworthy users.
> d) It is granting only the permissions required to perform a given task.
>> [!success]- Answer
>> d) It is granting only the permissions required to perform a given task.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] What is a benefit of loose coupling as a principle of cloud architecture design?
> a) It facilitates low-latency request handling.
> b) It allows applications to have dependent workflows.
> c) It prevents cascading failures between different components.
> d) It allows companies to focus on their physical data center operations.
>> [!success]- Answer
>> c) It prevents cascading failures between different components.

> [!question] A director has been tasked with investigating hybrid cloud architecture. The company currently accesses AWS over the public internet. Which service will facilitate private hybrid connectivity?
> a) Amazon Virtual Private Cloud (Amazon VPC) NAT Gateway
> b) AWS Direct Connect
> c) Amazon Simple Storage Service (Amazon S3) Transfer Acceleration
> d) AWS Web Application Firewall (AWS WAF)
>> [!success]- Answer
>> b) AWS Direct Connect

<sub>관련: [[amazon-s3]] · [[amazon-vpc]] · [[aws-direct-connect]] · [[aws-waf]]  |  모듈 [[05-networking]], [[06-storage]], [[09-security]]</sub>

> [!question] A company's web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?
> a) Implementing elasticity, enabling the application to scale up or scale down as demand changes.
> b) Enabling several EC2 instances to run in parallel to achieve better performance.
> c) Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.
> d) Doubling EC2 computing resources to increase system fault tolerance.
>> [!success]- Answer
>> c) Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] How can a customer increase security to AWS account logons? (Choose two.)
> a) Configure AWS Certificate Manager
> b) Enable Multi-Factor Authentication (MFA)
> c) Use Amazon Cognito to manage access
> d) Configure a strong password policy
> e) Enable AWS Organizations
>> [!success]- Answer
>> b) Enable Multi-Factor Authentication (MFA)
>> d) Configure a strong password policy

<sub>관련: [[aws-organizations]] · [[amazon-cognito]] · [[aws-certificate-manager]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] What AWS service would be used to centrally manage AWS access across multiple accounts?
> a) AWS Service Catalog
> b) AWS Config
> c) AWS Trusted Advisor
> d) AWS Organizations
>> [!success]- Answer
>> d) AWS Organizations

<sub>관련: [[aws-organizations]] · [[aws-config]] · [[aws-trusted-advisor]] · [[aws-service-catalog]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] Which AWS service can a customer use to set up an alert notification when the account is approaching a particular dollar amount?
> a) AWS Cost and Usage reports
> b) AWS Budgets
> c) AWS Cost Explorer
> d) AWS Trusted Advisor
>> [!success]- Answer
>> b) AWS Budgets

<sub>관련: [[aws-trusted-advisor]] · [[aws-cost-explorer]] · [[aws-budgets]] · [[aws-cost-and-usage-report]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html)</sub>

> [!question] What can users access from AWS Artifact?
> a) AWS security and compliance documents
> b) A download of configuration management details for all AWS resources
> c) Training materials for AWS services
> d) A security assessment of the applications deployed in the AWS Cloud
>> [!success]- Answer
>> a) AWS security and compliance documents

<sub>관련: [[aws-artifact]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] Which is the MINIMUM AWS Support plan that provides designated Technical Account Managers?
> a) Enterprise
> b) Business
> c) Developer
> d) Basic
>> [!success]- Answer
>> a) Enterprise

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/plans/)</sub>

> [!question] Which of the following is an AWS Well-Architected Framework design principle related to reliability?
> a) Deployment to a single Availability Zone
> b) Ability to recover from failure
> c) Design for cost optimization
> d) Perform operations as code
>> [!success]- Answer
>> b) Ability to recover from failure

<sub>관련: [[aws-well-architected-tool]]  |  모듈 [[13-well-architected]]  |  [참고](https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/)</sub>

> [!question] Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?
> a) Amazon EBS
> b) Amazon EC2 instance store
> c) Amazon EFS
> d) Amazon S3
>> [!success]- Answer
>> b) Amazon EC2 instance store

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[amazon-ebs]] · [[amazon-efs]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] What is an advantage of using the AWS Cloud over a traditional on-premises solution?
> a) Users do not have to guess about future capacity needs.
> b) Users can utilize existing hardware contracts for purchases.
> c) Users can fix costs no matter what their traffic is.
> d) Users can avoid audits by using reports from AWS.
>> [!success]- Answer
>> a) Users do not have to guess about future capacity needs.

<sub>관련: [참고](https://data-flair.training/blogs/aws-advantages/)  |  [참고](https://data-flair.training/blogs/aws-advantages/)</sub>

> [!question] Which of the following is an AWS-managed compute service?
> a) Amazon SWF
> b) Amazon EC2
> c) AWS Lambda
> d) Amazon Aurora
>> [!success]- Answer
>> c) AWS Lambda

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-aurora]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[07-databases]]  |  [참고](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html)</sub>

> [!question] Which of the following is an important architectural principle when designing cloud applications?
> a) Store data and backups in the same region.
> b) Design tightly coupled system components.
> c) Avoid multi-threading.
> d) Design for failure
>> [!success]- Answer
>> d) Design for failure

> [!question] Which mechanism allows developers to access AWS services from application code?
> a) AWS Software Development Kit
> b) AWS Management Console
> c) AWS CodePipeline
> d) AWS Config
>> [!success]- Answer
>> a) AWS Software Development Kit

<sub>관련: [[aws-config]] · [[aws-codepipeline]]  |  모듈 [[10-monitoring-governance]], [[13-well-architected]]  |  [참고](https://aws.amazon.com/tools/)</sub>

> [!question] Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?
> a) On-Demand Instances
> b) Reserved Instances
> c) Spot Instances
> d) Dedicated Instances
>> [!success]- Answer
>> a) On-Demand Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following services is a MySQL-compatible database that automatically grows storage as needed?
> a) Amazon Elastic Compute Cloud (Amazon EC2)
> b) Amazon Relational Database Service (Amazon RDS) for MySQL
> c) Amazon Lightsail
> d) Amazon Aurora
>> [!success]- Answer
>> d) Amazon Aurora

<sub>관련: [[amazon-ec2]] · [[amazon-lightsail]] · [[amazon-rds]] · [[amazon-aurora]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[07-databases]]</sub>

> [!question] Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?
> a) Amazon VPC endpoints
> b) Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink
> c) Amazon VPC peering
> d) AWS Direct Connect
>> [!success]- Answer
>> c) Amazon VPC peering

<sub>관련: [[amazon-ec2]] · [[amazon-vpc]] · [[aws-direct-connect]]  |  모듈 [[02-cloud-computing]], [[05-networking]]</sub>

> [!question] Which service's PRIMARY purpose is software version control?
> a) Amazon CodeStar
> b) AWS Command Line Interface (AWS CLI)
> c) Amazon Cognito
> d) AWS CodeCommit
>> [!success]- Answer
>> d) AWS CodeCommit

<sub>관련: [[amazon-cognito]] · [[aws-codecommit]]</sub>

> [!question] A company is considering migrating its applications to AWS. The company wants to compare the cost of running the workload on-premises to running the equivalent workload on the AWS platform. Which tool can be used to perform this comparison?
> a) AWS Simple Monthly Calculator
> b) AWS Total Cost of Ownership (TCO) Calculator
> c) AWS Billing and Cost Management console
> d) Cost Explorer
>> [!success]- Answer
>> b) AWS Total Cost of Ownership (TCO) Calculator

<sub>관련: [[aws-cost-explorer]] · [[aws-pricing-calculator]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?
> a) AWS Batch
> b) AWS Snowball
> c) AWS Migration Hub
> d) AWS Snowmobile
>> [!success]- Answer
>> d) AWS Snowmobile

<sub>관련: [[aws-batch]] · [[aws-snow-family]] · [[aws-migration-hub]]  |  모듈 [[03-compute-services]], [[12-migration]]</sub>

> [!question] Which of the following BEST describe the AWS pricing model? (Choose two.)
> a) Fixed-term
> b) Pay-as-you-go
> c) Colocation
> d) Planned
> e) Variable cost
>> [!success]- Answer
>> b) Pay-as-you-go
>> e) Variable cost

<sub>관련: [참고](https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf)  |  [참고](https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf)</sub>

> [!question] Which load balancer types are available with Elastic Load Balancing (ELB)? (Choose two.)
> a) Public load balancers with AWS Application Auto Scaling capabilities
> b) F5 Big-IP and Citrix NetScaler load balancers
> c) Classic Load Balancers
> d) Cross-zone load balancers with public and private IPs
> e) Application Load Balancers
>> [!success]- Answer
>> c) Classic Load Balancers
>> e) Application Load Balancers

<sub>관련: [[elastic-load-balancing]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Why should a company choose AWS instead of a traditional data center?
> a) AWS provides users with full control over the underlying resources.
> b) AWS does not require long-term contracts and provides a pay-as-you-go model.
> c) AWS offers edge locations in every country, supporting global reach.
> d) AWS has no limits on the number of resources that can be created.
>> [!success]- Answer
>> b) AWS does not require long-term contracts and provides a pay-as-you-go model.

> [!question] Which solution provides the FASTEST application response times to frequently accessed data to users in multiple AWS Regions?
> a) AWS CloudTrail across multiple Availability Zones
> b) Amazon CloudFront to edge locations
> c) AWS CloudFormation in multiple regions
> d) A virtual private gateway over AWS Direct Connect
>> [!success]- Answer
>> b) Amazon CloudFront to edge locations

<sub>관련: [[amazon-cloudfront]] · [[aws-direct-connect]] · [[aws-cloudtrail]] · [[aws-cloudformation]]  |  모듈 [[04-global-infrastructure]], [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] Which AWS service provides a self-service portal for on-demand access to AWS compliance reports?
> a) AWS Config
> b) AWS Certificate Manager
> c) Amazon Inspector
> d) AWS Artifact
>> [!success]- Answer
>> d) AWS Artifact

<sub>관련: [[aws-certificate-manager]] · [[amazon-inspector]] · [[aws-artifact]] · [[aws-config]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following AWS services can be used to run a self-managed database?
> a) Amazon Route 53
> b) AWS X-Ray
> c) AWS Snowmobile
> d) Amazon Elastic Compute Cloud (Amazon EC2)
>> [!success]- Answer
>> d) Amazon Elastic Compute Cloud (Amazon EC2)

<sub>관련: [[amazon-ec2]] · [[aws-snow-family]] · [[amazon-route-53]] · [[aws-x-ray]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[12-migration]], [[13-well-architected]]  |  [참고](https://severalnines.com/news/aws-users-prefer-self-managed-databases)</sub>

> [!question] What exclusive benefit is provided to users with Enterprise Support?
> a) Access to a Technical Project Manager
> b) Access to a Technical Account Manager
> c) Access to a Cloud Support Engineer
> d) Access to a Solutions Architect
>> [!success]- Answer
>> b) Access to a Technical Account Manager

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/plans/enterprise/)</sub>

> [!question] How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?
> a) Deploy applications across multiple Availability Zones within an AWS Region.
> b) Use a hybrid cloud computing deployment model within the geographic area.
> c) Deploy applications across multiple AWS Regions.
> d) Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions.
>> [!success]- Answer
>> c) Deploy applications across multiple AWS Regions.

<sub>관련: [[aws-artifact]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] How does AWS MOST effectively reduce computing costs for a growing start-up company?
> a) It provides on-demand resources for peak usage.
> b) It automates the provisioning of individual developer environments.
> c) It automates customer relationship management.
> d) It implements a fixed monthly computing budget.
>> [!success]- Answer
>> a) It provides on-demand resources for peak usage.

<sub>관련: [[aws-budgets]]  |  모듈 [[11-billing-support]]</sub>

> [!question] A startup is working on a new application that needs to go to market quickly. The application requirements may need to be adjusted in the near future. Which of the following is a characteristic of the AWS Cloud that would meet this specific need?
> a) Elasticity
> b) Reliability
> c) Performance
> d) Agility
>> [!success]- Answer
>> d) Agility

> [!question] Which AWS Support plan provides a full set of AWS Trusted Advisor checks?
> a) Business and Developer Support
> b) Business and Basic Support
> c) Enterprise and Developer Support
> d) Enterprise and Business Support
>> [!success]- Answer
>> d) Enterprise and Business Support

<sub>관련: [[aws-trusted-advisor]] · [[aws-support-plans]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/plans/)</sub>

> [!question] Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Choose two.)
> a) AWS WAF
> b) Amazon DynamoDB
> c) Amazon EC2
> d) Amazon CloudFront
> e) Amazon Inspector
>> [!success]- Answer
>> a) AWS WAF
>> d) Amazon CloudFront

<sub>관련: [[amazon-ec2]] · [[amazon-dynamodb]] · [[amazon-cloudfront]] · [[aws-waf]] · [[amazon-inspector]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[07-databases]], [[09-security]]  |  [참고](https://aws.amazon.com/shield/)</sub>

> [!question] When building a cloud Total Cost of Ownership (TCO) model, which cost elements should be considered for workloads running on AWS? (Choose three.)
> a) Compute costs
> b) Facilities costs
> c) Storage costs
> d) Data transfer costs
> e) Network infrastructure costs
> f) Hardware lifecycle costs
>> [!success]- Answer
>> a) Compute costs
>> c) Storage costs
>> d) Data transfer costs
