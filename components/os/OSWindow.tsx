"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import OSSnapManager from "@/components/os/OSSnapManager";
import { useWindowResize } from "@/components/os/hooks/useWindowResize";
import { useMissionControl } from "@/components/os/OSMissionControlContext";

export default function OSWindow({
  id,
  title,
  children,
  defaultOpen = true,
  onClose,
}: {
  id: number;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [pos, setPos] = useState({ x: 200, y: 120 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const { size, startResize, stopResize, handleResize } = useWindowResize();
  const { registerWindow, unregisterWindow } = useMissionControl();

  useEffect(() => {
    registerWindow({ id, title, content: children });
    return () => unregisterWindow(id);
  }, []);

  function startDrag(e: React.MouseEvent) {
    setDragging(true);
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  }

  function stopDrag() {
    setDragging(false);
  }

  function applySnap(newPos: any, newSize: any) {
    setPos(newPos);
    size.width = newSize.width;
    size.height = newSize.height;
  }

  useEffect(() => {
    function move(e: MouseEvent) {
      if (dragging) {
        setPos({
          x: e.clientX - offset.current.x,
          y: e.clientY - offset.current.y,
        });
      }
      handleResize(e);
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", () => {
      stopDrag();
      stopResize();
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [dragging]);

  if (!open) return null;

  return (
    <>
      {dragging && <OSSnapManager onSnap={applySnap} />}

      <motion.div
        className="fixed bg-white/5 border border-white/10 rounded-xl shadow-xl backdrop-blur-xl"
        style={{
          top: pos.y,
          left: pos.x,
          width: size.width,
          height: size.height,
          zIndex: 9999,
        }}
        animate={{ scale: dragging ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          className="flex items-center justify-between px-4 py-2 bg-white/10 cursor-move rounded-t-xl"
          onMouseDown={startDrag}
        >
          <span className="font-medium opacity-90">{title}</span>

          <button
            onClick={() => {
              setOpen(false);
              onClose();
            }}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition"
          />
        </div>

        <div className="p-6 h-[calc(100%-48px)] overflow-auto">{children}</div>

        {/* Resize handles */}
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
          onMouseDown={(e) => startResize(e, "bottom-right")}
        />
        <div
          className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize"
          onMouseDown={(e) => startResize(e, "bottom-left")}
        />
        <div
          className="absolute top-0 right-0 w-4 h-4 cursor-ne-resize"
          onMouseDown={(e) => startResize(e, "top-right")}
        />
        <div
          className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize"
          onMouseDown={(e) => startResize(e, "top-left")}
        />

        <div
          className="absolute right-0 top-0 h-full w-2 cursor-e-resize"
          onMouseDown={(e) => startResize(e, "right")}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-2 cursor-s-resize"
          onMouseDown={(e) => startResize(e, "bottom")}
        />
      </motion.div>
    </>
  );
}
