
module.exports = (sequelize,Sequelize) =>{
    const User = sequelize.define(
        "users",{
            aadhaar_No:{
                type:Sequelize.STRING
            },
            first_name : {
                type : Sequelize.STRING
            },
            last_name : {
                type : Sequelize.STRING
            },
            age : {
                type : Sequelize.INTEGER
            },
            image : {
                type : Sequelize.STRING
            },
            password:{
                type : Sequelize.STRING
            },
            state : {
                type : Sequelize.STRING
            },
            district:{
                type:Sequelize.STRING
            },
            constituency:{
                type:Sequelize.STRING,
                required:true
            },
            election_type:{
                type:Sequelize.STRING
            },
            vote:{
                type:Sequelize.INTEGER,
                default:0
            }
            //to lowercase function (str.toLowerCase())
        }
    )
    return User;
}