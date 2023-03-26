import useSWR from "swr";
import { workspaceFetcher } from "@/utils/fetcher.util";

export const useApi = <T>(url: string | null, status?: boolean) => {
  const { data, error } = useSWR<T>(url, (url) => workspaceFetcher(url), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return {
    data: data,
    isLoading: url ? !error && !(typeof data !== "undefined") : false,
    hasError: error,
  };
};
