import {DataTypes } from "sequelize";

export const createBlogModel=async(sequelize)=>
{
    const Blog=sequelize.define('blogji',{
        username:{
            type:DataTypes.STRING
        },
        title:{
            type:DataTypes.STRING,
        },
        content:{
            type:DataTypes.TEXT,
            unique:true,
        },
    });
    return Blog;
}
