
"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/common/page-header";
import { ProjectCard } from "@/components/common/project-card";
import { projectsData, projectCategories, personalInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

// Metadata can't be dynamic in client components, so define it statically or move to parent server component if needed.
// For simplicity, static metadata is assumed here if this were a server component.
// Since it's client for filtering, metadata would be in a layout or parent server component.
// This page component, however, can be a server component, with filtering logic moved to a client child.
// For now, to keep it simple for generation, we'll make the whole page client-side.

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projectsData;
    }
    return projectsData.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHeader 
        title="My Projects"
        subtitle="A selection of projects I've worked on, showcasing my skills and interests."
      />
      <section className="py-12 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "transition-all duration-200",
                  activeCategory === category && "bg-primary hover:bg-primary/90 text-primary-foreground"
                )}
              >
                {category}
              </Button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-lg">
              No projects found for &quot;{activeCategory}&quot;. More projects coming soon!
            </p>
          )}
        </div>
      </section>
    </>
  );
}

// For Next.js metadata (if this were a server component or in a layout):
// export const metadata = {
//   title: "Projects",
//   description: `Projects by ${personalInfo.name} in Data Analytics, ML, AI, and Web Development.`,
// };
