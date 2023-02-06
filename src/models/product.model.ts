import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces/Product';

export default class ProductModel {
  private connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product:IProduct):Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products(name,amount) VALUES(?,?)',
      [name, amount],
    );

    const newProduct = { id: insertId, ...product };
    return newProduct;
  } 
  
  public async getAll():Promise<IProduct[]> {
    const [result] = await this.connection.execute<(IProduct & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.products');
    return result;
  }
}
