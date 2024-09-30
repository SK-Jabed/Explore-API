const user = {id: 1, name: "Sheikh Jabed", job: "student"};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
/*
* { id: 1, name: 'Sheikh Jabed', job: 'student' }
* {"id":1,"name":"Sheikh Jabed","job":"student"} 
*/

const shop = {
    owner: "Alibaba",
    address: {
        street: "Kochukhet Vuter Goli",
        city:"Goalghor",
        country:"Bangladesh"
    },
    products: ["Laptop", "Computer", "Smartphone", "Mouse", "Keyboard"],
    revenue: 80000,
    isOpen: true,
    isNew: false
};
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
