"use client";

import { RoleGate } from "@/components/auth/RoleGate";
import { FormSuccess } from "@/components/FormSuccess";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";

const AdminPage = () => {
  const onApiRouteClick = async () => {
    const res = await fetch("/api/admin");
    console.log(res);
  };

  return (
    <Card className="lg:w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to view this" />
        </RoleGate>

        <div className="flex flex-row justify-between items-center rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">ADMIN only API route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>

        <div className="flex flex-row justify-between items-center rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">ADMIN only server action</p>
          <Button>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
