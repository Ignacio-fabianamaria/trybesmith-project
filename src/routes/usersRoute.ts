import { Router } from 'express';
import UserController from '../controllers/user.controller';
import ValidateNewUser from '../middlewares/validateNewUser';

const router = Router();

const userController = new UserController();

router.post(
  '/users', 
  ValidateNewUser.validateUsername,
  ValidateNewUser.validateVocation,
  ValidateNewUser.validateLevel,
  ValidateNewUser.validatePassword, 
  (req, res) => userController.create(req, res),
);

export default router;