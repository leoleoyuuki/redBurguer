"use client";

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { getAIResponse } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-md transition-transform hover:scale-105">
      {pending ? (
        <>
          <Bot className="mr-2 h-4 w-4 animate-spin" />
          Pensando...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          Enviar Pergunta
        </>
      )}
    </Button>
  );
}

export default function AiAssistant() {
  const initialState = { answer: null, formError: undefined, serverError: undefined };
  const [state, formAction] = useActionState(getAIResponse, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.serverError) {
      toast({
        variant: "destructive",
        title: "Opa! Nosso assistente IA está ocupado.",
        description: state.serverError,
      });
    }
    if (state.answer) {
        formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="ai-assistant" className="bg-card">
        <div className="container">
            <h2 className="section-title">Assistente Virtual</h2>
            <p className="section-subtitle">
                Tem alguma dúvida? Pergunte ao nosso assistente IA!
            </p>
            <Card className="max-w-3xl mx-auto shadow-lg border-2 border-primary/20">
                <form ref={formRef} action={formAction}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline">
                            <Sparkles className="text-primary h-6 w-6" />
                            <span>Faça sua Pergunta</span>
                        </CardTitle>
                        <CardDescription>
                            Pergunte sobre entregas, tempo de preparo, ou qualquer outra coisa!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Textarea
                            name="question"
                            placeholder="Vocês entregam na Vila Leopoldina? Quanto tempo demora?"
                            rows={4}
                            required
                            className="bg-background focus:ring-accent"
                        />
                         {state?.formError && <p className="text-sm font-medium text-destructive mt-2">{state.formError}</p>}
                    </CardContent>
                    <CardFooter className="flex justify-end">
                       <SubmitButton />
                    </CardFooter>
                </form>

                {state?.answer && (
                    <div className="p-6 border-t border-border bg-background rounded-b-lg">
                         <CardTitle className="flex items-center gap-2 font-headline mb-4">
                            <Bot className="text-accent h-6 w-6" />
                            <span>Resposta do Assistente</span>
                        </CardTitle>
                        <p className="whitespace-pre-wrap text-foreground/90">{state.answer}</p>
                    </div>
                )}
            </Card>
        </div>
    </section>
  );
}
