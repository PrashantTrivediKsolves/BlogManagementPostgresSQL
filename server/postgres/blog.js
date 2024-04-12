import { Sequelize } from "sequelize";
import { createBlogModel} from "../model/blog.js";
const sequelize = new Sequelize('my_pgdb', 'postgres', '123456', {
    host: 'localhost',
    dialect:'postgres'
  });
  let BlogModel=null;
  const connectionBlog=async()=>
  {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        BlogModel=await createBlogModel(sequelize);
        await sequelize.sync();
        console.log("Database created blog ji");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  export {
    connectionBlog,
    BlogModel,
  }