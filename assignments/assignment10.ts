function maxProfit(prices: number[]): number 
{

    if (prices.length === 0) return 0;

    let minPrice: number = prices[0];  // Buy price
    let maxProfit: number = 0;         // Maximum profit

    for (let i = 1; i < prices.length; i++) {

        // If current price is lower, update minPrice
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        // Calculate profit if selling today
        let currentProfit = prices[i] - minPrice;

        // Update maxProfit if better profit found
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
    }

    return maxProfit;
}


// Example 1
const prices1 = [7,1,5,3,6,4];
console.log("Maximum Profit:", maxProfit(prices1));  // Output: 5

// Example 2
const prices2 = [7,6,4,3,1];
console.log("Maximum Profit:", maxProfit(prices2));  // Output: 0