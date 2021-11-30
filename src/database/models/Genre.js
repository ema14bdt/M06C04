module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        active: {
            type: dataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
        },
    };

    let config = {
        underscored: true,
        timestamps: true,
    };

    const Genre = sequelize.define(alias, cols, config);
    return Genre;
};
