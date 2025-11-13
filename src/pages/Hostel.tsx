import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus, Building, Users, BedDouble, AlertCircle } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../components/ui/table";

const Hostel = () => {
  const hostels = [
    { id: "H001", name: "North Wing", type: "Boys", capacity: 150, occupied: 142, available: 8 },
    { id: "H002", name: "South Wing", type: "Girls", capacity: 120, occupied: 118, available: 2 },
    { id: "H003", name: "East Block", type: "Boys", capacity: 180, occupied: 165, available: 15 },
    { id: "H004", name: "West Block", type: "Girls", capacity: 100, occupied: 95, available: 5 },
  ];

  const allocations = [
    { room: "101", student: "John Smith", hostel: "North Wing", floor: "1st Floor", status: "Occupied" },
    { room: "205", student: "Sarah Johnson", hostel: "South Wing", floor: "2nd Floor", status: "Occupied" },
    { room: "312", student: "Michael Brown", hostel: "East Block", floor: "3rd Floor", status: "Occupied" },
    { room: "408", student: "Vacant", hostel: "West Block", floor: "4th Floor", status: "Available" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hostel Management</h1>
          <p className="text-muted-foreground">Manage accommodation and room allocation</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Allocate Room
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Capacity</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">550</div>
            <p className="text-xs text-muted-foreground">Total beds</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupied</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">520</div>
            <p className="text-xs text-success">95% occupancy</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Rooms</CardTitle>
            <BedDouble className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">30</div>
            <p className="text-xs text-muted-foreground">Vacant beds</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance</CardTitle>
            <AlertCircle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Pending requests</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Hostel Overview</CardTitle>
          <CardDescription>All hostel blocks and occupancy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hostel ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Occupied</TableHead>
                  <TableHead>Available</TableHead>
                  <TableHead className="text-right">Occupancy %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hostels.map((hostel) => (
                  <TableRow key={hostel.id}>
                    <TableCell className="font-medium">{hostel.id}</TableCell>
                    <TableCell>{hostel.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{hostel.type}</Badge>
                    </TableCell>
                    <TableCell>{hostel.capacity}</TableCell>
                    <TableCell>{hostel.occupied}</TableCell>
                    <TableCell className="text-success font-semibold">{hostel.available}</TableCell>
                    <TableCell className="text-right">
                      <span className="font-semibold">
                        {Math.round((hostel.occupied / hostel.capacity) * 100)}%
                      </span>
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
          <CardTitle>Room Allocations</CardTitle>
          <CardDescription>Current room assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Room No.</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Hostel</TableHead>
                  <TableHead>Floor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allocations.map((allocation, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{allocation.room}</TableCell>
                    <TableCell>{allocation.student}</TableCell>
                    <TableCell>{allocation.hostel}</TableCell>
                    <TableCell>{allocation.floor}</TableCell>
                    <TableCell>
                      <Badge variant={allocation.status === "Occupied" ? "default" : "secondary"}>
                        {allocation.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        {allocation.status === "Occupied" ? "Vacate" : "Allocate"}
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

export default Hostel;
