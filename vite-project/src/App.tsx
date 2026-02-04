import React from "react";
import { useToast } from "./components/toast/useToast";
import { ToastContainer } from "./components/toast/toastContainer";
import "./App.scss";

const App: React.FC = () => {
  const { toasts, showToast } = useToast();

  return (
    <div style={{ padding: 40 }}>
      <h1>Toast Notifikationer Demo (TypeScript)</h1>
      <button onClick={() => showToast({ message: "Succes!", type: "success" })}>
        Vis Success
      </button>
      <button onClick={() => showToast({ message: "Advarsel!", type: "warning" })}>
        Vis Advarsel
      </button>
      <button onClick={() => showToast({ message: "Fejl!", type: "error" })}>
        Vis Fejl
      </button>

      <ToastContainer toasts={toasts} position="top-right" />
    </div>
  );
};

export default App;
