import { getAllTransactions, type Transaction } from "../../api/transactions";
import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
    const transactionData: Transaction[] = await getAllTransactions();
    return {
        transactionData,
    };
}) satisfies PageLoad;