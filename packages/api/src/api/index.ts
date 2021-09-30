/* istanbul ignore file */
import { Router } from 'express';
import { health } from './health';
import { friends } from './friends';

export const api = Router();

api.use(health);
api.use('/friends', friends);
