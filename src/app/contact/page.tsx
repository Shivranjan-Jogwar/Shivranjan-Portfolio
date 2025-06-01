
import { PageHeader } from "@/components/common/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { SocialIcons } from "@/components/common/social-icons";
import { personalInfo, socialLinks } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Me",
  description: `Get in touch with ${personalInfo.name}. Send a message or connect on social media.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Me"
        subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing."
      />
      <section className="py-12 md:py-16">
        <div className="container max-w-screen-lg mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out via email, or connect with me on social media.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href={`mailto:${personalInfo.email}`} className="text-foreground hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                {/* Optional: Add phone number if desired
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">(123) 456-7890</span>
                </div>
                */}
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">Follow Me</h3>
                <SocialIcons links={socialLinks} />
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
          
          {/* Optional Embedded Map - Placeholder
          <div className="mt-12 md:mt-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">My Location (Optional)</h2>
            <div className="aspect-video bg-muted rounded-lg shadow-md flex items-center justify-center">
              <p className="text-muted-foreground">Embedded Map Placeholder</p>
            </div>
          </div>
          */}
        </div>
      </section>
    </>
  );
}
