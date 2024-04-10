import { APIGatewayEvent } from 'aws-lambda';
import httpResponse from '../helpers/httpResponse/httpResponse';
import { UserService } from '../service/UserService';
import { UserDto } from '../dto/UserDto';

export const handler = async (event: APIGatewayEvent) => {
  try {
    //const dto: UserDto = await UserService.get(event.pathParameters['username']);

    return httpResponse(200, process.env.TST);
  } catch (error) {
    return httpResponse(error.statusCode || 500, error.message || 'Internal server error');
  }
};
