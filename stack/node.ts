// import { Cdk, WebServiceStack, type WebServiceProps } from "@thunderso/cdk-webservice";
import { Cdk, WebServiceStack, type WebServiceProps } from "../../../../LIBRARIES/cdk-webservice";
import { CpuArchitecture } from 'aws-cdk-lib/aws-ecs';

const WebApp: WebServiceProps = {
  env: {
    account: '047719662375',
    region: 'us-east-1',
  },
  application: 'webservice',
  service: 'nextjs',
  environment: 'test',

  rootDir: '', // supports monorepos. e.g. app/

  serviceProps: {
    dockerFile: 'Dockerfile.node',
    architecture: CpuArchitecture.X86_64,
  },

  accessTokenSecretArn: 'arn:aws:secretsmanager:us-east-1:047719662375:secret:github-demo-qBMv86',

  sourceProps: {
    owner: 'cloudbitsio',
    repo: 'next-app-router-playground',
    branchOrRef: 'main',
  },

  // ... other props
};

new WebServiceStack(
    new Cdk.App(), 
    `${WebApp.application}-${WebApp.service}-${WebApp.environment}-stack`, 
    WebApp
);