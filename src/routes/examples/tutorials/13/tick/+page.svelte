<script lang="ts">
    import { tick } from "svelte";

    let text = `Select some text and hit the tab key to toggle uppercase`;

    const handleKeydown = async (event: KeyboardEvent) => {
        if (event.key !== "Tab") return;

        event.preventDefault();

        const eventTarget = event.target as HTMLTextAreaElement;

        const { selectionStart, selectionEnd, value } = eventTarget;
        const selection = value.slice(selectionStart, selectionEnd);

        const replacement = /[a-z]/.test(selection)
            ? selection.toUpperCase()
            : selection.toLowerCase();

        text =
            value.slice(0, selectionStart) +
            replacement +
            value.slice(selectionEnd);

        await tick();
        eventTarget.selectionStart = selectionStart;
        eventTarget.selectionEnd = selectionEnd;
    };
</script>

<div>
    <h3>tick</h3>
    <a href="https://learn.svelte.dev/tutorial/tick">参考</a>
    <br />
    <p>按tab键将转换选中文本大小写</p>
</div>

<textarea value={text} on:keydown={handleKeydown}></textarea>

<style>
    textarea {
        width: 100%;
        height: 100%;
        resize: none;
    }
</style>
