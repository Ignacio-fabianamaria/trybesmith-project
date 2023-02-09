import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import ValidateNewProduct from '../middlewares/validateNewProduct';

const router = Router();

const productController = new ProductController();

router.get('/products', (req, res) => productController.getAll(req, res));

router.post(
  '/products',
  ValidateNewProduct.validateName,
  ValidateNewProduct.validateAmount,
  (req, res) => productController.create(req, res),
);

export default router;