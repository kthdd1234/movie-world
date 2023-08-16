import { IGetFetch, IPostFetch } from '@/types/interface';

const getFetch = async ({ url, params }: IGetFetch) => {
  const resp = await fetch(url + new URLSearchParams(params), {
    method: 'GET',
    cache: 'force-cache',
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (resp.status !== 200) return null;
  return resp.json();
};

const postFetch = async ({ url, params, body }: IPostFetch) => {
  const resp = await fetch(url + new URLSearchParams(params), {
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
