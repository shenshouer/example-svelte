<script>
    import Inner from "./Inner.svelte";
</script>

<div>
    <p>这个是Inner的父组件</p>
    <p>
        默认情况下，组件事件不进行冒泡传递,需要在当前组件中添加message事件监听
    </p>
    <Inner on:message />
</div>

<style type="text/css">
    div {
        background-color: bisque;
        padding: 10px;
        margin: 5px;
    }
</style>
