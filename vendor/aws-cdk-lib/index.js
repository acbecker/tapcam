class App {
  constructor() {}
  synth() {}
}
class Stack {
  constructor(scope, id, props) {}
}
class Bucket {
  constructor(...args) {}
}
class Distribution {
  constructor(...args) {}
}
class S3Origin {
  constructor(...args) {}
}
class LambdaFunction {
  constructor(...args) {}
}
const Runtime = { NODEJS_18_X: 'nodejs18.x' };
const Code = { fromAsset: (p) => ({ path: p }) };
class LambdaRestApi {
  constructor(...args) {}
}
const aws_s3 = { Bucket };
const aws_cloudfront = { Distribution };
const aws_cloudfront_origins = { S3Origin };
const aws_lambda = { Function: LambdaFunction, Runtime, Code };
const aws_apigateway = { LambdaRestApi };
module.exports = {
  App,
  Stack,
  aws_s3,
  aws_cloudfront,
  aws_cloudfront_origins,
  aws_lambda,
  aws_apigateway,
};
module.exports.default = module.exports;
