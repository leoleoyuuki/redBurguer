'use server';

/**
 * @fileOverview The Burger Builder AI agent.
 *
 * - burgerBuilder - A function that handles the burger building process.
 * - BurgerBuilderInput - The input type for the burgerBuilder function.
 * - BurgerBuilderOutput - The return type for the burgerBuilder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BurgerBuilderInputSchema = z.object({
  preferences: z
    .string()
    .describe('The customer preferences for the burger, including taste, ingredients, and dietary restrictions.'),
});
export type BurgerBuilderInput = z.infer<typeof BurgerBuilderInputSchema>;

const BurgerBuilderOutputSchema = z.object({
  recommendation: z.string().describe('The recommended ingredients for the ultimate burger based on customer preferences.'),
});
export type BurgerBuilderOutput = z.infer<typeof BurgerBuilderOutputSchema>;

export async function burgerBuilder(input: BurgerBuilderInput): Promise<BurgerBuilderOutput> {
  return burgerBuilderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'burgerBuilderPrompt',
  input: {schema: BurgerBuilderInputSchema},
  output: {schema: BurgerBuilderOutputSchema},
  prompt: `You are an expert burger chef. A customer will provide their preferences for a burger, and you will provide a recommendation for the ultimate burger based on those preferences.

Customer Preferences: {{{preferences}}}

Recommendation:`,
});

const burgerBuilderFlow = ai.defineFlow(
  {
    name: 'burgerBuilderFlow',
    inputSchema: BurgerBuilderInputSchema,
    outputSchema: BurgerBuilderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
