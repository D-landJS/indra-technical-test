export const MySQL_QUERIES = {
	INSERT_PEOPLE: 'INSERT INTO peoples SET ?;',
	SELECT_PEOPLE_BY_NAME: `
    SELECT 
      id, name, height, mass, hair_color, skin_color, eye_color, 
      birth_year, gender, films, homeworld, starships, species,
      vehicles, edited, url, created 
    FROM peoples 
    WHERE name = ?;
  `,
	CHECK_IF_PEOPLE_EXISTS: 'SELECT id FROM peoples WHERE name = ?;',
};
