import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus, Award, Users, Briefcase, DollarSign } from "lucide-react";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const Alumni = () => {
  const alumni = [
    {
      id: "ALU001",
      name: "David Wilson",
      year: "2020",
      course: "Computer Science",
      company: "Google",
      position: "Software Engineer",
    },
    {
      id: "ALU002",
      name: "Lisa Anderson",
      year: "2019",
      course: "Business",
      company: "Microsoft",
      position: "Product Manager",
    },
    {
      id: "ALU003",
      name: "Robert Taylor",
      year: "2021",
      course: "Engineering",
      company: "Tesla",
      position: "Design Engineer",
    },
    {
      id: "ALU004",
      name: "Maria Garcia",
      year: "2018",
      course: "Medicine",
      company: "Johns Hopkins",
      position: "Doctor",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Alumni Network</h1>
          <p className="text-muted-foreground">
            Connect with graduates and track achievements
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Alumni
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Alumni</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,458</div>
            <p className="text-xs text-muted-foreground">Graduated students</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Members
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,456</div>
            <p className="text-xs text-success">68% engagement</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Employed</CardTitle>
            <Briefcase className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">Employment rate</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Donations</CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.2M</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Alumni Directory</CardTitle>
          <CardDescription>
            Notable alumni and their achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Alumni ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Graduation Year</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alumni.map((alum) => (
                  <TableRow key={alum.id}>
                    <TableCell className="font-medium">{alum.id}</TableCell>
                    <TableCell>{alum.name}</TableCell>
                    <TableCell>{alum.year}</TableCell>
                    <TableCell>{alum.course}</TableCell>
                    <TableCell>{alum.company}</TableCell>
                    <TableCell>{alum.position}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        View Profile
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

export default Alumni;
