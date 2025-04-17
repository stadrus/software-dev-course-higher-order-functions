const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 800, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Keyboard", price: 100, inStock: false },
  ];
  
  // ============================================
  // 🔧 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Products by Availability
  
  Create a function `filterProducts` that accepts:
  - an array of products
  - a callback function
  
  The callback should determine which products to include.
  Example: filter by availability or price threshold.
  
  Step-by-Step:
  1. Define the `filterProducts` function with appropriate parameters.
  2. Use the `filter()` method to apply the callback to the array.
  3. Return the filtered result.
  */
  // function filterProducts(inStock){
  //   products.filter(inStock => inStock);
  //     return inStock === true;
    function filterProducts(){
      let itemsInstock = products.filter((item) => item.inStock);
      console.log("Filtered products:", ...itemsInstock); 
    }
    filterProducts();
   
      /*
  /*
  🔹 Task 2: Transform Product Names
  
  Use `map()` to create a new array of product names in UPPERCASE.
  
  Step-by-Step:
  1. Use `map()` on the products array.
  2. Extract and transform the `name` property to uppercase.
  3. Store the result in a new variable.
  */ 
  let newArr = String(products.map((products) => products.name));
  // console.log(newArr);
  
  let nameUpperCase = newArr.toUpperCase(newArr);
  console.log("Uppercased names:", ...nameUpperCase);

  // how I figured this out: using a higher order fuinction I created a new arrary to only have products names. Then created a new variable to convert names to uppercase. after many "".toUpperCase is not a function" I googled my error and realized I needed to make my new arr a str to properly use .toUpperCase method! 
  
  /*
  🔹 Task 3: Generate Discounted Prices
  
  Write a higher-order function `applyDiscount` that:
  - Accepts a discount percentage
  - Returns a function that takes a product and returns a discounted price
  
  Step-by-Step:
  1. Define a function `applyDiscount` that takes `discountPercent`.
  2. Return a new function that takes a product object.
  3. Use this returned function inside a `map()` call to apply discounts to all products.
  */
  function applyDiscount(discountPercent){
    return discountPercent;
  }
    let discountPercent = products.map((products) => products.price * 0.2);//this is the higher order function 
    console.log("Discounted products:", ...discountPercent);
  // /*
  // 🔹 Task 4: Calculate Total Inventory Value
  
  // Use `reduce()` to calculate the total value of products that are currently in stock.
  
  // Step-by-Step:
  // 1. Use the `reduce()` method on the products array.
  // 2. Add only the prices of products where `inStock` is true.
  // 3. Store the total in a new variable.
  // */

  let totalOfItemsInStock = products.filter((items) => items.inStock == true).reduce((acc,value) => acc + value.price, 0);
  
      console.log("Total value in stock:", totalOfItemsInStock);

  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  // console.log("Filtered products:", ...);
  // console.log("Uppercased names:", ...);
  // console.log("Discounted products:", ...);
  // console.log("Total value in stock:", ...);
  

  