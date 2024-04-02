import { APIGatewayProxyResult } from 'aws-lambda';

export default function (statusCode: number, data?: Object): APIGatewayProxyResult {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(data),
  };
}
