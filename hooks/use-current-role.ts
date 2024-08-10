import { useSession } from "next-auth/react";

export const getCurrentRole = () => {
  const session = useSession();
  return session.data?.user?.role;
};
