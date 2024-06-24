<script lang="ts">
    import { fade, fly } from "svelte/transition";
    let visible = true;
</script>

<label>
    <input type="checkbox" bind:checked={visible} />
    visible
</label>

{#if visible}
    <p transition:fade>Fades in and out</p>
{/if}
<p>带参数转换指令</p>
{#if visible}
    <p transition:fly={{ y: 200, duration: 2000 }}>Flies in and out</p>
{/if}

<p>in and out</p>
{#if visible}
    <p in:fly={{ y: 200, duration: 2000 }} out:fade>Flies in, fades out</p>
{/if}
