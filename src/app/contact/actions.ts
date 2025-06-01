
"use server";

import { z } from "zod";
import { smartFormAI, type SmartFormAIInput } from "@/ai/flows/smartform-ai";

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  pageContext: z.string().optional().default("Contact Page Inquiry"),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  isSuccess?: boolean;
  aiResponse?: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      issues: parsed.error.issues.map((issue) => issue.message),
      fields: formData as Record<string, string>,
      isSuccess: false,
    };
  }

  const aiInput: SmartFormAIInput = {
    name: parsed.data.name,
    email: parsed.data.email,
    message: parsed.data.message,
    pageContext: parsed.data.pageContext || "Contact Page Inquiry",
  };

  try {
    // Here you would typically save the form data to a database (e.g., Firebase Firestore)
    // For this example, we'll skip database saving and directly call the AI.
    console.log("Form data received:", parsed.data);

    // Call the SmartForm AI
    const aiResult = await smartFormAI(aiInput);
    
    // In a real app, you might also send an email notification.

    return {
      message: "Your message has been sent successfully! Here's a personalized response:",
      isSuccess: true,
      aiResponse: aiResult.response,
    };
  } catch (error) {
    console.error("Error processing contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      isSuccess: false,
      aiResponse: "Sorry, I couldn't generate a response at this moment.",
      fields: parsed.data as Record<string, string>,
    };
  }
}
