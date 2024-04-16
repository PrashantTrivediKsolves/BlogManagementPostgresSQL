import {DataTypes } from "sequelize";

export const createCommentModel=async(sequelize)=>
{
    const commentBlog=sequelize.define('comment',{
        postId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
        },
        text:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
    });
    return commentBlog;
}