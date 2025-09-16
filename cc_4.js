/*Array of products and a log of each product and its information with a for each sequence*/

let products= [
    {
        name: "Bread",
        category: "grocery",
        price: 5.99,
        inventory: 12,
    },
    {
        name: "Cybernetic Bread",
        category: "electronic",
        price: 506.99,
        inventory: 5,
    },
    {
        name: "Bread Flavored T-Shirt",
        category: "apparel",
        price: 16.99,
        inventory: 75,
    }, 
    {
        name: "Sponge like Bread",
        category: "household",
        price: 3.99,
        inventory: 30,
    }, 
    {
        name: "Fancier Bread",
        category: "grocery",
        price: 9.99,
        inventory: 22,
    }
];

products.forEach(products => {
    console.log(products.name, " | ", products.category, " | ", products.price, " | ", products.inventory)
});

console.log(" ")

/*
This next part creates the customer discount variable, and then applies a standard discount amount based upon the item ordered using a for loop with a switch statement inside
which is used to actually identify the item. 
apply customer discounts based on category of product by cycling through the array and checking category
*/


for (let product of products) {
    switch (product.category) {
        case ("grocery" || "household"): 
            product.discountedPrice = product.price * .9;
            break;
        case "apparel":
            product.discountedPrice = product.price * .85;
            break;
        case "electronics":
            product.discountedPrice = product.price * .8;
            break;
        default:
            product.discountedPrice = product.price;
    }
};

/* This is the Step  4 code for customer type and additon of more discounts */

let customerType= "Existence Otherwise the Code Doesnt Run"

function applyCustomerDiscount(total,customerType){
    if (customerType === ("student")) {
        return total * .95;
    } else if (customerType === "senior") {
        return total *.93;
    } else {
        return total;
}};

/* Step 5: A For loop to simulate customers, array of customers */

let customerTypes = ["regular", "student", "senior"];

for (let i=0; i<3; i++) {
    let customerNum= i+1;
    let customerType= customerTypes[i];

    let total = 0;

    for(let product of products) {
        if (product.inventory > 0) {
            total+= product.discountedPrice;
            product.inventory -= 1;
        }
    }

    let finalTotal = applyCustomerDiscount(total, customerType);

    console.log(`Customer ${customerNum} (${customerType}) total: $${finalTotal.toFixed(2)}`);

};

// Step 6: 

console.log("\nDetails of first product after discount");

let exampleProduct = products[0];

for (let key in exampleProduct) {
    let value = exampleProduct[key];
    
    if (key.toLowerCase().includes("price")){
        console.log(`${key}: $${(value.tofixed(2))}`);
    } else {
    console.log(`${key}: ${value}`);
    }
}

//Step 7:

console.log("\nUpdated Product Inventory and Detilas:")
for (let product of products) {
    for (let [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }
    console.log("--------");
}