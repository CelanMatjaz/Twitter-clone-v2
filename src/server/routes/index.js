import express from 'express';
import auth from './auth';
import tweet from './tweet';

const router = express.Router();
router.use(express.json());

router.use('/', auth);
router.use('/', tweet);


export default router;