import { Router } from 'express';
import controller from '../controllers/auth.controller';

const router = Router();

router.post('/login', controller.login);

export default router;
