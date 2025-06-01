
import { PageHeader } from "@/components/common/page-header";
import { Timeline } from "@/components/common/timeline";
import { educationData, personalInfo } from "@/lib/constants";

export const metadata = {
  title: "Education",
  description: `Educational background and qualifications of ${personalInfo.name}.`,
};

export default function EducationPage() {
  return (
    <>
      <PageHeader 
        title="Education"
        subtitle="My academic journey and qualifications."
      />
      <section className="py-12 md:py-16">
        <div className="container max-w-screen-md mx-auto px-4">
          {educationData.length > 0 ? (
            <Timeline events={educationData} />
          ) : (
            <p className="text-center text-muted-foreground">Educational information will be updated soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
