import {Router} from 'express';

const router: Router = Router();


router.get('/hello', (req, res) => {
  res.send('hello world');
});


export
