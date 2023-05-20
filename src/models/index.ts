import { Sequelize } from 'sequelize';
// import { MessageFactory } from './message';
import { UserFactory } from './user';

const dbName = 'legalEaseDB';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

UserFactory(sequelize);

export const db = sequelize;
