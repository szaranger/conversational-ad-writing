import { AnthropicBedrock } from '@anthropic-ai/bedrock-sdk';

const anthropic = new AnthropicBedrock();

export function buildPrompt(review: any, rules: string) {
  return rules.replace("$REVIEW", review)
}

export function extractTag(completion: unknown, tagName = "moderation") {
  const regex = new RegExp(`<${tagName}>(.*?)<\/${tagName}>`, 'g');
  const matches = (completion as string).match(regex);

  if (matches) {
    return matches.map(match => match.slice(match.indexOf('>') + 1, match.lastIndexOf('<')))[0];
  } 

  console.log(`unable to extract ${tagName} from `, completion);
  return "ERROR"
}

export async function generate(prompt: string, noExtract = false) {
  const content = prompt.replace(/(\r\n|\n|\r)/gm, "");
  
  const message = await anthropic.messages.create({
    // model: 'anthropic.claude-3-sonnet-20240229-v1:0',
    model: 'anthropic.claude-3-haiku-20240307-v1:0',
    messages: [
      {
        role: 'user',
        content,
      },
    ],
    max_tokens: 256,
  });

  if (noExtract) {
    return JSON.stringify(message.content[0].text);
  }

  const completion = message.content[0].text;
  const jobTitle = extractTag(completion, "job_title");
  const location = extractTag(completion, "location");
  const salary = extractTag(completion, "salary");

  return { jobTitle, location, salary };
}