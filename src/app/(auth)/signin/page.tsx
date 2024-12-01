import { redirect } from "next/navigation";
import Login from "~/components/Login";
import { auth } from "~/server/auth";

export default async function Page() {
  const session = await auth();
  if (session) redirect("/");
  return <Login session={session} />;
}
