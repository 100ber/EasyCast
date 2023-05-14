module.exports = (sequelize,Sequelize) =>{
    const Election = sequelize.define(
        "Election",{
            title : {
                type : Sequelize.STRING
            },
            election_type : {
                type : Sequelize.STRING
            },
            election_state:{
                type:Sequelize.STRING,
                default:null
            },
            election_date:{
             type:Sequelize.DATEONLY
            },
            registration_start:{
                type:Sequelize.DATEONLY
            },
            registration_ends:{
                type:Sequelize.DATEONLY
            }
        }
    )
    return Election;
}