import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
// import AnimatedBackground from "@/components/common/animated-background"; // Removed
import { personalInfo, socialLinks } from "@/lib/constants";
import { SocialIcons } from "@/components/common/social-icons";

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-muted"> {/* Added bg-muted */}
      {/* <AnimatedBackground particleColor="hsla(var(--primary)/0.5)" lineColor="hsla(var(--primary)/0.2)" /> */} {/* Removed */}
      <div className="container max-w-screen-lg mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Hi There,
              <br />
              I&apos;m <span className="text-primary">Shivranjan Jogwar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">Data Analytics | Data Science |
              Machine Learning | Deep Learning | Artificial Intelligence | Robotic Process Automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/about">
                  About Me
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  My Projects
                </Link>
              </Button>
            </div>
            <div className="pt-4 flex justify-center md:justify-start">
              <SocialIcons links={socialLinks} />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse"></div>
              <Image
                src="/shiv.jpg"
                alt="Shivranjan Jogwar"
                width={300}
                height={300}
                priority
                className="rounded-full object-cover border-4 border-background shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
