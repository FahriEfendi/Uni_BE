import Users from "../models/Usermodel.js";
import jwt from "jsonwebtoken";

export const refreshTokenqr = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken)return res.sendStatus(401);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) =>{
            if(err) return res.sendStatus(403);
            const userId = user[0].id;
            const linkqr = user[0].linkqr;
            const status = user[0].status;
            const accessToken = jwt.sign({userId, linkqr, status}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '20s'
            });
            res.json({accessToken});
        });
    } catch (error) {
        console.log(error)
        
    }
}