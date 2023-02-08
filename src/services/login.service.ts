import LoginModel from '../models/login.model';
import connection from '../models/connection';
import { ILogin } from '../interfaces/Login';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async postLogin(login:ILogin) {
    const loginUser = await this.model.postLogin(login);
    return loginUser;
  }
}