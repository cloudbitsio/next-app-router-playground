// import { Cdk, WebServiceStack, type WebServiceProps } from "@thunderso/cdk-webservice";
import { Cdk, WebServiceStack, type WebServiceProps } from "../../../../LIBRARIES/cdk-webservice";

const WebApp: WebServiceProps = {
  env: {
    account: '047719662375',
    region: 'us-east-1',
  },
  application: 'webservice',
  service: 'nextjs',
  environment: 'dev',

  rootDir: '', // supports monorepos. e.g. app/

  serviceProps: {
    dockerFile: 'Dockerfile.bun', 
  },

  // ... other props
};

new WebServiceStack(
    new Cdk.App(), 
    `${WebApp.application}-${WebApp.service}-${WebApp.environment}-stack`, 
    WebApp
);