import ProductModel from '../models/product.model';
import connection from '../models/connection';
import { IProduct } from '../interfaces/Product';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const allProducts = await this.model.getAll();
    return allProducts;
  }
}