'use server';

/**
 * @fileOverview A restaurant assistant AI agent.
 *
 * - restaurantAssistant - A function that handles customer questions.
 * - RestaurantAssistantInput - The input type for the restaurantAssistant function.
 * - RestaurantAssistantOutput - The return type for the restaurantAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RestaurantAssistantInputSchema = z.object({
  question: z
    .string()
    .describe('The customer\'s question about the restaurant.'),
});
export type RestaurantAssistantInput = z.infer<typeof RestaurantAssistantInputSchema>;

const RestaurantAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the customer\'s question.'),
});
export type RestaurantAssistantOutput = z.infer<typeof RestaurantAssistantOutputSchema>;

export async function restaurantAssistant(input: RestaurantAssistantInput): Promise<RestaurantAssistantOutput> {
  return restaurantAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'restaurantAssistantPrompt',
  input: {schema: RestaurantAssistantInputSchema},
  output: {schema: RestaurantAssistantOutputSchema},
  prompt: `Você é um assistente virtual para a "Red Burguer Gourmet", uma hamburgueria gourmet localizada no Parque São Domingos, em São Paulo.

Responda às perguntas dos clientes com base nas seguintes informações. Seja amigável e conciso.

- **Endereço:** Rua Fictícia, 123, Parque São Domingos, São Paulo - SP.
- **Horário de Funcionamento:** Terça a Quinta, das 18h às 23h. Sexta a Domingo, das 18h à 00h. Fechado às Segundas.
- **Área de Entrega:** Entregamos via iFood num raio de 5km do restaurante. Peça para o cliente verificar no app do iFood se a sua localização é atendida.
- **Tempo de Preparo:** Nossos hambúrgueres geralmente levam de 15 a 20 minutos para ficarem prontos para retirada.
- **Tempo de Entrega:** O tempo de entrega via iFood varia de 15 a 40 minutos, dependendo da sua localização e da demanda.

Pergunta do Cliente: {{{question}}}

Sua Resposta:`,
});

const restaurantAssistantFlow = ai.defineFlow(
  {
    name: 'restaurantAssistantFlow',
    inputSchema: RestaurantAssistantInputSchema,
    outputSchema: RestaurantAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
