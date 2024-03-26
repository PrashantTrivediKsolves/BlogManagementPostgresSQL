// Option 3: Passing parameters separately (other dialects)
import { Sequelize } from "sequelize";
import { createUserModel } from "../model/userSchema.js";
const sequelize = new Sequelize('my_pgdb', 'postgres', '123456', {
    host: 'localhost',
    dialect:'postgres'
  });
  let UserModel=null;
  const connection=async()=>
  {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel=await createUserModel(sequelize);
        await sequelize.sync();
        console.log("Database created");

      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  export {
    connection,
    UserModel
  }