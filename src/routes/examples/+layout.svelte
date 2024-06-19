<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

<aside>
    <h2>更多示例</h2>
    <ul>
        {#each data.sections as section}
            <li>
                <a href="/examples/{section.slug}">{section.title}</a>
            </li>
        {/each}
    </ul>
</aside>

<main>
    <!-- +page.svelte is rendered in this <slot> -->
    <slot />
</main>
