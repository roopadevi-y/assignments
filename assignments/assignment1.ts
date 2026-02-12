//1. Temperature of a city in degrees Celsius: 25.5//
let temp:number = 25.5;
console.log("Temperature of a city in degrees Celsius:"+temp);

//2. Whether a customer has placed an order: true or false//
let isOrder:boolean = true
console.log("Whether a customer has placed an order:"+isOrder);

//3. Person's phone number: "123-456-7890"
let Mobile: any = "123-456-7890";
console.log("Person's phone number:"+Mobile);
//4. Amount of money in a customer's bank account: 1000.50
let Amount : number = 1000.50;
console.log("Amount of money in a customer's bank account:"+Amount);

//5. Person's email address: "john.doe@example.com"
//7. Person's marital status: true or false
//8. Person's occupation: "Software Engineer"
//9. Person's favourite colour: "Blue"
//13.Person's blood type: 'A'
//18.Person's eye color: "Brown"
//19.Person's birthplace: "New York City"
interface Person {
  //name: string;
  emailAddress: string;
  maritialStatus : boolean;
  Occupation : string;
  bloodType : string;
  eyeColor : string;
  birthPlace : string;
}
const person: Person = {
  //name: Person;
  emailAddress: "john.doe@example.com",
  maritialStatus : true,
  Occupation : "Software Engineer",
  bloodType : 'A',
  eyeColor : "Brown",
  birthPlace : "New York City",
};
console.log(`Person's email address is: ${person.emailAddress}`);
console.log(`Person's marital status: ${person.maritialStatus}`);
console.log(`Person's occupation: ${person.Occupation}`);
console.log(`Person's Blood Type: ${person.bloodType}`);
console.log(`Person's Eye Color: ${person.eyeColor}`);
console.log(`Person's Birth Place: ${person.birthPlace}`);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
const coordinates: [number, number] = [37.7749, -122.4194];
console.log(`Coordinates of a location (latitude, longitude): ${coordinates[0]}, ${coordinates[1]}`);

//10.Current year: 2023
const currentYear: number = 2023;
console.log(`Current year: ${currentYear}`);

//11.Number of followers on a social media platform: 1,000,000
const followers: number = 1_000_000;
console.log(`Number of followers on a social media platform: ${followers.toLocaleString()}`);

//12.Rating of a movie: 7.5
let rating : number = 7.5;
console.log(`Rating of a movie:${rating}`);

//14.Title of a book: "To Kill a Mockingbird"
const bookTitle : string = "To Kill a Mockingbird";
console.log(`Title of the book: "${bookTitle}"`);

//15.Number of employees in a company: 500
const employees : number = 500;
console.log(`Number of employees in the company: ${employees}`);
//16.Time of an event: 2:30 PM
const eventTime : string = "2:30 PM";
console.log(`Time of the event: ${eventTime}`);

//17.Name of a country: "United States"
interface Country {
  name : string;
}
const country: Country = {
  name : "United States"
};
console.log(`Name of the country: "${country.name}"`);

//20. Distance between two cities: 200.5
let Distance : number = 200.5
console.log(`Distance between two cities: ${Distance}`);