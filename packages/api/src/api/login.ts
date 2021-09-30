import { Router } from 'express';

export const login = Router();

login.get('/', (_req, res) => {
  console.log("hi");
});
