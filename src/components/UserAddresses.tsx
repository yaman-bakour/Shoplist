"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import Link from "next/link";
import { UserInfoType } from "~/types";

interface Props {
  userInfo: UserInfoType | undefined;
}

const UserAddresses = ({ userInfo }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="w-full grid-cols-2 gap-10 p-10 md:grid">
        {userInfo?.Addresses?.map((address) => (
          <Card className="mb-10 h-fit min-w-80">
            <CardContent>
              <CardHeader>
                <CardTitle>{address.address}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {`${address.country},${address.state},${address.state}`}
                <br />
                Phone number : {address.phonenumber}
              </CardContent>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link
        href={"address/new"}
        className="ml-8 w-fit rounded-md bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
      >
        Add Address
      </Link>
    </div>
  );
};

export default UserAddresses;
