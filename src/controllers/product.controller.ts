import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response):Promise<void> => {
    const allProducts = await this.productService.getAll();
    res.status(200).json(allProducts);
  };
}