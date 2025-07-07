"use client";

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { getBurgerRecommendation } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-md transition-transform hover:scale-105">
      {pending ? (
        <>
          <Wand2 className="mr-2 h-4 w-4 animate-spin" />
          Building...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Build My Burger
        </>
      )}
    </Button>
  );
}

export default function AiBurgerBuilder() {
  const initialState = { recommendation: null, formError: undefined, serverError: undefined };
  const [state, formAction] = useActionState(getBurgerRecommendation, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.serverError) {
      toast({
        variant: "destructive",
        title: "Oops! AI Chef is taking a break.",
        description: state.serverError,
      });
    }
    if (state.recommendation) {
        formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="ai-builder" className="bg-card">
        <div className="container">
            <h2 className="section-title">AI Burger Architect</h2>
            <p className="section-subtitle">
                Can't decide? Let our AI chef design the perfect burger just for you!
            </p>
            <Card className="max-w-3xl mx-auto shadow-lg border-2 border-primary/20">
                <form ref={formRef} action={formAction}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline">
                            <Sparkles className="text-primary h-6 w-6" />
                            <span>Describe Your Dream Burger</span>
                        </CardTitle>
                        <CardDescription>
                            Tell us what you like (e.g., "spicy, lots of cheese, no pickles") and we'll create a unique recommendation.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Textarea
                            name="preferences"
                            placeholder="I love spicy food, maybe some jalapeños and pepper jack cheese. I'm not a fan of onions..."
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

                {state?.recommendation && (
                    <div className="p-6 border-t border-border bg-background rounded-b-lg">
                         <CardTitle className="flex items-center gap-2 font-headline mb-4">
                            <Sparkles className="text-accent h-6 w-6" />
                            <span>Your Ultimate Burger Rec!</span>
                        </CardTitle>
                        <p className="whitespace-pre-wrap text-foreground/90">{state.recommendation}</p>
                    </div>
                )}
            </Card>
        </div>
    </section>
  );
}
