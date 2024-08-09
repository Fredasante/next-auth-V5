"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    signOut();
  };

  return (
    <div>
      {JSON.stringify(user)}

      <form>
        <Button onClick={onClick} type="submit">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
