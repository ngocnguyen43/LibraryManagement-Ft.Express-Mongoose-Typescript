/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';
import { UserController } from './../controllers/UserController';
import { ErrorHandler } from './../middlewares/ErrorHandler';
export const router = Router();
router.get('/users', ErrorHandler(UserController.getAllUser));
router.get('/users/:id', ErrorHandler(UserController.getUserById));
