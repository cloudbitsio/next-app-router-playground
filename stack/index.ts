// import { Cdk, WebServiceStack, type WebServiceProps } from "@thunderso/cdk-webservice";
import { Cdk, WebServiceStack, type WebServiceProps } from "../../../../LIBRARIES/cdk-webservice";

const WebApp: WebServiceProps = {
  env: {
    account: '665186350589',
    region: 'us-east-1',
  },
  application: 'webservice',
  service: 'nextjs',
  environment: 'dev',

  rootDir: '', // supports monorepos. e.g. app/

  serviceProps: {
    dockerFile: 'Dockerfile.node',
    
    variables: [
      { PUBLIC_FRONTEND_URL: 'https://example.com' },
      { PUBLIC_ANALYTICS_ID: 'UA-XXXXXX' }
    ],

    secrets: [
      { 
        key: 'MY_SECRET', 
        resource: "arn:aws:secretsmanager:us-east-1:665186350589:secret:mySecret-Meu2Hz" 
      },
    ],
  },

  domain: 'next.thunder.so',
  regionalCertificateArn: 'arn:aws:acm:us-east-1:665186350589:certificate/d7c10cb1-d3fb-4547-b6ba-1717f20a25cf',
  hostedZoneId: 'Z04172542KY36VFH88DJJ', // thunder.so

  // ... other props
};

new WebServiceStack(
    new Cdk.App(), 
    `${WebApp.application}-${WebApp.service}-${WebApp.environment}-stack`, 
    WebApp
);