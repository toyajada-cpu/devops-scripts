// types.ts

// Import Node.js built-in types
import { NodeJSProcessEnv } from 'process';

// Define custom types
export type Env = NodeJSProcessEnv;
export type GitCommitHash = string;
export type GitBranchName = string;
export type TimeZone = string;
export type Region = string;
export type AWSRegion = string;
export type AWSAccessKey = string;
export type AWSSecretKey = string;
export type S3BucketName = string;

// Define a type for a CloudFormation template
export interface CloudFormationTemplate {
  AWSTemplateFormatVersion: string;
  Description: string;
  Resources: { [key: string]: CloudFormationResource };
  Outputs: { [key: string]: CloudFormationOutput };
}

// Define a type for a CloudFormation resource
export interface CloudFormationResource {
  Type: string;
  Properties: { [key: string]: any };
}

// Define a type for a CloudFormation output
export interface CloudFormationOutput {
  Value: string;
  Description: string;
}

// Define a type for a Docker image
export interface DockerImage {
  Name: string;
  Tag: string;
}

// Define a type for a K8s namespace
export interface K8sNamespace {
  Name: string;
}