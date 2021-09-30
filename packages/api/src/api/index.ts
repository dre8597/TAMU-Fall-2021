/* istanbul ignore file */
import { Router } from 'express';
import { health } from './health';
import { login } from './login';

export const api = Router();

api.use(health);
