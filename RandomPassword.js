let password;
let length;

function RandomPassword(length) {
    let thepass = "";
    let allowedChar = "abcdefghijklmnopqrstuvwxyz&é(-è_çà)~#{[|`\^@]}ABCDEFGHIJKLMNOPQRSTUVWXYZ,;:!ù$*?./§%£µ<>1234567890"
    for (let index = 0; index < length; index++) {
        const randindex = Math.floor(Math.random() * allowedChar.length);
        thepass += allowedChar[randindex];
    }
    return thepass;
}

document.getElementById("button").onclick = () => {
    length = document.getElementById("length").value;
    if (length <= 0) {
        document.getElementById("result").textContent = "Please enter a correct length";
    } 
    else if (length < 5 && length > 0) {
        document.getElementById("result").textContent = "A password needs at least 5 characters";
    }
    else {
        password = RandomPassword(length);
        document.getElementById("result").textContent = `The password: ${password}`;
    }
}

const person = {
    firstName: "Lyes",
    lastName: "Boudjabout",
    age: 19,
    status: "student",
}

class Product {
    static TVA = 0.19;
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: $${this.price.toFixed(2)}`);
    }
}
 
const product = new Product("sauce",20);
product.displayProduct();
console.log(Product.TVA);
