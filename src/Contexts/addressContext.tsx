import { createContext, useState } from "react";

interface ResultContextProps {
  children: React.ReactNode;
}

const ResultContext = createContext(null);

const ResultsContextProvider = ({ children }: ResultContextProps) => {
  const [result, setResult] = useState({
    "cep": '',
    "logradouro": '',
    "complemento": '',
    "bairro": '',
    "localidade": '',
    "uf": '',
    "ibge": '',
    "gia": '',
    "ddd": '',
    "siafi": ''
  });

  return (
    <ResultContext.Provider
      value={{ result, setResult } as React.SetStateAction<any>}
    >
      {children}
    </ResultContext.Provider>
  );
};

export { ResultContext, ResultsContextProvider };