function countWords(sentence: string): number {
    // Remove extra spaces and split by space
    const words = sentence.trim().split(/\s+/);
    return sentence.trim() === "" ? 0 : words.length;
}
// 1. Count the total number of words in the sentence.
let text: string = "Java programming is fun and challenging";
let wordCount: string = countWords(text);
const words: string[] = text.split(" ");
console.log("Sentence:", text);
console.log("Word Count:", wordCount);

//2. Print the sentence words in reverse order.
let reverseSentence: string = "";
for (let i: number = wordCount.length - 1; i >= 0; i--) 
{
    reverseSentence = reverseSentence + wordCount[i] + " ";
}
console.log("Original Sentence:", text);
console.log("Reverse Sentence is : " +reverseSentence);