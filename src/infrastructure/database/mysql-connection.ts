import { createPool, Pool } from 'mysql2/promise';
import { DatabaseConnection } from '../../domain/interfaces/connection-database.interface';
import { ConfigDatabase } from '../../domain';

export class MysqlConnection implements DatabaseConnection {
	public pools: Pool;

	constructor(public dbConfig: ConfigDatabase) {
		this.pools = createPool(dbConfig);
	}

	pool(): Pool {
		return this.pools;
	}
}
