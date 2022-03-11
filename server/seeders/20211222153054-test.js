"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let userList =[];

		for (let i = 1; i < 10; i++) {
			let user = {
				uid : i,
				email : `test-${i}@example.com`,
				password: "1234",
			}
			userList = [...userList, user]
		}

		await queryInterface.bulkInsert("Users", userList, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
