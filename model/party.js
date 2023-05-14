
module.exports = (sequelize,Sequelize) =>{
    const Party = sequelize.define(
        "parties",{
            name : {
                type : Sequelize.STRING
            },
            abbreviation:{
                type:Sequelize.STRING
            },
            image : {
                type : Sequelize.STRING
            }
        }
    )
    return Party;
}