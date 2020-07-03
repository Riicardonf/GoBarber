import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRoute = Router();
const profileController = new ProfileController();

profileRoute.use(ensureAuthenticated);

profileRoute.get('/', profileController.show);
profileRoute.put('/', profileController.update);

export default profileRoute;
