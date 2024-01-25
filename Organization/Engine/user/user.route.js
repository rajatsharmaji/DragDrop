import express from 'express'
import { addUserService, getUserService } from './user.service.js'

const userRouter = express.Router();

userRouter.post('/add',addUserService)
userRouter.get('/get',getUserService)


export default userRouter;