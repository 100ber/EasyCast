// const votes=require("./party_votes");
const db = require('../model')
const votes=db.votes;

module.exports = (sequelize,Sequelize) =>{
    const UC = sequelize.define(
        "constituencies",{
            name : {
                type : Sequelize.STRING
            },
            district : {
                type : Sequelize.STRING
            },
            state : {
                type : Sequelize.STRING
            }
            
        }
    )
    return UC; 
}