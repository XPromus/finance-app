<script lang="ts">
    import CreateTransaction from "../../components/createTransaction/CreateTransaction.svelte";
    import TransactionList from "../../components/transactionList/TransactionList.svelte";
    import { invalidateAll } from "$app/navigation";
    import type { PageData } from "./$types";
    export let data: PageData;

    let showCreateTransactionWindow: boolean = false;

</script>

<div class="">
    <div class="w-full flex flex-row space-x-1">
        <button on:click={invalidateAll}>
            Reload
        </button>
        <button on:click={() => {showCreateTransactionWindow = true}} class="p-1">
            Create
        </button>
        <button class="p-1">
            Edit
        </button>
    </div>
    Overview
    {#if showCreateTransactionWindow}
        <CreateTransaction reloadPage={invalidateAll} closeWindow={() => {showCreateTransactionWindow = false}} />
    {/if}
    <TransactionList transactions={data.transactionData} />
</div>