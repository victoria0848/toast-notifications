import { useState, useCallback } from "react";

export type ToastType = "success" | "warning" | "error";

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

let id = 0;

interface ShowToastOptions {
  message: string;
  type?: ToastType;
  duration?: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(({ message, type = "success", duration = 3000 }: ShowToastOptions) => {
    const newToast: Toast = { id: id++, message, type };
    setToasts(prev => [...prev, newToast]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id));
    }, duration);
  }, []);

  return { toasts, showToast };
};