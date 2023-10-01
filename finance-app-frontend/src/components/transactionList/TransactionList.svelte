<script lang="ts">
    import type { Transaction } from "../../api/transactions";
    import TransactionTitleCell from "./TransactionTitleCell.svelte";
    import TranscationCell from "./TranscationCell.svelte";

    export let transactions: Transaction[] = Array(0);
    const getCurrencyString = (amount: number): string => {
        const formatter = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        });
        const currencyString: string = formatter.format(amount);
        return currencyString;
    }

    const getDateString = (date: string): string => {
        const newDate = new Date(date).toLocaleDateString("de-de", { day: "2-digit", year: "numeric", month: "2-digit" });
        return newDate;
    }
</script>

<div class="w-full h-full grid grid-cols-5 gap-4 text-center">
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