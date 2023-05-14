module.exports = (sequelize,Sequelize) =>{
    const Party_Vote = sequelize.define(
        "votes",{
            Party_name : {
                type : Sequelize.STRING
            },
            Votes : {
                type : Sequelize.INTEGER,
                default:0
            }
        }
    )
    return Party_Vote;
}