import { headers } from "next/headers";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const heads = headers();
  const pathname = heads.get("x-path") || "";

  const navigation: {
    name: string;
    href: string;
    icon: string;
    current: boolean;
  }[] = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: "/home.svg",
      current: pathname.endsWith("/dashboard"),
    },
    {
      name: "Users",
      href: "/users",
      icon: "/users.svg",
      current: pathname.endsWith("/users"),
    },
    {
      name: "Teams",
      href: "/teams",
      icon: "/folder.svg",
      current: pathname.endsWith("/teams"),
    },
  ];

  return (
    <>
      <div>
        <Sidebar isMobile={false} navigation={navigation} />

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            />

            <Header navigation={navigation} />
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
