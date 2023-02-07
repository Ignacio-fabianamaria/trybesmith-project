import { Router } from 'express';
import productsRouter from './productsRoute';
import usersRoutes from './usersRoute';

const router = Router();

router.use(productsRouter);
router.use(usersRoutes);

export default router;