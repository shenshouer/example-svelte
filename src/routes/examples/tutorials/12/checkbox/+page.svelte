<script lang="ts">
    let yes = false;
</script>

<div class="checkbox">
    <h3>Checkbox Input绑定</h3>
    <label>
        <input type="checkbox" bind:checked={yes} />
        Yes! Send me regular email spam
    </label>

    {#if yes}
        <p>
            Thank you. We will bombard your inbox and sell your personal
            details.
        </p>
    {:else}
        <p>
            You must opt in to continue. If you're not paying, you're the
            product.
        </p>
    {/if}
</div>
