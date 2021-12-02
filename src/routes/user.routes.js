import { Router } from 'express';
import controller from '../controllers/user.controller';
import verifyToken from '../middlewares/verifyToken.middleware';
import userValidator from '../validators/user.validator';

const router = Router();

router.use(verifyToken);
router.get('/', controller.getAllUsers);
router.post('/', userValidator(), controller.addUser);

router.get('/filter', controller.getUsers);

export default router;
