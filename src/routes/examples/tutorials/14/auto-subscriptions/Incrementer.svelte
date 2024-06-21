<script lang="ts">
    import { count } from "../writable-stores/stores";

    const increment = () => {
        count.update((n) => n + 1);
    };
</script>

<button on:click={increment}> + </button>
