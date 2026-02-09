"use client";

import { useEffect, useState, useCallback } from "react";

type ToastType = "success" | "error";

interface Toast {
  id: number;
  type: ToastType;
  title: string;
  description?: string;
  exiting?: boolean;
}

let toastId = 0;
const listeners = new Set<(toast: Toast) => void>();

function emit(type: ToastType, title: string, description?: string) {
  const t: Toast = { id: ++toastId, type, title, description };
  listeners.forEach((fn) => fn(t));
}

export const toast = {
  success: (title: string, opts?: { description?: string }) =>
    emit("success", title, opts?.description),
  error: (title: string, opts?: { description?: string }) =>
    emit("error", title, opts?.description),
};

export function RetroToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handler = (t: Toast) => {
      setToasts((prev) => [...prev, t]);
    };
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
    };
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300);
  }, []);

  useEffect(() => {
    if (toasts.length === 0) return;
    const latest = toasts[toasts.length - 1];
    if (latest.exiting) return;
    const timer = setTimeout(() => dismiss(latest.id), 8000);
    return () => clearTimeout(timer);
  }, [toasts, dismiss]);

  return (
    <div className="retro-toast-container">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`retro-toast retro-toast-${t.type}${t.exiting ? " retro-toast-exit" : ""}`}
        >
          <div className="retro-toast-header">
            <span className="retro-toast-indicator">
              {t.type === "success" ? "[OK]" : "[ERR]"}
            </span>
            <button
              className="retro-toast-close"
              onClick={() => dismiss(t.id)}
              aria-label="Close"
            >
              <span className="close-icon"></span>
            </button>
          </div>
          <p className="retro-toast-title">{t.title}</p>
          {t.description && (
            <p className="retro-toast-desc">{t.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
