<script lang="ts">
    export let text: string = "";
    export let func = () => {};
</script>

<button on:click={func} class="">
    {text}
</button>