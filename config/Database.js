import { Sequelize } from "sequelize";

const db = new Sequelize('uni_vitation','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;