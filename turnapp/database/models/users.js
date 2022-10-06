
module.exports = function(sequelize, dataTypes){
    let alias= "Usuario";

    let cols= {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: dataTypes.STRING 
        },
        last_name: {
            type: dataTypes.STRING 
        },
        email:{
             type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        }, 
        created_at:{
            type:dataTypes.STRING
        },
        updated_at:{
            type: dataTypes.STRING //tal vez luego debo cambiar por fecha
        }
        

    }
    //me falta archivo config
    let config= {
        tableName:"users", 
        timestamps: true
    }

    let Usuario= sequelize.define(alias, cols, config);

    //ahora vamos por los cruces de tablas; explicitar que un usuario tiene muchos productos asociados y viceversa.
    //como es manytomany: hay tabla intermedia "products_users" tons agregamos campo: through
    //***relación manyToMany usa dos llamadas belongsToMany****
  

    return Usuario;
}