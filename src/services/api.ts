import axios from "axios";

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  headers: {
    "Content-Type": "application/json",
  },
});

interface DataValues {
  cep: string;
}

const getAddressByCep = async (data: DataValues) => {
  return await api.get(`${data.cep}/json`);
};

export { getAddressByCep };