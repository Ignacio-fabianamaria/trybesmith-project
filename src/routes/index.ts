import { Router } from 'express';
import productsRouter from './productsRoute';
import usersRoutes from './usersRoute';
import ordersRoutes from './ordersRoute';

const router = Router();

router.use(productsRouter);
router.use(usersRoutes);
router.use(ordersRoutes);

export default router;