---
title: "모의고사 03회"
tags: [clf-c02, 문제은행, quiz]
exam: 3
문항수: 50
lang: en
---

# 모의고사 03회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/3)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] Where can you store files in AWS? (Choose TWO)
> a) Amazon EFS.
> b) Amazon SNS.
> c) Amazon EBS.
> d) Amazon ECS.
> e) Amazon EMR.
>> [!success]- Answer
>> a) Amazon EFS.
>> c) Amazon EBS.

<sub>관련: [[amazon-ecs]] · [[amazon-ebs]] · [[amazon-efs]] · [[amazon-sns]] · [[amazon-emr]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[06-storage]], [[08-ai-ml-analytics]]</sub>

> [!question] Which AWS service can be used to store and reliably deliver messages across distributed systems?
> a) Amazon Simple Queue Service.
> b) AWS Storage Gateway.
> c) Amazon Simple Email Service.
> d) Amazon Simple Storage Service.
>> [!success]- Answer
>> a) Amazon Simple Queue Service.

<sub>관련: [[amazon-s3]] · [[aws-storage-gateway]] · [[amazon-sqs]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?
> a) Pay less as AWS grows.
> b) Pay as you go.
> c) Pay less by using more.
> d) Save when you reserve.
>> [!success]- Answer
>> d) Save when you reserve.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?
> a) Right-size before and after migration.
> b) Use a Multi-Region Active-Passive architecture.
> c) Combine On-demand Capacity Reservations with Savings Plans.
> d) Use a Multi-Region Active-Active architecture.
>> [!success]- Answer
>> a) Right-size before and after migration.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] What is the primary storage service used by Amazon RDS database instances?
> a) Amazon Glacier.
> b) Amazon EBS.
> c) Amazon EFS.
> d) Amazon S3.
>> [!success]- Answer
>> b) Amazon EBS.

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]] · [[amazon-ebs]] · [[amazon-efs]] · [[amazon-rds]]  |  모듈 [[06-storage]], [[07-databases]]</sub>

> [!question] A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?
> a) AWS CodePipeline.
> b) AWS X-Ray.
> c) Amazon Inspector.
> d) AWS CloudTrail.
>> [!success]- Answer
>> b) AWS X-Ray.

<sub>관련: [[amazon-inspector]] · [[aws-cloudtrail]] · [[aws-codepipeline]] · [[aws-x-ray]]  |  모듈 [[09-security]], [[10-monitoring-governance]], [[13-well-architected]]</sub>

> [!question] Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)
> a) Amazon Redshift.
> b) AWS Snowball.
> c) Amazon Simple Storage Service.
> d) Amazon EBS.
> e) Amazon DynamoDB.
>> [!success]- Answer
>> c) Amazon Simple Storage Service.
>> e) Amazon DynamoDB.

<sub>관련: [[amazon-s3]] · [[amazon-ebs]] · [[aws-snow-family]] · [[amazon-dynamodb]] · [[amazon-redshift]]  |  모듈 [[06-storage]], [[07-databases]], [[08-ai-ml-analytics]], [[12-migration]]</sub>

> [!question] What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)
> a) AWS Regions.
> b) Multi-AZ Deployment.
> c) Automatic patching.
> d) Read Replicas.
> e) Edge Locations.
>> [!success]- Answer
>> b) Multi-AZ Deployment.
>> d) Read Replicas.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?
> a) Replicate the current resources across multiple Availability Zones within the same region.
> b) Migrate the application to a hosting provider in Asia.
> c) Recreate the website content.
> d) Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.
>> [!success]- Answer
>> d) Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.

<sub>관련: [[amazon-cloudfront]]  |  모듈 [[05-networking]]</sub>

> [!question] An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?
> a) AWS Identity and Access Management.
> b) Amazon RDS.
> c) Network Access Control Lists.
> d) Amazon EMR.
>> [!success]- Answer
>> a) AWS Identity and Access Management.

<sub>관련: [[amazon-rds]] · [[amazon-emr]] · [[aws-iam]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]], [[09-security]]</sub>

> [!question] Using Amazon EC2 falls under which of the following cloud computing models?
> a) IaaS & SaaS.
> b) IaaS.
> c) SaaS.
> d) PaaS.
>> [!success]- Answer
>> b) IaaS.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the below is a best-practice when building applications on AWS?
> a) Strengthen physical security by applying the principle of least privilege.
> b) Ensure that the application runs on hardware from trusted vendors.
> c) Use IAM policies to maintain performance.
> d) Decouple the components of the application so that they run independently.
>> [!success]- Answer
>> d) Decouple the components of the application so that they run independently.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?
> a) Amazon EBS.
> b) Amazon SQS.
> c) Amazon Instance store.
> d) Amazon S3.
>> [!success]- Answer
>> d) Amazon S3.

<sub>관련: [[amazon-s3]] · [[amazon-ebs]] · [[amazon-sqs]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)
> a) Active archives.
> b) Dynamic websites’ assets.
> c) Long-term analytic data.
> d) Active databases.
> e) Cached data.
>> [!success]- Answer
>> a) Active archives.
>> c) Long-term analytic data.

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]]  |  모듈 [[06-storage]]</sub>

> [!question] What does Amazon Elastic Beanstalk provide?
> a) A PaaS solution to automate application deployment.
> b) A compute engine for Amazon ECS.
> c) A scalable file storage solution for use with AWS and on-premises servers.
> d) A NoSQL database service.
>> [!success]- Answer
>> a) A PaaS solution to automate application deployment.

<sub>관련: [[amazon-ecs]] · [[aws-elastic-beanstalk]]  |  모듈 [[03-compute-services]]</sub>

> [!question] What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?
> a) Amazon Kinesis.
> b) Security groups.
> c) Amazon Inspector.
> d) AWS Network Access Control Lists.
>> [!success]- Answer
>> c) Amazon Inspector.

<sub>관련: [[amazon-ec2]] · [[amazon-kinesis]] · [[amazon-inspector]]  |  모듈 [[02-cloud-computing]], [[08-ai-ml-analytics]], [[09-security]]</sub>

> [!question] Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)
> a) Patch management controls.
> b) Database controls.
> c) Awareness & Training.
> d) Environmental controls.
> e) Physical controls.
>> [!success]- Answer
>> d) Environmental controls.
>> e) Physical controls.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?
> a) Reserved instances - No Upfront.
> b) Reserved instances - Partial Upfront.
> c) On-Demand instances.
> d) Spot Instances.
>> [!success]- Answer
>> b) Reserved instances - Partial Upfront.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?
> a) Elasticity.
> b) Global reach.
> c) Data durability.
> d) High availability.
>> [!success]- Answer
>> b) Global reach.

<sub>모듈 [[01-cloud-intro]], [[04-global-infrastructure]]</sub>

> [!question] Savings Plans are available for which of the following AWS compute services? (Choose TWO)
> a) AWS Batch.
> b) AWS Outposts.
> c) Amazon Lightsail.
> d) Amazon EC2.
> e) AWS Lambda.
>> [!success]- Answer
>> d) Amazon EC2.
>> e) AWS Lambda.

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-lightsail]] · [[aws-batch]] · [[aws-outposts]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]]</sub>

> [!question] A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?
> a) Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.
> b) Deploy AWS resources across multiple Availability Zones within the same AWS Region.
> c) Create point-in-time backups in another subnet and recover this data when a disaster occurs.
> d) Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.
>> [!success]- Answer
>> d) Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.

<sub>관련: [[amazon-cloudfront]]  |  모듈 [[05-networking]]</sub>

> [!question] Which statement is correct with regards to AWS service limits? (Choose TWO)
> a) You can contact AWS support to increase the service limits.
> b) Each IAM user has the same service limit.
> c) There are no service limits on AWS.
> d) You can use the AWS Trusted Advisor to monitor your service limits.
> e) The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit.
>> [!success]- Answer
>> a) You can contact AWS support to increase the service limits.
>> d) You can use the AWS Trusted Advisor to monitor your service limits.

<sub>관련: [[aws-iam]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] What is the AWS tool that enables you to use scripts to manage all AWS services and resources?
> a) AWS Console.
> b) AWS Service Catalog.
> c) AWS OpsWorks.
> d) AWS CLI.
>> [!success]- Answer
>> d) AWS CLI.

<sub>관련: [[aws-service-catalog]] · [[aws-opsworks]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)
> a) AWS Artifact.
> b) AWS Cloud9.
> c) AWS Direct Connect.
> d) AWS CloudTrail.
> e) AWS VPN.
>> [!success]- Answer
>> c) AWS Direct Connect.
>> e) AWS VPN.

<sub>관련: [[aws-direct-connect]] · [[aws-artifact]] · [[aws-cloudtrail]]  |  모듈 [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?
> a) AWS EC2 Auto Recovery.
> b) AWS Auto Scaling.
> c) AWS Network Load Balancer.
> d) AWS Application Load Balancer.
>> [!success]- Answer
>> d) AWS Application Load Balancer.

<sub>관련: [[elastic-load-balancing]] · [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?
> a) Amazon Neptune.
> b) Amazon Aurora.
> c) Amazon RDS for SQL Server.
> d) Amazon RDS for PostgreSQL.
>> [!success]- Answer
>> b) Amazon Aurora.

<sub>관련: [[amazon-rds]] · [[amazon-aurora]] · [[amazon-neptune]]  |  모듈 [[07-databases]]</sub>

> [!question] Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)
> a) AWS CloudHSM.
> b) Security Groups.
> c) AWS Batch.
> d) AWS IAM.
> e) Network Access Control Lists (Network ACLs).
>> [!success]- Answer
>> b) Security Groups.
>> e) Network Access Control Lists (Network ACLs).

<sub>관련: [[amazon-ec2]] · [[aws-batch]] · [[aws-iam]] · [[aws-cloudhsm]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[09-security]]</sub>

> [!question] What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?
> a) Amazon Redshift.
> b) Amazon Kinesis.
> c) Amazon DynamoDB.
> d) Amazon RDS.
>> [!success]- Answer
>> a) Amazon Redshift.

<sub>관련: [[amazon-rds]] · [[amazon-dynamodb]] · [[amazon-redshift]] · [[amazon-kinesis]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?
> a) Application development.
> b) Market research.
> c) Business analysis.
> d) Physical hardware.
>> [!success]- Answer
>> d) Physical hardware.

<sub>모듈 [[11-billing-support]]</sub>

> [!question] How are AWS customers billed for Linux-based Amazon EC2 usage?
> a) EC2 instances will be billed on one second increments, with a minimum of one minute.
> b) EC2 instances will be billed on one hour increments, with a minimum of one day.
> c) EC2 instances will be billed on one minute increments, with a minimum of one hour.
> d) EC2 instances will be billed on one day increments, with a minimum of one month.
>> [!success]- Answer
>> a) EC2 instances will be billed on one second increments, with a minimum of one minute.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following will impact the price paid for an EC2 instance? (Choose TWO)
> a) Instance type.
> b) The Availability Zone where the instance is provisioned.
> c) Load balancing.
> d) Number of buckets.
> e) Number of private IPs.
>> [!success]- Answer
>> a) Instance type.
>> b) The Availability Zone where the instance is provisioned.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?
> a) By creating an AWS Config template from the old instance and launching a new instance from it.
> b) By creating an EBS Snapshot of the old instance.
> c) By installing Aurora on EC2 and launching a new instance from it.
> d) By creating an AMI from the old instance and launching a new instance from it.
>> [!success]- Answer
>> d) By creating an AMI from the old instance and launching a new instance from it.

<sub>관련: [[amazon-ec2]] · [[amazon-ebs]] · [[amazon-aurora]] · [[aws-config]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[07-databases]], [[10-monitoring-governance]]</sub>

> [!question] A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?
> a) IAM Principals.
> b) AWS Service Control Policies (SCPs).
> c) IAM policies.
> d) AWS Fargate.
>> [!success]- Answer
>> b) AWS Service Control Policies (SCPs).

<sub>관련: [[aws-fargate]] · [[aws-iam]] · [[aws-organizations]]  |  모듈 [[03-compute-services]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following statements describes the AWS Cloud’s agility?
> a) AWS allows you to host your applications in multiple regions around the world.
> b) AWS provides customizable hardware at the lowest possible cost.
> c) AWS allows you to provision resources in minutes.
> d) AWS allows you to pay upfront to reduce costs.
>> [!success]- Answer
>> c) AWS allows you to provision resources in minutes.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] What are the benefits of using the Amazon Relational Database Service? (Choose TWO)
> a) Lower administrative burden.
> b) Complete control over the underlying host.
> c) Resizable compute capacity.
> d) Scales automatically to larger or smaller instance types.
> e) Supports the document and key-value data structure.
>> [!success]- Answer
>> a) Lower administrative burden.
>> c) Resizable compute capacity.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?
> a) Internet Gateway.
> b) AWS IQ.
> c) AWS Direct Connect.
> d) AWS Site-to-Site VPN.
>> [!success]- Answer
>> d) AWS Site-to-Site VPN.

<sub>관련: [[aws-direct-connect]]  |  모듈 [[05-networking]]</sub>

> [!question] What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?
> a) Enterprise Support.
> b) Developer Support.
> c) Basic Support.
> d) Business Support.
>> [!success]- Answer
>> d) Business Support.

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which of the following is used to control network traffic in AWS? (Choose TWO)
> a) Network Access Control Lists (NACLs).
> b) Key Pairs.
> c) Access Keys.
> d) IAM Policies.
> e) Security Groups.
>> [!success]- Answer
>> a) Network Access Control Lists (NACLs).
>> e) Security Groups.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?
> a) Reserved instances.
> b) Spot Instances.
> c) On-Demand instances.
> d) Dedicated instances.
>> [!success]- Answer
>> b) Spot Instances.

<sub>모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS Service provides the current status of all AWS Services in all AWS Regions?
> a) AWS Service Health Dashboard.
> b) AWS Management Console.
> c) Amazon CloudWatch.
> d) AWS Personal Health Dashboard.
>> [!success]- Answer
>> a) AWS Service Health Dashboard.

<sub>관련: [[amazon-cloudwatch]] · [[aws-health-dashboard]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which AWS service or feature can be used to call AWS Services from different programming languages?
> a) AWS Software Development Kit.
> b) AWS Command Line Interface.
> c) AWS CodeDeploy.
> d) AWS Management Console.
>> [!success]- Answer
>> a) AWS Software Development Kit.

<sub>관련: [[aws-codedeploy]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS Service can be used to register a new domain name?
> a) Amazon Personalize.
> b) Amazon Route 53.
> c) AWS KMS.
> d) AWS Config.
>> [!success]- Answer
>> b) Amazon Route 53.

<sub>관련: [[amazon-route-53]] · [[aws-kms]] · [[aws-config]]  |  모듈 [[05-networking]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)
> a) AWS CloudFormation.
> b) AWS Migration Hub.
> c) AWS IAM.
> d) AWS Elastic Beanstalk.
> e) Amazon Macie.
>> [!success]- Answer
>> a) AWS CloudFormation.
>> d) AWS Elastic Beanstalk.

<sub>관련: [[aws-elastic-beanstalk]] · [[aws-iam]] · [[amazon-macie]] · [[aws-cloudformation]] · [[aws-migration-hub]]  |  모듈 [[03-compute-services]], [[04-global-infrastructure]], [[09-security]], [[12-migration]]</sub>

> [!question] Which AWS service provides cost-optimization recommendations?
> a) AWS Trusted Advisor.
> b) AWS Pricing Calculator.
> c) Amazon QuickSight.
> d) AWS X-Ray.
>> [!success]- Answer
>> a) AWS Trusted Advisor.

<sub>관련: [[amazon-quicksight]] · [[aws-trusted-advisor]] · [[aws-pricing-calculator]] · [[aws-x-ray]]  |  모듈 [[08-ai-ml-analytics]], [[10-monitoring-governance]], [[11-billing-support]], [[13-well-architected]]</sub>

> [!question] A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?
> a) VPC Peering.
> b) AWS Transit Gateway.
> c) Amazon Connect.
> d) Security Groups.
>> [!success]- Answer
>> b) AWS Transit Gateway.

<sub>관련: [[amazon-vpc]] · [[aws-transit-gateway]] · [[amazon-connect]]  |  모듈 [[05-networking]]</sub>

> [!question] What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)
> a) Instances can be shut down by AWS at any time with no notification.
> b) Reserved instances require at least a one-year pricing commitment.
> c) There is no additional charge for using dedicated instances.
> d) Reserved instances provide a significant discount compared to on-demand instances.
> e) Reserved instances are best suited for periodic workloads.
>> [!success]- Answer
>> b) Reserved instances require at least a one-year pricing commitment.
>> d) Reserved instances provide a significant discount compared to on-demand instances.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Why does every AWS Region contain multiple Availability Zones?
> a) Multiple Availability Zones allows you to build resilient and highly available architectures.
> b) Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.
> c) Multiple Availability Zones allows for data replication and global reach.
> d) Multiple Availability Zones within a region increases the storage capacity available in that region.
>> [!success]- Answer
>> a) Multiple Availability Zones allows you to build resilient and highly available architectures.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?
> a) On-Demand Instances.
> b) Spot Instances.
> c) Reserved Instances - All Upfront.
> d) Reserved Instances - No Upfront.
>> [!success]- Answer
>> a) On-Demand Instances.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following is a benefit of running an application in multiple Availability Zones?
> a) Allows you to exceed AWS service limits.
> b) Reduces application response time between servers and global users.
> c) Increases available compute capacity.
> d) Increases the availability of your application.
>> [!success]- Answer
>> d) Increases the availability of your application.

<sub>모듈 [[04-global-infrastructure]]</sub>

> [!question] Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?
> a) AWS sells the old devices to other hosting providers.
> b) AWS destroys the old devices in accordance with industry-standard practices.
> c) AWS sends the old devices for remanufacturing.
> d) AWS stores the old devices in a secure place.
>> [!success]- Answer
>> b) AWS destroys the old devices in accordance with industry-standard practices.

<sub>모듈 [[01-cloud-intro]], [[09-security]]</sub>
