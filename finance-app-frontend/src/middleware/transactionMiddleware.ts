export const getCurrencyString = (amount: number, factor: number = 1): string => {
    const formatter = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    });
    const currencyString: string = formatter.format(amount * factor);
    return currencyString;
}