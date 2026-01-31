import { toast } from "sonner";

export function SonnerPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-3xl font-bold">Sonner Toast Demo</h1>
      <p className="text-muted-foreground">
        Click the buttons below to test toast notifications
      </p>

      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={() => toast("Hello from Sonner 👋")}
          className="px-4 py-2 rounded bg-black text-white"
        >
          Default Toast
        </button>

        <button
          onClick={() => toast.success("Saved successfully!")}
          className="px-4 py-2 rounded bg-green-600 text-white"
        >
          Success
        </button>

        <button
          onClick={() => toast.error("Something went wrong")}
          className="px-4 py-2 rounded bg-red-600 text-white"
        >
          Error
        </button>

        <button
          onClick={() =>
            toast("Message sent", {
              description: "We’ll get back to you soon.",
            })
          }
          className="px-4 py-2 rounded bg-blue-600 text-white"
        >
          With Description
        </button>

        <button
          onClick={() =>
            toast.promise(
              new Promise((resolve) => setTimeout(resolve, 2000)),
              {
                loading: "Saving...",
                success: "Saved!",
                error: "Failed to save",
              }
            )
          }
          className="px-4 py-2 rounded bg-purple-600 text-white"
        >
          Promise Toast
        </button>
      </div>
    </div>
  );
}
