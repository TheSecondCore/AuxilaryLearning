// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e.,
// buy one and sell one share of the stock),
// design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

const findMaxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
  }
  return maxProfit;
};

console.log(findMaxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(findMaxProfit([7, 6, 4, 3, 1])); // 0

// O(n) with O(1) memory(only 2 variables)
