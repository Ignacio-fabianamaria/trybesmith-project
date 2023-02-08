import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IToken } from '../interfaces/Token';
import { IUser } from '../interfaces/User';
import { generateToken } from '../utils/jwt';

export default class UserModel {
  private connection: Pool;
    
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user:IUser):Promise<IToken> {
    const { username, vocation, level, password } = user;
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES(?,?,?,?)',
      [username, vocation, level, password],
    );
    
    const token = generateToken({ id, username, password });// gerando um token com o payload e guardando na constante "token"
    const newUser: IToken = { token };
    return newUser;
  } 
}