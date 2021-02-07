import useSWR from "swr";
import { getCards } from "../services";
import { API } from "../services/api";

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await API.get(url);
    return response.data
  })
  return { data, error }
}