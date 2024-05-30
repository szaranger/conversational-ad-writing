export const createExtractPrompt = (
  userInput: string,
) => `Extract information from the user input (provided in <user_input></user_input> tags) regarding a job opportunity.
The input may contain details such as job title, location, salary.
Your task is to parse this input and extract job title, location and salary, and return the information in the following format as follows:
<job_title>job title</job_title>
<location>location</location>
<salary>salary</salary>
<message>message</message>
Ensure that you properly handle cases where certain information might be missing or not provided. Your algorithm should be able to identify and extract these details accurately from the input.
If any of the <job_title>, <location> or <salary> does not have value, please update the <message>message</message> for the user to enter the missing details. If all required details provided, leave message null
Do not include newline characters in the extracted fields.
Do not include any information on how the fields were extracted.
  Use the information provided below to extract:
  <user_input>${userInput}</user_input>`;

export const createGenerateJobDescriptionPrompt = ({
  jobTitle,
  location,
  salary,
}: { jobTitle: any; location: any; salary: any }) => `You are a recruiter working for a company. You will receive a set of XML tags representing the prompt inputs:
  - job title (provided in <job_title></job_title> tags),
  - location (provided in <location></location> tags),
  - salary (provided in <salary></salary> tags),
  Your task is to create a targeted job description designed to attract qualified candidates who are a perfect fit for the role based on these inputs, but without using any of the provided XML tags in your output. Instead, you should use plain text or other formatting symbols as needed. This document will be fundamental in the recruitment process and should be detailed and engaging.
Use the information provided below to extract:
<job_title>${jobTitle}</job_title><location>${location}</location><salary>${salary}</salary>`;