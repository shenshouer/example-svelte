<script lang="ts">
    import { count } from "../writable-stores/stores";

    const decrement = () => {
        count.update((n) => n - 1);
    };
</script>

<button on:click={decrement}> - </button>
