let products= [
    
    {
        name: "Bread",
        category: "Grocery",
        price: 5.99,
        inventory: 12,
    },
    {
        name: "Cybernetic Bread",
        category: "Electronic",
        price: 5.99,
        inventory: 12,
    },
    {
        name: "",
        category: "apparel",
        price: 5.99,
        inventory: 12,
    }, 
    {
        name: "Bleached Bread",
        category: "household",
        price: 5.99,
        inventory: 12,
    }, 
    {
        name: Bread,
        category: Food,
        price: 5.99,
        inventory: 12,
    }
]

console.log(products)

let customerDiscount= 0;
/*
for(each of); 
apply customer discounts based on category of product by cycling through the array
and checking category
*/
for (element= 0; element < 4; element++) {
    switch (category) {
        case ("grocery" || "household"): 
             customerDiscount= 10;
        break;
        case "apparel":
            customerDiscount= 15;
        break;
        case "electronics":
            customerDiscount= 20;
        break;

    }
};

console.log("Current Customer Discount Based on Chosen Products:" + customerDiscount + "%")

/* This is the Step  4 code for customer type and additon of more discounts */
let customerType= senior;

if (customerType= (senior && student)) {
    let customerDiscount= xxx+12;
    console.log("Updated Customer Discount: " + customerDiscount + "%")
} else if (customerType= student) {
    let customerDiscount= xxx+5;
    console.log("Updated Customer Discount: " + customerDiscount + "%")
} else if (customerType= senior) {
    let customerDiscount= xxx+7;
    console.log("Updated Customer Discount: " + customerDiscount + "%")
} else {
    console.log ("No additional discounts. Discount Remains: " + customerDiscount+ "%")
}

/*
while loop for customers
*/
let customerCheckout = 3;

while (customerChekcout.count > 0) {
    
    
    customerCheckout--
}