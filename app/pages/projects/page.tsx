'use client'
import ProjectFilter from "@/app/components/filter-modal";
import ProjectCard from "@/app/components/project-card";
import { getProjects } from "@/app/lib/db/project-db-service";
import { Project } from "@/app/shared/models/project";
import { Button, Modal } from "@mui/material";
import * as React from 'react';
import { useEffect } from "react";

export default function DashboardPage() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await getProjects()
        setProjects(projects)
      } catch (error) {
      }
    }

    fetchData()
  }, [])
  const [modalOpen, setModalOpen] = React.useState(false);
  const [projects, setProjects] = React.useState<Project[]>([]);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <div>
        <Button onClick={handleOpen}>filtro</Button>
        <Modal
          open={modalOpen}
          onClose={handleClose}
        >
          <div><ProjectFilter></ProjectFilter></div>
        </Modal>
      </div>
      <div style={{ padding: "1rem" }}>
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
