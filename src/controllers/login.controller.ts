import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import { generateToken } from '../utils/jwt';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public postLogin = async (req: Request, res: Response) => {
    const loginUser = req.body;

    const isUser = await this.loginService.postLogin(loginUser);
    if (!isUser) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const tokenJwt = generateToken(req.body);
    res.status(200).json({ token: tokenJwt });
  };
}