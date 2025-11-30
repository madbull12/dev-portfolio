import { ProjectsCarousel } from "@/components/projects/projects-carousel"
import PageWrapper from "@/components/ui/page-wrapper"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "Projects | Andrian Lysander",
  description:"Explore all the projects I've worked on."
}
const ProjectsPage = () => {
  return (
    <PageWrapper>
      <ProjectsCarousel />
    </PageWrapper>
  )
}

export default ProjectsPage