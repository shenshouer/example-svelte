<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("message", { text: "hello" })}>
    点击派发自定义message事件
</button>
