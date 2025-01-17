import NavUser from "@/components/nav-user";
import { NavLink } from "react-router";

import {
  Inbox,
  House,
  SendHorizonal,
  ChartNoAxesColumn,
  RotateCcw,
  User,
  Sparkles,
  PencilRuler,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import ConnectlyLogo from "@/components/icons/connectly-logo";

const navMain = [
  {
    title: "Home",
    url: "/",
    icon: House,
    isActive: true,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
    isActive: true,
  },
  {
    title: "Campaigns",
    url: "/campaigns",
    icon: SendHorizonal,
    isActive: false,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartNoAxesColumn,
    isActive: false,
  },
  {
    title: "Automations",
    url: "/automations",
    icon: RotateCcw,
    isActive: false,
  },
  {
    title: "Audiences",
    url: "/audiences",
    icon: User,
    isActive: false,
  },
  {
    title: "Sofia AI",
    url: "/sofia-ai",
    icon: Sparkles,
    isActive: false,
  },
  {
    title: "Sign up units",
    url: "/sign-up-units",
    icon: PencilRuler,
    isActive: false,
  },
];

const ToolSidebar = () => {
  return (
    <Sidebar
      collapsible="none"
      className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <NavLink to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <ConnectlyLogo className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Connectly Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              {navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={{
                      children: item.title,
                      hidden: false,
                    }}
                    className="px-2.5 md:px-2"
                    asChild
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-0">
        <NavUser
          user={{
            name: "shadcn",
            email: "m@example.com",
            avatar: "/avatars/eugenguriev.jpeg",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
};

ToolSidebar.displayName = "ToolSidebar";

export default ToolSidebar;
