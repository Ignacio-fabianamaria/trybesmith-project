import { Pool, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces/Product';

export default class ProductModel {
  private connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAll():Promise<IProduct[]> {
    const [result] = await this.connection.execute<(IProduct & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.products');
    return result;
  }
}
