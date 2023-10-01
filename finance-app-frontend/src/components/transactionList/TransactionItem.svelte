<script lang="ts">
    import type { Transaction } from "../../api/transactions";

    export let transaction: Transaction;

    const getCurrencyString = (amount: number): string => {
        const formatter = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        });
        const currencyString: string = formatter.format(amount);
        return currencyString;
    }

</script>

<div class="w-full h-full flex flex-row space-x-1">
    <span>{transaction.title}</span>
    <span>{transaction.vendor}</span>
    <span>{getCurrencyString(transaction.amount)}</span>
</div>