import generateDraft from './generateDraft';
import generatePrompt from './generatePrompt';
import healthCheck from './healthCheck';

export const middleware = [healthCheck, generateDraft, generatePrompt];
