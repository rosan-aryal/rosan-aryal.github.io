"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface WindowFrameProps {
  title: string;
  darkHeader?: boolean;
  children: React.ReactNode;
  dialogContent?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function WindowFrame({
  title,
  darkHeader = false,
  children,
  dialogContent,
  className = "",
  wrapperClassName = "window-frame",
  open: controlledOpen,
  onOpenChange,
}: WindowFrameProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled
    ? (v: boolean) => onOpenChange?.(v)
    : setInternalOpen;

  const headerStyle = darkHeader
    ? { background: "#333", color: "#fff" }
    : {};

  const renderControls = (isDialog: boolean) => (
    <div className="window-controls">
      <button
        className={`window-btn${!isDialog ? " window-btn-disabled" : ""}`}
        aria-label="Minimize"
        onClick={(e) => {
          e.stopPropagation();
          if (isDialog) setOpen(false);
        }}
      >
        <span className="minimize-icon"></span>
      </button>
      <button
        className={`window-btn${isDialog ? " window-btn-disabled" : ""}`}
        aria-label="Maximize"
        onClick={(e) => {
          e.stopPropagation();
          if (!isDialog) setOpen(true);
        }}
      >
        <span className="maximize-icon"></span>
      </button>
      <button
        className="window-btn window-close"
        aria-label="Close"
        onClick={(e) => {
          e.stopPropagation();
          if (isDialog) setOpen(false);
        }}
      >
        <span className="close-icon"></span>
      </button>
    </div>
  );

  return (
    <>
      <div className={`${wrapperClassName} ${className}`}>
        <div className="window-header" style={headerStyle}>
          <span>{title}</span>
          {renderControls(false)}
        </div>
        {children}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="retro-dialog" showCloseButton={false}>
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <div className="retro-dialog-header" style={headerStyle}>
            <span>{title}</span>
            {renderControls(true)}
          </div>
          <ScrollArea className="retro-dialog-scroll">
            <div className="retro-dialog-body">
              {dialogContent ?? children}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
