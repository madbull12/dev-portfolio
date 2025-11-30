import PageWrapper from "@/components/ui/page-wrapper";
import { WorkTimeline } from "@/components/work/work-timeline";
import { Metadata } from "next";
export const metadata:Metadata = {
  title: "Experience | Andrian Lysander",
  description:"Learn more about my experience."
}
const WorkExperiencePage = () => {
  return (
    <PageWrapper>
      <WorkTimeline />
    </PageWrapper>
  );
};

export default WorkExperiencePage;
