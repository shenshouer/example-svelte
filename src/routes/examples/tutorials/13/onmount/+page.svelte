<script lang="ts">
    import { onMount } from "svelte";
    import { paint } from "./gradient";

    onMount(() => {
        const canvas = document.querySelector<HTMLCanvasElement>("canvas");
        const context = canvas!.getContext("2d");

        let frame = requestAnimationFrame(function loop(t) {
            frame = requestAnimationFrame(loop);
            paint(context!, t);
        });

        return () => {
            cancelAnimationFrame(frame);
        };
    });
</script>

<canvas width={32} height={32}></canvas>

<style>
    canvas {
        position: fixed;
        left: 0;
        top: 0;
        width: 50%;
        height: 50%;
        background-color: #666;
        mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
        mask-size: 60vmin;
        -webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
        -webkit-mask-size: 60vmin;
    }
</style>
