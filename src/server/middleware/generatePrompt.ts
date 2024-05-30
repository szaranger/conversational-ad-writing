import { Router as router } from 'express';

import { createExtractPrompt } from '../../prompts';

import { generate } from './utils';

const generatePrompt = router();


generatePrompt.get('/generate-prompt', async (req, res) => {
  const prompt = createExtractPrompt(req.query.prompt as string);
  const result = await generate(prompt);

  res.status(200).send(result);
});

export default generatePrompt;