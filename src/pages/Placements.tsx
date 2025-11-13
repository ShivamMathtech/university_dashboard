import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus, Briefcase, Building, TrendingUp, Users } from "lucide-react";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const Placements = () => {
  const opportunities = [
    {
      id: "JOB001",
      company: "Google",
      position: "Software Engineer",
      package: "$120K",
      applicants: 45,
      deadline: "Dec 20, 2025",
    },
    {
      id: "JOB002",
      company: "Microsoft",
      position: "Data Analyst",
      package: "$95K",
      applicants: 38,
      deadline: "Dec 22, 2025",
    },
    {
      id: "JOB003",
      company: "Amazon",
      position: "Cloud Engineer",
      package: "$110K",
      applicants: 52,
      deadline: "Dec 25, 2025",
    },
    {
      id: "JOB004",
      company: "Meta",
      position: "Product Manager",
      package: "$130K",
      applicants: 28,
      deadline: "Dec 18, 2025",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Placement & Career Services
          </h1>
          <p className="text-muted-foreground">
            Manage job opportunities and student placements
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Post Job
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Placement Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-success">↑ 5% from last year</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Companies</CardTitle>
            <Building className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Recruiting partners</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Openings</CardTitle>
            <Briefcase className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-muted-foreground">Active positions</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Package</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$98K</div>
            <p className="text-xs text-muted-foreground">Annual salary</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Current Job Opportunities</CardTitle>
          <CardDescription>
            Available positions from recruiting companies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job ID</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Package</TableHead>
                  <TableHead>Applicants</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {opportunities.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.id}</TableCell>
                    <TableCell className="font-semibold">
                      {job.company}
                    </TableCell>
                    <TableCell>{job.position}</TableCell>
                    <TableCell className="font-semibold text-success">
                      {job.package}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{job.applicants} students</Badge>
                    </TableCell>
                    <TableCell>{job.deadline}</TableCell>
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

export default Placements;
