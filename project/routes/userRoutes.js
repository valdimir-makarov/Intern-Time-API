import express from 'express';
import { UserControllerPostName } from '../controllers/UserController.js'; 

const router = express.Router();

router.get('/user', UserControllerPostName);

export default router;
