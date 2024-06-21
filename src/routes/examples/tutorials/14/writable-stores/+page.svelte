<script lang="ts">
    import { count } from "./stores";
    import Incrementer from "./Incrementer.svelte";
    import Decrementer from "./Decrementer.svelte";
    import Resetter from "./Resetter.svelte";

    let count_value: number;

    count.subscribe((value) => {
        count_value = value;
    });

    let stringCode = `
        <script>
            import { onDestroy } from "svelte";
            import { count } from "./stores.js";
            import Incrementer from "./Incrementer.svelte";
            import Decrementer from "./Decrementer.svelte";
            import Resetter from "./Resetter.svelte";

            let count_value;

            const unsubscribe = count.subscribe((value) => {
                count_value = value;
            });

            onDestroy(unsubscribe);
        <\/script>

        <h1>The count is {count_value}</h1>
        `;
</script>

<h1>The count is {count_value}</h1>

<Incrementer />
<Decrementer />
<Resetter />
<div>
    <h3>Auto Subscriptions</h3>
    <a href="https://learn.svelte.dev/tutorial/auto-subscriptions">参考</a>
    <br />
    此示例有bug, 组件销毁后不会退订, 修复示例如下:
    <pre>{stringCode}</pre>
</div>
