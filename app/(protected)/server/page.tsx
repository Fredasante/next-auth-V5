import { UserInfo } from "@/components/auth/UserInfo";

import { useCurrentUser } from "@/lib/auth";

const ServerPage = async () => {
  const user = await useCurrentUser();
  return <UserInfo label="Server Page" user={user} />;
};

export default ServerPage;
