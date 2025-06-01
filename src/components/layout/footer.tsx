
import Link from "next/link";
import { SocialIcons } from "@/components/common/social-icons";
import { navLinks, socialLinks, APP_NAME, personalInfo } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 text-muted-foreground py-12">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">{APP_NAME}</h3>
            <p className="text-sm">Shivranjan Jogwar</p>
            <p className="text-sm">Data Analytics | Data Science | Machine Learning | Deep Learning | Artificial Intelligence | Robotic Process Automation</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => ( // Show first 5 links
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Connect</h3>
            <SocialIcons links={socialLinks} iconSize={22} />
          </div>
        </div>
        <Separator className="my-8 bg-border" />
        <div className="text-center text-sm">
          <p>&copy; {currentYear} Shivranjan Jogwar. All rights reserved.</p>
          <p>Designed by Shivranjan Jogwar</p>
        </div>
      </div>
    </footer>
  );
}
