"use client";
import React from "react";

import { Label } from "@/components/UI/Label";
import { Input } from "@/components/UI/Input";
import { cn } from "@/lib/utils";
import { SelectOptions } from "@/components/UI/Input/Select";
import Link from "next/link";

export function FormFrame() {
  const options = [
    {
      label: "Livro O Homem que odiava a verdade",
      value: "book",
    },
    {
      label: "Standup comedy",
      value: "standup",
    },
    {
      label: "Canal Caramelo Total",
      value: "caramelo",
    },
  ];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <section className=" h-max w-full max-w-[350px] rounded-2xl bg-white p-4 shadow-input dark:bg-[#111827] xs:max-w-sm md:max-w-lg md:p-8">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
        Contato
      </h2>
      <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
        Paulo Isidoro Koscak é escritor, roteirista e comediante stand-up.{" "}
        <br className={` md:hidden`} /> Deixe um recado para ele!
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="firstname">Seu nome</Label>
          <Input id="firstname" placeholder="Tyler" type="text" />
        </LabelInputContainer>
        <div className={`flex gap-5`}>
          <LabelInputContainer className="mb-6">
            <Label htmlFor="email">Seu email </Label>
            <Input id="email" placeholder="exemplo@exemplo.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-6">
            <Label htmlFor="lastname">Confirme seu email</Label>
            <Input
              id="lastname"
              placeholder="exemplo@exemplo.com"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="lastname">Quero saber mais sobre: </Label>
          <SelectOptions onChange={e => console.log(e.target.value)}>
            {options.map((option: { label: string; value: string }) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectOptions>
        </LabelInputContainer>

        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Comentário ou Mensagem</Label>
          <Input
            id="message"
            placeholder="Deixe sua mensagem aqui"
            type="text"
          />
        </LabelInputContainer>
        <button
          className="main_btn_outlined !w-full !bg-transparent"
          type="submit"
        >
          Enviar
          <BottomGradient />
        </button>
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <nav className={`flex w-full justify-between`}>
          <Link
            href={"/"}
            className={`text-main_yellow-400 underline hover:text-main_yellow-400/80`}
          >
            {"<"}Voltar para página inicial
          </Link>
          <Link
            href={"/about"}
            className={`text-main_yellow-400 underline hover:text-main_yellow-400/80`}
          >
            Conhecer o Autor{">"}
          </Link>
        </nav>
      </form>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
