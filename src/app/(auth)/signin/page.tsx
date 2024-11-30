import Login from "~/components/Login";
import { auth } from "~/server/auth";

export default async function Page() {
  const session = await auth();
  return <Login session={session} />;
}
