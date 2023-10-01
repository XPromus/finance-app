import PocketBase from "pocketbase";

export interface Transaction {
    readonly id: string,
    readonly collectionId: string,
    readonly collectionName: string,
    readonly created: string,
    readonly updated: string,
    readonly title: string,
    readonly amount: number,
    readonly factor: number,
    readonly date: string,
    readonly vendor: string,
    readonly done: boolean,
    readonly type: string,
    readonly category: string,
    readonly description: string,
};

export const getAllTransactions = async (): Promise<Transaction[]> => {
    const pb = new PocketBase("http://localhost:8089");
    const data: Transaction[] = await pb.collection("transaction").getFullList({
        sort: "-created",
    });
    return data;
}

export const createTransaction = async (data: any) => {
    const pb = new PocketBase("http://localhost:8089");
    await pb.collection("transaction").create(data);
}