<script lang="ts">
    import { deleteTransaction } from "../../api/transactions";

    export let id: string;
    export let reloadPage = () => {};
    const deleteTransactionRequest = async () => {
        await deleteTransaction(id);
        reloadPage();
    }
</script>

<div class="w-full flex flex-row justify-center space-x-1">
    <button on:click={deleteTransactionRequest} class="px-1 text-red-500">
        <i class="fa-solid fa-trash-can"></i>
    </button>
    <button class="px-1">
        <i class="fa-solid fa-pen"></i>
    </button>
</div>