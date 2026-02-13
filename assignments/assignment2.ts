function evaluateLoanApplication(
  customerName: string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
): string {

  // Step 1: Credit Score Check
  if (creditScore > 750) {
    return `${customerName} is eligible for the loan (Excellent credit score is above 750, the loan is auto approved.).`;
  }

  if (creditScore < 650) {
    return `${customerName} is NOT eligible for the loan (Low credit score).`;
  }

  // Step 2: Income Check (for score between 650 and 750)
  if (income < 50000) {
    return `${customerName} is NOT eligible for the loan (Income below $50,000).`;
  }

  // Step 3: Employment Status
  if (!isEmployed) {
    return `${customerName} is NOT eligible for the loan (Unemployed).`;
  }

  // Step 4: Debt-to-Income Ratio
  if (debtToIncomeRatio < 40) {
    return `${customerName} is eligible for the loan (DTI less than 40%).`;
  } else {
    return `${customerName} is NOT eligible for the loan (DTI 40% or higher).`;
  }
}

// Customer Details
let customerName:string = "John Doe";
let creditScore:number = 720;
let income:number = 55000.0;
let isEmployed:boolean = true;
let debtToIncomeRatio:number = 35.0;

const result = evaluateLoanApplication(
  customerName,
  creditScore,
  income,
  isEmployed,
  debtToIncomeRatio
);

console.log(result);
