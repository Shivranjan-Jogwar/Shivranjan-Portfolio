
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import type { TimelineEvent } from '@/lib/types';
import { cn } from '@/lib/utils';

interface TimelineProps {
  events: TimelineEvent[];
}

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast }) => {
  const Icon = event.icon;
  return (
    <div className="flex gap-x-3 relative">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-border -translate-x-1/2"></div>
      )}
      
      {/* Icon */}
      <div className="relative z-10 flex-shrink-0">
        <div className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full ring-8 ring-background",
          Icon ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
        )}>
          {Icon ? <Icon className="h-5 w-5" /> : <div className="h-3 w-3 rounded-full bg-muted-foreground/50" /> }
        </div>
      </div>

      {/* Content */}
      <div className="grow pb-8 md:pb-10">
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
              <CardTitle className="text-xl font-semibold text-foreground">{event.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{event.date}</p>
            </div>
            <CardDescription className="text-md text-primary">{event.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground/80">{event.description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export function Timeline({ events }: TimelineProps) {
  if (!events || events.length === 0) {
    return <p className="text-center text-muted-foreground">No events to display.</p>;
  }

  return (
    <div className="space-y-0"> {/* Reduced space for a more connected look if needed */}
      {events.map((event, index) => (
        <TimelineItem key={event.id} event={event} isLast={index === events.length - 1} />
      ))}
    </div>
  );
}
