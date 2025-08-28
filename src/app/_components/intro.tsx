import { CMS_NAME } from "@/lib/constants";
import "@fontsource/satisfy"; // Defaults to weight 400

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-left md:justify-between mt-16 mb-2 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 font-satisfy">
        CréationDiane
      </h1>
    </section>
  );
}
