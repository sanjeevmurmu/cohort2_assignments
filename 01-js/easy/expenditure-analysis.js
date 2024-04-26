/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let output=[]
  for (const t of transactions) {
    let index=output.indexOf((out)=>out.category===t.category)
    if(index){
      output[index].totalSpent+=t.price
    }
    else{
      output.push({'category':t.category,'totalSpent':t.price})
    }
  }


  return output;
}

module.exports = calculateTotalSpentByCategory;
