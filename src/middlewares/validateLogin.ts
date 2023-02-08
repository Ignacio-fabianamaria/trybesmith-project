import { NextFunction, Request, Response } from 'express';

const validateLogin = (req:Request, res:Response, next:NextFunction) => {
  const loginUser = req.body;

  if (!loginUser.username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!loginUser.password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

export default validateLogin;
