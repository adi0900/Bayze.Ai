"use client";

import React from "react";

export default function ClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  // Client-specific logic can be added here

  return <>{children}</>;
}
