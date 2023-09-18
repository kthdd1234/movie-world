import { IGetFetch, IPostFetch } from '@/types/interface';

const getFetch = async ({ url, query, token }: IGetFetch) => {
  const resp = await fetch(`${url}?${new URLSearchParams(query)}`, {
    method: 'GET',
    cache: 'force-cache',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (resp.status !== 200) return null;
  return resp.json();
};

const postFetch = async ({ url, query, body }: IPostFetch) => {
  const resp = await fetch(`${url}?${new URLSearchParams(query)}`, {
    method: 'POST',
    cache: 'no-store',
    body: body,
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (resp.status !== 200) return null;
  return resp.json();
};

export { getFetch, postFetch };
