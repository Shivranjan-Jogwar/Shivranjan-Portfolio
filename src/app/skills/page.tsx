
import { PageHeader } from "@/components/common/page-header";
import { SkillsCategoryDisplay } from "@/components/common/skill-progress";
import { skillsData, personalInfo } from "@/lib/constants";

export const metadata = {
  title: "Skills",
  description: `Technical skills and proficiencies of ${personalInfo.name}.`,
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader 
        title="My Skills" 
        subtitle="A showcase of my technical abilities and tools I work with."
      />
      <section className="py-12 md:py-16">
        <div className="container max-w-screen-lg mx-auto px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {skillsData.map((category, index) => (
              <SkillsCategoryDisplay 
                key={index} 
                categoryName={category.categoryName} 
                skills={category.skills} 
              />
            ))}
          </div>
          {skillsData.length === 0 && (
            <p className="text-center text-muted-foreground">Skills information will be updated soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
