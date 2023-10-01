<script lang="ts">
    import { createTransaction } from "../../api/transactions";

    let name: string = "";
    let amount: number = 0;
    let vendor: string = "";
    let date: Date = new Date();
    let done: boolean = false;
    let description: string = "";

    export let reloadPage = () => {};
    export let closeWindow = () => {};

    const createNewTransaction = async () => {
        const data = {
            "title": name,
            "amount": amount,
            "factor": (): number => {
                if (amount < 0) return -1;
                else return 1;
            },
            "date": date,
            "vendor": vendor,
            "done": done,
            "description": description
        };
        await createTransaction(data);
        reloadPage();
    }

</script>

<div class="absolute top-0 left-0 h-screen w-screen flex items-center justify-center">
    <div class="z-50 outline w-1/3 h-3/4">
        <div class="w-full h-full flex flex-col space-y-2 py-1">
            <div class="w-full flex flex-row-reverse pl-1">
                <button on:click={closeWindow} class="px-2 py-1">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="grow flex flex-row font-mono text-lg">
                    <span>Create Transaction</span>
                </div>
            </div>
            <div class="w-full h-full flex flex-col space-y-1 px-1">
                <input bind:value={name} class="w-full border border-black p-1" type="text" name="" id="" placeholder="Transaction Name">
                <input bind:value={amount} class="w-full border border-black p-1" type="number" name="" id="" placeholder="Amount">
                <input bind:value={vendor} class="w-full border border-black p-1" type="text" name="" id="" placeholder="Vendor">
                <input bind:value={date}  class="w-full border border-black p-1" type="date" name="" id="" placeholder="Transaction Date">
                <div class="w-full flex flex-row border border-black p-1">
                    <span class="grow">Transaction Completed</span>
                    <input bind:checked={done} type="checkbox">
                </div>
                <input bind:value={description} class="w-full border border-black p-1" type="text" name="" id="" placeholder="Description">
            </div>
            <div class="w-full flex flex-row-reverse px-1">
                <button on:click={() => createNewTransaction()} class="border border-black p-1 font-mono">
                    Submit
                </button>
            </div>
        </div>
    </div>
</div>