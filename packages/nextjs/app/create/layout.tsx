import * as React from "react";
import { Metadata } from "next";
import { COMPANY_NAME } from "../../../../configuration/company";
import { CREATE_TITLE, TITLE_BREAKER, CREATE_DESCRIPTION } from "../../../../configuration/seo";

export const metadata: Metadata = {
  title: `${CREATE_TITLE} ${TITLE_BREAKER} ${COMPANY_NAME}`,
  description: `${CREATE_DESCRIPTION}`,
};

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
