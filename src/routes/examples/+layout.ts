import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        sections: [
            { slug: 'add', title: '调用Server进行加法运算' },
            { slug: 'tutorials', title: '教程示例' },
        ],
    };
};