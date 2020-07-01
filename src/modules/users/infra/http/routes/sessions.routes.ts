import { Router } from 'express';

import SessionController from '../controllers/SessionController';

const sessionsRoute = Router();
const sessionController = new SessionController();

sessionsRoute.post('/', sessionController.create);

export default sessionsRoute;
