import { FormFrame } from "@/components/layout/Contact/FormFrame.tsx";
import { Metadata, NextPage } from "next";
export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Paulo Isidoro Koscak.",
};
const Contact: NextPage = () => {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-white py-16 bg-grid-small-black/[0.2] dark:bg-slate-950 dark:bg-grid-small-white/[0.2] md:py-24">
      <FormFrame />
    </main>
  );
};

export default Contact;
