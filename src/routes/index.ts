import { Router } from 'express';
import productsRouter from './productsRoute';

const router = Router();

router.use(productsRouter);

export default router;