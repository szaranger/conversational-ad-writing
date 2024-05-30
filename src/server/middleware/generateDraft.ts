import { Router as router } from 'express';

import { createGenerateJobDescriptionPrompt } from '../../prompts';

import { generate } from './utils';

const generateDraft = router();

generateDraft.get('/generate-draft', async (req, res) => {
  const { jobTitle, location, salary } = req.query;
  const prompt = createGenerateJobDescriptionPrompt({ jobTitle, location, salary });
  const result = await generate(prompt, true);

  res.status(200).send(result);
});

export default generateDraft;