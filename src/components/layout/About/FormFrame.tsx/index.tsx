"use client";
import React from "react";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "@/components/UI/Label";
import { Input } from "@/components/UI/Input";
import { cn } from "@/lib/utils";
import { SelectOptions } from "@/components/UI/Input/Select";

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
    <section className="mx-auto w-full max-w-xs rounded-2xl  bg-white p-4 shadow-input dark:bg-black xs:max-w-sm md:max-w-lg md:p-8">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
        Contato
      </h2>
      <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
        Paulo Isidoro Koscak é escritor, roteirista e comediante stand-up
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="firstname">Seu nome</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
        </div>
        <div className={`flex gap-5`}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Seu email </Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="lastname">Confirme seu email</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="lastname">Quero saber mais sobre: </Label>
          <SelectOptions>
            {options.map((option: { label: string; value: string }) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectOptions>
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Comentário ou Mensagem</Label>
          <Input
            id="message"
            placeholder="Deixe sua mensagem aqui"
            type="text"
          />
        </LabelInputContainer>
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Enviar
          <BottomGradient />
        </button>
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
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
