// src/ai/flows/smartform-ai.ts
'use server';

/**
 * @fileOverview Generates a personalized response to user inquiries submitted through a contact form, taking into account the context of the page the user is on.
 *
 * - smartFormAI - A function that generates a personalized response to user inquiries.
 * - SmartFormAIInput - The input type for the smartFormAI function.
 * - SmartFormAIOutput - The return type for the smartFormAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartFormAIInputSchema = z.object({
  name: z.string().describe('The name of the user submitting the form.'),
  email: z.string().email().describe('The email address of the user.'),
  message: z.string().describe('The message from the user.'),
  pageContext: z.string().describe('The context of the page the user is on when submitting the form.'),
});

export type SmartFormAIInput = z.infer<typeof SmartFormAIInputSchema>;

const SmartFormAIOutputSchema = z.object({
  response: z.string().describe('A personalized response to the user inquiry.'),
});

export type SmartFormAIOutput = z.infer<typeof SmartFormAIOutputSchema>;

export async function smartFormAI(input: SmartFormAIInput): Promise<SmartFormAIOutput> {
  return smartFormAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartFormAIPrompt',
  input: {schema: SmartFormAIInputSchema},
  output: {schema: SmartFormAIOutputSchema},
  prompt: `You are a helpful AI assistant designed to provide personalized responses to user inquiries submitted through a contact form. The user has provided the following information:

Name: {{{name}}}
Email: {{{email}}}
Message: {{{message}}}
Page Context: {{{pageContext}}}

Based on this information and the context of the page the user is on, generate a personalized and helpful response to their inquiry. The response should be concise and address the user's needs effectively.`,
});

const smartFormAIFlow = ai.defineFlow(
  {
    name: 'smartFormAIFlow',
    inputSchema: SmartFormAIInputSchema,
    outputSchema: SmartFormAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
