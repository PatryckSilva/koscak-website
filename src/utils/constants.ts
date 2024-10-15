export const envs = {
  sheetApiKey: process.env.SHEET_API_KEY as string,
  sheetId: process.env.SHEET_ID as string,
  apiUrl: process.env.API_URL as string,
  sheetName: process.env.SHEET_NAME as string,
};

export const firstBookLinks = {};

export const bookLinks = {
  firstBook: {
    physical: "https://loja.uiclap.com/titulo/ua27631/",
    ebook:
      "https://www.amazon.com.br/Homem-Odiava-Verdade-Cidade-Amanhece-ebook/dp/B0BSZY1R9K/ref=mp_s_a_1_1",
    both: "https://clubedeautores.com.br/livro/o-homem-que-odiava-a-verdade",
  },
  secondBook: {
    ebook:
      "https://www.amazon.com.br/Cidade-Amanhece-em-Luto-ebook/dp/B0D4KZ3FWB/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=",
  },
};
