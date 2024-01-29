import express from 'express'
import { addProject, getProject } from './project.service.js'

const projectRouter = express.Router();

projectRouter.patch('/project/:uid', addProject);
projectRouter.get('/project/:uid', getProject);


export default projectRouter;