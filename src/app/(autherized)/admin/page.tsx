import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "~/server/auth";

export default async function Page() {
  const session = await auth();

  if (!session) redirect("/signin");
  if (session.user.role !== "Admin") redirect("products");
}
