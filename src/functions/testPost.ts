import { APIGatewayEvent } from 'aws-lambda';
import httpResponse from '../helpers/httpResponse/httpResponse';
import { UserService } from '../service/UserService';

export const handler = async (event: APIGatewayEvent) => {
  try {
    const userDto = JSON.parse(event.body);

    const savedUser = await UserService.save(userDto);
    
    return httpResponse(200, savedUser);
  
  } catch (error) {
  console.error(error)
    return httpResponse(500, 'Erro ao salvar o usuário');
  
  }
};
