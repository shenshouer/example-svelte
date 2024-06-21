<script lang="ts">
    import { count } from "../writable-stores/stores";
    import Incrementer from "./Incrementer.svelte";
    import Decrementer from "./Decrementer.svelte";
    import Resetter from "./Resetter.svelte";
</script>

<div>
    <h3>Auto Subscriptions</h3>
    <a href="https://learn.svelte.dev/tutorial/auto-subscriptions">参考</a>
    <br />
</div>
<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
