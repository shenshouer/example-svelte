<script>
    import PackageInfo from "./PackageInfo.svelte";

    const pkg = {
        name: "svelte",
        speed: "blazing",
        version: 4,
        website: "https://svelte.dev",
    };

    let count = 0;

    function increment() {
        count += 1;
    }
</script>

<PackageInfo {...pkg} />

<h3>if-else-if 块</h3>

<button on:click={increment}>
    Clicked {count}
    {count === 1 ? "time" : "times"}
</button>

{#if count > 10}
    <p>{count} is greater than 10</p>
{:else if count < 5}
    <p>{count} is less than 5</p>
{:else}
    <p>{count} is between 5 and 10</p>
{/if}
