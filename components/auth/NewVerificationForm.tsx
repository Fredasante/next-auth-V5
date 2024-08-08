"use client";

import { useSearchParams } from "next/navigation";
import { CardWrapper } from "./CardWrapper";
import { BeatLoader } from "react-spinners";
import { useCallback, useEffect } from "react";

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {}, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
      showSocial={false}
    >
      <div className="flex items-center w-full justify-center">
        <BeatLoader />
      </div>
    </CardWrapper>
  );
};
