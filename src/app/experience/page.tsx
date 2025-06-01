
import { PageHeader } from "@/components/common/page-header";
import { Timeline } from "@/components/common/timeline";
import { experienceData, personalInfo } from "@/lib/constants";

export const metadata = {
  title: "Work Experience",
  description: `Professional experience and work history of ${personalInfo.name}.`,
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader 
        title="Work Experience"
        subtitle="My professional roles, responsibilities, and achievements."
      />
      <section className="py-12 md:py-16">
        <div className="container max-w-screen-md mx-auto px-4">
          {experienceData.length > 0 ? (
            <Timeline events={experienceData} />
          ) : (
            <p className="text-center text-muted-foreground">Work experience will be updated soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
