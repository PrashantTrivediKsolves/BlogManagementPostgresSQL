import { Sequelize } from "sequelize";
import { createCommentModel } from "../model/userComment.js";
const sequelize = new Sequelize('my_pgdb', 'postgres', '123456', {
    host: 'localhost',
    dialect:'postgres'
  });
  let commentModel=null;
  const connectionComment=async()=>
  {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        commentModel=await createCommentModel(sequelize);
        await sequelize.sync();
        console.log("Database created comment");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  export {
    connectionComment,
    commentModel,
  }