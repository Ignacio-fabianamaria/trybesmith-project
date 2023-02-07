import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const userController = new UserController();

router.post('/users', (req, res) => userController.create(req, res));

export default router;