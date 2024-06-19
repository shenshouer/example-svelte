// place files you want to import through the `$lib` alias in this folder.
export async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}