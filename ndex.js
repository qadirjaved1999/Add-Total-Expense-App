const btn = document.querySelector(".incrementBtn");
console.log(btn);

let totalExpense = 0;
//Create a Function this function when we click on button
function myFunction() {
  const inputValue = document.querySelector("#input").value;
  console.log("Your input value is here = ", inputValue);
  let expense = parseInt(inputValue);
  totalExpense = totalExpense + expense;
  console.log(totalExpense);
  const showTotal = document.querySelector(".totalBox");
  showTotal.innerText = "Total Expense :" + totalExpense;
  const clearInputValue = (document.querySelector("#input").value = "");
  console.log(clearInputValue);
}

//Add addEventListener When we click on button listen the input value and add value.
btn.addEventListener("click", myFunction);
