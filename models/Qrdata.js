import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Qrdata = db.define('qrcode',{
    linkqr:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
    
});

export default Qrdata;