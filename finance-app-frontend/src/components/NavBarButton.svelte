<script lang="ts">
    export let text: string = "";
    export let func = () => {};
</script>

<button on:click={func} class="font-bold bg-slate-600 text-white py-2 px-3 rounded hover:bg-slate-700">
    {text}
</button>