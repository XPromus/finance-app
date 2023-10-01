<script lang="ts">
    import CreateTransaction from "../../components/createTransaction/CreateTransaction.svelte";
    import TransactionList from "../../components/transactionList/TransactionList.svelte";
    import { invalidateAll } from "$app/navigation";
    import type { PageData } from "./$types";
    export let data: PageData;

    let showCreateTransactionWindow: boolean = true;

</script>

<div class="">

    Overview
    {#if showCreateTransactionWindow}
        <CreateTransaction reloadPage={invalidateAll} closeWindow={() => {showCreateTransactionWindow = false}} />
    {/if}
    <TransactionList transactions={data.transactionData} />
</div>