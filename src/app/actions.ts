'use server'

import { burgerBuilder, type BurgerBuilderInput } from '@/ai/flows/burger-builder'
import { z } from 'zod'

const BurgerBuilderSchema = z.object({
  preferences: z.string().min(10, {
    message: 'Please describe your burger preferences in at least 10 characters.',
  }),
})

interface FormState {
    formError?: string;
    serverError?: string;
    recommendation?: string | null;
}

export async function getBurgerRecommendation(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = BurgerBuilderSchema.safeParse({
    preferences: formData.get('preferences'),
  })

  if (!parsed.success) {
    return { formError: parsed.error.errors[0].message }
  }

  try {
    const input: BurgerBuilderInput = { preferences: parsed.data.preferences };
    const result = await burgerBuilder(input);
    return { recommendation: result.recommendation };
  } catch (e) {
    console.error(e);
    return { serverError: 'Our AI chef is busy... Please try again in a moment.' }
  }
}
