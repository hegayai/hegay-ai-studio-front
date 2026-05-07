"use client";

import React, { useEffect, useState } from "react";
import StartupAnimation from "./startup-animation";
import WelcomeScreen from "./welcome-screen";
import Shell from "./shell";
import { loadEnvironment } from "./environment-loader";

export default function Boot() {
  const [stage, setStage] = useState<"boot" | "welcome" | "shell">("boot");

  useEffect(() => {
    async function runBoot() {
      await new Promise((r) => setTimeout(r, 1500));
      setStage("welcome");

      await loadEnvironment();
      await new Promise((r) => setTimeout(r, 1500));
      setStage("shell");
    }

    runBoot();
  }, []);

  if (stage === "boot") return <StartupAnimation />;
  if (stage === "welcome") return <WelcomeScreen />;

  return <Shell />;
}
