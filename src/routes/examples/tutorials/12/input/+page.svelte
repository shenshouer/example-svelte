<script lang="ts">
    let name = "world";
</script>

<div class="input">
    <h3>Input绑定</h3>
    <input bind:value={name} />
    <h1>Hello {name}!</h1>
</div>
