import { FormFrame } from "@/components/layout/About/FormFrame.tsx";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-center gap-9 bg-white py-14 bg-grid-small-black/[0.2] dark:bg-slate-950 dark:bg-grid-small-white/[0.2]  md:py-24">
      <FormFrame />
    </main>
  );
};

export default About;
