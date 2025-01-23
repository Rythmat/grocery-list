// Create an array called groceryList that should look like the following
const groceryList = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

// Create the following functions


// logNames => Takes in an array of items and console.logs the name of each item in the given array. Hint: use .forEach
const logNames = (itemList) => {
  itemList.forEach(groceryItem => {
    console.log(groceryItem.name);
  });
}
//TESTING
// logNames(groceryList);


// getUpperCaseNames => Takes in an array of items and returns an array of item names in all uppercase. Hint: use .map
const getUpperCaseNames = (itemList) => {

  const names = itemList.map(groceryItem => {
    return groceryItem.name.toUpperCase();
  });

  return names;
}
//TESTING
// console.log(getUpperCaseNames(groceryList));


// getItemById => Takes in an array of items and an id. Returns the item in the array with the given id. Hint: use .find
const getItemById = (itemList, itemid) => {
  const item = itemList.find(groceryItem => {
    return groceryItem.id === itemid;
  });
  return item;
}
//TESTING
// console.log(getItemById(groceryList,1));


// getItemPriceByName => Takes in an array of items and a name string. Returns the price of the item that matches the name that was passed in. Hint: use a loop
const getItemPriceByName = (itemList, itemName) => {
  const item = itemList.find(groceryItem => {
    return groceryItem.name === itemName;
  });
  return item.price;
}
//TESTING
// console.log(getItemPriceByName(groceryList,'apple'));


// getItemsByCategory => Takes in an array of items and a category string. Returns an array of items that belong to the given `category`. Hint: use .filter 
const getItemsByCategory = (itemList, itemCat) => {
  const items = itemList.filter(groceryItem => {
    return groceryItem.category === itemCat;
  });
  return items;
}
//TESTING
// console.log(getItemsByCategory(groceryList,'dairy'));


// countItems => Takes in an array of items and returns the total quantity of all items. Hint: use .reduce
const countItems = (itemList) => {
  const sum = itemList.reduce((accumulator, item) =>{
    return accumulator + item.quantity;
  }, 0);
  return sum;
}
//TESTING
// console.log(countItems(groceryList));

// calculateTotalPrice => Takes in an array of items and returns the cost of all given items. Hint: use .reduce
const calculateTotalPrice = (itemList) => {
  const sum = itemList.reduce((accumulator, item) =>{
    return accumulator + (item.quantity*item.price);
  }, 0);
  return sum;
}
//TESTING
// console.log(calculateTotalPrice(groceryList));