const express = require('express')
const routes = require('./routes/routes');

const db = require("./model")
const app = express();


db.sequelize.sync().then(
    ()=>{
        console.log("Database Sync.....")
    }
).catch(
    (err) => {console.log("Failed....",err)}
)
let cors = require("cors");
app.use(cors());
app.use(express.json());
app.use('/easycast',routes);
app.listen(3000,()=>{
    console.log(`Server Started at localhost  ${3000}`)
})
