let btn = document.querySelector("button");


btn.addEventListener("click", () => {
    //Hur vi hittar en vald radio-button 
    let choice = document.querySelector("[name='color']:checked")
    console.log("Vald färg", choice.value);


    //Hitta samtliga valda checkboxar
   let allCheckedBoxes = document.querySelectorAll("[name='brands']:checked")
   //Skriv ut samtliga valda värden 
   allCheckedBoxes.forEach(checkbox => console.log("Vald märke:", checkbox.value))

})