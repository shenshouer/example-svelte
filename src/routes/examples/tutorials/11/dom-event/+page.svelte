<script lang="ts">
    let m = { x: 0, y: 0 };

    function handleMove(event: PointerEvent) {
        m.x = event.clientX;
        m.y = event.clientY;
    }
</script>

<h3>DOM事件</h3>
<a href="https://learn.svelte.dev/tutorial/dom-events">参考</a>
<br />

<div on:pointermove={handleMove}>
    The pointer is at {m.x} x {m.y}
</div>

<style>
    div {
        position: fixed;
        /* left: 0;
        top: 0; */
        width: 100%;
        height: 100%;
        padding: 1rem;
    }
</style>
