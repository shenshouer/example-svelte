<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<!-- <h1>{data.title}</h1>
<div>{@html data.content}</div> -->
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
