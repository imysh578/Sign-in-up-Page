"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		static associate(models) {
			// define association here
		}
	}
	Users.init(
		{
			uid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
			email: {
        allowNull: false,
        type: DataTypes.STRING
      },
			password: {
        allowNull: false,
        type: DataTypes.STRING
      }, 
		},
		{
			sequelize,
			modelName: "Users",
			timestamps: false,
		}
	);
	return Users;
};
