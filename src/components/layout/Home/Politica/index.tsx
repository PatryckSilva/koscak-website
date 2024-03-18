import Link from "next/link";

export const PolitcaText = () => {
  return (
    <>
      <Link
        href={"/"}
        className="cursor-pointer p-10 text-main_yellow-400 transition-all hover:text-yellow-400/50 hover:underline"
      >
        Política de Privacidade
      </Link>
    </>
  );
};
