import { redirect } from "next/navigation";
import AppSidebar from "~/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/Sidebar";
import { auth } from "~/server/auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/signin");
  return (
    <SidebarProvider>
      <main className="flex w-full">
        <AppSidebar />
        {children}
      </main>
    </SidebarProvider>
  );
}
