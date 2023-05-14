
module.exports = (sequelize,Sequelize) =>{
    const Aadhaar = sequelize.define(
        "aadhaar",{
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
            state : {
                type : Sequelize.STRING
            },
            district:{
                type:Sequelize.STRING
            }
            //to lowercase function (str.toLowerCase())
        }
    )
    return Aadhaar;
}