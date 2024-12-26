import { injectable, inject } from 'inversify';
import { DatabaseConnection } from '../../domain/interfaces/connection-database.interface';
import { MySQL_QUERIES } from '../database/mysql.queries';
import { TYPES } from '../di/types';
import { PeopleSWPResponseEN, DatabaseResult } from '../../domain';
import { PeopleRepository } from '../../domain/interfaces/people.repository';

@injectable()
export class PeopleRepositoryMysqlImpl implements PeopleRepository {
	constructor(@inject(TYPES.DatabaseConnection) private databaseConnection: DatabaseConnection) {}

	public async createPerson(peopleSPResponse: PeopleSWPResponseEN): Promise<number> {
		try {
			const query = MySQL_QUERIES.INSERT_PEOPLE;
			const [result] = await this.databaseConnection.pool().query(query, peopleSPResponse);
			const { insertId } = result as DatabaseResult;
			return insertId;
		} catch (error) {
			throw new Error(`Error al insertar el registro: ${error.message}`);
		}
	}

	public async doesPersonExist(name: string): Promise<boolean> {
		try {
			const query = MySQL_QUERIES.CHECK_IF_PEOPLE_EXISTS;
			const params = [name?.toLowerCase().trim()];
			const [result] = await this.databaseConnection.pool().query(query, params);

			return !!result[0];
		} catch (error) {
			throw new Error(`Error al verificar si la persona existe: ${error.message}`);
		}
	}

	public async findByName(name: string): Promise<PeopleSWPResponseEN[]> {
		try {
			const query = MySQL_QUERIES.SELECT_PEOPLE_BY_NAME;
			const [result] = await this.databaseConnection.pool().query(query, [name]);

			return result as PeopleSWPResponseEN[];
		} catch (error) {
			throw new Error(`Error al obtener los registros por nombre: ${error.message}`);
		}
	}
}
