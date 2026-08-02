---
title: "모의고사 06회"
tags: [clf-c02, 문제은행, quiz]
exam: 6
문항수: 50
---

# 모의고사 06회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/6)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] Which of the following is true regarding the AWS availability zones and edge locations?
> a) Edge locations are located in separate Availability Zones worldwide to serve global customers.
> b) An availability zone exists within an edge location to distribute content globally with low latency.
> c) An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.
> d) An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide.
>> [!success]- Answer
>> d) An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide.

> [!question] Which features are included in the AWS Business Support Plan? (Choose TWO)
> a) 24x7 access to customer service.
> b) Access to Cloud Support Engineers via email only during business hours.
> c) Access to the Infrastructure Event Management (IEM) feature for additional fee.
> d) 24x7 access to the TAM feature.
> e) Partial access to the core Trusted Advisor checks.
>> [!success]- Answer
>> a) 24x7 access to customer service.
>> c) Access to the Infrastructure Event Management (IEM) feature for additional fee.

<sub>관련: [[aws-trusted-advisor]] · [[aws-support-plans]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?
> a) Amazon GuardDuty.
> b) Amazon Personalize.
> c) Amazon Cognito.
> d) AWS IAM.
>> [!success]- Answer
>> c) Amazon Cognito.

<sub>관련: [[aws-iam]] · [[amazon-cognito]] · [[amazon-guardduty]]  |  모듈 [[09-security]]</sub>

> [!question] Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?
> a) AWS CloudFormation.
> b) AWS Config.
> c) AWS CloudTrail.
> d) AWS Auto Scaling.
>> [!success]- Answer
>> a) AWS CloudFormation.

<sub>관련: [[aws-cloudtrail]] · [[aws-config]] · [[aws-cloudformation]]  |  모듈 [[04-global-infrastructure]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)
> a) Eliminates the need to monitor servers and applications.
> b) Manages all the compliance and auditing tasks.
> c) Provides custom hardware to meet any specification.
> d) Eliminates the need to guess on infrastructure capacity needs.
> e) Enables customers to trade their capital expenses for operational expenses.
>> [!success]- Answer
>> d) Eliminates the need to guess on infrastructure capacity needs.
>> e) Enables customers to trade their capital expenses for operational expenses.

> [!question] A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)
> a) AWS Fargate.
> b) Amazon Elastic Compute Cloud.
> c) Amazon RDS.
> d) AWS Database Migration service (DMS).
> e) AWS Lambda.
>> [!success]- Answer
>> b) Amazon Elastic Compute Cloud.
>> c) Amazon RDS.

<sub>관련: [[aws-lambda]] · [[aws-fargate]] · [[amazon-rds]] · [[aws-dms]]  |  모듈 [[03-compute-services]], [[07-databases]], [[12-migration]]</sub>

> [!question] Which AWS Service can perform health checks on Amazon EC2 instances?
> a) AWS CloudFormation.
> b) Amazon Route 53.
> c) Amazon Chime.
> d) Amazon Aurora.
>> [!success]- Answer
>> b) Amazon Route 53.

<sub>관련: [[amazon-ec2]] · [[amazon-aurora]] · [[amazon-route-53]] · [[aws-cloudformation]]  |  모듈 [[02-cloud-computing]], [[04-global-infrastructure]], [[05-networking]], [[07-databases]]</sub>

> [!question] A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?
> a) Amazon Comprehend.
> b) AWS IAM.
> c) Amazon Polly.
> d) Amazon Rekognition.
>> [!success]- Answer
>> d) Amazon Rekognition.

<sub>관련: [[amazon-rekognition]] · [[amazon-comprehend]] · [[amazon-polly]] · [[aws-iam]]  |  모듈 [[08-ai-ml-analytics]], [[09-security]]</sub>

> [!question] Which of the following are examples of AWS-managed databases? (Choose TWO)
> a) Amazon Neptune.
> b) Amazon CloudSearch.
> c) Microsoft SQL Server on Amazon EC2.
> d) MySQL on Amazon EC2.
> e) Amazon RDS for MySQL.
>> [!success]- Answer
>> a) Amazon Neptune.
>> e) Amazon RDS for MySQL.

<sub>관련: [[amazon-ec2]] · [[amazon-rds]] · [[amazon-neptune]]  |  모듈 [[02-cloud-computing]], [[07-databases]]</sub>

> [!question] A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?
> a) EC2 On-Demand Instances.
> b) EC2 Reserved Instances - No Upfront.
> c) EC2 Spot Instances.
> d) EC2 Reserved Instances - All Upfront.
>> [!success]- Answer
>> c) EC2 Spot Instances.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?
> a) AWS account owner.
> b) AWS technical account manager.
> c) AWS security team.
> d) AWS cloud support engineers.
>> [!success]- Answer
>> a) AWS account owner.

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?
> a) AWS File Transfer Acceleration.
> b) AWS Server Migration Service.
> c) AWS Database Migration Service.
> d) AWS Application Discovery Service.
>> [!success]- Answer
>> b) AWS Server Migration Service.

<sub>관련: [[aws-dms]]  |  모듈 [[12-migration]]</sub>

> [!question] What are some key benefits of using AWS CloudFormation? (Choose TWO)
> a) It helps AWS customers deploy their applications without worrying about the underlying infrastructure.
> b) It applies advanced IAM security features automatically.
> c) It automates the provisioning and updating of your infrastructure in a safe and controlled manner.
> d) It allows you to model your entire infrastructure in just a text file.
> e) It compiles and builds application code in a timely manner.
>> [!success]- Answer
>> c) It automates the provisioning and updating of your infrastructure in a safe and controlled manner.
>> d) It allows you to model your entire infrastructure in just a text file.

<sub>관련: [[aws-iam]] · [[aws-cloudformation]]  |  모듈 [[04-global-infrastructure]], [[09-security]]</sub>

> [!question] Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?
> a) On-premises.
> b) Mixed.
> c) Hybrid.
> d) Cloud.
>> [!success]- Answer
>> c) Hybrid.

> [!question] A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?
> a) CloudEndure Disaster Recovery.
> b) CloudEndure Migration.
> c) AWS Backup.
> d) AWS Glue.
>> [!success]- Answer
>> a) CloudEndure Disaster Recovery.

<sub>관련: [[aws-backup]] · [[aws-glue]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?
> a) S3 Standard-IA.
> b) S3 Intelligent-Tiering.
> c) S3 Glacier Deep Archive.
> d) S3 Standard.
>> [!success]- Answer
>> d) S3 Standard.

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]]  |  모듈 [[06-storage]]</sub>

> [!question] You want to create a backup of your data in another geographical location. Where should you create this backup?
> a) In another Edge location.
> b) In another Region.
> c) In another VPC.
> d) In another Availability Zone.
>> [!success]- Answer
>> b) In another Region.

> [!question] Which statement is true in relation to the security of Amazon EC2?
> a) You should use instance store volumes to store login data.
> b) You should regularly patch the operating system and applications on your EC2 instances.
> c) You should deploy critical components of your application in the Availability Zone that you trust.
> d) You can track all API calls using Amazon Athena.
>> [!success]- Answer
>> b) You should regularly patch the operating system and applications on your EC2 instances.

<sub>관련: [[amazon-ec2]] · [[amazon-athena]]  |  모듈 [[02-cloud-computing]], [[08-ai-ml-analytics]]</sub>

> [!question] What does AWS Cost Explorer provide to help manage your AWS spend?
> a) Cost comparisons between AWS Cloud environments and on-premises environments.
> b) Accurate estimates of AWS service costs based on your expected usage.
> c) Consolidated billing.
> d) Highly accurate cost forecasts for up to 12 months ahead.
>> [!success]- Answer
>> d) Highly accurate cost forecasts for up to 12 months ahead.

<sub>관련: [[aws-cost-explorer]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?
> a) RDS Single-AZ.
> b) RDS Write Replica.
> c) RDS Snapshots.
> d) RDS Multi-AZ.
>> [!success]- Answer
>> d) RDS Multi-AZ.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?
> a) Deleting all EBS volumes attached to the instances.
> b) You cannot minimize charges for on-demand instances.
> c) Terminating the instances.
> d) Stopping the instances.
>> [!success]- Answer
>> d) Stopping the instances.

<sub>관련: [[amazon-ec2]] · [[amazon-ebs]]  |  모듈 [[02-cloud-computing]], [[06-storage]]</sub>

> [!question] Which of the following strategies helps protect your AWS root account?
> a) Delete root user access keys if you do not need them.
> b) Apply MFA for the root account and use it for all of your work.
> c) Access the root account only from your personal Mobile Phone.
> d) Only share your AWS account password or access keys with trusted persons.
>> [!success]- Answer
>> a) Delete root user access keys if you do not need them.

> [!question] Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)
> a) The size of volumes provisioned per month.
> b) The compute capacity you consume.
> c) The amount of data you have stored in snapshots.
> d) The compute time you consume.
> e) The number of Snowball storage devices you request.
>> [!success]- Answer
>> a) The size of volumes provisioned per month.
>> c) The amount of data you have stored in snapshots.

<sub>관련: [[amazon-ebs]] · [[aws-snow-family]]  |  모듈 [[06-storage]], [[12-migration]]</sub>

> [!question] You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?
> a) Attach a separate IAM policy for each individual account.
> b) Apply the Principle of Least Privilege.
> c) For security purposes, you should not grant any permission to the DevOps team.
> d) Create six different IAM passwords.
>> [!success]- Answer
>> b) Apply the Principle of Least Privilege.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Which of the following has the greatest impact on cost? (Choose TWO)
> a) Compute charges.
> b) The number of services used.
> c) Data Transfer In charges.
> d) Data Transfer Out charges.
> e) The number of IAM roles provisioned.
>> [!success]- Answer
>> a) Compute charges.
>> d) Data Transfer Out charges.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Who from the following will get the largest discount?
> a) A user who chooses to buy On-demand, Convertible, Partial upfront instances.
> b) A user who chooses to buy Reserved, Convertible, All upfront instances.
> c) A user who chooses to buy Reserved, Standard, No upfront instances.
> d) A user who chooses to buy Reserved, Standard, All upfront instances.
>> [!success]- Answer
>> d) A user who chooses to buy Reserved, Standard, All upfront instances.

> [!question] Which of the following is an available option when purchasing Amazon EC2 instances?
> a) The ability to bid to get the lowest possible prices.
> b) The ability to register EC2 instances to get volume discounts on every hour the instances are running.
> c) The ability to buy Dedicated Instances for up to 90% discount.
> d) The ability to pay upfront to get lower hourly costs.
>> [!success]- Answer
>> d) The ability to pay upfront to get lower hourly costs.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] What does the term “Economies of scale” mean?
> a) It means that you save more when you consume more.
> b) It means as more time passes using AWS, you pay more for its services.
> c) It means that AWS will continuously lower costs as it grows.
> d) It means that you have the ability to pay as you go.
>> [!success]- Answer
>> c) It means that AWS will continuously lower costs as it grows.

> [!question] A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?
> a) AWS Auto Scaling.
> b) Amazon Elastic Compute Cloud.
> c) Amazon Elastic File System.
> d) Amazon ElastiCache.
>> [!success]- Answer
>> a) AWS Auto Scaling.

<sub>관련: [[amazon-efs]] · [[amazon-elasticache]]  |  모듈 [[06-storage]], [[07-databases]]</sub>

> [!question] Which of the below options is true of Amazon VPC?
> a) Amazon VPC allows customers to control user interactions with all other AWS resources.
> b) AWS Customers have complete control over their Amazon VPC virtual networking environment.
> c) AWS is responsible for all the management and configuration details of Amazon VPC.
> d) Amazon VPC helps customers to review their AWS architecture and adopt best practices.
>> [!success]- Answer
>> b) AWS Customers have complete control over their Amazon VPC virtual networking environment.

<sub>관련: [[amazon-vpc]]  |  모듈 [[05-networking]]</sub>

> [!question] Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?
> a) AWS Cost Explorer.
> b) AWS Pricing Calculator.
> c) AWS Budgets.
> d) AWS TCO Calculator.
>> [!success]- Answer
>> d) AWS TCO Calculator.

<sub>관련: [[aws-cost-explorer]] · [[aws-budgets]] · [[aws-pricing-calculator]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)
> a) AWS Config.
> b) Amazon Redshift.
> c) Amazon MQ.
> d) AWS Trusted Advisor.
> e) Amazon Cognito.
>> [!success]- Answer
>> a) AWS Config.
>> d) AWS Trusted Advisor.

<sub>관련: [[amazon-redshift]] · [[amazon-cognito]] · [[aws-config]] · [[aws-trusted-advisor]]  |  모듈 [[08-ai-ml-analytics]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following AWS services uses Puppet to automate how EC2 instances are configured?
> a) AWS OpsWorks.
> b) AWS CloudFormation.
> c) AWS Quick Starts.
> d) AWS CloudTrail.
>> [!success]- Answer
>> a) AWS OpsWorks.

<sub>관련: [[amazon-ec2]] · [[aws-cloudtrail]] · [[aws-cloudformation]] · [[aws-opsworks]]  |  모듈 [[02-cloud-computing]], [[04-global-infrastructure]], [[10-monitoring-governance]]</sub>

> [!question] An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?
> a) Amazon Kinesis.
> b) Amazon QuickSight.
> c) AWS CodeDeploy.
> d) Amazon Athena.
>> [!success]- Answer
>> c) AWS CodeDeploy.

<sub>관련: [[amazon-athena]] · [[amazon-kinesis]] · [[amazon-quicksight]] · [[aws-codedeploy]]  |  모듈 [[08-ai-ml-analytics]]</sub>

> [!question] Select the services that are server-based: (Choose TWO)
> a) Amazon RDS.
> b) Amazon DynamoDB.
> c) AWS Lambda.
> d) AWS Fargate.
> e) Amazon EMR.
>> [!success]- Answer
>> a) Amazon RDS.
>> e) Amazon EMR.

<sub>관련: [[aws-lambda]] · [[aws-fargate]] · [[amazon-rds]] · [[amazon-dynamodb]] · [[amazon-emr]]  |  모듈 [[03-compute-services]], [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] What best describes penetration testing?
> a) Testing your application’s response time from different locations.
> b) Testing your network to find security vulnerabilities that an attacker could exploit.
> c) Testing your instances to check for the unhealthy ones.
> d) Testing your software for bugs and errors.
>> [!success]- Answer
>> b) Testing your network to find security vulnerabilities that an attacker could exploit.

> [!question] Which of the following are use cases for Amazon EMR? (Choose TWO)
> a) Enables you to backup extremely large amounts of data at very low costs.
> b) Enables you to move Exabyte-scale data from on-premises datacenters into AWS.
> c) Enables you to analyze and process extremely large amounts of data in a timely manner.
> d) Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.
> e) Enables you to easily run and manage Docker containers.
>> [!success]- Answer
>> c) Enables you to analyze and process extremely large amounts of data in a timely manner.
>> d) Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.

<sub>관련: [[amazon-emr]]  |  모듈 [[08-ai-ml-analytics]]</sub>

> [!question] Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can't see a way to contact support via Chat. What should you do?
> a) There is no chat feature in AWS support.
> b) The chat feature is available for all plans for an additional fee, but you have to request it first.
> c) At a minimum, upgrade to Business support plan.
> d) Upgrade from the Basic Support plan to Developer Support.
>> [!success]- Answer
>> c) At a minimum, upgrade to Business support plan.

<sub>관련: [[aws-support-plans]]  |  모듈 [[11-billing-support]]</sub>

> [!question] A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn’t have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?
> a) AWS Fargate.
> b) AWS Batch.
> c) Amazon Personalize.
> d) AWS Elastic Beanstalk.
>> [!success]- Answer
>> d) AWS Elastic Beanstalk.

<sub>관련: [[aws-fargate]] · [[aws-elastic-beanstalk]] · [[aws-batch]]  |  모듈 [[03-compute-services]]</sub>

> [!question] Which statement best describes the AWS Pay-As-You-Go pricing model?
> a) With AWS, you replace low upfront expenses with large variable payments.
> b) With AWS, you replace low upfront expenses with large fixed payments.
> c) With AWS, you replace large upfront expenses with low fixed payments.
> d) With AWS, you replace large capital expenses with low variable payments.
>> [!success]- Answer
>> d) With AWS, you replace large capital expenses with low variable payments.

> [!question] For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)
> a) Database setup.
> b) Network traffic protection.
> c) Management of the operating system.
> d) Access management.
> e) Management of firewall rules.
>> [!success]- Answer
>> a) Database setup.
>> c) Management of the operating system.

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]</sub>

> [!question] Which of the following strategies help analyze costs in AWS?
> a) Using tags to group resources.
> b) Using AWS CloudFormation to automate the deployment of resources.
> c) Deploying resources of the same type in different regions.
> d) Configuring Amazon Inspector to automatically analyze costs and email reports.
>> [!success]- Answer
>> a) Using tags to group resources.

<sub>관련: [[amazon-inspector]] · [[aws-cloudformation]]  |  모듈 [[04-global-infrastructure]], [[09-security]]</sub>

> [!question] A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?
> a) AWS Direct Connect.
> b) Amazon Comprehend.
> c) AWS Snowmobile.
> d) AWS VPN.
>> [!success]- Answer
>> a) AWS Direct Connect.

<sub>관련: [[aws-snow-family]] · [[aws-direct-connect]] · [[amazon-comprehend]]  |  모듈 [[05-networking]], [[08-ai-ml-analytics]], [[12-migration]]</sub>

> [!question] What is the main benefit of the AWS Storage Gateway service?
> a) It automates the process of building, maintaining, and running ETL jobs.
> b) It provides physical devices to migrate data from on premises to AWS.
> c) It allows integration of on-premises IT environments with Cloud Storage.
> d) It provides hardware-based key storage for regulatory compliance.
>> [!success]- Answer
>> c) It allows integration of on-premises IT environments with Cloud Storage.

<sub>관련: [[aws-storage-gateway]]  |  모듈 [[06-storage]]</sub>

> [!question] To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?
> a) Amazon S3 Glacier Deep Archive.
> b) Amazon S3 Standard-Infrequent Access.
> c) Amazon S3 Glacier.
> d) Instance Store.
>> [!success]- Answer
>> b) Amazon S3 Standard-Infrequent Access.

<sub>관련: [[amazon-s3-glacier]] · [[amazon-s3]]  |  모듈 [[06-storage]]</sub>

> [!question] Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?
> a) AWS Global Accelerator.
> b) AWS Data Pipeline.
> c) AWS DAX Accelerator.
> d) AWS Transfer Acceleration.
>> [!success]- Answer
>> a) AWS Global Accelerator.

<sub>관련: [[aws-global-accelerator]]  |  모듈 [[05-networking]]</sub>

> [!question] Why are Serverless Architectures more economical than Server-based Architectures?
> a) Serverless Architectures use new powerful computing devices.
> b) With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.
> c) When you reserve serverless capacity, you will get large discounts compared to server reservation.
> d) With Serverless Architectures you have the ability to scale automatically up or down as demand changes.
>> [!success]- Answer
>> b) With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.

> [!question] Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)
> a) Point-to-point connectivity between an on-premises data center and AWS.
> b) Detects configuration changes in the AWS environment.
> c) DNS configuration and management.
> d) Manages global application traffic through a variety of routing types.
> e) Provides infrastructure security optimization recommendations.
>> [!success]- Answer
>> c) DNS configuration and management.
>> d) Manages global application traffic through a variety of routing types.

<sub>관련: [[amazon-route-53]]  |  모듈 [[05-networking]]</sub>

> [!question] You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?
> a) AWS Snowmobile.
> b) AWS Import/Export.
> c) AWS DMS.
> d) AWS Snowball.
>> [!success]- Answer
>> d) AWS Snowball.

<sub>관련: [[aws-snow-family]]  |  모듈 [[12-migration]]</sub>

> [!question] You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?
> a) Amazon Redshift.
> b) Amazon Athena.
> c) AWS Cloud9.
> d) Amazon ElastiCache for Redis.
>> [!success]- Answer
>> d) Amazon ElastiCache for Redis.

<sub>관련: [[amazon-redshift]] · [[amazon-elasticache]] · [[amazon-athena]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]]</sub>
