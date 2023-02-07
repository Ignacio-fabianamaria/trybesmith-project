import OrderModel from '../models/order.model';
import connection from '../models/connection';
import { IOrder } from '../interfaces/Order';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const allOrders = await this.model.getAll();
    return allOrders;
  }
}