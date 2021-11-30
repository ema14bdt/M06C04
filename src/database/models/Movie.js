module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';

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
        title: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL.UNSIGNED,
            allowNull: true,
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        genre_id: {
            type: dataTypes.INTEGER,
        },
    };

    let config = {
        underscored: true,
        timestamp: true,
    };

    const Movie = sequelize.define(alias, cols, config);
    return Movie;
};
