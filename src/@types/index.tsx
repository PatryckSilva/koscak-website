import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  email: z.string().min(1, "O e-mail é obrigatório").email("Email inválido"),
  message: z.string().min(1, "A mensagem é obrigatória"),
  subject: z.string().min(1, "O e-mail é obrigatório"),
});

export type TcontactFormSchema = z.infer<typeof contactFormSchema>;
