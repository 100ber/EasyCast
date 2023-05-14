const Sequelize = require('sequelize');




const sequelize = new Sequelize('easycast', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
  });

  const db = {};

  db.Sequelize=Sequelize;
  db.sequelize = sequelize;

  db.parties = require("./party")(sequelize,Sequelize);
  db.admins = require("./admins")(sequelize,Sequelize);
  db.constituencies = require("./union_constituency.js")(sequelize,Sequelize);
  //db.votes=require("./party_votes")(sequelize,Sequelize);
  db.candidates=require("./candidates")(sequelize,Sequelize);
  db.users=require("./user")(sequelize,Sequelize);
  db.aadhaar=require("./aadhaar")(sequelize,Sequelize);
  db.users=require("./user")(sequelize,Sequelize);
  db.seats=require("./state_seats")(sequelize,Sequelize);
  db.elections=require("./elections")(sequelize,Sequelize);

module.exports = db;