import { useParams } from "react-router";
import type { Route } from "./+types/portfolio-project";
import ProjectDetailScreen from "../components/ProjectDetailScreen";
import { getProjectBySlug } from "../components/portfolioData";

export function meta({ params }: Route.MetaArgs) {
  const project = getProjectBySlug(params.slug ?? "");

  return [
    {
      title: project ? `${project.title} - Vertmance` : "Project Details - Vertmance",
    },
    {
      name: "description",
      content: project
        ? project.description
        : "Explore Vertmance project details.",
    },
  ];
}

export default function PortfolioProject() {
  const params = useParams();
  const project = getProjectBySlug(params.slug ?? "");

  if (!project) {
    throw new Response("Project not found", { status: 404 });
  }

  return <ProjectDetailScreen project={project} />;
}
