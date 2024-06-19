<h3>事件装饰器</h3>
<a href="https://learn.svelte.dev/tutorial/event-modifiers">参考</a>
<br />

<p>只触发一次</p>
<button on:click|once={() => alert("clicked")}> Click me </button>
