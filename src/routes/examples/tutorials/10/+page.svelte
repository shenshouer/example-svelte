<script>
    import { getRandomNumber } from "./utils";

    let promise = getRandomNumber();

    function handleClick() {
        promise = getRandomNumber();
    }
</script>

<h3>Await 块</h3>
<a href="https://learn.svelte.dev/tutorial/await-blocks">参考</a>
<br />

<button on:click={handleClick}> generate random number </button>

{#await promise}
    <p>...waiting</p>
{:then number}
    <p>The number is {number}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
