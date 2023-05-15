import cors from 'cors';
import express, { Application } from 'express';

const app: Application = express();

import userRoutes from './app/modules/user.route';

// using cors
app.use(cors());

//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get('/api/v1/user', userRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/user', userRoutes);

export default app;

/* 
Step1: Interface
Step2: Schema
Step3: Model
Step4: Database Query
// 1. Creating User Interface
//4.Data Query To Save user to DB
  */

/* 
Modular Pattern:
Interface => Interface.ts
Schema, Model => model.ts 

route => user.route.ts 
route function => user.controller.ts 
Database Query Function => service.ts

Here:
route will call => controller will call=> service
*/
