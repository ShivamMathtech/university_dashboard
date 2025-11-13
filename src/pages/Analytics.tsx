import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  BarChart,
  LineChart,
  TrendingUp,
  Users,
  DollarSign,
  BookOpen,
} from "lucide-react";

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Analytics & Reports
        </h1>
        <p className="text-muted-foreground">
          Comprehensive data insights and trends
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Student Growth
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.5%</div>
            <p className="text-xs text-success">Enrollment increase</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Revenue Growth
            </CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+18.3%</div>
            <p className="text-xs text-success">YoY increase</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Course Completion
            </CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">Success rate</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Performance Index
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7/10</div>
            <p className="text-xs text-success">↑ 0.5 points</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Enrollment Trends</CardTitle>
            <CardDescription>
              Student enrollment over the past year
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center bg-muted/30 rounded-lg">
            <div className="text-center">
              <LineChart className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Chart visualization would appear here
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Revenue Analysis</CardTitle>
            <CardDescription>Financial performance by month</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center bg-muted/30 rounded-lg">
            <div className="text-center">
              <BarChart className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Chart visualization would appear here
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Department Performance</CardTitle>
          <CardDescription>
            Comparative analysis across departments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Computer Science",
                students: 450,
                satisfaction: 92,
                revenue: "$850K",
              },
              {
                name: "Mathematics",
                students: 320,
                satisfaction: 88,
                revenue: "$620K",
              },
              {
                name: "Physics",
                students: 280,
                satisfaction: 85,
                revenue: "$540K",
              },
              {
                name: "Chemistry",
                students: 310,
                satisfaction: 90,
                revenue: "$590K",
              },
            ].map((dept) => (
              <div
                key={dept.name}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-semibold">{dept.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {dept.students} students
                  </p>
                </div>
                <div className="flex gap-8">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Satisfaction
                    </p>
                    <p className="text-lg font-semibold text-success">
                      {dept.satisfaction}%
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Revenue</p>
                    <p className="text-lg font-semibold">{dept.revenue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
