<script lang="ts">
    import CreateTransaction from "../../components/createTransaction/CreateTransaction.svelte";
    import TransactionList from "../../components/transactionList/TransactionList.svelte";
    import { invalidateAll } from "$app/navigation";
    import type { PageData } from "./$types";
    import { getCurrencyString } from "../../middleware/transactionMiddleware";
    import ToolBarButton from "../../components/toolBar/ToolBarButton.svelte";
    import ToolBar from "../../components/toolBar/ToolBar.svelte";
    export let data: PageData;

    let showCreateTransactionWindow: boolean = false;

    const getFactor = () => {

    }

</script>

<div class="">
    <ToolBar>
        <ToolBarButton func={invalidateAll} text="Reload"/>
        <ToolBarButton func={() => {showCreateTransactionWindow = true}} text="Create"/>
        <ToolBarButton func={() => {console.log("Edit")}} text="Edit"/>
        <ToolBarButton func={() => {window.open("http://localhost:8089/_/")}} text="Admin Backend"/>
    </ToolBar>
    Overview {getCurrencyString(data.totalAmount)}
    {#if showCreateTransactionWindow}
        <CreateTransaction reloadPage={invalidateAll} closeWindow={() => {showCreateTransactionWindow = false}} />
    {/if}
    <TransactionList transactions={data.transactionData} reloadPage={invalidateAll} />
</div>