<script lang="ts">
    import { name, greeting } from "./stores";
</script>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => ($name += "!")}> Add exclamation mark! </button>
