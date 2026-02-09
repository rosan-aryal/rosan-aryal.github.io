"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        className: "retro-toast",
      }}
      style={
        {
          "--normal-bg": "var(--surface)",
          "--normal-text": "var(--text-primary)",
          "--normal-border": "var(--border-color)",
          "--success-bg": "var(--surface)",
          "--success-text": "#00ff00",
          "--success-border": "#00ff00",
          "--error-bg": "var(--surface)",
          "--error-text": "var(--accent-retro)",
          "--error-border": "var(--accent-retro)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
