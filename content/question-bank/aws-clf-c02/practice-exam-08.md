---
title: "모의고사 08회"
tags: [clf-c02, 문제은행, quiz]
exam: 8
문항수: 50
lang: en
---

# 모의고사 08회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/8)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] What is the main benefit of attaching security groups to an Amazon RDS instance?
> a) Manages user access and encryption keys.
> b) Controls what IP address ranges can connect to your database instance.
> c) Deploys SSL/TLS certificates for use with your database instance.
> d) Distributes incoming traffic across multiple targets.
>> [!success]- Answer
>> b) Controls what IP address ranges can connect to your database instance.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?
> a) EC2 launch type.
> b) Fargate launch type.
> c) Lightsail launch type.
> d) Lambda launch type.
>> [!success]- Answer
>> a) EC2 launch type.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-ecs]] · [[aws-fargate]] · [[amazon-lightsail]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]]</sub>

> [!question] You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?
> a) Try to remove unnecessary AWS accounts.
> b) Add the accounts to an AWS Organization and use Consolidated Billing.
> c) Track the AWS charges that are incurred by the member accounts.
> d) Enable AWS tiered-pricing before provisioning resources.
>> [!success]- Answer
>> b) Add the accounts to an AWS Organization and use Consolidated Billing.

<sub>모듈 [[11-billing-support]]</sub>

> [!question] You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?
> a) Network ACLs and Traffic Manager.
> b) Network ACLs and Subnets.
> c) Security Groups and Internet Gateways.
> d) Security Groups and Network ACLs.
>> [!success]- Answer
>> d) Security Groups and Network ACLs.

<sub>관련: [[amazon-ec2]] · [[amazon-vpc]]  |  모듈 [[02-cloud-computing]], [[05-networking]]</sub>

> [!question] What does the AWS "Business" support plan provide? (Choose TWO)
> a) Access to the full set of Trusted Advisor checks.
> b) Support Concierge Service.
> c) Less than 15 minutes response-time support if your business critical system goes down.
> d) AWS Support API.
> e) Proactive Technical Account Management.
>> [!success]- Answer
>> a) Access to the full set of Trusted Advisor checks.
>> d) AWS Support API.

<sub>관련: [[aws-trusted-advisor]] · [[aws-support-plans]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?
> a) Amazon Simple Storage Service.
> b) AWS Elastic Beanstalk.
> c) AWS CodeCommit.
> d) Amazon Elastic File System.
>> [!success]- Answer
>> b) AWS Elastic Beanstalk.

<sub>관련: [[aws-elastic-beanstalk]] · [[amazon-s3]] · [[amazon-efs]] · [[aws-codecommit]]  |  모듈 [[03-compute-services]], [[06-storage]]</sub>

> [!question] Which statement is true in relation to security in AWS?
> a) AWS manages everything related to EC2 operating systems.
> b) AWS customers are responsible for patching any database software running on Amazon EC2.
> c) Server side encryption is the responsibility of AWS.
> d) AWS is responsible for the security of your application.
>> [!success]- Answer
>> b) AWS customers are responsible for patching any database software running on Amazon EC2.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)
> a) Improves Fault-Tolerance.
> b) Provides your business with a seamless remote accessibility.
> c) Prevents unauthorized users from getting into your network.
> d) Provides automatic data backups.
> e) Can be scaled manually in a shorter period of time.
>> [!success]- Answer
>> a) Improves Fault-Tolerance.
>> e) Can be scaled manually in a shorter period of time.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which statement is true regarding AWS pricing? (Choose TWO)
> a) With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee.
> b) You have no responsibility for third-party software license costs.
> c) You only pay for the individual services that you need with no long-term contracts.
> d) For some services, you have to pay a startup fee in order to get the service running.
> e) There are no reservations on AWS, you only pay for what you use.
>> [!success]- Answer
>> a) With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee.
>> c) You only pay for the individual services that you need with no long-term contracts.

<sub>모듈 [[11-billing-support]]</sub>

> [!question] Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?
> a) AWS Control Tower.
> b) Amazon Macie.
> c) AWS Systems Manager Patch Manager.
> d) AWS Security Hub.
>> [!success]- Answer
>> a) AWS Control Tower.

<sub>관련: [[amazon-macie]] · [[aws-security-hub]] · [[aws-systems-manager]] · [[aws-control-tower]] · [[aws-well-architected-tool]]  |  모듈 [[09-security]], [[10-monitoring-governance]], [[13-well-architected]]</sub>

> [!question] A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?
> a) Use CloudFront to monitor the CPU usage.
> b) Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.
> c) Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.
> d) Use SNS to monitor the utilization of the server.
>> [!success]- Answer
>> c) Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.

<sub>관련: [[amazon-ec2]] · [[amazon-cloudfront]] · [[amazon-sns]] · [[amazon-cloudwatch]] · [[aws-config]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?
> a) Amazon EBS.
> b) Amazon RDS.
> c) You can't run a database inside an Amazon EC2 instance.
> d) Amazon DynamoDB.
>> [!success]- Answer
>> a) Amazon EBS.

<sub>관련: [[amazon-ec2]] · [[amazon-ebs]] · [[amazon-rds]] · [[amazon-dynamodb]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[07-databases]]</sub>

> [!question] You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?
> a) Amazon CloudWatch.
> b) Amazon CloudSearch.
> c) Amazon Elastic MapReduce.
> d) Amazon CloudHSM.
>> [!success]- Answer
>> a) Amazon CloudWatch.

<sub>관련: [[aws-cloudhsm]] · [[amazon-cloudwatch]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] What factors determine how you are charged when using AWS Lambda? (Choose TWO)
> a) Storage consumed.
> b) Number of requests to your functions.
> c) Number of volumes.
> d) Placement groups.
> e) Compute time consumed.
>> [!success]- Answer
>> b) Number of requests to your functions.
>> e) Compute time consumed.

<sub>관련: [[aws-lambda]]  |  모듈 [[03-compute-services]]</sub>

> [!question] What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)
> a) An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.
> b) An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.
> c) IAM users are more cost effective than IAM roles.
> d) A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.
> e) An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it.
>> [!success]- Answer
>> a) An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.
>> b) An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Which of the following actions may reduce Amazon EBS costs? (Choose TWO)
> a) Deleting unused buckets.
> b) Using reservations.
> c) Deleting unnecessary snapshots.
> d) Changing the type of the volume.
> e) Distributing requests to multiple volumes.
>> [!success]- Answer
>> c) Deleting unnecessary snapshots.
>> d) Changing the type of the volume.

<sub>관련: [[amazon-ebs]]  |  모듈 [[06-storage]]</sub>

> [!question] What does Amazon GuardDuty do to protect AWS accounts and workloads?
> a) Notifies AWS customers about abuse events once they are reported.
> b) Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.
> c) Helps AWS customers identify the root cause of potential security issues.
> d) Checks security groups for rules that allow unrestricted access to AWS. resources.
>> [!success]- Answer
>> b) Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.

<sub>관련: [[amazon-guardduty]]  |  모듈 [[09-security]]</sub>

> [!question] Which database service should you use if your application and data schema require "joins" or complex transactions?
> a) Amazon RDS.
> b) AWS Outposts.
> c) Amazon DocumentDB.
> d) Amazon DynamoDB.
>> [!success]- Answer
>> a) Amazon RDS.

<sub>관련: [[aws-outposts]] · [[amazon-rds]] · [[amazon-dynamodb]] · [[amazon-documentdb]]  |  모듈 [[03-compute-services]], [[07-databases]]</sub>

> [!question] Which of the following makes it easier for you to categorize, manage and filter your resources?
> a) Amazon CloudWatch.
> b) AWS Service Catalog.
> c) AWS Directory Service.
> d) AWS Tagging.
>> [!success]- Answer
>> d) AWS Tagging.

<sub>관련: [[aws-directory-service]] · [[amazon-cloudwatch]] · [[aws-service-catalog]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] What should you consider when storing data in Amazon Glacier?
> a) Amazon Glacier only accepts data in a compressed format.
> b) Glacier can only be used to store frequently accessed data and data archives.
> c) Amazon Glacier does not provide immediate retrieval of data.
> d) Attach Glacier to an EC2 Instance to be able to store data.
>> [!success]- Answer
>> c) Amazon Glacier does not provide immediate retrieval of data.

<sub>관련: [[amazon-ec2]] · [[amazon-s3-glacier]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?
> a) Amazon EC2.
> b) AWS Batch.
> c) Lambda@Edge.
> d) AWS Fargate.
>> [!success]- Answer
>> b) AWS Batch.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[aws-fargate]] · [[aws-batch]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]]</sub>

> [!question] How can you increase your application’s fault-tolerance while it is being hosted in AWS?
> a) Deploy your application across multiple EC2 instances.
> b) Deploy your application across multiple Availability Zones.
> c) Host your application on one powerful EC2 instance type instead of multiple smaller instances.
> d) Deploy the underlying application resources across multiple subnets.
>> [!success]- Answer
>> b) Deploy your application across multiple Availability Zones.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)
> a) Developer.
> b) Premium.
> c) Enterprise.
> d) Standard.
> e) Business.
>> [!success]- Answer
>> c) Enterprise.
>> e) Business.

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)
> a) IAM group.
> b) IAM user.
> c) IAM role.
> d) AWS account root user.
> e) TAM.
>> [!success]- Answer
>> b) IAM user.
>> d) AWS account root user.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Which of the following is a benefit of the "Loose Coupling" architecture principle?
> a) It eliminates the need for change management.
> b) It allows for Cross-Region Replication.
> c) It helps AWS customers reduce Privileged Access to AWS resources.
> d) It allows individual application components or services to be modified without affecting other components.
>> [!success]- Answer
>> d) It allows individual application components or services to be modified without affecting other components.

<sub>모듈 [[13-well-architected]]</sub>

> [!question] A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?
> a) Amazon Elastic Block Store.
> b) AWS Storage Gateway.
> c) Amazon Elastic File System.
> d) S3.
>> [!success]- Answer
>> c) Amazon Elastic File System.

<sub>관련: [[amazon-ec2]] · [[amazon-ebs]] · [[amazon-efs]] · [[aws-storage-gateway]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?
> a) On-premises.
> b) IaaS.
> c) PaaS.
> d) Cloud.
>> [!success]- Answer
>> d) Cloud.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] What are the benefits of the AWS Marketplace service? (Choose TWO)
> a) Protects customers by performing periodic security checks on listed products.
> b) Per-second billing.
> c) Provides cheaper options for purchasing Amazon EC2 on-demand instances.
> d) Provides flexible pricing options that suit most customer needs.
> e) Provides software solutions that run on AWS or any other Cloud vendor.
>> [!success]- Answer
>> d) Provides flexible pricing options that suit most customer needs.
>> e) Provides software solutions that run on AWS or any other Cloud vendor.

<sub>관련: [[amazon-ec2]] · [[aws-marketplace]]  |  모듈 [[02-cloud-computing]], [[11-billing-support]]</sub>

> [!question] What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?
> a) Elasticity.
> b) Durability.
> c) Traceability.
> d) Accessibility.
>> [!success]- Answer
>> b) Durability.

<sub>관련: [[amazon-ebs]]  |  모듈 [[06-storage]]</sub>

> [!question] You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?
> a) Savings Plans.
> b) Spot Instances.
> c) Reserved Instances.
> d) On-Demand Instances.
>> [!success]- Answer
>> d) On-Demand Instances.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?
> a) Amazon EFS.
> b) AWS Secrets Manager.
> c) AWS Systems Manager.
> d) Amazon CloudFront.
>> [!success]- Answer
>> d) Amazon CloudFront.

<sub>관련: [[amazon-efs]] · [[amazon-cloudfront]] · [[aws-secrets-manager]] · [[aws-shield]] · [[aws-waf]] · [[aws-systems-manager]]  |  모듈 [[05-networking]], [[06-storage]], [[09-security]]</sub>

> [!question] Which of the following services is used when encrypting EBS volumes?
> a) AWS WAF.
> b) AWS KMS.
> c) Amazon Macie.
> d) Amazon GuardDuty.
>> [!success]- Answer
>> b) AWS KMS.

<sub>관련: [[amazon-ebs]] · [[aws-kms]] · [[aws-waf]] · [[amazon-guardduty]] · [[amazon-macie]]  |  모듈 [[06-storage]], [[09-security]]</sub>

> [!question] The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)
> a) Download all the attached policies in a safe place.
> b) Delete all IAM accounts and recreate them.
> c) Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.
> d) Rotate all access keys.
> e) Change the email address and password of the root user account and enable MFA.
>> [!success]- Answer
>> d) Rotate all access keys.
>> e) Change the email address and password of the root user account and enable MFA.

<sub>관련: [[aws-iam]] · [[amazon-cloudwatch]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] What is the Amazon ElastiCache service used for? (Choose TWO)
> a) Provide an in-memory data storage service.
> b) Reduce delivery costs using Edge Locations.
> c) Improve web application performance.
> d) Provide a Chef-compatible cache to speed up application response.
> e) Distribute requests to multiple instances.
>> [!success]- Answer
>> a) Provide an in-memory data storage service.
>> c) Improve web application performance.

<sub>관련: [[amazon-elasticache]]  |  모듈 [[07-databases]]</sub>

> [!question] The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)
> a) Deploy your resources across multiple Availability Zones.
> b) Use Amazon EC2 Auto Scaling.
> c) Deploy your resources in another region.
> d) Use Elastic Load Balancing.
> e) Use Serverless Computing whenever possible.
>> [!success]- Answer
>> b) Use Amazon EC2 Auto Scaling.
>> e) Use Serverless Computing whenever possible.

<sub>관련: [[amazon-ec2-auto-scaling]] · [[elastic-load-balancing]] · [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)
> a) They provide free capacity when testing your new applications.
> b) They are cheaper than all other EC2 options.
> c) They remove the need to buy “safety net” capacity to handle periodic traffic spikes.
> d) They only require 1-2 days for setup and configuration.
> e) You can increase or decrease your compute capacity depending on the demands of your application.
>> [!success]- Answer
>> c) They remove the need to buy “safety net” capacity to handle periodic traffic spikes.
>> e) You can increase or decrease your compute capacity depending on the demands of your application.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?
> a) It is a data center designed to be completely isolated from other data centers in the same region.
> b) It is a collection of data centers distributed in multiple countries.
> c) It is a logically isolated network of the AWS Cloud.
> d) It is a distinct location within a region that is insulated from « failures in other Availability Zones.
>> [!success]- Answer
>> d) It is a distinct location within a region that is insulated from « failures in other Availability Zones.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple [...].
> a) Regions.
> b) Transportation devices.
> c) Support plans.
> d) Edge locations.
>> [!success]- Answer
>> a) Regions.

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company’s responsibility when building a PCI-compliant environment in AWS? (Choose TWO)
> a) Start the migration process immediately as all AWS services are PCI compliant.
> b) Ensure that AWS services are configured properly to meet all PCI DSS standards.
> c) Restrict any access to cardholder data and create a policy that addresses information security for all personnel.
> d) Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements.
> e) Ensure that all PCI DSS physical security requirements are met.
>> [!success]- Answer
>> b) Ensure that AWS services are configured properly to meet all PCI DSS standards.
>> c) Restrict any access to cardholder data and create a policy that addresses information security for all personnel.

<sub>모듈 [[01-cloud-intro]], [[09-security]]</sub>

> [!question] What is the maximum amount of data that can be stored in S3 in a single AWS account?
> a) 100 PetaBytes.
> b) Virtually unlimited storage.
> c) 5TeraBytes.
> d) 10 Exabytes.
>> [!success]- Answer
>> b) Virtually unlimited storage.

<sub>관련: [[amazon-s3]]  |  모듈 [[06-storage]]</sub>

> [!question] Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?
> a) Operational Excellence.
> b) Security.
> c) Performance Efficiency.
> d) Reliability.
>> [!success]- Answer
>> c) Performance Efficiency.

<sub>관련: [[aws-well-architected-tool]]  |  모듈 [[13-well-architected]]</sub>

> [!question] Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?
> a) Amazon Route 53.
> b) Amazon Connect.
> c) Amazon CloudFront.
> d) Amazon EC2.
>> [!success]- Answer
>> c) Amazon CloudFront.

<sub>관련: [[amazon-ec2]] · [[amazon-route-53]] · [[amazon-cloudfront]] · [[amazon-connect]]  |  모듈 [[02-cloud-computing]], [[05-networking]]</sub>

> [!question] Which of the following steps should be taken by a customer when conducting penetration testing on AWS?
> a) Conduct penetration testing using Amazon Inspector, and then notify AWS support.
> b) Request and wait for approval from the customer’s internal security team, and then conduct testing.
> c) Notify AWS support, and then conduct testing immediately.
> d) Request and wait for approval from AWS support, and then conduct testing.
>> [!success]- Answer
>> b) Request and wait for approval from the customer’s internal security team, and then conduct testing.
>> 정정 — 원문 정답은 `d`였습니다. 지금은 **허용된 서비스에 대해서는 AWS 승인 없이 바로** 침투 테스트를 할 수 있습니다. AWS에 요청해야 하는 것은 DDoS 시뮬레이션 같은 특수한 경우뿐입니다.

<sub>관련: [[amazon-inspector]]  |  모듈 [[09-security]]  |  [참고](https://aws.amazon.com/security/penetration-testing/)</sub>

> [!question] Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?
> a) AWS Cost Explorer.
> b) AWS Budgets.
> c) AWS Cost and Usage report.
> d) AWS Billing dashboard.
>> [!success]- Answer
>> c) AWS Cost and Usage report.

<sub>관련: [[aws-cost-explorer]] · [[aws-budgets]] · [[aws-cost-and-usage-report]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?
> a) AWS Regions.
> b) Availability Zones.
> c) Edge locations.
> d) Amazon CloudFront.
>> [!success]- Answer
>> b) Availability Zones.

<sub>관련: [[amazon-cloudfront]]  |  모듈 [[05-networking]]</sub>

> [!question] How many Availability Zones should compute resources be provisioned across to achieve high availability?
> a) A minimum of one.
> b) A minimum of two.
> c) A minimum of three.
> d) A minimum of four or more.
>> [!success]- Answer
>> b) A minimum of two.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] The AWS Cloud’s multiple Regions are an example of:
> a) Agility.
> b) Global infrastructure.
> c) Elasticity.
> d) Pay-as-you-go pricing.
>> [!success]- Answer
>> b) Global infrastructure.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] Which AWS service can be used to manually launch instances based on resource requirements?
> a) Amazon EBS.
> b) Amazon S3.
> c) Amazon EC2.
> d) Amazon ECS.
>> [!success]- Answer
>> c) Amazon EC2.

<sub>관련: [[amazon-ec2]] · [[amazon-ecs]] · [[amazon-s3]] · [[amazon-ebs]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[06-storage]]</sub>

> [!question] Which is a recommended pattern for designing a highly available architecture on AWS?
> a) Ensure that components have low-latency network connectivity.
> b) Run enough Amazon EC2 instances to operate at peak load.
> c) Ensure that the application is designed to accommodate failure of any single component.
> d) Use a monolithic application that handles all operations.
>> [!success]- Answer
>> c) Ensure that the application is designed to accommodate failure of any single component.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)
> a) High availability.
> b) Shared security model.
> c) Elasticity.
> d) Pay-as-you-go pricing.
> e) Reliability.
>> [!success]- Answer
>> c) Elasticity.
>> d) Pay-as-you-go pricing.

<sub>모듈 [[01-cloud-intro]], [[11-billing-support]]</sub>
