const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init( {
              name: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique : true,
              },
              address: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique : true,
              },
            }, {
              sequelize,
              timestamps: false,
              underscored: false,
              modelName: 'User',
              tableName: 'users',
              paranoid: true,
              charset: 'utf8',
              collate: 'utf8_general_ci',
        });
    }

    static associate(db) { }
};