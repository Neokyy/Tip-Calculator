const button = document.querySelector("#btn")
const inputElement = document.querySelector("#given-number")
const logElement = document.querySelector("#log")
const selectPercentage = document.querySelector("#percentage-select")
const logTotal = document.querySelector("#total-log")

function clicked(){
    const price = Number(inputElement.value)
    const percent = Number(selectPercentage.value)
    
    if (price === 0 && percent === 0) {
        alert("Please add a price and choose a percentage")
        return
    }
    if (isNaN(price) || price <= 0) {
        alert("Please enter a valid price")
        return
    }if(percent === 0){
        alert("please choose a percentage")
        return
    }

    const tip = price * (percent / 100)
    logElement.innerText = `Tip: ${tip.toFixed(2)}`
    const totalPrice = tip + price
    logTotal.innerText = `Total: ${totalPrice.toFixed(2)}` 
}; 


button.addEventListener("click", clicked)



