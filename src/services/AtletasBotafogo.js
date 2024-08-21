import { handleError, handleResponse } from "./ServiceUtils";

const url = "https://botafogo-atletas.mange.li";


const getAll = async () => {
  const response = await (fetch(`${url}/all?ano=2024`).catch(handleError));
  return await handleResponse(response);  
}


const getElenco = async (elenco = 'masculino') => {
  const response = await (fetch(`${url}/${elenco}?ano=2024`).catch(handleError));
  return await handleResponse(response);
}


const getAtleta = async (atleta) => {
  const response = await (fetch(`${url}/${atleta}`).catch(handleError));
  return await handleResponse(response);
}

export { getAll, getElenco, getAtleta };
