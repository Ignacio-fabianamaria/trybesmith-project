import UserModel from '../models/user.model';
import connection from '../models/connection';
import { IUser } from '../interfaces/User';
import { IToken } from '../interfaces/Token';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user:IUser) {
    const userCreated:IToken = await this.model.create(user);
    return userCreated;
  }
}