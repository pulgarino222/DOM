let one=document.getElementById("btn-one")
let two=document.getElementsByClassName("btn-two")
let three=document.getElementsByName("btn-three")
let four=document.getElementsByTagName("button")

console.log(one)
console.log(two)
console.log(three)
console.log(four[3])


let five=document.querySelector("#btn-five")
let six=document.querySelector(".btn-six")
let seven=document.querySelector("[name=btn-seven]")
let eight=document.querySelectorAll("button")

console.log(five)
console.log(six)
console.log(seven)
console.log(eight[11])


let btnexample=document.getElementById("btn-example")
let example2=document.querySelector("#btn-example")//recomnedable usar queryselector
// console.log(example)
// console.log(example)


///con esto alteramos el texto
btnexample.textContent="hola mundo"

btnexample.addEventListener('click',function(){
    alert("hola mundo")
})

//que es mobile first y como trabaja con boobstrap
//que es un acordeon 