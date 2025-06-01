"use client";

import React from 'react';
import type { Skill } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';

// Define a type for the LucideIcons module
type LucideIconsType = {
  [key: string]: React.ElementType;
};

interface SkillItemProps {
  skill: Skill;
}

export const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  // Use type assertion to inform TypeScript about the type of LucideIcons
  const IconComponent = skill.icon ? ((LucideIcons as unknown) as LucideIconsType)[skill.icon] : undefined;

  return (
    <div className="mb-3 p-1">
      <div className="flex items-center gap-2">
        {IconComponent ? (
          <IconComponent className="h-5 w-5 text-primary" />
        ) : null}
        <span className="font-medium text-foreground">{skill.name}</span>
      </div>
    </div>
  );
};

interface SkillsCategoryProps {
  categoryName: string;
  skills: Skill[];
}

export const SkillsCategoryDisplay: React.FC<SkillsCategoryProps> = ({ categoryName, skills }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl text-center md:text-left font-semibold text-primary">
          {categoryName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </CardContent>
    </Card>
  );
};
