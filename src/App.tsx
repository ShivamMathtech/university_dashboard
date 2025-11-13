import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Index from "./pages/Index";
import Students from "./pages/Students";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Examinations from "./pages/Examinations";
import Finance from "./pages/Finance";
import HumanResources from "./pages/HumanResources";
import Library from "./pages/Library";
import Hostel from "./pages/Hostel";
import Transport from "./pages/Transport";
import LMS from "./pages/LMS";
import Inventory from "./pages/Inventory";
import Alumni from "./pages/Alumni";
import Placements from "./pages/Placements";
import Research from "./pages/Research";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/students"
            element={
              <DashboardLayout>
                <Students />
              </DashboardLayout>
            }
          />
          <Route
            path="/admissions"
            element={
              <DashboardLayout>
                <Admissions />
              </DashboardLayout>
            }
          />
          <Route
            path="/academics"
            element={
              <DashboardLayout>
                <Academics />
              </DashboardLayout>
            }
          />
          <Route
            path="/examinations"
            element={
              <DashboardLayout>
                <Examinations />
              </DashboardLayout>
            }
          />
          <Route
            path="/finance"
            element={
              <DashboardLayout>
                <Finance />
              </DashboardLayout>
            }
          />
          <Route
            path="/hr"
            element={
              <DashboardLayout>
                <HumanResources />
              </DashboardLayout>
            }
          />
          <Route
            path="/library"
            element={
              <DashboardLayout>
                <Library />
              </DashboardLayout>
            }
          />
          <Route
            path="/hostel"
            element={
              <DashboardLayout>
                <Hostel />
              </DashboardLayout>
            }
          />
          <Route
            path="/transport"
            element={
              <DashboardLayout>
                <Transport />
              </DashboardLayout>
            }
          />
          <Route
            path="/lms"
            element={
              <DashboardLayout>
                <LMS />
              </DashboardLayout>
            }
          />
          <Route
            path="/inventory"
            element={
              <DashboardLayout>
                <Inventory />
              </DashboardLayout>
            }
          />
          <Route
            path="/alumni"
            element={
              <DashboardLayout>
                <Alumni />
              </DashboardLayout>
            }
          />
          <Route
            path="/placements"
            element={
              <DashboardLayout>
                <Placements />
              </DashboardLayout>
            }
          />
          <Route
            path="/research"
            element={
              <DashboardLayout>
                <Research />
              </DashboardLayout>
            }
          />
          <Route
            path="/analytics"
            element={
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
