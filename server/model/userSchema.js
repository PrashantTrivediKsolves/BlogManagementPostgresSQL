import {  DataTypes } from "sequelize";

export const createUserModel=async(sequelize)=>
{
    const User=sequelize.define('user',{
        name:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING,
            unique:true
        }
        ,
        designation:{
            type:DataTypes.STRING,
        }
        ,
        empId:{
            type:DataTypes.STRING,
            unique:true
        }

    });
    return User;
}
