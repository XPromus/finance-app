<script lang="ts">
    export let text: string = "";
    export let func = () => {};
</script>

<button on:click={func} class="font-bold px-5 py-1 bg-lime-400 rounded text-white hover:bg-lime-600 transition-colors duration-100">
    {text.toUpperCase()}
</button>