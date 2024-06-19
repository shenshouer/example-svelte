<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    console.log(data.sections); // [{ slug: 'profile', title: 'Profile' }, ...]
</script>

<h1>Profile</h1>

<!-- <div>
    {#each data.sections as section}
        <h2>{section.title}</h2>
        <br />
    {/each}
</div> -->
