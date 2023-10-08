<script lang="ts">
    import CreateTransaction from "../../components/createTransaction/CreateTransaction.svelte";
    import TransactionList from "../../components/transactionList/TransactionList.svelte";
    import { invalidateAll } from "$app/navigation";
    import type { PageData } from "./$types";
    import ToolBarButton from "../../components/toolBar/ToolBarButton.svelte";
    import ToolBar from "../../components/toolBar/ToolBar.svelte";
    import ToolBarInput from "../../components/toolBar/ToolBarInput.svelte";
    import ToolBarDatePicker from "../../components/toolBar/ToolBarDatePicker.svelte";
    import ToolBarSlider from "../../components/toolBar/ToolBarSlider.svelte";
    import { onMount } from "svelte";
    import { getMinMaxTransaction, type MinMaxTransaction } from "../../api/transactions";
    import TotalAmount from "../../components/TotalAmount.svelte";
    export let data: PageData;

    let showCreateTransactionWindow: boolean = false;
    let showFilterMenu: boolean = true;

    let nameFilterInput: string = "";
    let vendorFilterInput: string = "";
    let descriptionFilterInput: string = "";
    let dateFilterInput: Date;
    
    let minMaxFilter: MinMaxTransaction = {min: 0, max: 0};

    onMount(async () => {
        const minMax: MinMaxTransaction = await getMinMaxTransaction();
        minMaxFilter = minMax;
    });
</script>

<div class="">
    <ToolBar>
        <div class="flex flex-row space-x-1">
            <ToolBarButton func={invalidateAll}>
                Reload
            </ToolBarButton>
            <ToolBarButton func={() => {showCreateTransactionWindow = true}}>
                Create
            </ToolBarButton>
            <ToolBarButton func={() => {console.log("Edit")}}>
                Edit
            </ToolBarButton>
            <ToolBarButton func={() => {showFilterMenu = !showFilterMenu}} active={showFilterMenu}>
                Filter
            </ToolBarButton>
        </div>
        {#if showFilterMenu}
            <div class="flex flex-row space-x-1">
                <ToolBarButton>
                    <i class="fa-solid fa-filter"></i>
                </ToolBarButton>
                <ToolBarInput bind:value={nameFilterInput} placeholder="name" />
                <ToolBarInput bind:value={vendorFilterInput} placeholder="vendor" />
                <ToolBarInput bind:value={descriptionFilterInput} placeholder="description" />
                <ToolBarDatePicker bind:value={dateFilterInput} text="Start: " />
                <ToolBarDatePicker bind:value={dateFilterInput} text="Ende: " />
                <ToolBarSlider minMax={minMaxFilter} />
                <ToolBarButton>
                    <i class="fa-solid fa-plus text-green-500"></i>
                </ToolBarButton>
                <ToolBarButton>
                    <i class="fa-solid fa-minus text-red-500"></i>
                </ToolBarButton>
            </div>
        {/if}
    </ToolBar>

    <div class="w-full px-2 py-3 text-lg font-bold text-center">
        <TotalAmount amount={data.totalAmount} />
    </div>
    
    {#if showCreateTransactionWindow}
        <CreateTransaction reloadPage={invalidateAll} closeWindow={() => {showCreateTransactionWindow = false}} />
    {/if}
    <TransactionList transactions={data.transactionData} reloadPage={invalidateAll} />
</div>