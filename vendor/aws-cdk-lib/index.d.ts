export class App {
  constructor();
  synth(): void;
}

export class Stack {
  constructor(scope: any, id: string, props?: any);
}

export namespace aws_s3 {
  class Bucket {
    constructor(scope: any, id: string, props?: any);
  }
}

export namespace aws_cloudfront {
  class Distribution {
    constructor(scope: any, id: string, props?: any);
  }
}

export namespace aws_cloudfront_origins {
  class S3Origin {
    constructor(bucket: any);
  }
}

export namespace aws_lambda {
  class Function {
    constructor(scope: any, id: string, props?: any);
  }
  const Runtime: { NODEJS_18_X: string };
  const Code: { fromAsset(path: string): any };
}

export namespace aws_apigateway {
  class LambdaRestApi {
    constructor(scope: any, id: string, props: any);
  }
}

declare const lib: {
  App: typeof App;
  Stack: typeof Stack;
  aws_s3: typeof aws_s3;
  aws_cloudfront: typeof aws_cloudfront;
  aws_cloudfront_origins: typeof aws_cloudfront_origins;
  aws_lambda: typeof aws_lambda;
  aws_apigateway: typeof aws_apigateway;
};
export default lib;
