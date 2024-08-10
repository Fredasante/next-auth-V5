"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { FormError } from "../FormError";

interface RoleGateProps {
  allowedRole: UserRole;
  children: React.ReactNode;
}

export const RoleGate = ({ allowedRole, children }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return <FormError message="You are not authorized to view this page." />;
  }

  return <>{children}</>;
};
