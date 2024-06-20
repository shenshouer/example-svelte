<script lang="ts">
    let scoops = 1;
    let flavours: string[] = [];

    const formatter = new Intl.ListFormat("en", {
        style: "long",
        type: "conjunction",
    });
</script>

<h2>Size</h2>

{#each [1, 2, 3] as number}
    <label>
        <input type="radio" name="scoops" value={number} bind:group={scoops} />

        {number}
        {number === 1 ? "scoop" : "scoops"}
    </label>
{/each}

<h2>Flavours</h2>

<select multiple bind:value={flavours}>
    {#each ["cookies and cream", "mint choc chip", "raspberry ripple"] as flavour}
        <option>{flavour}</option>
    {/each}
</select>

{#if flavours.length === 0}
    <p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
    <p>Can't order more flavours than scoops!</p>
{:else}
    <p>
        You ordered {scoops}
        {scoops === 1 ? "scoop" : "scoops"}
        of {formatter.format(flavours)}
    </p>
{/if}

<blockquote>
    <p>
        Press and hold the <code>control</code> key (or the <code>command</code>
        key on MacOS) to select multiple options.
    </p>
</blockquote>

<style>
    blockquote {
        margin: 1.6rem 0 2.4rem;
        padding: 2rem 2.4rem 1.8rem;
        position: relative;

        border: 1px solid hsl(35, 100%, 50%);
        border-radius: 10px;
        box-shadow: 0 2px 6px hsla(35, 100%, 50%, 0.2);
        padding: 1rem;
    }
</style>
