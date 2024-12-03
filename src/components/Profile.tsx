"use client";
import React from "react";
import UserAddresses from "./UserAddresses";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { userInfo } from "os";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

const Profile = () => {
  const { data: session } = useSession();
  const { data: userInfo } = api.user.getUserInfo.useQuery({
    userId: session?.user.id ?? "",
  });
  return (
    <div className="mx-10">
      <Card className="h-fit">
        <div className="flex">
          <Avatar className="my-auto ml-8 h-16 w-16 rounded-full">
            <AvatarImage
              src={session?.user.image ?? ""}
              alt={session?.user.name ?? ""}
            />
            <AvatarFallback className="rounded-lg">
              {session?.user.name?.split(" ").map((n) => {
                return n.charAt(0).toUpperCase();
              })}
            </AvatarFallback>
          </Avatar>
          <CardContent>
            <CardHeader>
              <CardTitle>Full Name : {userInfo?.name}</CardTitle>
              <CardDescription>
                Email : {userInfo?.email}
                <br /> role : {userInfo?.UserRole}
              </CardDescription>
            </CardHeader>
          </CardContent>
        </div>
      </Card>
      <h1 className="mt-20 text-4xl">Addresses</h1>
      <UserAddresses userInfo={userInfo} />
    </div>
  );
};

export default Profile;
