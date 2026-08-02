---
title: "모의고사 20회"
tags: [clf-c02, 문제은행, quiz]
exam: 20
문항수: 50
lang: en
---

# 모의고사 20회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/20)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?
> a) Amazon Rekognition
> b) AWS Trusted Advisor
> c) Amazon GuardDuty
> d) Amazon CloudWatch
>> [!success]- Answer
>> c) Amazon GuardDuty

<sub>관련: [[amazon-rekognition]] · [[amazon-guardduty]] · [[amazon-cloudwatch]] · [[aws-trusted-advisor]]  |  모듈 [[08-ai-ml-analytics]], [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/guardduty/)</sub>

> [!question] A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?
> a) AWS Marketplace
> b) AWS Partner Network (APN)
> c) AWS Managed Services
> d) AWS Service Catalog
>> [!success]- Answer
>> a) AWS Marketplace

<sub>관련: [[aws-service-catalog]] · [[aws-marketplace]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/about-aws/whats-new/2019/09/aws-marketplace-easier-to-find-solutions-from-aws-console/)</sub>

> [!question] Which AWS service is a managed NoSQL database?
> a) Amazon Redshift
> b) Amazon DynamoDB
> c) Amazon Aurora
> d) Amazon RDS for MariaDB
>> [!success]- Answer
>> b) Amazon DynamoDB

<sub>관련: [[amazon-rds]] · [[amazon-aurora]] · [[amazon-dynamodb]] · [[amazon-redshift]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]]  |  [참고](https://aws.amazon.com/dynamodb/)</sub>

> [!question] Which AWS service should be used to create a billing alarm?
> a) AWS Trusted Advisor
> b) AWS CloudTrail
> c) Amazon CloudWatch
> d) Amazon QuickSight
>> [!success]- Answer
>> c) Amazon CloudWatch

<sub>관련: [[amazon-quicksight]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-trusted-advisor]]  |  모듈 [[08-ai-ml-analytics]], [[10-monitoring-governance]]  |  [참고](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html)</sub>

> [!question] A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?
> a) Scaling the web application and services developed with Docker
> b) Provisioning or scheduling containers to run on clusters and maintain their availability
> c) Performing hardware maintenance in the AWS facilities that run the AWS Cloud
> d) Managing the guest operating system, including updates and security patches
>> [!success]- Answer
>> c) Performing hardware maintenance in the AWS facilities that run the AWS Cloud

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/getting-started/tutorials/deploy-docker-containers/)</sub>

> [!question] Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?
> a) Amazon CloudFront
> b) AWS Direct Connect
> c) Amazon EC2 Auto Scaling
> d) AWS Transit Gateway
>> [!success]- Answer
>> a) Amazon CloudFront

<sub>관련: [[amazon-ec2-auto-scaling]] · [[amazon-ec2]] · [[amazon-cloudfront]] · [[aws-direct-connect]] · [[aws-transit-gateway]]  |  모듈 [[02-cloud-computing]], [[05-networking]]  |  [참고](https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/)</sub>

> [!question] Which actions represent best practices for using AWS IAM? (Choose two.)
> a) Configure a strong password policy
> b) Share the security credentials among users of AWS accounts who are in the same Region
> c) Use access keys to log in to the AWS Management Console
> d) Rotate access keys on a regular basis
> e) Avoid using IAM roles to delegate permissions
>> [!success]- Answer
>> a) Configure a strong password policy
>> d) Rotate access keys on a regular basis

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]  |  [참고](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)</sub>

> [!question] Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?
> a) AWS Config
> b) VPC Flow Logs
> c) AWS Trusted Advisor
> d) AWS CloudTrail
>> [!success]- Answer
>> b) VPC Flow Logs

<sub>관련: [[amazon-vpc]] · [[aws-cloudtrail]] · [[aws-config]] · [[aws-trusted-advisor]]  |  모듈 [[05-networking]], [[10-monitoring-governance]]</sub>

> [!question] A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. Which service will support these requirements?
> a) Amazon Inspector
> b) Amazon CloudWatch
> c) AWS Global Accelerator
> d) Amazon CloudFront
>> [!success]- Answer
>> c) AWS Global Accelerator

<sub>관련: [[amazon-cloudfront]] · [[aws-global-accelerator]] · [[amazon-inspector]] · [[amazon-cloudwatch]]  |  모듈 [[05-networking]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)
> a) Use AWS Config to generate an inventory of AWS resources
> b) Use service limits to prevent users from creating or making changes to AWS resources
> c) Use AWS CloudTrail to record AWS API calls into an auditable log file
> d) Use AWS Certificate Manager to whitelist approved AWS resources and services
> e) Use Amazon GuardDuty to validate configuration changes made to AWS resources
>> [!success]- Answer
>> a) Use AWS Config to generate an inventory of AWS resources
>> c) Use AWS CloudTrail to record AWS API calls into an auditable log file

<sub>관련: [[aws-certificate-manager]] · [[amazon-guardduty]] · [[aws-cloudtrail]] · [[aws-config]] · [[aws-well-architected-tool]]  |  모듈 [[09-security]], [[10-monitoring-governance]], [[13-well-architected]]</sub>

> [!question] Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?
> a) Amazon CloudWatch
> b) AWS Config
> c) AWS Trusted Advisor
> d) AWS IAM
>> [!success]- Answer
>> a) Amazon CloudWatch

<sub>관련: [[aws-iam]] · [[amazon-cloudwatch]] · [[aws-config]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/blogs/mt/monitor-and-notify-on-aws-account-root-user-activity/)</sub>

> [!question] Which design principle should be considered when architecting in the AWS Cloud?
> a) Think of servers as non-disposable resources
> b) Use synchronous integration of services
> c) Design loosely coupled components
> d) Implement the least permissive rules for security groups
>> [!success]- Answer
>> c) Design loosely coupled components

<sub>관련: [참고](https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/)  |  [참고](https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/)</sub>

> [!question] Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)
> a) AWS Snowball
> b) AWS Lambda
> c) AWS ElastiCache
> d) AWS Database Migration Service (AWS DMS)
> e) Amazon API Gateway
>> [!success]- Answer
>> a) AWS Snowball
>> d) AWS Database Migration Service (AWS DMS)

<sub>관련: [[aws-lambda]] · [[aws-snow-family]] · [[amazon-elasticache]] · [[aws-dms]] · [[amazon-api-gateway]]  |  모듈 [[03-compute-services]], [[07-databases]], [[12-migration]], [[13-well-architected]]  |  [참고](https://aws.amazon.com/snowball/)</sub>

> [!question] A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?
> a) Run the application on a bigger EC2 instance size.
> b) Switch to an EC2 instance family that better matches batch requirements.
> c) Distribute the application across multiple EC2 instances and run the workload in parallel.
> d) Run the application on a bare metal EC2 instance.
>> [!success]- Answer
>> c) Distribute the application across multiple EC2 instances and run the workload in parallel.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. How can this be achieved using AWS services or features?
> a) Forward monthly invoices for each account. Then create IAM roles to allow cross-account access.
> b) Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.
> c) Configure AWS Organizations in each of the existing accounts. Then link all accounts together.
> d) Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts.
>> [!success]- Answer
>> b) Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.

<sub>관련: [[aws-iam]] · [[aws-organizations]] · [[aws-cost-explorer]]  |  모듈 [[09-security]], [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html)</sub>

> [!question] The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?
> a) Economy of scale
> b) Elasticity
> c) High availability
> d) Agility
>> [!success]- Answer
>> b) Elasticity

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?
> a) AWS CloudTrail
> b) Amazon EC2 Auto Scaling
> c) Amazon Forecast
> d) AWS Config
>> [!success]- Answer
>> b) Amazon EC2 Auto Scaling

<sub>관련: [[amazon-ec2-auto-scaling]] · [[amazon-ec2]] · [[aws-cloudtrail]] · [[aws-config]]  |  모듈 [[02-cloud-computing]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/autoscaling/)</sub>

> [!question] Which AWS service enables users to securely connect to AWS resources over the public internet?
> a) Amazon VPC peering
> b) AWS Direct Connect
> c) AWS VPN
> d) Amazon Pinpoint
>> [!success]- Answer
>> c) AWS VPN

<sub>관련: [[amazon-vpc]] · [[aws-direct-connect]]  |  모듈 [[05-networking]]  |  [참고](https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf)</sub>

> [!question] Which tool is used to forecast AWS spending?
> a) AWS Trusted Advisor
> b) AWS Organizations
> c) Cost Explorer
> d) Amazon Inspector
>> [!success]- Answer
>> c) Cost Explorer

<sub>관련: [[aws-organizations]] · [[amazon-inspector]] · [[aws-trusted-advisor]] · [[aws-cost-explorer]]  |  모듈 [[09-security]], [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html)</sub>

> [!question] A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?
> a) Amazon ElastiCache
> b) Amazon CloudFront
> c) Amazon Elastic File System (Amazon EFS)
> d) Amazon Elastic Block Store (Amazon EBS)
>> [!success]- Answer
>> b) Amazon CloudFront

<sub>관련: [[amazon-ebs]] · [[amazon-efs]] · [[amazon-elasticache]] · [[amazon-cloudfront]]  |  모듈 [[05-networking]], [[06-storage]], [[07-databases]]</sub>

> [!question] Which of the following is a component of the AWS Global Infrastructure?
> a) Amazon Alexa
> b) AWS Regions
> c) Amazon Lightsail
> d) AWS Organizations
>> [!success]- Answer
>> b) AWS Regions

<sub>관련: [[amazon-lightsail]] · [[aws-organizations]]  |  모듈 [[03-compute-services]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/about-aws/global-infrastructure/)</sub>

> [!question] Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?
> a) Amazon CloudWatch
> b) AWS Config
> c) AWS CloudTrail
> d) Amazon Inspector
>> [!success]- Answer
>> a) Amazon CloudWatch

<sub>관련: [[amazon-ec2]] · [[amazon-inspector]] · [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-config]]  |  모듈 [[02-cloud-computing]], [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/ec2/faqs/)</sub>

> [!question] Why is it beneficial to use Elastic Load Balancers with applications?
> a) They allow for the conversion from Application Load Balancers to Classic Load Balancers.
> b) They are capable of handling constant changes in network traffic patterns.
> c) They automatically adjust capacity.
> d) They are provided at no charge to users.
>> [!success]- Answer
>> b) They are capable of handling constant changes in network traffic patterns.

<sub>관련: [[elastic-load-balancing]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html)</sub>

> [!question] Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)
> a) Infrastructure facilities access management
> b) Cloud infrastructure hardware lifecycle management
> c) Configuration management of user's applications
> d) Networking infrastructure protection
> e) Security groups configuration
>> [!success]- Answer
>> c) Configuration management of user's applications
>> e) Security groups configuration

<sub>관련: [참고](https://cloudacademy.com/blog/aws-shared-responsibility-model-security/)  |  [참고](https://cloudacademy.com/blog/aws-shared-responsibility-model-security/)</sub>

> [!question] IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. This is an example of which principle of cloud architecture design?
> a) Scalability
> b) Loose coupling
> c) Automation
> d) Automatic scaling
>> [!success]- Answer
>> b) Loose coupling

<sub>관련: [참고](https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf)  |  [참고](https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf)</sub>

> [!question] Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)
> a) AWS WAF
> b) AWS Trusted Advisor
> c) AWS Direct Connect
> d) AWS Organizations
> e) Network ACLs
>> [!success]- Answer
>> a) AWS WAF
>> e) Network ACLs

<sub>관련: [[aws-direct-connect]] · [[aws-organizations]] · [[aws-waf]] · [[aws-trusted-advisor]]  |  모듈 [[05-networking]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?
> a) Amazon EBS
> b) Amazon EFS
> c) Amazon S3
> d) AWS Artifact
>> [!success]- Answer
>> b) Amazon EFS

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[amazon-ebs]] · [[amazon-efs]] · [[aws-artifact]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/efs/)</sub>

> [!question] A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS? (Choose two.)
> a) Running a virus scan on EC2 instances
> b) Protecting against IP spoofing and packet sniffing
> c) Installing the latest security patches on the RDS instance
> d) Encrypting communication between the EC2 instances and the Elastic Load Balancer
> e) Configuring a security group and a network access control list (NACL) for EC2
>> [!success]- Answer
>> b) Protecting against IP spoofing and packet sniffing
>> c) Installing the latest security patches on the RDS instance

<sub>관련: [[elastic-load-balancing]] · [[amazon-ec2]] · [[amazon-rds]]  |  모듈 [[02-cloud-computing]], [[07-databases]]</sub>

> [!question] What is the benefit of elasticity in the AWS Cloud?
> a) Ensure web traffic is automatically spread across multiple AWS Regions.
> b) Minimize storage costs by automatically archiving log data.
> c) Enable AWS to automatically select the most cost-effective services.
> d) Automatically adjust the required compute capacity to maintain consistent performance.
>> [!success]- Answer
>> d) Automatically adjust the required compute capacity to maintain consistent performance.

<sub>관련: [참고](https://aimconsulting.com/insights/blog/the-elastic-cloud-opportunity/)  |  [참고](https://aimconsulting.com/insights/blog/the-elastic-cloud-opportunity/)</sub>

> [!question] The continual reduction of AWS Cloud pricing is due to:
> a) pay-as-you go pricing
> b) the AWS global infrastructure
> c) economies of scale
> d) reserved storage pricing
>> [!success]- Answer
>> c) economies of scale

> [!question] A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. How can this be accomplished?
> a) Enable S3 Block Public Access from the AWS Management Console.
> b) Hold a team meeting to discuss the importance if only uploading private S3 objects.
> c) Require all S3 objects to be manually approved before uploading.
> d) Create a service to monitor all S3 uploads and remove any public uploads.
>> [!success]- Answer
>> a) Enable S3 Block Public Access from the AWS Management Console.

<sub>관련: [[amazon-s3]]  |  모듈 [[06-storage]]  |  [참고](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html)</sub>

> [!question] A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. Which action can be taken to resolve this?
> a) Open a detailed case related to billing and submit it to AWS Support for help.
> b) Upload data describing the issue to a new object in a private Amazon S3 bucket.
> c) Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information.
> d) Proceed with creating a new dashboard in Amazon QuickSight.
>> [!success]- Answer
>> a) Open a detailed case related to billing and submit it to AWS Support for help.

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[amazon-quicksight]] · [[aws-cost-and-usage-report]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[08-ai-ml-analytics]]  |  [참고](https://docs.aws.amazon.com/awssupport/latest/user/case-management.html)</sub>

> [!question] What does the AWS Simple Monthly Calculator do?
> a) Compares on-premises costs to colocation environments
> b) Estimates monthly billing based on projected usage
> c) Estimates power consumption at existing data centers
> d) Estimates CPU utilization
>> [!success]- Answer
>> b) Estimates monthly billing based on projected usage

<sub>관련: [[aws-pricing-calculator]]  |  모듈 [[11-billing-support]]  |  [참고](https://aws.amazon.com/blogs/aws/estimate-your-c/)</sub>

> [!question] Who is responsible for patching the guest operating system for Amazon RDS?
> a) The AWS Product team
> b) The customer Database Administrator
> c) Managed partners
> d) AWS Support
>> [!success]- Answer
>> b) The customer Database Administrator

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]  |  [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)</sub>

> [!question] Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)
> a) Amazon EC2
> b) Amazon DynamoDB
> c) Amazon S3
> d) Amazon Route 53
> e) Amazon Redshift
>> [!success]- Answer
>> a) Amazon EC2
>> b) Amazon DynamoDB

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[amazon-dynamodb]] · [[amazon-redshift]] · [[amazon-route-53]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[06-storage]], [[07-databases]], [[08-ai-ml-analytics]]  |  [참고](https://aws.amazon.com/autoscaling/faqs/)</sub>

> [!question] Which of the following are benefits of AWS Global Accelerator? (Choose two.)
> a) Reduced cost to run services on AWS
> b) Improved availability of applications deployed on AWS
> c) Higher durability of data stored on AWS
> d) Decreased latency to reach applications deployed on AWS
> e) Higher security of data stored on AWS
>> [!success]- Answer
>> b) Improved availability of applications deployed on AWS
>> d) Decreased latency to reach applications deployed on AWS

<sub>관련: [[aws-global-accelerator]]  |  모듈 [[05-networking]]  |  [참고](https://aws.amazon.com/global-accelerator/faqs/)</sub>

> [!question] A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:
> a) the AWS Support forum
> b) AWS Abuse
> c) an AWS Solutions Architect
> d) AWS Support
>> [!success]- Answer
>> d) AWS Support

<sub>관련: [참고](https://aws.amazon.com/premiumsupport/knowledge-center/reactivate-suspended-account/)  |  [참고](https://aws.amazon.com/premiumsupport/knowledge-center/reactivate-suspended-account/)</sub>

> [!question] Which AWS Cloud best practice uses the elasticity and agility of cloud computing?
> a) Provision capacity based on past usage and theoretical peaks
> b) Dynamically and predictively scale to meet usage demands
> c) Build the application and infrastructure in a data center that grants physical access
> d) Break apart the application into loosely coupled components
>> [!success]- Answer
>> b) Dynamically and predictively scale to meet usage demands

> [!question] Which method helps to optimize costs of users moving to the AWS Cloud?
> a) Paying only for what is used
> b) Purchasing hardware before it is needed
> c) Manually provisioning cloud resources
> d) Purchasing for the maximum possible load
>> [!success]- Answer
>> a) Paying only for what is used

<sub>관련: [참고](https://www.cloudmanagementinsider.com/ways-to-optimize-aws-cost/)  |  [참고](https://www.cloudmanagementinsider.com/ways-to-optimize-aws-cost/)</sub>

> [!question] Under the AWS shared responsibility model, which of the following is a customer responsibility?
> a) Installing security patches for the Xen and KVM hypervisors
> b) Installing operating system patches for Amazon DynamoDB
> c) Installing operating system security patches for Amazon EC2 database instances
> d) Installing operating system security patches for Amazon RDS database instances
>> [!success]- Answer
>> c) Installing operating system security patches for Amazon EC2 database instances

<sub>관련: [[amazon-ec2]] · [[amazon-rds]] · [[amazon-dynamodb]]  |  모듈 [[02-cloud-computing]], [[07-databases]]  |  [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)</sub>

> [!question] The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)
> a) Terminate all AWS resources automatically if budget thresholds are exceeded.
> b) Break down AWS costs by day, service, and linked AWS account.
> c) Create budgets and receive notifications if current of forecasted usage exceeds the budgets.
> d) Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective.
> e) Move data stored in Amazon S3 to a more cost-effective storage class.
>> [!success]- Answer
>> b) Break down AWS costs by day, service, and linked AWS account.
>> c) Create budgets and receive notifications if current of forecasted usage exceeds the budgets.

<sub>관련: [[amazon-s3]] · [[aws-budgets]]  |  모듈 [[06-storage]], [[11-billing-support]]</sub>

> [!question] Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:
> a) AWS Support
> b) the customer
> c) AWS Systems Manager
> d) AWS Config
>> [!success]- Answer
>> b) the customer

<sub>관련: [[aws-config]] · [[aws-systems-manager]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/compliance/shared-responsibility-model/)</sub>

> [!question] Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?
> a) AWS Direct Connect
> b) Amazon Connect
> c) AWS Identity and Access Management (IAM)
> d) AWS Firewall Manager
>> [!success]- Answer
>> c) AWS Identity and Access Management (IAM)

<sub>관련: [[aws-direct-connect]] · [[amazon-connect]] · [[aws-iam]] · [[aws-firewall-manager]]  |  모듈 [[05-networking]], [[09-security]]</sub>

> [!question] Which AWS service provides on-demand of AWS security and compliance documentation?
> a) AWS Directory Service
> b) AWS Artifact
> c) AWS Trusted Advisor
> d) Amazon Inspector
>> [!success]- Answer
>> b) AWS Artifact

<sub>관련: [[aws-directory-service]] · [[amazon-inspector]] · [[aws-artifact]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/artifact/#:~:text=AWS%20Artifact%20is%20your%20go,reports%20and%20select%20online%20agreements>.)</sub>

> [!question] Which AWS service can be used to turn text into life-like speech?
> a) Amazon Polly
> b) Amazon Transcribe
> c) Amazon Rekognition
> d) Amazon Lex
>> [!success]- Answer
>> a) Amazon Polly

<sub>관련: [[amazon-rekognition]] · [[amazon-polly]] · [[amazon-transcribe]] · [[amazon-lex]]  |  모듈 [[08-ai-ml-analytics]]  |  [참고](https://aws.amazon.com/polly/#:~:text=Amazon%20Polly%20is%20a%20service,synthesize%20natural%20sounding%20human%20speech>.)</sub>

> [!question] What is one of the core principles to follow when designing a highly available application in the AWS Cloud?
> a) Design using a serverless architecture
> b) Assume that all components within an application can fail
> c) Design AWS Auto Scaling into every application
> d) Design all components using open-source code
>> [!success]- Answer
>> b) Assume that all components within an application can fail

> [!question] A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include: (The status of Amazon S3 bucket permissions, Whether multi-factor authentication is enabled for the AWS account root user, If any security groups are configured to allow unrestricted access.) Where can all this information be found in one location?
> a) Amazon QuickSight dashboard
> b) AWS CloudTrail trails
> c) AWS Trusted Advisor report
> d) IAM credential report
>> [!success]- Answer
>> c) AWS Trusted Advisor report

<sub>관련: [[amazon-s3]] · [[amazon-quicksight]] · [[aws-iam]] · [[aws-cloudtrail]] · [[aws-trusted-advisor]]  |  모듈 [[06-storage]], [[08-ai-ml-analytics]], [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?
> a) Dedicated Hosts
> b) On-Demand Instances
> c) Spot Instances
> d) Reserved Instances
>> [!success]- Answer
>> a) Dedicated Hosts

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/ec2/dedicated-hosts/pricing/)</sub>

> [!question] Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?
> a) AWS Regions
> b) Availability Zones
> c) Edge locations
> d) Data centers
>> [!success]- Answer
>> c) Edge locations

> [!question] Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?
> a) Security
> b) Operational excellence
> c) Performance efficiency
> d) Cost optimization
>> [!success]- Answer
>> a) Security

<sub>관련: [[aws-config]] · [[aws-well-architected-tool]]  |  모듈 [[10-monitoring-governance]], [[13-well-architected]]  |  [참고](https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf)</sub>
