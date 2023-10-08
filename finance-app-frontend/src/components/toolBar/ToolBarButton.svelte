<script lang="ts">
    export let func = () => {};
    export let active: boolean = false;
</script>

{#if active}
    <button class="px-1 border border-blue-500 rounded bg-blue-300 hover:bg-gray-200" on:click={func}>
        <slot />
    </button>
{:else}
    <button class="px-1 border border-black rounded bg-white hover:bg-gray-200" on:click={func}>
        <slot />
    </button>
{/if}