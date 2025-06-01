
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="py-12 md:py-16 text-center bg-muted/30 border-b">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
}
