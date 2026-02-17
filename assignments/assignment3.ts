// Step 1: Creation of arrays
let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];

// Step 2: Add 10 marks and store in new array
let updatedMarks: number[] = [];
for (let i = 0; i < marks.length; i++) 
{
  let newMark: number = marks[i];
  newMark += 10;   // Assignment operator
  updatedMarks.push(newMark);
}

// Step 3: Calculate average
let total = 0;

for (let i = 0; i < updatedMarks.length; i++) {
  total += updatedMarks[i];
}

let average = total / updatedMarks.length;

// Step 4: Print results
console.log("Updated Marks:");
for (let i = 0; i < studentNames.length; i++) 
{
  console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}
console.log(`Average Marks: ${average.toFixed(1)}`);