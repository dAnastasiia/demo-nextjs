const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;
const BASE_URL = `https://${PROJECT_TOKEN}.mockapi.io/api/v1/`;

export default async <T>(url: string) => {
  const res = await fetch(BASE_URL + url);

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};
