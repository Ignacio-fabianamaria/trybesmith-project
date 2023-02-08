import { Router } from 'express';
import UserController from '../controllers/user.controller';
import ValidateNewUser from '../middlewares/validateNewUser';

const router = Router();

const userController = new UserController();

router.use(
  ValidateNewUser.validateUsername,
  ValidateNewUser.validateVocation,
  ValidateNewUser.validateLevel,
  ValidateNewUser.validatePassword,
);

router.post('/users', (req, res) => userController.create(req, res));

export default router;