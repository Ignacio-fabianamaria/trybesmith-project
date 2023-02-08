import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validateProductAmount from '../middlewares/validateProductAmount';
import validateProductName from '../middlewares/validateProductName';

const router = Router();

const productController = new ProductController();

router.use(validateProductName, validateProductAmount);

router.post('/products', (req, res) => productController.create(req, res));
router.get('/products', (req, res) => productController.getAll(req, res));

export default router;