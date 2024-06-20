<script>
    import BigRedButton from "./BigRedButton.svelte";

    const audio = new Audio();
    audio.src = "/audios/horn.mp3";

    function handleClick() {
        audio.load();
        audio.play();
    }
</script>

<BigRedButton on:click={handleClick} />
