<script lang="ts">
    let a = 1;
    let b = 2;
</script>

<div class="numberic">
    <h3>Numberic Input绑定</h3>
    <label>
        <input type="number" bind:value={a} min="0" max="10" />
        <input type="range" bind:value={a} min="0" max="10" />
    </label>

    <label>
        <input type="number" bind:value={b} min="0" max="10" />
        <input type="range" bind:value={b} min="0" max="10" />
    </label>

    <p>{a} + {b} = {a + b}</p>
</div>
