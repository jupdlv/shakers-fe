// lib/projectService.ts

import { Project } from "@/app/shared/models/project";
import { IProjectOptions } from "@/app/shared/models/project-options";
import { Skill } from "@/app/shared/models/skills";
import axios from "axios";

const URL_ENDPOINT = "http://localhost:8080"

export async function getProjects(): Promise<Project[]> {

  const res = await axios.get(`${URL_ENDPOINT}/project`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    }
  })
  return res.data as Project[]
}

export async function getProjectById(id: string) {
  const res = await axios.get(`${URL_ENDPOINT}/project/${id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    }
  })
  return res.data as Project[]
}

export async function getCategories() {
  const res = await axios.get(`${URL_ENDPOINT}/category`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    }
  })
  return res.data
}

export async function getIndustries() {
  const res = await axios.get(`${URL_ENDPOINT}/industries`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    }
  })
  return res.data
}

export async function getSkills(): Promise<Skill[]> {
  const res = await axios.get(`${URL_ENDPOINT}/skills`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    }
  })
  return res.data
}

export async function getSpecialties() {
  const res = await axios.get(`${URL_ENDPOINT}/specialties`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    }
  })
  return res.data
}
export async function getSubcategories() {
  const res = await axios.get(`${URL_ENDPOINT}/subcategories`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    }
  })
  return res.data
}

export async function postFilterProject(data: IProjectOptions) {
  const res = await axios.post(`${URL_ENDPOINT}/project/filter`, { data }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    },
  })
  return res.data
}