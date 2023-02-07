import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/Order';

export default class OrderModel {
  private connection: Pool;
    
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async getAll():Promise<IOrder[]> {
    const [result] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      `SELECT ord.id, ord.user_id as userId, JSON_ARRAYAGG(prod.id) as productsIds
       FROM Trybesmith.orders as ord
       INNER JOIN Trybesmith.products as prod
       ON ord.id = prod.order_id
       GROUP BY ord.id
       ORDER BY ord.id`);

    // JSON_ARRAYAGG permite agregar um conjunto de resultados em um array,
    // nesse caso o atributo  'productsIds' terá um array de ids de produtos como resultado na busca
       
    return result;
  }
}