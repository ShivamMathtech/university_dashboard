import { StatCard } from "../components/StatCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Users,
  GraduationCap,
  BookOpen,
  TrendingUp,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";

const Dashboard = () => {
  const recentActivities = [
    {
      id: 1,
      student: "John Smith",
      action: "Submitted Assignment",
      course: "Computer Science",
      time: "2 hours ago",
    },
    {
      id: 2,
      student: "Sarah Johnson",
      action: "Completed Exam",
      course: "Mathematics",
      time: "3 hours ago",
    },
    {
      id: 3,
      student: "Michael Brown",
      action: "Enrolled in Course",
      course: "Physics",
      time: "5 hours ago",
    },
    {
      id: 4,
      student: "Emily Davis",
      action: "Payment Received",
      course: "Chemistry",
      time: "1 day ago",
    },
  ];

  const upcomingEvents = [
    { id: 1, title: "Final Examinations", date: "Dec 15, 2025", type: "exam" },
    {
      id: 2,
      title: "Parent-Teacher Meeting",
      date: "Dec 20, 2025",
      type: "meeting",
    },
    {
      id: 3,
      title: "Winter Break Starts",
      date: "Dec 22, 2025",
      type: "holiday",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value="2,847"
          description="Active students enrolled"
          icon={Users}
          trend={{ value: "12% from last month", isPositive: true }}
        />
        <StatCard
          title="Faculty Members"
          value="156"
          description="Active teaching staff"
          icon={GraduationCap}
          trend={{ value: "3 new this month", isPositive: true }}
        />
        <StatCard
          title="Active Courses"
          value="89"
          description="Courses this semester"
          icon={BookOpen}
        />
        <StatCard
          title="Revenue This Month"
          value="$45,231"
          description="Fee collection"
          icon={TrendingUp}
          trend={{ value: "8% from last month", isPositive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 shadow-card">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>
              Latest student activities and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell className="font-medium">
                      {activity.student}
                    </TableCell>
                    <TableCell>{activity.action}</TableCell>
                    <TableCell>{activity.course}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {activity.time}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-3 shadow-card">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Important dates and schedules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <Calendar className="h-5 w-5 mt-0.5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.date}
                    </p>
                  </div>
                  <Badge
                    variant={event.type === "exam" ? "default" : "secondary"}
                  >
                    {event.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used operations</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button variant="outline" className="justify-start">
              <Users className="mr-2 h-4 w-4" />
              Add New Student
            </Button>
            <Button variant="outline" className="justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              Create Course
            </Button>
            <Button variant="outline" className="justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Exam
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription>Important notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
              <AlertCircle className="h-5 w-5 text-warning" />
              <div>
                <p className="text-sm font-medium">Fee Payment Reminder</p>
                <p className="text-xs text-muted-foreground">
                  45 students have pending payments
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <AlertCircle className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Exam Schedule Published</p>
                <p className="text-xs text-muted-foreground">
                  Final exam timetable is now available
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
