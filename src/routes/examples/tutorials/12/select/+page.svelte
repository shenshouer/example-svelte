<script lang="ts">
    interface Option {
        id: number;
        text: string;
    }

    let questions: Option[] = [
        {
            id: 1,
            text: `Where did you go to school?`,
        },
        {
            id: 2,
            text: `What is your mother's name?`,
        },
        {
            id: 3,
            text: `What is another personal fact that an attacker could easily find with Google?`,
        },
    ];

    let selected: Option;

    let answer = "";

    function handleSubmit() {
        alert(
            `answered question ${selected.id} (${selected.text}) with "${answer}"`,
        );
    }
</script>

<div class="select">
    <h3>Select Input绑定</h3>
    <h2>Insecurity questions</h2>

    <form on:submit|preventDefault={handleSubmit}>
        <select bind:value={selected} on:change={() => (answer = "")}>
            {#each questions as question}
                <option value={question}>
                    {question.text}
                </option>
            {/each}
        </select>

        <input bind:value={answer} />

        <button disabled={!answer} type="submit"> Submit </button>
    </form>

    <p>
        selected question {selected ? selected.id : "[waiting...]"}
    </p>
</div>
