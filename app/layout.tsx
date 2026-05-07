import "./globals.css";
import type { Metadata } from "next";

import OSNavBar from "@/components/os/OSNavBar";
import OSTopbar from "@/components/os/OSTopbar";
import OSSidebar from "@/components/os/OSSidebar";

import OSCommandPalette from "@/components/os/OSCommandPalette";
import OSShortcutsPanel from "@/components/os/OSShortcutsPanel";
import OSWindowManager from "@/components/os/OSWindowManager";

import { OSNotificationProvider } from "@/components/os/OSNotificationContext";
import OSToast from "@/components/os/OSToast";
import OSBanner from "@/components/os/OSBanner";

import OSDock from "@/components/os/OSDock";

import { OSMissionControlProvider } from "@/components/os/OSMissionControlContext";
import OSMissionControl from "@/components/os/OSMissionControl";

import { OSSpacesProvider } from "@/components/os/OSSpacesContext";
import OSSpacesSwitcher from "@/components/os/OSSpacesSwitcher";
import OSSpacesHotkeys from "@/components/os/OSSpacesHotkeys";

import OSBootScreen from "@/components/os/OSBootScreen";

export const metadata: Metadata = {
  title: "Hegay OS Supreme",
  description: "Cinematic creative operating system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">

        <OSNotificationProvider>
          <OSSpacesProvider>
            <OSMissionControlProvider>

              {/* BOOT SCREEN */}
              <OSBootScreen />

              {/* NAVIGATION */}
              <OSNavBar />
              <OSTopbar />

              {/* OS SPACES */}
              <OSSpacesHotkeys />
              <OSSpacesSwitcher />

              {/* OS SHELL */}
              <div className="flex">
                <OSSidebar />
                <main className="flex-1">{children}</main>
              </div>

              {/* GLOBAL SYSTEMS */}
              <OSCommandPalette />
              <OSShortcutsPanel />
              <OSWindowManager />

              {/* NOTIFICATIONS */}
              <OSBanner />
              <OSToast />

              {/* DOCK */}
              <OSDock />

              {/* MISSION CONTROL */}
              <OSMissionControl />

            </OSMissionControlProvider>
          </OSSpacesProvider>
        </OSNotificationProvider>

      </body>
    </html>
  );
}
