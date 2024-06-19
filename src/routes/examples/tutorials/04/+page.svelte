<script lang="ts">
    import Nested from "./Nested.svelte";
</script>

<p>This is a paragraph.</p>
<Nested />
<Nested answer={42} />

<style>
    p {
        color: goldenrod;
        font-family: "Comic Sans MS", cursive;
        font-size: 2em;
    }
</style>
