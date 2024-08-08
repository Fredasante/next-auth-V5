"use client";

import { useSearchParams } from "next/navigation";
import { CardWrapper } from "./CardWrapper";
import { BeatLoader } from "react-spinners";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormSuccess } from "../FormSuccess";
import { FormError } from "../FormError";

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Token not found");
      return;
    }

    newVerification(token)
      .then((data) => {
        if (data.error) {
          setError(data.error);
          return;
        }
        setSuccess(data.success);
      })
      .catch(() => {
        setError("An error occurred");
      });
  }, [token, success, error]);

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
        {!error && !success && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
