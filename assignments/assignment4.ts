// Step 1: Store transactions in an array
let transactions: number[] = [
  50000,
  -2000,
  3000,
  -15000,
  -200,
  -300,
  4000,
  -3000
];

// Step 2: Variables for calculations
let creditCount: number = 0;
let debitCount: number = 0;
let totalCredit: number = 0;
let totalDebit: number = 0;
let balance: number = 0;
let suspiciousCount: number = 0;

//Step 3: Loop through transactions
for (let i = 0; i < transactions.length; i++) {
  let amount: number = transactions[i];

  // Step 4: Check credit or debit
  if (amount > 0) {
    creditCount++;
    totalCredit += amount;
  } else {
    debitCount++;
    totalDebit += amount; // negative value
  }

  // Step 5: Update balance
  balance += amount;

  // Step 6 : Check suspicious transaction
  if (amount > 10000 || amount < -10000) {
    console.log(`Suspicious credit/debit Transaction with Amount: ${amount}`);
    suspiciousCount++;
  }
}

// Step 7 : Print Results
console.log("Total Credit Transactions:", creditCount);
console.log("Total Debit Transactions:", debitCount);

console.log("Total Amount Credited in account:", totalCredit);
console.log("Total Amount Debited in account:", Math.abs(totalDebit));

console.log("Final Remaining Balance:", balance);

console.log("Total Suspicious Transactions:", suspiciousCount);