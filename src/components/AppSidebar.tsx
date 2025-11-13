import {
  Home,
  Users,
  BookOpen,
  FileText,
  DollarSign,
  UserCheck,
  Library,
  Building,
  Bus,
  GraduationCap,
  Package,
  Award,
  Briefcase,
  FlaskConical,
  BarChart,
  Bell,
  ChevronDown,
} from "lucide-react";
import { NavLink } from "../components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "../components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Students", url: "/students", icon: Users },
  { title: "Admissions", url: "/admissions", icon: UserCheck },
  { title: "Academics", url: "/academics", icon: BookOpen },
  { title: "Examinations", url: "/examinations", icon: FileText },
  { title: "Finance", url: "/finance", icon: DollarSign },
  { title: "Human Resources", url: "/hr", icon: Briefcase },
  { title: "Library", url: "/library", icon: Library },
  { title: "Hostel", url: "/hostel", icon: Building },
  { title: "Transport", url: "/transport", icon: Bus },
  { title: "Learning (LMS)", url: "/lms", icon: GraduationCap },
  { title: "Inventory", url: "/inventory", icon: Package },
  { title: "Alumni", url: "/alumni", icon: Award },
  { title: "Placements", url: "/placements", icon: Briefcase },
  { title: "Research", url: "/research", icon: FlaskConical },
  { title: "Analytics", url: "/analytics", icon: BarChart },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          {open && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-sidebar-foreground">
                University ERP
              </span>
              <span className="text-xs text-sidebar-foreground/60">
                Management System
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-2"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
