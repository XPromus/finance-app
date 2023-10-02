<script lang="ts">
    export let func = () => {};
    export let text: string;
</script>

<button class="px-1 border border-black rounded bg-white hover:bg-gray-200" on:click={func}>
    {text}
</button>