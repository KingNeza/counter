// function sumatoria() {
// let lulo = 20

// let lalo = 22

// let todo = lulo + lalo

// console.log(todo)

// }

// sumatoria()



//document.getElementById("count-el").innerText = 5
// let firstBatch = 5
// let secondBatch = 10

// let count = firstBatch + secondBatch

//console.log(count)


// let myAge = 40
// let dogyear = 7

// let myDogYear = myAge * dogyear
// console.log(myDogYear)

// let bonusPoints = 50

// bonusPoints = bonusPoints + 20

// bonusPoints = bonusPoints - 40

// bonusPoints = bonusPoints + 40

// console.log(bonusPoints)

//aqui lo bueno


 let CountEL = document.getElementById("count-el")
 let saveEl =  document.getElementById("save-el")
 let count = 0
 function increment() {
   
   count += 1



   CountEL.textContent = count


 }




 function save() {
let construct = count + " - "
saveEl.textContent +=  construct
 
count = 0 

CountEL.textContent = count
}