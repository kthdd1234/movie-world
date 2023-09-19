import { IGET, IPOST } from '@/types/interface';
import { NextResponse } from 'next/server';

const GET = async ({ url, token, query }: IGET) => {
  const resp = await fetch(`${url}?${new URLSearchParams(query)}`, {
    method: 'GET',
    cache: 'force-cache',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await resp.json();

  return NextResponse.json(data);
};

const POST = async ({ url, query, body }: IPOST) => {
  const resp = await fetch(`${url}?${new URLSearchParams(query)}`, {
    method: 'POST',
    cache: 'no-store',
    body: body,
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await resp.json();

  return NextResponse.json(data);
};

export { GET, POST };
