<script lang="ts">
    import { getCurrencyString } from "../middleware/transactionMiddleware";
    export let amount: number;
</script>

{#if amount < 0}
    <span class="text-red-500">{getCurrencyString(amount)}</span>
{:else}
    <span class="text-black">{getCurrencyString(amount)}</span>
{/if}