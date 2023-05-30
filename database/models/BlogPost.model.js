const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('blog_post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        publishedAt: {
            type: DataTypes.Data,
            allowNull: false,
            default: DataTypes.NOW
        }
        editedAt: {
            type: DataTypes.Data,
            allowNull: false,
            default: DataTypes.NOW
        },
    });
};