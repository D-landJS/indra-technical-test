# Indra Technical Test | Rimac

## Indicaciones

1. Ruta de la lambda => https://4eucw2xwm8.execute-api.us-west-2.amazonaws.com/api/v1/people
2. Base de datos desplegada en Hostigator
3. Uso de clean architecture para la modularidad y separación de responsabilidades
4. En su carpeta de usuario debe haber un archivo .aws con las credenciales y configuraciones de su cuenta AWS

Para ejecutar la API Lambda localmente, sigue estos pasos:

## Despliegue local de la API

1. Copia el archivo `.env.example` a un nuevo archivo `.env` y ajusta las variables de entorno según sea necesario.

   ```c
   # CREDENTIALS MYSQL
   MYSQL_ROOT_PASSWORD='123456'
   DATABASE_MYSQL_HOST='localhost'
   DATABASE_MYSQL_NAME='db_starwars'
   DATABASE_MYSQL_USER='root'
   DATABASE_MYSQL_PASSWORD='123456'
   DATABASE_MYSQL_PORT='3306'
   ```

2. Instala MYSQL con Docker compose => 'docker compose up -d'
3. Ejecuta el script en la base de datos => 'db.sql'
4. instala las dependencias => 'npm install'
5. Ejecuta el proyecto en local => 'npm run local'

## Despliegue de la API Lambda en AWS

1. Despliega la API Lambda con Serverless Framework en AWS => 'npm run deploy'
2. Setea las variables de entorno en AWS con las credenciales de su base de datos.
   ```c
   # CREDENTIALS MYSQL
   DATABASE_MYSQL_HOST=''
   DATABASE_MYSQL_NAME=''
   DATABASE_MYSQL_USER=''
   DATABASE_MYSQL_PASSWORD=''
   DATABASE_MYSQL_PORT=''
   ```
3. Imagen de referencia
![ENV_LAMBDA](https://github.com/user-attachments/assets/bb409b76-db24-4478-9260-3740430fe8eb)


## Documentación

1. Abrir el archivo `swagger.yaml`
2. Importarlo el archivo a Swagger Editor => https://editor.swagger.io/

## Test

1. Ejecutar los test unitarios => 'npm run test'
2. Ejecutar los coverage => 'npm run test:coverage'
