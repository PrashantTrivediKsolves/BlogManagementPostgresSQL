import { Sequelize } from "sequelize";
import { cuserModel} from "../model/user.js";
const sequelize = new Sequelize('my_pgdb', 'postgres', '123456', {
    host: 'localhost',
    dialect:'postgres'
  });
  let newuserModel=null;
  const connectionUser=async()=>
  {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        newuserModel=await cuserModel(sequelize);
        await sequelize.sync();
        console.log("Database created status");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  export {
    connectionUser,
    newuserModel,
  }
