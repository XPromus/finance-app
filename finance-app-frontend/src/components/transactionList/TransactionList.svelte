<script lang="ts">
  import type { Transaction } from "../../api/transactions";
  import TransactionItem from "./TransactionItem.svelte";

    export let transactions: Transaction[] = Array(0);
</script>

<div class="w-full h-full flex flex-col space-y-1">
    {#each transactions as transaction }
        <TransactionItem transaction={transaction} />
    {/each}
</div>