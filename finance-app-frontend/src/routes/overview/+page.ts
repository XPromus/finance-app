import { getAllTransactions, getTotalAmount, type Transaction } from "../../api/transactions";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
    const transactionData: Transaction[] = await getAllTransactions("-date");
    const totalAmount: number = await getTotalAmount();
    return {
        totalAmount: totalAmount,
        transactionData,
    };
}) satisfies PageLoad;