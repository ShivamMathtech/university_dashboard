import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus, FileText, Calendar, CheckCircle, Clock } from "lucide-react";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const Examinations = () => {
  const exams = [
    {
      id: "EXAM001",
      course: "Computer Science",
      subject: "Data Structures",
      date: "Dec 15, 2025",
      time: "10:00 AM - 1:00 PM",
      room: "Hall A",
      students: 45,
      status: "Scheduled",
    },
    {
      id: "EXAM002",
      course: "Mathematics",
      subject: "Advanced Calculus",
      date: "Dec 16, 2025",
      time: "2:00 PM - 5:00 PM",
      room: "Hall B",
      students: 38,
      status: "Scheduled",
    },
    {
      id: "EXAM003",
      course: "Physics",
      subject: "Quantum Mechanics",
      date: "Dec 18, 2025",
      time: "9:00 AM - 12:00 PM",
      room: "Hall C",
      students: 25,
      status: "Scheduled",
    },
  ];

  const results = [
    {
      course: "Introduction to Programming",
      average: "85%",
      passed: 42,
      failed: 3,
      total: 45,
    },
    {
      course: "Linear Algebra",
      average: "78%",
      passed: 35,
      failed: 3,
      total: 38,
    },
    {
      course: "Thermodynamics",
      average: "82%",
      passed: 23,
      failed: 2,
      total: 25,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Examinations</h1>
          <p className="text-muted-foreground">
            Manage exams, schedules, and results
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            View Timetable
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            Schedule Exam
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Exams
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Next 2 weeks</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-success">↑ 4% from last year</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Score</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-muted-foreground">Overall average</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Upcoming Examinations</CardTitle>
          <CardDescription>Scheduled exams for this semester</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Exam ID</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Room</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exams.map((exam) => (
                  <TableRow key={exam.id}>
                    <TableCell className="font-medium">{exam.id}</TableCell>
                    <TableCell>{exam.course}</TableCell>
                    <TableCell>{exam.subject}</TableCell>
                    <TableCell>{exam.date}</TableCell>
                    <TableCell>{exam.time}</TableCell>
                    <TableCell>{exam.room}</TableCell>
                    <TableCell>{exam.students}</TableCell>
                    <TableCell>
                      <Badge variant="default">{exam.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Results</CardTitle>
          <CardDescription>Latest examination results summary</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Average Score</TableHead>
                  <TableHead>Passed</TableHead>
                  <TableHead>Failed</TableHead>
                  <TableHead>Total Students</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">
                      {result.course}
                    </TableCell>
                    <TableCell>{result.average}</TableCell>
                    <TableCell>
                      <span className="text-success">{result.passed}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-destructive">{result.failed}</span>
                    </TableCell>
                    <TableCell>{result.total}</TableCell>
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

export default Examinations;
