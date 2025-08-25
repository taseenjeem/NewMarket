import { Spinner } from "@/components/ui/spinner-dependencies";

export default function DefaultLoadingScreen() {
  return (
    <section className="flex size-full min-h-screen items-center justify-center gap-2">
      <Spinner /> Loading...
    </section>
  );
}
