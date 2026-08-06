---
title: "모의고사 22회"
tags: [clf-c02, 문제은행, quiz]
exam: 22
문항수: 50
lang: en
---

# 모의고사 22회

> [!info] 실전처럼 풀기
> 이 문서는 원문 보관용입니다. 채점 · 타이머 · 오답 기록이 필요하면
> **[문제 풀이 화면](/quiz/aws-clf-c02/22)** 에서 푸세요.
> 출처: [kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes) (MIT)

> [!question] A company operating in the AWS Cloud requires separate invoices for specific environments, such as development, testing, and production. How can this be achieved?
> a) Use multiple AWS accounts
> b) Use resource tagging
> c) Use multiple VPCs
> d) Use Cost Explorer
>> [!success]- Answer
>> a) Use multiple AWS accounts

<sub>관련: [[aws-cost-explorer]]  |  모듈 [[11-billing-support]]</sub>

> [!question] Which AWS service can be used in the application deployment process?
> a) AWS AppSync
> b) AWS Batch
> c) AWS CodePipeline
> d) AWS DataSync
>> [!success]- Answer
>> c) AWS CodePipeline

<sub>관련: [[aws-batch]] · [[aws-datasync]] · [[aws-codepipeline]]  |  모듈 [[03-compute-services]], [[12-migration]], [[13-well-architected]]</sub>

> [!question] What can be used to reduce the cost of running Amazon EC2 instances? (Choose two.)
> a) Spot Instances for stateless and flexible workloads
> b) Memory optimized instances for high-compute workloads
> c) On-Demand Instances for high-cost and sustained workloads
> d) Reserved Instances for sustained workloads
> e) Spend limits set using AWS Budgets
>> [!success]- Answer
>> a) Spot Instances for stateless and flexible workloads
>> d) Reserved Instances for sustained workloads

<sub>관련: [[amazon-ec2]] · [[aws-budgets]]  |  모듈 [[02-cloud-computing]], [[11-billing-support]]</sub>

> [!question] A company is launching an e-commerce site that will store and process credit card data. The company requires information about AWS compliance reports and AWS agreements. Which AWS service provides on-demand access to these items?
> a) AWS Certificate Manager
> b) AWS Config
> c) AWS Artifact
> d) AWS CloudTrail
>> [!success]- Answer
>> c) AWS Artifact

<sub>관련: [[aws-certificate-manager]] · [[aws-artifact]] · [[aws-cloudtrail]] · [[aws-config]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which AWS service or feature allows the user to manage cross-region application traffic?
> a) Amazon AppStream 2.0
> b) Amazon VPC
> c) Elastic Load Balancer
> d) Amazon Route 53
>> [!success]- Answer
>> d) Amazon Route 53

<sub>관련: [[elastic-load-balancing]] · [[amazon-vpc]] · [[amazon-route-53]] · [[amazon-appstream-2-0]]  |  모듈 [[02-cloud-computing]], [[05-networking]], [[13-well-architected]]</sub>

> [!question] Which AWS service can be used to track unauthorized API calls?
> a) AWS Config
> b) AWS CloudTrail
> c) AWS Trusted Advisor
> d) Amazon Inspector
>> [!success]- Answer
>> b) AWS CloudTrail

<sub>관련: [[amazon-inspector]] · [[aws-cloudtrail]] · [[aws-config]] · [[aws-trusted-advisor]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] A user needs to regularly audit and evaluate the setup of all AWS resources, identify non-compliant accounts, and be notified when a resource changes. Which AWS service can be used to meet these requirements?
> a) AWS Trusted Advisor
> b) AWS Config
> c) AWS Resource Access Manager
> d) AWS Systems Manager
>> [!success]- Answer
>> b) AWS Config

<sub>관련: [[aws-config]] · [[aws-trusted-advisor]] · [[aws-systems-manager]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?
> a) Launch the instances across multiple Availability Zones in a single AWS Region.
> b) Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.
> c) Launch the instances in multiple AWS Regions, but in the same Availability Zone.
> d) Launch the instances as EC2 Spot Instances in the same AWS Region, but in different Availability Zones.
>> [!success]- Answer
>> a) Launch the instances across multiple Availability Zones in a single AWS Region.

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] A company must store critical business data in Amazon S3 with a backup to another AWS Region. How can this be achieved?
> a) Use an Amazon CloudFront Content Delivery Network (CDN) to cache data globally
> b) Set up Amazon S3 cross-region replication to another AWS Region
> c) Configure the AWS Backup service to back up to the data to another AWS Region
> d) Take Amazon S3 bucket snapshots and copy that data to another AWS Region
>> [!success]- Answer
>> b) Set up Amazon S3 cross-region replication to another AWS Region

<sub>관련: [[amazon-s3]] · [[aws-backup]] · [[amazon-cloudfront]]  |  모듈 [[05-networking]], [[06-storage]], [[07-databases]]</sub>

> [!question] Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?
> a) AWS Budgets
> b) AWS Cost Explorer
> c) AWS Cost Allocation Tags
> d) AWS Organizations
>> [!success]- Answer
>> a) AWS Budgets

<sub>관련: [[aws-organizations]] · [[aws-cost-explorer]] · [[aws-budgets]]  |  모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] A company wants to run penetration tests against its own Amazon EC2 instances and Amazon RDS databases on AWS. What must the company do before it starts testing?
> a) Nothing. AWS permits customers to test these services without prior approval.
> b) Submit a request and wait for written approval from AWS Support.
> c) Move the resources into a separate AWS account first.
> d) Upgrade to an AWS Enterprise Support plan.
>> [!success]- Answer
>> a) Nothing. AWS permits customers to test these services without prior approval.
>> 정정 — 원래 문항은 "침투 테스트를 **요청하는** 방법"을 물었고 정답이 "요청 양식 작성"이었습니다. 지금은 **허용된 서비스에 대해서는 사전 승인 없이** 바로 테스트할 수 있어 문항 자체가 성립하지 않아 다시 썼습니다. AWS에 요청해야 하는 것은 DDoS 시뮬레이션 같은 특수한 경우뿐입니다.

<sub>관련: [[amazon-ec2]] · [[amazon-rds]]  |  모듈 [[09-security]]  |  [참고](https://aws.amazon.com/security/penetration-testing/)</sub>

> [!question] A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. Which AWS service can meet these requirements?
> a) Amazon Inspector
> b) Amazon Macie
> c) Amazon GuardDuty
> d) AWS Secrets Manager
>> [!success]- Answer
>> b) Amazon Macie

<sub>관련: [[amazon-s3]] · [[aws-secrets-manager]] · [[amazon-guardduty]] · [[amazon-inspector]] · [[amazon-macie]]  |  모듈 [[06-storage]], [[09-security]]</sub>

> [!question] Which components are required to build a successful site-to-site VPN connection on AWS? (Choose two.)
> a) Internet gateway
> b) NAT gateway
> c) Customer gateway
> d) Transit gateway
> e) Virtual private gateway
>> [!success]- Answer
>> c) Customer gateway
>> e) Virtual private gateway

<sub>관련: [[aws-transit-gateway]]  |  모듈 [[05-networking]]</sub>

> [!question] Which Amazon EC2 pricing option is best suited for applications with short-term, spiky, or unpredictable workloads that cannot be interrupted?
> a) Spot Instances
> b) Dedicated Hosts
> c) On-Demand Instances
> d) Reserved Instances
>> [!success]- Answer
>> c) On-Demand Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which AWS cloud architecture principle states that systems should reduce interdependencies?
> a) Scalability
> b) Services, not servers
> c) Removing single points of failure
> d) Loose coupling
>> [!success]- Answer
>> d) Loose coupling

<sub>모듈 [[13-well-architected]]</sub>

> [!question] What is the MOST effective resource for staying up to date on AWS security announcements?
> a) AWS Personal Health Dashboard
> b) AWS Secrets Manager
> c) AWS Security Bulletins
> d) Amazon Inspector
>> [!success]- Answer
>> c) AWS Security Bulletins

<sub>관련: [[aws-secrets-manager]] · [[amazon-inspector]] · [[aws-health-dashboard]]  |  모듈 [[09-security]], [[11-billing-support]]</sub>

> [!question] Which AWS service offers persistent storage for a file system?
> a) Amazon S3
> b) Amazon EC2 instance store
> c) Amazon Elastic Block Store (Amazon EBS)
> d) Amazon ElastiCache
>> [!success]- Answer
>> c) Amazon Elastic Block Store (Amazon EBS)

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[amazon-ebs]] · [[amazon-elasticache]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[07-databases]]</sub>

> [!question] Which of the following allows AWS users to manage cost allocations for billing?
> a) Tagging resources
> b) Limiting who can create resources
> c) Adding a secondary payment method
> d) Running all operations on a single AWS account
>> [!success]- Answer
>> a) Tagging resources

<sub>모듈 [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?
> a) Amazon GuardDuty
> b) AWS Security Hub
> c) AWS Artifact
> d) AWS Shield
>> [!success]- Answer
>> c) AWS Artifact

<sub>관련: [[aws-shield]] · [[amazon-guardduty]] · [[aws-security-hub]] · [[aws-artifact]]  |  모듈 [[09-security]], [[10-monitoring-governance]]</sub>

> [!question] Which of the following AWS services are serverless? (Choose two.)
> a) AWS Lambda
> b) Amazon Elasticsearch Service
> c) AWS Elastic Beanstalk
> d) Amazon DynamoDB
> e) Amazon Redshift
>> [!success]- Answer
>> a) AWS Lambda
>> d) Amazon DynamoDB

<sub>관련: [[aws-lambda]] · [[aws-elastic-beanstalk]] · [[amazon-dynamodb]] · [[amazon-redshift]]  |  모듈 [[03-compute-services]], [[07-databases]], [[08-ai-ml-analytics]]</sub>

> [!question] Which AWS managed services can be used to extend an on-premises data center to the AWS network? (Choose two.)
> a) AWS VPN
> b) NAT gateway
> c) AWS Direct Connect
> d) Amazon Connect
> e) Amazon Route 53
>> [!success]- Answer
>> a) AWS VPN
>> c) AWS Direct Connect

<sub>관련: [[amazon-route-53]] · [[aws-direct-connect]] · [[amazon-connect]]  |  모듈 [[05-networking]]</sub>

> [!question] Which requirement must be met for a member account to be unlinked from an AWS Organizations account?
> a) The linked account must be actively compliant with AWS System and Organization Controls (SOC).
> b) The payer and the linked account must both create AWS Support cases to request that the member account be unlinked from the organization.
> c) The member account must meet the requirements of a standalone account.
> d) The payer account must be used to remove the linked account from the organization.
>> [!success]- Answer
>> c) The member account must meet the requirements of a standalone account.

<sub>관련: [[aws-organizations]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] What AWS benefit refers to a customer's ability to deploy applications that scale up and down the meet variable demand?
> a) Elasticity
> b) Agility
> c) Security
> d) Scalability
>> [!success]- Answer
>> a) Elasticity
>> 정정 — 원문 정답은 `d`였습니다. **늘리고 줄이는(up and down)** 능력은 탄력성입니다. 확장성은 늘어나는 부하를 감당하는 능력을 가리킵니다.

<sub>모듈 [[01-cloud-intro]]</sub>

> [!question] During a compliance review, one of the auditors requires a copy of the AWS SOC 2 report. Which service should be used to submit this request?
> a) AWS Personal Health Dashboard
> b) AWS Trusted Advisor
> c) AWS Artifact
> d) Amazon S3
>> [!success]- Answer
>> c) AWS Artifact

<sub>관련: [[amazon-s3]] · [[aws-artifact]] · [[aws-trusted-advisor]] · [[aws-health-dashboard]]  |  모듈 [[06-storage]], [[10-monitoring-governance]], [[11-billing-support]]</sub>

> [!question] A company wants to set up a highly available workload in AWS with a disaster recovery plan that will allow the company to recover in case of a regional service interruption. Which configuration will meet these requirements? (Choose two.)
> a) Run on two Availability Zones in one AWS Region, using the additional Availability Zones in the AWS Region for the disaster recovery site.
> b) Run on two Availability Zones in one AWS Region, using another AWS Region for the disaster recovery site.
> c) Run on two Availability Zones in one AWS Region, using a local AWS Region for the disaster recovery site.
> d) Run across two AWS Regions, using a third AWS Region for the disaster recovery site.
>> [!success]- Answer
>> b) Run on two Availability Zones in one AWS Region, using another AWS Region for the disaster recovery site.
>> d) Run across two AWS Regions, using a third AWS Region for the disaster recovery site.

<sub>관련: [참고](https://aws.amazon.com/blogs/startups/large-scale-disaster-recovery-using-aws-regions/)  |  [참고](https://aws.amazon.com/blogs/startups/large-scale-disaster-recovery-using-aws-regions/)  |  모듈 [[04-global-infrastructure]]</sub>

> [!question] A company has a 500 TB image repository that needs to be transported to AWS for processing. Which AWS service can import this data MOST cost-effectively?
> a) AWS Snowball
> b) AWS Direct Connect
> c) AWS VPN
> d) Amazon S3
>> [!success]- Answer
>> a) AWS Snowball

<sub>관련: [[amazon-s3]] · [[aws-snow-family]] · [[aws-direct-connect]]  |  모듈 [[05-networking]], [[06-storage]], [[12-migration]]  |  [참고](https://aws.amazon.com/blogs/storage/migrating-hundreds-of-tb-of-data-to-amazon-s3-with-aws-datasync/)</sub>

> [!question] Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?
> a) Amazon DynamoDB
> b) Amazon Athena
> c) Amazon RDS
> d) Amazon EMR
>> [!success]- Answer
>> c) Amazon RDS

<sub>관련: [[amazon-rds]] · [[amazon-dynamodb]] · [[amazon-athena]] · [[amazon-emr]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]]  |  [참고](https://aws.amazon.com/rds/postgresql/)</sub>

> [!question] Which of the following assist in identifying costs by department? (Choose two.)
> a) Using tags on resources
> b) Using multiple AWS accounts
> c) Using an account manager
> d) Using AWS Trusted Advisor
> e) Using Consolidated Billing
>> [!success]- Answer
>> a) Using tags on resources
>> b) Using multiple AWS accounts

<sub>관련: [[aws-trusted-advisor]]  |  모듈 [[10-monitoring-governance]]</sub>

> [!question] A company wants to allow full access to an Amazon S3 bucket for a particular user. Which element in the S3 bucket policy holds the user details that describe who needs access to the S3 bucket?
> a) Principal
> b) Action
> c) Resource
> d) Statement
>> [!success]- Answer
>> a) Principal

<sub>관련: [[amazon-s3]]  |  모듈 [[06-storage]]  |  [참고](https://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html)</sub>

> [!question] Which AWS service allows for effective cost management of multiple AWS accounts?
> a) AWS Organizations
> b) AWS Trusted Advisor
> c) AWS Direct Connect
> d) Amazon Connect
>> [!success]- Answer
>> a) AWS Organizations

<sub>관련: [[aws-direct-connect]] · [[amazon-connect]] · [[aws-organizations]] · [[aws-trusted-advisor]]  |  모듈 [[05-networking]], [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/blogs/aws/aws-organizations-policy-based-management-for-multiple-aws-accounts/)</sub>

> [!question] A company is piloting a new customer-facing application on Amazon Elastic Compute Cloud (Amazon EC2) for one month. What pricing model is appropriate?
> a) Reserved Instances
> b) Spot Instances
> c) On-Demand Instances
> d) Dedicated Hosts
>> [!success]- Answer
>> c) On-Demand Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]  |  [참고](https://aws.amazon.com/ec2/pricing/)</sub>

> [!question] Which AWS tools automatically forecast future AWS costs?
> a) AWS Support Center
> b) AWS Total Cost of Ownership (TCO) Calculator
> c) AWS Simple Monthly Calculator
> d) Cost Explorer
>> [!success]- Answer
>> d) Cost Explorer

<sub>관련: [[aws-cost-explorer]] · [[aws-pricing-calculator]]  |  모듈 [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html)</sub>

> [!question] Under the AWS shared responsibility model, which of the following is a responsibility of AWS?
> a) Enabling server-side encryption for objects stored in S3
> b) Applying AWS IAM security policies
> c) Patching the operating system on an Amazon EC2 instance
> d) Applying updates to the hypervisor
>> [!success]- Answer
>> d) Applying updates to the hypervisor

<sub>관련: [[amazon-ec2]] · [[amazon-s3]] · [[aws-iam]]  |  모듈 [[02-cloud-computing]], [[06-storage]], [[09-security]]  |  [참고](https://aws.amazon.com/compliance/shared-responsibility-model/?ref=wellarchitected)</sub>

> [!question] A user is able to set up a master payer account to view consolidated billing reports through:
> a) AWS Budgets.
> b) Amazon Macie.
> c) Amazon QuickSight.
> d) AWS Organizations.
>> [!success]- Answer
>> d) AWS Organizations.

<sub>관련: [[amazon-quicksight]] · [[aws-organizations]] · [[amazon-macie]] · [[aws-budgets]]  |  모듈 [[08-ai-ml-analytics]], [[09-security]], [[10-monitoring-governance]], [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)</sub>

> [!question] Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?
> a) Performance efficiency
> b) Operational excellence
> c) Reliability
> d) Security
>> [!success]- Answer
>> b) Operational excellence

<sub>관련: [[aws-well-architected-tool]]  |  모듈 [[13-well-architected]]  |  [참고](https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/)</sub>

> [!question] Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?
> a) Vertical scaling
> b) Manual failure recovery
> c) Testing recovery procedures
> d) Changing infrastructure manually
>> [!success]- Answer
>> c) Testing recovery procedures

<sub>관련: [[aws-well-architected-tool]]  |  모듈 [[13-well-architected]]  |  [참고](https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/)</sub>

> [!question] What is a characteristic of Convertible Reserved Instances (RIs)?
> a) Users can exchange Convertible RIs for other Convertible RIs from a different instance family with an equal or higher value than the Convertible Reserved Instances that you are exchanging.
> b) Users can exchange Convertible RIs for other Convertible RIs in different AWS Regions.
> c) Users can sell and buy Convertible RIs on the AWS Marketplace.
> d) Users can shorten the term of their Convertible RIs by merging them with other Convertible RIs.
>> [!success]- Answer
>> a) Users can exchange Convertible RIs for other Convertible RIs from a different instance family with an equal or higher value than the Convertible Reserved Instances that you are exchanging.

<sub>관련: [[aws-marketplace]]  |  모듈 [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-convertible-exchange.html)</sub>

> [!question] The user is fully responsible for which action when running workloads on AWS?
> a) Patching the infrastructure components
> b) Implementing controls to route application traffic
> c) Maintaining physical and environmental controls
> d) Maintaining the underlying infrastructure components
>> [!success]- Answer
>> b) Implementing controls to route application traffic

<sub>모듈 [[01-cloud-intro]], [[09-security]]</sub>

> [!question] An architecture design includes Amazon EC2, an Elastic Load Balancer, and Amazon RDS. What is the BEST way to get a monthly cost estimation for this architecture?
> a) Open an AWS Support case, provide the architecture proposal, and ask for a monthly cost estimation.
> b) Collect the published prices of the AWS services and calculate the monthly estimate.
> c) Use the AWS Pricing Calculator to estimate the monthly cost.
> d) Review the AWS Cost and Usage Report from a previous month.
>> [!success]- Answer
>> c) Use the AWS Pricing Calculator to estimate the monthly cost.

<sub>관련: [[elastic-load-balancing]] · [[amazon-ec2]] · [[amazon-rds]] · [[aws-pricing-calculator]]  |  모듈 [[02-cloud-computing]], [[07-databases]], [[11-billing-support]]  |  [참고](https://docs.aws.amazon.com/pricing-calculator/latest/userguide/aws-pc.pdf)</sub>

> [!question] Which are benefits of using Amazon RDS over Amazon EC2 when running relational databases on AWS? (Choose two.)
> a) Automated backups
> b) Schema management
> c) Indexing of tables
> d) Software patching
> e) Extract, transform, and load (ETL) management
>> [!success]- Answer
>> a) Automated backups
>> d) Software patching

<sub>관련: [[amazon-ec2]] · [[amazon-rds]]  |  모듈 [[02-cloud-computing]], [[07-databases]]  |  [참고](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)</sub>

> [!question] What does the Amazon S3 Intelligent-Tiering storage class offer?
> a) Payment flexibility by reserving storage capacity
> b) Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume
> c) Automatic cost savings by moving objects between tiers based on access pattern changes
> d) Secure, durable, and lowest cost storage for data archival
>> [!success]- Answer
>> c) Automatic cost savings by moving objects between tiers based on access pattern changes

<sub>관련: [[amazon-s3]] · [[amazon-ebs]]  |  모듈 [[06-storage]]  |  [참고](https://aws.amazon.com/about-aws/whats-new/2018/11/s3-intelligent-tiering/)</sub>

> [!question] A company has multiple data sources across the organization and wants to consolidate data into one data warehouse. Which AWS service can be used to meet this requirement?
> a) Amazon DynamoDB
> b) Amazon Redshift
> c) Amazon Athena
> d) Amazon QuickSight
>> [!success]- Answer
>> b) Amazon Redshift

<sub>관련: [[amazon-dynamodb]] · [[amazon-redshift]] · [[amazon-athena]] · [[amazon-quicksight]]  |  모듈 [[07-databases]], [[08-ai-ml-analytics]]  |  [참고](https://aws.amazon.com/redshift/faqs/)</sub>

> [!question] Which AWS service can be used to track resource changes and establish compliance?
> a) Amazon CloudWatch
> b) AWS Config
> c) AWS CloudTrail
> d) AWS Trusted Advisor
>> [!success]- Answer
>> b) AWS Config

<sub>관련: [[amazon-cloudwatch]] · [[aws-cloudtrail]] · [[aws-config]] · [[aws-trusted-advisor]]  |  모듈 [[10-monitoring-governance]]  |  [참고](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html)</sub>

> [!question] A user has underutilized on-premises resources. Which AWS Cloud concept can BEST address this issue?
> a) High availability
> b) Elasticity
> c) Security
> d) Loose coupling
>> [!success]- Answer
>> b) Elasticity

<sub>관련: [참고](https://www.gremlin.com/blog/implementing-cost-saving-strategies-on-amazon-ec-2-with-chaos-engineering/)  |  [참고](https://www.gremlin.com/blog/implementing-cost-saving-strategies-on-amazon-ec-2-with-chaos-engineering/)  |  모듈 [[01-cloud-intro]]</sub>

> [!question] A user has a stateful workload that will run on Amazon EC2 for the next 3 years. What is the MOST cost-effective pricing model for this workload?
> a) On-Demand Instances
> b) Reserved Instances
> c) Dedicated Instances
> d) Spot Instances
>> [!success]- Answer
>> b) Reserved Instances

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] A cloud practitioner needs an Amazon EC2 instance to launch and run for 7 hours without interruptions. What is the most suitable and cost-effective option for this task?
> a) On-Demand Instance
> b) Reserved Instance
> c) Dedicated Host
> d) Spot Instance
>> [!success]- Answer
>> a) On-Demand Instance

<sub>관련: [[amazon-ec2]]  |  모듈 [[02-cloud-computing]]</sub>

> [!question] Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)
> a) Providing high-performance container orchestration
> b) Creating and rotating encryption keys
> c) Detecting underutilized resources to save costs
> d) Improving security by proactively monitoring the AWS environment
> e) Implementing enforced tagging across AWS resources
>> [!success]- Answer
>> c) Detecting underutilized resources to save costs
>> d) Improving security by proactively monitoring the AWS environment

<sub>관련: [[aws-trusted-advisor]]  |  모듈 [[10-monitoring-governance]]  |  [참고](https://aws.amazon.com/about-aws/whats-new/2016/06/aws-support-enables-tagging-capabilities-for-trusted-advisor/)</sub>

> [!question] A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Choose two.)
> a) Grant the developer access to only the AWS resources needed to perform the job.
> b) Share the AWS account root user credentials with the developer.
> c) Add the developer to the administrator's group in AWS IAM.
> d) Configure a password policy that ensures the developer's password cannot be changed.
> e) Ensure the account password policy requires a minimum length.
>> [!success]- Answer
>> a) Grant the developer access to only the AWS resources needed to perform the job.
>> e) Ensure the account password policy requires a minimum length.

<sub>관련: [[aws-iam]]  |  모듈 [[09-security]]</sub>

> [!question] Which AWS storage service is designed to transfer petabytes of data in and out of the cloud?
> a) AWS Storage Gateway
> b) Amazon S3 Glacier Deep Archive
> c) Amazon Lightsail
> d) AWS Snowball
>> [!success]- Answer
>> d) AWS Snowball

<sub>관련: [[amazon-lightsail]] · [[amazon-s3-glacier]] · [[amazon-s3]] · [[aws-storage-gateway]] · [[aws-snow-family]]  |  모듈 [[03-compute-services]], [[06-storage]], [[12-migration]]  |  [참고](https://docs.aws.amazon.com/snowball/latest/ug/transfer-petabytes.html)</sub>

> [!question] Which service provides a user the ability to warehouse data in the AWS Cloud?
> a) Amazon EFS
> b) Amazon Redshift
> c) Amazon RDS
> d) Amazon VPC
>> [!success]- Answer
>> b) Amazon Redshift

<sub>관련: [[amazon-efs]] · [[amazon-rds]] · [[amazon-redshift]] · [[amazon-vpc]]  |  모듈 [[05-networking]], [[06-storage]], [[07-databases]], [[08-ai-ml-analytics]]  |  [참고](https://aws.amazon.com/redshift/)</sub>
