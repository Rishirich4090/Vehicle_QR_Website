import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div>
      {toasts.map(function (toast) {
        return (
          <div key={toast.id} className="fixed top-4 right-4 bg-white border rounded p-4 shadow-lg">
            {toast.title && <div className="font-semibold">{toast.title}</div>}
            {toast.description && <div>{toast.description}</div>}
          </div>
        );
      })}
    </div>
  );
}

