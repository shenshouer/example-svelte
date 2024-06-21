import { derived, readable } from 'svelte/store';

export const time = readable(new Date(), (set) => {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});

const start = new Date();

export const elapsed = derived(
    time,
    ($time: Date) => Math.round(($time.getTime() - start.getTime()) / 1000)
);
