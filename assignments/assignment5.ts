// Employee Interface
interface Employee {
       id: number;
       name: string;
       baseSalary: number;
       experience: number;
       rating: number;
}
// Employee Data
let employees: Employee[] = [
    { id: 1, name: "Alice Johnson", baseSalary: 75000, experience: 5.1, rating: 4.2 },
    { id: 2, name: "Bob Smith", baseSalary: 68000, experience: 3.2, rating: 3.8 },
    { id: 3, name: "Carol Davis", baseSalary: 82000, experience: 7.1, rating: 4.5 },
    { id: 4, name: "David Brown", baseSalary: 90000, experience: 10.2, rating: 2.5 },
    { id: 5, name: "Eva Green", baseSalary: 60000, experience: 2.4, rating: 3.5 }
];

// Map to store Name and Hike %
const hikeMap: Map<string, number> = new Map();

for (let emp of employees) {

    let variablePayPercent: number = 0;
    let bonus: number = 0;
    let reward: number = 0;

    // Determine variable pay % and bonus based on rating
    if (emp.rating >= 4.0) {
        variablePayPercent = 15;
        bonus = 1500;
    } else if (emp.rating >= 3 && emp.rating < 4) {
        variablePayPercent = 10;
        bonus = 1200;
    } else {
        variablePayPercent = 3;
        bonus = 300;
    }

    // Extra reward for experience >= 5 years
    if (emp.experience >= 5) {
        reward = 5000;
    }

    // Calculate Hike
    let hike = (emp.baseSalary * (variablePayPercent / 100)) + bonus + reward;

    // Calculate Hike Percentage
    let hikePercentage = (hike / emp.baseSalary) * 100;

    // Store in Map
    hikeMap.set(emp.name, hikePercentage);
}

// Print Result
console.log("Employee Hike Percentages:");
hikeMap.forEach((value, key) => {
    console.log(`${key} -> ${value.toFixed(2)}%`);
});