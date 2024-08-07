import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./Header";
import { BackButton } from "./BackButton";

export const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops! Something went wrong" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login " />
      </CardFooter>
    </Card>
  );
};
