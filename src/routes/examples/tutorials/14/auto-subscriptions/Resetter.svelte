<script lang="ts">
    import { count } from "../writable-stores/stores";

    const reset = () => {
        count.set(0);
    };
</script>

<button on:click={reset}> reset </button>
