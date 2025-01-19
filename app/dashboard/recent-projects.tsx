import { ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Project {
  id: string
  name: string
  client: string
  status: "In Progress" | "Completed" | "On Hold"
  dueDate: string
}

const projects: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    client: "Acme Corp",
    status: "In Progress",
    dueDate: "2025-02-15",
  },
  {
    id: "2",
    name: "Mobile App Development",
    client: "TechStart Inc",
    status: "On Hold",
    dueDate: "2025-03-01",
  },
  {
    id: "3",
    name: "Brand Identity Design",
    client: "GreenEarth NGO",
    status: "Completed",
    dueDate: "2025-01-30",
  },
  {
    id: "4",
    name: "E-commerce Platform",
    client: "ShopEasy",
    status: "In Progress",
    dueDate: "2025-04-10",
  },
]

export function RecentProjects() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>{project.client}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    project.status === "Completed"
                      ? "success"
                      : project.status === "In Progress"
                      ? "default"
                      : "secondary"
                  }
                >
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell>{project.dueDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button variant="ghost" size="sm">
          View All Projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
