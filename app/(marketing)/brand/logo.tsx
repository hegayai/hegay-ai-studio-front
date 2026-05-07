"use client";

import React from "react";
import Image from "next/image";

export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <Image
      src="/logo.svg"
      alt="Hegay Logo"
      width={size}
      height={size}
      priority
    />
  );
}
