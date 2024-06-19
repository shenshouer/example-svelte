import type { LayoutLoad } from './$types';

// export interface Section {
//     slug: string;
//     title: string;
// }

export const load: LayoutLoad = () => {
    return {
        sections: [
            { slug: 'profile', title: 'Profile' },
            { slug: 'notifications', title: 'Notifications' },
        ],
    };
};