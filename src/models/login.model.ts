import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../interfaces/Login';

export default class LoginModel {
  private connection: Pool;
    
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async postLogin(userLogin:ILogin): Promise<ILogin> {
    const { username, password } = userLogin;
    const [[result]] = await this.connection.execute<
    RowDataPacket[] & ILogin[]>(
      `SELECT * FROM Trybesmith.users
      WHERE username = ? AND password = ?`, 
      [username, password],
    );
    console.log('model', result);
      
    return result;
  } 
}