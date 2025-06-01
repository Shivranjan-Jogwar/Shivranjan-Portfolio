
import type { SocialLink } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SocialIconsProps {
  links: SocialLink[];
  className?: string;
  iconSize?: number;
}

export function SocialIcons({ links, className, iconSize = 20 }: SocialIconsProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      {links.map((link) => (
        <Button
          key={link.name}
          variant="ghost"
          size="icon"
          asChild
          className="text-foreground hover:text-accent-foreground hover:bg-accent transition-colors duration-300 rounded-full"
          aria-label={link.name}
        >
          <Link href={link.href} target="_blank" rel="noopener noreferrer">
            <link.icon size={iconSize} />
          </Link>
        </Button>
      ))}
    </div>
  );
}

// Helper for cn if not globally available (though it should be via utils)
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');
