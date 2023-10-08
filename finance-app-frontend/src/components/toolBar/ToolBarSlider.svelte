<script lang="ts">
    import type { MinMaxTransaction } from "../../api/transactions";
    export let minMax: MinMaxTransaction;   
    export let value: number = 0;
</script>

<div class="flex flex-row space-x-1 border border-black rounded px-1 bg-white">
    <span>Up to: {value} €</span>
    <input bind:value={value} class="border border-black rounded px-1" type="range" name="" id="" min={minMax.min} max={minMax.max}>
</div>
