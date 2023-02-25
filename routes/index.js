import express from "express";
import { getUsers, Register, Login, Logout, Qrcode, getQr } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { refreshTokenqr } from "../controllers/RefreshTokenqr.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.get('/qrcode', verifyToken, getQr);
router.post('/users', Register);
router.post('/qrcode', Qrcode);
router.post('/login', Login);
router.get('/token', refreshToken);
router.get('/tokenqr', refreshTokenqr);
router.delete('/logout', Logout);

export default router;