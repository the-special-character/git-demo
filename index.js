// const name = "John";
// const age = 30;
// const isStudent = true;
// const hobbies = ["reading", "cooking", "traveling"];
// const address = {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: "12345"
// };
// const fruits = ["apple", "banana", "cherry"];
// const vegetables = ["carrot", "broccoli", "spinach"];

const johnInfo = {
    name: "John",
    age: 30,
    isStudent: true,
    hobbies: ["reading", "cooking", "traveling"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
}

const newJohnInfo = {
    ...johnInfo,
    address: {
        ...johnInfo.address,
        zip: "54321"
    },
    age: 31,
};

console.log(newJohnInfo);
console.log(johnInfo);

