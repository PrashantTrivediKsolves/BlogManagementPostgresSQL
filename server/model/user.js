import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt';

export const cuserModel = async (sequelize) => {
    const CheckUser = sequelize.define('checkUser', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
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

// // Assuming you have initialized Sequelize and obtained the sequelize instance
// const sequelize = ... // Your sequelize instance

// // Define the checkUser model
// const CheckUser = cuserModel(sequelize);

// // Synchronize the model with the database
// sequelize.sync();
