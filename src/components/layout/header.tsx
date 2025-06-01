
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { navLinks, APP_NAME } from "@/lib/constants";
import type { NavLink as NavLinkType } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">{APP_NAME.substring(0,2)}</span>
          <span className="sr-only">{APP_NAME}</span>
          </Link>
          <div className="h-8 w-24 animate-pulse rounded-md bg-muted/50 md:hidden" />
          <nav className="hidden md:flex gap-6 items-center">
            {/* Placeholder for desktop nav links during SSR mismatch avoidance */}
          </nav>
        </div>
      </header>
    );
  }
  
  const NavItem: React.FC<{ link: NavLinkType; onClick?: () => void; isMobile?: boolean }> = ({ link, onClick, isMobile }) => (
    <Link
      href={link.href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === link.href ? "text-primary" : "text-muted-foreground",
        isMobile && "block py-2 px-4 hover:bg-accent rounded-md"
      )}
    >
      {link.label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl text-primary"></span>
          <span className="sr-only"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => (
            <Button key={link.href} variant={pathname === link.href ? "secondary" : "ghost"} asChild size="sm">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-4">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
                   <span className="font-bold text-lg text-primary">{APP_NAME.substring(0,2)}</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <NavItem key={link.href} link={link} onClick={() => setIsSheetOpen(false)} isMobile />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
