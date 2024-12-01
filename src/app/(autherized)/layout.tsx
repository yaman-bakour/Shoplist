import { redirect } from "next/navigation";
import Sidebar from "~/components/Sidebar";
import { auth } from "~/server/auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/signin");
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
