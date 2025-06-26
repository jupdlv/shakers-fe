// lib/projectService.ts

const URL_ENDPOINT = "http://localhost:8080"

export async function getProjects() {
  const res = await fetch(`${URL_ENDPOINT}/project`);
  if (!res.ok) throw new Error('Error fetching projects');
  return res.json();
}

export async function getProjectById(id: string) {
  const res = await fetch(`${URL_ENDPOINT}/project/${id}`);
  if (!res.ok) throw new Error('Error fetching project');
  return res.json();
}