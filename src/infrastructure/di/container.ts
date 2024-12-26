import { Container } from 'inversify';
import { ENV, HOST, TIMEOUT } from '../../utils/constants/enum';

import { TYPES } from './types';
import { PeopleServiceImpl } from '../../application/service/people.service.impl';
import { PeopleService } from '../../application/service/people.service.interface';

import { ConfigDatabase, DatabaseConnection, PeopleProvider, PeopleRepository } from '../../domain';
import { HttpStatusMapper, MysqlConnection, PeopleProdiverImpl, PeopleRepositoryMysqlImpl, PeopleHandler } from '..';
import { TAG } from '../../utils/constants/constants';
import { HttpConnector } from '../../utils';

export class ContainerFactory {
	private static container: Container;

	public static createContainer(): Container {
		if (!this.container) {
			this.container = new Container();

			const swapiApiConnector = new HttpConnector({
				host: HOST.SWAPI,
				timeout: TIMEOUT.PROVIDER,
			});

			const dbConfig: ConfigDatabase = {
				host: process.env[ENV.DATABASE_MYSQL_HOST],
				user: process.env[ENV.DATABASE_MYSQL_USER],
				password: process.env[ENV.DATABASE_MYSQL_PASSWORD],
				database: process.env[ENV.DATABASE_MYSQL_NAME],
			};

			const connectionMysqlDatabase: MysqlConnection = new MysqlConnection(dbConfig);

			this.container.bind<DatabaseConnection>(TYPES.DatabaseConnection).toConstantValue(connectionMysqlDatabase);

			this.container.bind<PeopleRepository>(TYPES.DatabaseRepository).to(PeopleRepositoryMysqlImpl);

			this.container.bind<PeopleProvider>(TYPES.PeopleProvider).to(PeopleProdiverImpl);

			this.container.bind<HttpConnector>(TYPES.HttpConnector).toConstantValue(swapiApiConnector).whenTargetNamed(TAG.SWAPI_PROD);

			this.container.bind<HttpStatusMapper>(TYPES.HttpStatusMapper).to(HttpStatusMapper);

			this.container.bind<PeopleHandler>(TYPES.PeopleHandler).to(PeopleHandler);

			this.container.bind<PeopleService>(TYPES.StarWarsService).to(PeopleServiceImpl);
		}

		return this.container;
	}
}
