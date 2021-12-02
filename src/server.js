import express from 'express';
import { PORT } from './utils/constants';
import initRoutes from './routes/init.routes';
import setupRootMiddleware from './middlewares/root.middleware';

const bootstrap = () => {
  const app = express();
  setupRootMiddleware(app);
  initRoutes(app);
  app.listen(PORT, () => {
    console.log(`\n\nStarted at: http://localhost:${PORT} \n\n`);
  });
};

bootstrap();
