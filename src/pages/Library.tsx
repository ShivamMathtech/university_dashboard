import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Plus,
  Library as LibraryIcon,
  BookOpen,
  Users,
  TrendingUp,
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const Library = () => {
  const books = [
    {
      id: "BK001",
      title: "Introduction to Algorithms",
      author: "Thomas Cormen",
      isbn: "978-0262033848",
      status: "Available",
      copies: 5,
    },
    {
      id: "BK002",
      title: "Clean Code",
      author: "Robert Martin",
      isbn: "978-0132350884",
      status: "Issued",
      copies: 2,
    },
    {
      id: "BK003",
      title: "Design Patterns",
      author: "Gang of Four",
      isbn: "978-0201633610",
      status: "Available",
      copies: 3,
    },
    {
      id: "BK004",
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      isbn: "978-0135957059",
      status: "Available",
      copies: 4,
    },
  ];

  const recentIssues = [
    {
      student: "John Smith",
      book: "Introduction to Algorithms",
      issued: "Dec 10, 2025",
      due: "Dec 24, 2025",
    },
    {
      student: "Sarah Johnson",
      book: "Clean Code",
      issued: "Dec 9, 2025",
      due: "Dec 23, 2025",
    },
    {
      student: "Michael Brown",
      book: "Design Patterns",
      issued: "Dec 8, 2025",
      due: "Dec 22, 2025",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Library Management
          </h1>
          <p className="text-muted-foreground">
            Manage books, resources, and circulation
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Book
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Books</CardTitle>
            <LibraryIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,842</div>
            <p className="text-xs text-muted-foreground">In collection</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Books Issued</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">Currently borrowed</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Members
            </CardTitle>
            <Users className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,458</div>
            <p className="text-xs text-muted-foreground">Library cardholders</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,456</div>
            <p className="text-xs text-success">↑ 12% circulation</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Book Catalog</CardTitle>
          <CardDescription>Available books in the library</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Book ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>ISBN</TableHead>
                  <TableHead>Copies</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {books.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell className="font-medium">{book.id}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.isbn}</TableCell>
                    <TableCell>{book.copies}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          book.status === "Available" ? "default" : "secondary"
                        }
                      >
                        {book.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        Issue Book
                      </Button>
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
          <CardTitle>Recent Issues</CardTitle>
          <CardDescription>Latest book borrowings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Book</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentIssues.map((issue, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">
                      {issue.student}
                    </TableCell>
                    <TableCell>{issue.book}</TableCell>
                    <TableCell>{issue.issued}</TableCell>
                    <TableCell>{issue.due}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        Return
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

export default Library;
