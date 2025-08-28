import { Spinner } from "@/components/ui/spinner-dependencies";

export default function DefaultLoadingScreen() {
  return (
    <section className="flex size-full min-h-screen items-center justify-center">
      <div className="bg-primary-foreground flex items-center gap-3 rounded-md border-2 p-3 text-xl">
        <Spinner size={"large"} /> Loading...
      </div>
    </section>
  );
}
