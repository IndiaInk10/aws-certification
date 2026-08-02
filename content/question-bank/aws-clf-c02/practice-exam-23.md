---
title: "모의고사 23회"
tags: [clf-c02, 문제은행, quiz]
exam: 23
문항수: 50
---

# 모의고사 23회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/23)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] A user is planning to migrate an application workload to the AWS Cloud. Which control becomes the responsibility of AWS once the migration is complete?
> a) Patching the guest operating system
> b) Maintaining physical and environmental controls
> c) Protecting communications and maintaining zone security
> d) Patching specific applications
>> [!success]- Answer
>> b) Maintaining physical and environmental controls

> [!question] Which services can be used to deploy applications on AWS? (Choose two.)
> a) AWS Elastic Beanstalk
> b) AWS Config
> c) AWS OpsWorks
> d) AWS Application Discovery Service
> e) Amazon Kinesis
>> [!success]- Answer
>> a) AWS Elastic Beanstalk
>> c) AWS OpsWorks

<sub>관련: [[aws-elastic-beanstalk]] · [[amazon-kinesis]] · [[aws-config]] · [[aws-opsworks]]  |  모듈 [[03-compute-services]], [[08-ai-ml-analytics]], [[10-monitoring-governance]]  |  [참고](https://d0.awsstatic.com/whitepapers/overview-of-deployment-options-on-aws.pdf)</sub>

> [!question] Which AWS service can be used to provide an on-demand, cloud-based contact center?
> a) AWS Direct Connect
> b) Amazon Connect
> c) AWS Support Center
> d) AWS Managed Services
>> [!success]- Answer
>> b) Amazon Connect

<sub>관련: [[aws-direct-connect]] · [[amazon-connect]]  |  모듈 [[05-networking]]  |  [참고](https://aws.amazon.com/connect/customers/)</sub>

> [!question] What tool enables customers without an AWS account to estimate costs for almost all AWS services?
> a) Cost Explorer
> b) TCO Calculator
> c) AWS Budgets
> d) AWS Pricing Calculator
>> [!success]- Answer
>> d) AWS Pricing Calculator

<sub>관련: [[aws-cost-explorer]] · [[aws-budgets]] · [[aws-pricing-calculator]]  |  모듈 [[11-billing-support]]  |  [참고](https://calculator.aws/#/)</sub>

> [!question] Which component must be attached to a VPC to enable inbound Internet access?
> a) NAT gateway
> b) VPC endpoint
> c) VPN connection
> d) Internet gateway
>> [!success]- Answer
>> d) Internet gateway

<sub>관련: [[amazon-vpc]]  |  모듈 [[05-networking]]  |  [참고](https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf)</sub>

> [!question] Which pricing model would result in maximum Amazon Elastic Compute Cloud (Amazon EC2) savings for a database server that must be online for one year?
> a) Spot Instance
> b) On-Demand Instance
> c) Partial Upfront Reserved Instance
> d) No Upfront Reserved Instance
>> [!success]- Answer
>> c) Partial Upfront Reserved Instance

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html)</sub>

> [!question] A company has a MySQL database running on a single Amazon EC2 instance. The company now requires higher availability in the event of an outage. Which set of tasks would meet this requirement?
> a) Add an Application Load Balancer in front of the EC2 instance
> b) Configure EC2 Auto Recovery to move the instance to another Availability Zone
> c) Migrate to Amazon RDS and enable Multi-AZ
> d) Enable termination protection for the EC2 instance to avoid outages
>> [!success]- Answer
>> c) Migrate to Amazon RDS and enable Multi-AZ

<sub>관련: [[elastic-load-balancing]] · [[amazon-ec2]] · [[amazon-rds]]  |  모듈 [[02-cloud-computing]], [[07-databases]]  |  [참고](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)</sub>

> [!question] A company wants to ensure that AWS Management Console users are meeting password complexity requirements. How can the company configure password complexity?
> a) Using an AWS IAM user policy
> b) Using an AWS Organizations service control policy (SCP)
> c) Using an AWS IAM account password policy
> d) Using an AWS Security Hub managed insight
>> [!success]- Answer
>> c) Using an AWS IAM account password policy

<sub>관련: [[aws-iam]] · [[aws-organizations]] · [[aws-security-hub]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html)</sub>

> [!question] Under the AWS shared responsibility model, which of the following is the customer's responsibility?
> a) Patching guest OS and applications
> b) Patching and fixing flaws in the infrastructure
> c) Physical and environmental controls
> d) Configuration of AWS infrastructure devices
>> [!success]- Answer
>> a) Patching guest OS and applications

> [!question] Which of the following tasks is required to deploy a PCI-compliant workload on AWS?
> a) Use any AWS service and implement PCI controls at the application layer
> b) Use an AWS service that is in-scope for PCI compliance and raise an AWS support ticket to enable PCI compliance at the application layer
> c) Use any AWS service and raise an AWS support ticket to enable PCI compliance on that service
> d) Use an AWS service that is in scope for PCI compliance and apply PCI controls at the application layer
>> [!success]- Answer
>> d) Use an AWS service that is in scope for PCI compliance and apply PCI controls at the application layer

<sub>관련: [참고](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-pci-controls.html)  |  [참고](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-pci-controls.html)</sub>

> [!question] A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?
> a) AWS Step Functions
> b) Amazon Simple Notification Service (Amazon SNS)
> c) Amazon Kinesis Data Streams
> d) Amazon Simple Queue Service (Amazon SQS)
>> [!success]- Answer
>> d) Amazon Simple Queue Service (Amazon SQS)

<sub>관련: [[amazon-sqs]] · [[amazon-sns]] · [[aws-step-functions]] · [[amazon-kinesis]]  |  모듈 [[02-cloud-computing]], [[08-ai-ml-analytics]]  |  [참고](https://aws.amazon.com/sqs/faqs/)</sub>

> [!question] AnyCompany recently purchased Example Corp. Both companies use AWS resources, and AnyCompany wants a single aggregated bill. Which option allows AnyCompany to receive a single bill?
> a) Example Corp. must submit a request to its AWS solutions architect or AWS technical account manager to link the accounts and consolidate billing.
> b) AnyCompany must create a new support case in the AWS Support Center requesting that both bills be combined.
> c) Send an invitation to join the organization from AnyCompany's AWS Organizations master account to Example Corp.
> d) Migrate the Example Corp. VPCs, Amazon EC2 instances, and other resources into the AnyCompany AWS account.
>> [!success]- Answer
>> c) Send an invitation to join the organization from AnyCompany's AWS Organizations master account to Example Corp.

<sub>관련: [[amazon-ec2]] · [[aws-organizations]] · [[aws-support-plans]]  |  모듈 [[02-cloud-computing]], [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/awsaccountbilling-aboutv2.pdf)</sub>

> [!question] Which tool can be used to create alerts when the actual or forecasted cost of AWS services exceeds a certain threshold?
> a) Cost Explorer
> b) AWS Budgets
> c) AWS Cost and Usage Report
> d) AWS CloudTrail
>> [!success]- Answer
>> b) AWS Budgets

<sub>관련: [[aws-cloudtrail]] · [[aws-cost-explorer]] · [[aws-budgets]] · [[aws-cost-and-usage-report]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/)</sub>

> [!question] A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?
> a) AWS CloudFormation
> b) AWS Elastic Beanstalk
> c) Amazon EC2
> d) AWS OpsWorks
>> [!success]- Answer
>> b) AWS Elastic Beanstalk

<sub>관련: [[amazon-ec2]] · [[aws-elastic-beanstalk]] · [[aws-cloudformation]] · [[aws-opsworks]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[04-global-infrastructure]]  |  [참고](https://aws.amazon.com/elasticbeanstalk/)</sub>

> [!question] Which AWS Trusted Advisor check is available to all AWS users?
> a) Core checks
> b) All checks
> c) Cost optimization checks
> d) Fault tolerance checks
>> [!success]- Answer
>> a) Core checks

<sub>관련: [[aws-trusted-advisor]]  |  모듈 [[10-monitoring-governance]]  |  [참고](https://www.amazonaws.cn/en/support/trustedadvisor/faq/#checks)</sub>

> [!question] A web developer is concerned that a DDoS attack could target an application. Which AWS services or features can help protect against such an attack? (Choose two.)
> a) AWS Shield
> b) AWS CloudTrail
> c) Amazon CloudFront
> d) AWS Support Center
> e) AWS Service Health Dashboard
>> [!success]- Answer
>> a) AWS Shield
>> c) Amazon CloudFront

<sub>관련: [[amazon-cloudfront]] · [[aws-shield]] · [[aws-cloudtrail]] · [[aws-health-dashboard]]  |  모듈 [[05-networking]], [[09-security]], [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/shield/)</sub>

> [!question] Which AWS service gives users on-demand, self-service access to AWS compliance control reports?
> a) AWS Config
> b) Amazon GuardDuty
> c) AWS Trusted Advisor
> d) AWS Artifact
>> [!success]- Answer
>> d) AWS Artifact

<sub>관련: [[amazon-guardduty]] · [[aws-artifact]] · [[aws-config]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/artifact)</sub>

> [!question] A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)
> a) Create an IAM user and provide AWS Management Console access only.
> b) Create an IAM user and provide programmatic access only.
> c) Create an IAM role and provide AWS Management Console access only.
> d) Create an IAM policy with administrator access and attach it to the IAM user.
> e) Create an IAM policy with Amazon RDS access and attach it to the IAM user.
>> [!success]- Answer
>> b) Create an IAM user and provide programmatic access only.
>> e) Create an IAM policy with Amazon RDS access and attach it to the IAM user.

<sub>관련: [[amazon-rds]] · [[aws-iam]]  |  모듈 [[07-databases]], [[09-security]]</sub>

> [!question] A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources. Which AWS service should the company use?
> a) AWS Config
> b) AWS Secrets Manager
> c) AWS CloudTrail
> d) AWS Trusted Advisor
>> [!success]- Answer
>> a) AWS Config

<sub>관련: [[aws-secrets-manager]] · [[aws-cloudtrail]] · [[aws-config]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/config/)</sub>

> [!question] What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Choose two.)
> a) Preventing a single point of failure
> b) Reducing the operational costs of the application
> c) Allowing the application to serve cross-region users with low latency
> d) Increasing the availability of the application
> e) Increasing the load of the application
>> [!success]- Answer
>> a) Preventing a single point of failure
>> d) Increasing the availability of the application

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-increase-availability.html)</sub>

> [!question] A workload on AWS will run for the foreseeable future by using a consistent number of Amazon EC2 instances. What pricing model will minimize cost while ensuring that compute resources remain available?
> a) Dedicated Hosts
> b) On-Demand Instances
> c) Spot Instances
> d) Reserved Instances
>> [!success]- Answer
>> d) Reserved Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html)</sub>

> [!question] Which tool can be used to identify scheduled changes to the AWS infrastructure?
> a) AWS Personal Health Dashboard
> b) AWS Trusted Advisor
> c) Billing Dashboard
> d) AWS Config
>> [!success]- Answer
>> a) AWS Personal Health Dashboard

<sub>관련: [[aws-config]] · [[aws-trusted-advisor]] · [[aws-health-dashboard]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/)</sub>

> [!question] Which of the following is the customer's responsibility when using Amazon RDS?
> a) Patching the operating system of underlying hardware
> b) Controlling traffic to and from the database through security groups
> c) Running backups that enable point-in-time recovery of a DB instance
> d) Replacing failed DB instances
>> [!success]- Answer
>> b) Controlling traffic to and from the database through security groups

<sub>관련: [[amazon-rds]]  |  모듈 [[07-databases]]  |  [참고](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html)</sub>

> [!question] What is the customer's responsibility when using AWS Lambda?
> a) Operating system configuration
> b) Application management
> c) Platform management
> d) Code encryption
>> [!success]- Answer
>> b) Application management

<sub>관련: [[aws-lambda]]  |  모듈 [[03-compute-services]]  |  [참고](https://aws.amazon.com/lambda/security-overview-of-aws-lambda/)</sub>

> [!question] A company wants to be notified when its AWS Cloud costs or usage exceed defined thresholds. Which AWS service will support these requirements?
> a) AWS Budgets
> b) Cost Explorer
> c) AWS CloudTrail
> d) Amazon Macie
>> [!success]- Answer
>> a) AWS Budgets

<sub>관련: [[amazon-macie]] · [[aws-cloudtrail]] · [[aws-cost-explorer]] · [[aws-budgets]]  |  모듈 [[09-security]], [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://aws.amazon.com/aws-cost-management/aws-budgets/)</sub>

> [!question] Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?
> a) Amazon Aurora
> b) Amazon DynamoDB
> c) Amazon RDS
> d) Amazon Redshift
>> [!success]- Answer
>> b) Amazon DynamoDB

<sub>관련: [[amazon-rds]] · [[amazon-aurora]] · [[amazon-dynamodb]] · [[amazon-redshift]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]]  |  [참고](https://aws.amazon.com/nosql/)</sub>

> [!question] Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?
> a) Reserved Instances
> b) On-Demand Instances
> c) Dedicated Instances
> d) Spot Instances
>> [!success]- Answer
>> d) Spot Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/ec2/spot/)</sub>

> [!question] Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?
> a) AWS VPN
> b) Amazon Connect
> c) AWS Direct Connect
> d) Internet gateway
>> [!success]- Answer
>> c) AWS Direct Connect

<sub>관련: [[aws-direct-connect]] · [[amazon-connect]]  |  모듈 [[05-networking]]  |  [참고](https://aws.amazon.com/directconnect/partners/)</sub>

> [!question] Which AWS services offer compute capabilities? (Choose two.)
> a) Amazon EC2
> b) Amazon S3
> c) Amazon Elastic Block Store (Amazon EBS)
> d) Amazon Cognito
> e) AWS Lambda
>> [!success]- Answer
>> a) Amazon EC2
>> e) AWS Lambda

<sub>관련: [[amazon-ec2]] · [[aws-lambda]] · [[amazon-s3]] · [[amazon-ebs]] · [[amazon-cognito]]  |  모듈 [[02-cloud-computing]], [[03-compute-services]], [[06-storage]]  |  [참고](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html)</sub>

> [!question] Which AWS service can be used to privately store and manage versions of source code?
> a) AWS CodeBuild
> b) AWS CodeCommit
> c) AWS CodePipeline
> d) AWS CodeStar
>> [!success]- Answer
>> b) AWS CodeCommit

<sub>관련: [[aws-codecommit]] · [[aws-codebuild]] · [[aws-codepipeline]]  |  모듈 [[13-well-architected]]  |  [참고](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html)</sub>

> [!question] Which AWS service should a cloud practitioner use to identify security vulnerabilities of an AWS account?
> a) AWS Secrets Manager
> b) Amazon Cognito
> c) Amazon Macie
> d) AWS Trusted Advisor
>> [!success]- Answer
>> d) AWS Trusted Advisor

<sub>관련: [[amazon-cognito]] · [[aws-secrets-manager]] · [[amazon-macie]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://www.coalfire.com/the-coalfire-blog/march-2019/aws-trusted-advisor-for-security-compliance)</sub>

> [!question] A company wants to ensure its infrastructure is designed for fault tolerance and business continuity in the event of an environmental disruption. Which AWS infrastructure component should the company replicate across?
> a) Edge locations
> b) Availability Zones
> c) Regions
> d) Amazon Route 53
>> [!success]- Answer
>> b) Availability Zones

<sub>관련: [[amazon-route-53]]  |  모듈 [[05-networking]]  |  [참고](https://d36cz9buwru1tt.cloudfront.net/AWS_Building_Fault_Tolerant_Applications.pdf)</sub>

> [!question] Which AWS service or feature is used to send both text and email messages from distributed applications?
> a) Amazon Simple Notification Service (Amazon SNS)
> b) Amazon Simple Email Service (Amazon SES)
> c) Amazon CloudWatch alerts
> d) Amazon Simple Queue Service (Amazon SQS)
>> [!success]- Answer
>> a) Amazon Simple Notification Service (Amazon SNS)

<sub>관련: [[amazon-sqs]] · [[amazon-sns]] · [[amazon-cloudwatch]]  |  모듈 [[02-cloud-computing]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/sns/faqs/)</sub>

> [!question] Which AWS Cloud design principles can help increase reliability? (Choose two.)
> a) Using monolithic architecture
> b) Measuring overall efficiency
> c) Testing recovery procedures
> d) Adopting a consumption model
> e) Automatically recovering from failure
>> [!success]- Answer
>> c) Testing recovery procedures
>> e) Automatically recovering from failure

<sub>관련: [참고](https://wa.aws.amazon.com/wat.pillar.reliability.en.html)  |  [참고](https://wa.aws.amazon.com/wat.pillar.reliability.en.html)</sub>

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

> [!question] A company wants to connect to AWS over a private, low-latency connection from its remote office. What is the recommended method to meet these requirements?
> a) Create a VPN tunnel
> b) Connect across the public internet
> c) Use VPC peering to create a connection.
> d) Use AWS Direct Connect.
>> [!success]- Answer
>> d) Use AWS Direct Connect.

<sub>관련: [[amazon-vpc]] · [[aws-direct-connect]]  |  모듈 [[05-networking]]  |  [참고](https://aws.amazon.com/getting-started/projects/connect-data-center-to-aws/)</sub>

> [!question] Which AWS service can be used to retrieve compliance reports on demand?
> a) AWS Secrets Manager
> b) AWS Artifact
> c) AWS Security Hub
> d) AWS Certificate Manager
>> [!success]- Answer
>> b) AWS Artifact

<sub>관련: [[aws-certificate-manager]] · [[aws-secrets-manager]] · [[aws-security-hub]] · [[aws-artifact]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/artifact/)</sub>

> [!question] A company has an AWS-hosted website located behind an Application Load Balancer. The company wants to safeguard the website from SQL injection or cross-site scripting. Which AWS service should the company use?
> a) Amazon GuardDuty
> b) AWS WAF
> c) AWS Trusted Advisor
> d) Amazon Inspector
>> [!success]- Answer
>> b) AWS WAF

<sub>관련: [[elastic-load-balancing]] · [[aws-waf]] · [[amazon-guardduty]] · [[amazon-inspector]] · [[aws-trusted-advisor]]  |  모듈 [[02-cloud-computing]], [[09-security]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/waf/faq/)</sub>

> [!question] How should a web application be deployed to ensure high availability in the AWS Cloud?
> a) Deploy multiple instances of the application in multiple Availability Zones.
> b) Deploy multiple instances of the application in a single Availability Zone.
> c) Deploy the application to a compute-optimized Amazon EC2 instance in a single Availability Zone.
> d) Deploy the application in one Amazon EC2 instance in an Auto Scaling group.
>> [!success]- Answer
>> a) Deploy multiple instances of the application in multiple Availability Zones.

<sub>관련: [[amazon-ec2-auto-scaling]] · [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://www.betsol.com/blog/how-to-make-high-availability-web-applications-on-amazon-web-services/)</sub>

> [!question] A company is running a self-managed Oracle database directly on Amazon EC2 for its steady-state database. The company wants to reduce compute costs. Which option should the company use to maximize savings over a 3-year term?
> a) EC2 Dedicated Instances
> b) EC2 Spot Instances
> c) EC2 Reserved Instances
> d) EC2 On-Demand Instances
>> [!success]- Answer
>> c) EC2 Reserved Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/choosing-a-cloud-platform/)</sub>

> [!question] An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys. What it the SIMPLEST way to provide this information?
> a) Create an IAM user account for the auditor, granting the auditor administrator permissions.
> b) Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor.
> c) Download the IAM credential report, then provide the report to the auditor.
> d) Download the AWS Trusted Advisor report, then provide the report to the auditor.
>> [!success]- Answer
>> c) Download the IAM credential report, then provide the report to the auditor.

<sub>관련: [[aws-iam]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]  |  [참고](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html)</sub>

> [!question] What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)
> a) Volume discounts
> b) A minimal additional fee for use
> c) One bill for multiple accounts
> d) Installment payment options
> e) Custom cost and usage budget creation
>> [!success]- Answer
>> a) Volume discounts
>> c) One bill for multiple accounts

<sub>관련: [[aws-budgets]]  |  모듈 [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)</sub>

> [!question] A company is expecting a short-term spike in internet traffic for its application. During the traffic increase, the application cannot be interrupted. The company also needs to minimize cost and maximize flexibility. Which Amazon EC2 instance type should the company use to meet these requirements?
> a) On-Demand Instances
> b) Spot Instances
> c) Reserved Instances
> d) Dedicated Hosts
>> [!success]- Answer
>> a) On-Demand Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/ec2/faqs/)</sub>

> [!question] A company wants to track AWS resource configuration changes for compliance reasons. Which AWS feature can be used to meet this requirement?
> a) AWS Cost and Usage Report
> b) AWS Organizations service control policies (SCPs)
> c) AWS Config rules
> d) VPC Flow Logs
>> [!success]- Answer
>> c) AWS Config rules

<sub>관련: [[amazon-vpc]] · [[aws-organizations]] · [[aws-config]] · [[aws-cost-and-usage-report]]  |  모듈 [[05-networking]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/config/)</sub>

> [!question] A company is building an application that needs to deliver images and videos globally with minimal latency. Which approach can the company use to accomplish this in a cost effective manner?
> a) Deliver the content through Amazon CloudFront.
> b) Store the content on Amazon S3 and enable S3 cross-region replication.
> c) Implement a VPN across multiple AWS Regions.
> d) Deliver the content through AWS PrivateLink.
>> [!success]- Answer
>> a) Deliver the content through Amazon CloudFront.

<sub>관련: [[amazon-s3]] · [[amazon-cloudfront]]  |  모듈 [[05-networking]], [[06-storage]]  |  [참고](https://aws.amazon.com/blogs/industries/how-to-build-a-global-scalable-low-latency-and-secure-machine-learning-medical-imaging-analysis-platform-on-aws/)</sub>

> [!question] The AWS IAM best practice for granting least privilege is to:
> a) apply an IAM policy to an IAM group and limit the size of the group.
> b) require multi-factor authentication (MFA) for all IAM users.
> c) require each IAM user who has different permissions to have multiple passwords.
> d) apply an IAM policy only to IAM users who require it.
>> [!success]- Answer
>> d) apply an IAM policy only to IAM users who require it.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]  |  [참고](https://kirkpatrickprice.com/blog/best-practices-for-privilege-management-in-aws/)</sub>

> [!question] Which cloud computing benefit does AWS demonstrate with its ability to offer lower variable costs as a result of high purchase volumes?
> a) Pay-as-you-go pricing
> b) High availability
> c) Global reach
> d) Economies of scale
>> [!success]- Answer
>> d) Economies of scale

<sub>관련: [참고](https://innovationtactics.com/amazon-business-model-amazon-web-services/)  |  [참고](https://innovationtactics.com/amazon-business-model-amazon-web-services/)</sub>

> [!question] A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in a various AWS accounts that it wants to interconnect. Which AWS service or feature should the company use to help simplify management and reduce operational costs?
> a) VPC endpoint
> b) AWS Direct Connect
> c) AWS Transit Gateway
> d) VPC peering
>> [!success]- Answer
>> c) AWS Transit Gateway

<sub>관련: [[amazon-vpc]] · [[aws-direct-connect]] · [[aws-transit-gateway]]  |  모듈 [[05-networking]]  |  [참고](https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf)</sub>

> [!question] How can AWS enable a company to control expenses as an application's usage changes unpredictably?
> a) AWS will refund the cost difference if a customer moves to larger servers.
> b) The application can be built to scale up or down automatically as resources are needed
> c) Spot instances will automatically be used if the price is lower than on-demand instances.
> d) Amazon CloudWatch will automatically predict what resources are needed.
>> [!success]- Answer
>> b) The application can be built to scale up or down automatically as resources are needed

<sub>관련: [[amazon-cloudwatch]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] Which AWS service or feature can be used to prevent SQL injection attacks?
> a) Security groups
> b) Network ACLs
> c) AWS WAF
> d) IAM policy
>> [!success]- Answer
>> c) AWS WAF

<sub>관련: [[aws-iam]] · [[aws-waf]]  |  모듈 [[09-security]]</sub>
