"use client";

import React, { useEffect, useActionState, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  pageContext: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const initialState: ContactFormState = {
  message: "",
  isSuccess: false,
};

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      {isSubmitting ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: state.fields?.name || "",
      email: state.fields?.email || "",
      message: state.fields?.message || "",
      pageContext: state.fields?.pageContext || "Contact Page PortfolioVerse",
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.isSuccess ? "Success!" : "Error",
        description: state.message,
        variant: state.isSuccess ? "default" : "destructive",
      });
      if (state.isSuccess) {
        reset();
      }
    }
  }, [state, toast, reset]);

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  // Convert plain object to FormData
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("message", data.message);
  if (data.pageContext) {
    formData.append("pageContext", data.pageContext);
  }

  await formAction(formData);  // ✅ now passes a valid FormData
  setIsSubmitting(false);
};


  return (
    <React.Fragment>
      <Card className="w-full max-w-lg mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Get In Touch</CardTitle>
          <CardDescription>
            Fill out the form below, and I&apos;ll get back to you as soon as
            possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                {...register("name")}
                className={errors.name ? "border-destructive" : ""}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                {...register("message")}
                className={errors.message ? "border-destructive" : ""}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <input
              type="hidden"
              {...register("pageContext")}
              defaultValue="Contact Page PortfolioVerse"
            />

            <SubmitButton isSubmitting={isSubmitting} />
          </form>

          {state.aiResponse && (
            <Alert
              className={cn(
                "mt-6",
                state.isSuccess ? "border-green-500" : "border-destructive"
              )}
            >
              {state.isSuccess ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-destructive" />
              )}
              <AlertTitle
                className={cn(
                  state.isSuccess ? "text-green-700" : "text-destructive"
                )}
              >
                {state.isSuccess
                  ? "AI Generated Response:"
                  : "AI Assistant Note:"}
              </AlertTitle>
              <AlertDescription className="text-sm text-foreground/80">
                {state.aiResponse}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
