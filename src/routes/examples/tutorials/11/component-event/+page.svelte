<script lang="ts">
    import Inner from "./Inner.svelte";
    import Outer from "./Outer.svelte";

    const handleMessage = (event: CustomEvent<{ text: string }>) => {
        alert(event.detail.text);
    };
</script>

<Inner on:message={handleMessage} />
<Outer on:message={handleMessage} />
