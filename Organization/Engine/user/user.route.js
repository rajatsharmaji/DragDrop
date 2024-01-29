import express from 'express'
import { verifyToken } from '../middlewares/auth.js';
import { addUserService, getUserService } from './user.service.js'

const userRouter = express.Router();

userRouter.post('/add',addUserService)
userRouter.get('/get',getUserService)


export default userRouter;