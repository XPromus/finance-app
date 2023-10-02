<script lang="ts">
    import type { Transaction } from "../../api/transactions";
    import { getCurrencyString } from "../../middleware/transactionMiddleware";
    import TransactionEditCell from "./TransactionEditCell.svelte";
    import TransactionTitleCell from "./TransactionTitleCell.svelte";
    import TranscationCell from "./TranscationCell.svelte";

    export let reloadPage = () => {};
    export let transactions: Transaction[] = Array(0);
    export let showEdit: boolean = true;

    const getDateString = (date: string): string => {
        const newDate = new Date(date).toLocaleDateString("de-de", { day: "2-digit", year: "numeric", month: "2-digit" });
        return newDate;
    }
</script>

{#if showEdit}
    <div class="w-full h-full grid grid-cols-6 gap-y-1 text-center">
        <TransactionTitleCell text="Name" />
        <TransactionTitleCell text="Vendor" />
        <TransactionTitleCell text="Description" />
        <TransactionTitleCell text="Date" />
        <TransactionTitleCell text="Amount" />
        <TransactionTitleCell text="Edit" />
        {#each transactions as transaction }
            <TranscationCell text={transaction.title}/>
            <TranscationCell text={transaction.vendor}/>
            <TranscationCell text={transaction.description}/>
            <TranscationCell text={getDateString(transaction.date)}/>
            <TranscationCell text={getCurrencyString(transaction.amount, transaction.factor)}/>
            <TransactionEditCell id={transaction.id} reloadPage={reloadPage} />
        {/each}
    </div>
{:else}
    <div class="w-full h-full grid grid-cols-5 gap-y-1 text-center">
        <TransactionTitleCell text="Name" />
        <TransactionTitleCell text="Vendor" />
        <TransactionTitleCell text="Description" />
        <TransactionTitleCell text="Date" />
        <TransactionTitleCell text="Amount" />
        {#each transactions as transaction }
            <TranscationCell text={transaction.title}/>
            <TranscationCell text={transaction.vendor}/>
            <TranscationCell text={transaction.description}/>
            <TranscationCell text={getDateString(transaction.date)}/>
            <TranscationCell text={getCurrencyString(transaction.amount)}/>
        {/each}
    </div>
{/if}

