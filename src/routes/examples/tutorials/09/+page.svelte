<script lang="ts">
    import Thing from "./Thing.svelte";

    let things = [
        { id: 1, name: "apple" },
        { id: 2, name: "banana" },
        { id: 3, name: "carrot" },
        { id: 4, name: "doughnut" },
        { id: 5, name: "egg" },
    ];

    function handleClick() {
        things = things.slice(1);
    }
</script>

<p>
    参考: <a href="https://learn.svelte.dev/tutorial/keyed-each-blocks"
        >https://learn.svelte.dev/tutorial/keyed-each-blocks</a
    >
</p>

<button on:click={handleClick}> Remove first thing </button>

{#each things as thing (thing.id)}
    <Thing name={thing.name} />
{/each}
