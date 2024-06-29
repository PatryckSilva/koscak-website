import { TcontactFormSchema } from "@/@types";
import { envs } from "@/utils/constants";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";

interface IpostContact {
  formContact: TcontactFormSchema;
  setShowingConfirmation: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  reset: UseFormReset<TcontactFormSchema>;
}

export async function postContact({
  formContact: { name, email, message, subject },
  setShowingConfirmation,
  setIsLoading,
  reset,
}: IpostContact) {
  const body = {
    nome: name,
    email,
    mensagem: message,
    assunto: subject,
  };

  const headers = {
    headers: {
      Authorization: `Bearer ${envs.sheetApiKey} `,
      "X-Spreadsheet-Id": `${envs.sheetId}`,
      "Content-Type": "application/json",
    },
  };

  try {
    setIsLoading(true);
    const response = await axios.post(
      `https://api.sheetson.com/v2/sheets/${envs.sheetName}`,
      body,
      headers,
    );

    if (response) {
      setShowingConfirmation(true);
    }
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  } finally {
    setIsLoading(false);
    reset();
  }
}
