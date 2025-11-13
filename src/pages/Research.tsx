import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus, FlaskConical, BookOpen, Award, DollarSign } from "lucide-react";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const Research = () => {
  const projects = [
    {
      id: "RES001",
      title: "AI in Healthcare",
      lead: "Dr. Smith",
      department: "Computer Science",
      funding: "$250K",
      status: "Active",
      publications: 5,
    },
    {
      id: "RES002",
      title: "Renewable Energy Systems",
      lead: "Prof. Johnson",
      department: "Physics",
      funding: "$180K",
      status: "Active",
      publications: 3,
    },
    {
      id: "RES003",
      title: "Quantum Computing",
      lead: "Dr. Williams",
      department: "Mathematics",
      funding: "$300K",
      status: "Active",
      publications: 7,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Research Management
          </h1>
          <p className="text-muted-foreground">
            Track research projects and publications
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Projects
            </CardTitle>
            <FlaskConical className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">Ongoing research</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Publications</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-success">↑ 15% this year</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Patents</CardTitle>
            <Award className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Filed this year</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Research Funding
            </CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4.5M</div>
            <p className="text-xs text-muted-foreground">Total grants</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Research Projects</CardTitle>
          <CardDescription>
            Active research initiatives and grants
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Lead Researcher</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Funding</TableHead>
                  <TableHead>Publications</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.id}</TableCell>
                    <TableCell className="font-semibold">
                      {project.title}
                    </TableCell>
                    <TableCell>{project.lead}</TableCell>
                    <TableCell>{project.department}</TableCell>
                    <TableCell className="font-semibold text-success">
                      {project.funding}
                    </TableCell>
                    <TableCell>{project.publications}</TableCell>
                    <TableCell>
                      <Badge variant="default">{project.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Research;
