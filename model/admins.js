module.exports = (sequelize,Sequelize) =>{
    const Admin = sequelize.define(
        "admins",{
            username : {
                type : Sequelize.STRING
            },
            password : {
                type : Sequelize.STRING
            }
        }
    )
    return Admin;
}