
module.exports = function(sequelize, dataTypes){
    let alias= "OrderlyTurn";

    let cols= {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        code:{
            type: dataTypes.STRING 
        },
        box: {
            type: dataTypes.STRING 
        },
        created_at:{
            type:dataTypes.STRING
        },
        updated_at:{
            type: dataTypes.STRING //tal vez luego debo cambiar por fecha
        },
        deleted_at:{
            type: dataTypes.STRING
        }

    }
    let config= {
        tableName:"orderlyTurn", 
        timestamps: true
    }

    let OrderlyTurn= sequelize.define(alias, cols, config);

    return OrderlyTurn;
}
