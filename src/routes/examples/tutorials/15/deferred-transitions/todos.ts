import { writable, type Writable } from 'svelte/store';

export interface Todo {
    id?: number;
    done?: boolean;
    description: string;
}

export interface TodoStore {
    subscribe: any;
    add: (description: string) => void;
    remove: (todo: Todo) => void;
    mark: (todo: Todo, done: boolean) => void;
}

export function createTodoStore(initial: Todo[]): TodoStore {
    let uid = 1;

    const todos: Todo[] = initial.map(({ done, description }) => {
        return {
            id: uid++,
            done,
            description
        };
    });

    const { subscribe, update } = writable(todos);

    return {
        subscribe,
        add: (description: string) => {
            const todo = {
                id: uid++,
                done: false,
                description
            };

            update($todos => [...$todos, todo])
        },
        remove: (todo: Todo) => {
            update($todos => $todos.filter((t) => t !== todo));
        },
        mark: (todo: Todo, done: boolean) => {
            update($todos => [
                ...$todos.filter((t) => t !== todo),
                { ...todo, done }
            ]);
        }
    };
}
