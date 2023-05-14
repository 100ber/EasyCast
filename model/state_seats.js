module.exports = (sequelize,Sequelize) =>{
    const State_seats = sequelize.define(
        "seats",{
            Party_name : {
                type : Sequelize.STRING
            },
            seats : {
                type : Sequelize.INTEGER,
                default:0
            }
        }
    )
    return State_seats; 
}