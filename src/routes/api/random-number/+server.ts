import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { sleep } from '$lib';

export const GET: RequestHandler = async ({ url }) => {
    await sleep(2000); // 模拟加载延时 2000ms
    const min = Number(url.searchParams.get('min') ?? '0');
    const max = Number(url.searchParams.get('max') ?? '100');

    const d = max - min;

    if (isNaN(d) || d < 0) {
        error(400, 'min and max must be numbers, and min must be less than max');
    }

    const random = min + Math.random() * d;

    return new Response(String(random));
};