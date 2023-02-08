import jwt, { SignOptions } from 'jsonwebtoken';
import { ILogin } from '../interfaces/Login';// Interface que conten as credencias do usuário

const JWT_SECRET = process.env.JWT_SECRET || 'secret';// Sua chave secreta que será encriptada junto com os dadaos do usuário

const jwtConfig: SignOptions = { // config básica para JWT_Token
  expiresIn: '1d', // tempo de validade do token
  algorithm: 'HS256', // algoritimo usado para assinatura 
};

/* ________função que gera um token___________________________ */
export const generateToken = (payload:ILogin) =>
  jwt.sign(payload, JWT_SECRET, jwtConfig);
  // fazendo a assinatura da mensagem com a "chave secreta"
  // A assinatura contem os dados de credencias que vem do Payload,
  // a variável que guarda a chave secreta e as configurações básicas para gerar o token

export default generateToken;