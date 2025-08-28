#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { TapDefenseStack } from '../lib/infra-stack';

const app = new App();
new TapDefenseStack(app, 'TapDefenseStack');
