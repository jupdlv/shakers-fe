import ProjectCard from "@/app/components/project-card";
import { getProjects } from "@/app/lib/db/project-db-service";
import { Project } from "@/app/shared/models/project";


export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <div style={{ padding: "1rem" }}>
      {projects.map((project: Project, index:number) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
