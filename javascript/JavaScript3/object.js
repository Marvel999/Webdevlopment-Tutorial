// if key is not spacify then use the you [] notation
// if key is spacify the use . notation
// value can be anything -> Js valid
// excel -> tabular form data store 
// JSON-> Javascript object notation

let cap = {
    firstName: "Steve",
    lastName: "Rogers",
    age: 35,
    movies: ["first avenger", "civil war", "winter soldier"],
    address: {
        state: "New York",
        city: "manhatten"
    },
    isAvenger: true
};

// // get data from json object
// //exact key is search in object
// console.log("city",cap.address.city);
// console.log("Movie",cap.movies[0]);
// console.log("First",cap.firstName);
// //if key is not find the it print undefind
// console.log("Say Hello",cap.abc);


//[] inside saqure bracket if write any think is treated as variable
// let abc="firstName"
// console.log(cap[abc])

// //update
let ageKey="age"
// cap[ageKey]=26;
// console.log(cap[ageKey]);

//Delete
delete cap.movies
delete cap[ageKey];
console.log(cap)
