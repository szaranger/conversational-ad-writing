import { Router as router } from 'express';

const healthCheck = router();

healthCheck.get('/health', (req, res) => {
  res.status(200).send('OK');
});

export default healthCheck;
