module.exports = (sequelize,Sequelize) =>{
    const Candidate = sequelize.define(
        "candidates",{
            name : {
                type : Sequelize.STRING
            },
            image : {
                type : Sequelize.STRING
            },
            constituency : {
                type : Sequelize.STRING
            },
            district:{
                type:Sequelize.STRING
            },
            state:{
                type:Sequelize.STRING
            },
            party:{
                type:Sequelize.STRING
            },
            votes:{
                type:Sequelize.INTEGER,
                default:0
            }

        }
    )
    return Candidate;
}