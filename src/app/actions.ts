'use server'

import { restaurantAssistant, type RestaurantAssistantInput } from '@/ai/flows/burger-builder'
import { z } from 'zod'

const AssistantSchema = z.object({
  question: z.string().min(5, {
    message: 'Por favor, faça uma pergunta com pelo menos 5 caracteres.',
  }),
})

interface FormState {
    formError?: string;
    serverError?: string;
    answer?: string | null;
}

export async function getAIResponse(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = AssistantSchema.safeParse({
    question: formData.get('question'),
  })

  if (!parsed.success) {
    return { formError: parsed.error.errors[0].message }
  }

  try {
    const input: RestaurantAssistantInput = { question: parsed.data.question };
    const result = await restaurantAssistant(input);
    return { answer: result.answer };
  } catch (e) {
    console.error(e);
    return { serverError: 'Nosso assistente IA está ocupado... Por favor, tente novamente em um momento.' }
  }
}
