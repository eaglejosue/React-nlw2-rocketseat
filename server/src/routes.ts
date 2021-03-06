import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const router = express.Router();

router.get('/', (request, response) => {
  return response.send('Proffy API v0.0.1-alpha');
});

router.get('/classes', ClassesController.index);
router.post('/classes', ClassesController.create);
router.get('/connections', ConnectionsController.count);
router.post('/connections', ConnectionsController.create);

export default router;
