function printDiamondNumbers(n: number): void 
{
    // Upper Half
    for (let i = 1; i <= n; i++) {

        let row = "";

        // Tabs for center alignment
        for (let space = 1; space <= n - i; space++) {
            row += "\t";
        }

        // Ascending numbers
        for (let num = 1; num <= i; num++) {
            row += num + "\t";
        }

        // Descending numbers
        for (let num = i - 1; num >= 1; num--) {
            row += num + "\t";
        }

        console.log(row);
    }

} 

// Call function
printDiamondNumbers(3);