import { Router } from 'express';
import productsRouter from './productsRoute';
import usersRoutes from './usersRoute';
import ordersRoutes from './orders.Route';
import loginRoute from './loginRoute';

const router = Router();

router.use(productsRouter);
router.use(usersRoutes);
router.use(ordersRoutes);
router.use(loginRoute);

export default router;