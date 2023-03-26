import { CODESPHERE_BACKEND, TEAM_ID } from "@/utils/env.util";

export async function workspaceFetcher<T = any>(
  url: RequestInfo,
  body: Record<string, any> = {}
): Promise<T> {
  const response = await fetch(`https://${CODESPHERE_BACKEND}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...body,
      teamId: TEAM_ID,
    }),
  });

  if (response.ok) {
    if (response.headers.get("Content-Type")?.includes("application/json"))
      return response.json();

    return response.text() as T;
  }

  const error = await response.text();

  throw {
    url,
    message: error,
    status: response.status,
    statusText: response.statusText,
  };
}
