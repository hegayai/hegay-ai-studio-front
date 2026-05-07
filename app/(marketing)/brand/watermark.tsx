"use client";

import React from "react";
import Image from "next/image";

export default function Watermark() {
  return (
    <div className="absolute bottom-4 right-4 opacity-40 pointer-events-none">
      <Image src="/watermark.svg" alt="Watermark" width={120} height={120} />
    </div>
  );
}
