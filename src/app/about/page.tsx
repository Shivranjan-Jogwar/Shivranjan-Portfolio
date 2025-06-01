import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { personalInfo, experienceData } from "@/lib/constants";
import { Timeline } from "@/components/common/timeline";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About Me",
  description: `Learn more about ${personalInfo.name}, skills, and career journey.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Me" subtitle="A little bit about my journey, aspirations, and what drives me." />
      
      <section className="py-12 md:py-16">
        <div className="container max-w-screen-lg mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
            <div className="md:col-span-1 flex justify-center">
              <Image
                src="/shiv.jpg"
                alt="Shivranjan Jogwar"
                width={250}
                height={250}
                priority
                className="rounded-full object-cover border-4 border-background shadow-xl relative z-10"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                I&apos;m Shivranjan Jogwar
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {personalInfo.bioShort}
              </p>
              <p className="text-foreground/80 mb-6">
                {personalInfo.bioExtended}
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="https://drive.google.com/file/d/1Sn2sq1NcrFY8VLG4H6JwyQLxjxGYvuja/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">What Drives Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">"The more I attempt to learn, the more I realize how little I know."</p>
            </CardContent>
          </Card>
          
          <div>
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">My Journey So Far</h2>
            <Timeline events={experienceData} />
          </div>
        </div>
      </section>
    </>
  );
}
