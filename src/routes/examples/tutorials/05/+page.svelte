<script>
    let string = `this string contains some <strong>HTML!!!</strong>`;

    let count = 0;
    $: doubled = count * 2;
    $: console.log(`the count is ${count}`);
    $: if (count >= 10) {
        alert("count is dangerously high! Will reset to 0");
        count = 0;
    }

    function increment() {
        count += 1;
    }
</script>

<p>{@html string}</p>

<button on:click={increment}>
    Clicked {count}
    {count === 1 ? "time" : "times"}
</button>

<p>{count} doubled is {doubled}</p>
