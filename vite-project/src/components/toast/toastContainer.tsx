import React from "react";
import styles from "./Toast.module.scss";
import type { Toast, ToastType } from "./useToast";

interface ToastContainerProps {
  toasts: Toast[];
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, position = "top-right" }) => {
  return (
    <div className={`${styles.toastContainer} ${styles[position]}`}>
      {toasts.map(toast => (
        <div key={toast.id} className={`${styles.toast} ${styles[toast.type as ToastType]}`}>
          {toast.message}
        </div>
      ))}
    </div>
  );
};