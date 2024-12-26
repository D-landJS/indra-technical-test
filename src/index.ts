import 'reflect-metadata';
import { Context, Handler } from 'aws-lambda';
import { config } from 'dotenv';
import { ContainerFactory } from './infrastructure/di/container';
import { TYPES } from './infrastructure/di/types';
import { ApiGatewayResponse } from './infrastructure/api-gateway/api-gateway-response';
import { PeopleHandler } from './infrastructure/handler/people-handler';

config();

const container = ContainerFactory.createContainer();

export const handlerCreate: Handler = async (event: any, context: Context): Promise<ApiGatewayResponse> => {
	context.callbackWaitsForEmptyEventLoop = false;
	const peopleHandler: PeopleHandler = container.get<PeopleHandler>(TYPES.PeopleHandler);
	return peopleHandler.create(event);
};

export const handlerGet: Handler = async (event: any, context: Context): Promise<ApiGatewayResponse> => {
	context.callbackWaitsForEmptyEventLoop = false;
	const peopleHandler: PeopleHandler = container.get<PeopleHandler>(TYPES.PeopleHandler);
	return peopleHandler.get(event);
};
