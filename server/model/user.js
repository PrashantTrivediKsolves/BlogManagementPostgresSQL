import { DataTypes, ENUM } from "sequelize";
import bcrypt from 'bcrypt';

export const cuserModel = async (sequelize) => {
    const CheckUser = sequelize.define('checkUser', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email:
        {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role:{
            type:DataTypes.ENUM('user','admin'),
            defaultValue:'user'
        }
    });
    // Method to hash password before saving to the database
    CheckUser.beforeCreate(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    });
    return CheckUser;
}
// // Example usage:


// // Define the checkUser model
// const CheckUser = cuserModel(sequelize);

// // Synchronize the model with the database
// sequelize.sync();
