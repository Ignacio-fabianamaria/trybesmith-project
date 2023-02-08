import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateLogin from '../middlewares/validateLogin';

const router = Router();

const loginController = new LoginController();

router.post('/login', validateLogin, (req, res) => loginController.postLogin(req, res));

export default router;